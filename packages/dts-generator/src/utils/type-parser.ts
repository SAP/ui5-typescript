import { Type, TypeReference } from "../types/ast.js";
import { TSASTTypeBuilder } from "./ts-ast-type-builder.js";

export function TypeParser(
  defaultBuilder: TSASTTypeBuilder = new TSASTTypeBuilder(),
) {
  const rLexer =
    /\s*(Array\.?<|Object\.?<|Set\.?<|Promise\.?<|function\(|\{|:|\(|\||\}|\.?<|>|\)|,|\[\]|\*|\?|!|=|\.\.\.)|(false|true|(?:\+|-)?(?:\d+(?:\.\d+)?|NaN|Infinity)|'[^']*'|"[^"]*"|null|undefined)|((?:module:)?\w+(?:[/.#~][$\w_]+)*))|./g;

  let input: string;
  let builder: TSASTTypeBuilder;
  let token: string;
  let tokenStr: string;

  function next(expected?: string | null) {
    if (expected !== undefined && token !== expected) {
      throw new SyntaxError(
        `TypeParser: expected '${expected}', but found '${tokenStr}' ` +
          `(pos: ${rLexer.lastIndex}, input='${input}')`,
      );
    }
    const match = rLexer.exec(input);
    if (match) {
      tokenStr = match[1] || match[2] || match[3];
      token = match[1] || (match[2] && "literal") || (match[3] && "symbol");
      if (!token) {
        throw new SyntaxError(
          `TypeParser: unexpected '${match[0]}' (pos: ${match.index}, input='${input}')`,
        );
      }
    } else {
      tokenStr = token = null;
    }
  }

  function parseType() {
    let nullable = false;
    let mandatory = false;
    if (token === "?") {
      next();
      nullable = true;
    } else if (token === "!") {
      next();
      mandatory = true;
    }

    let type: Type;

    if (token === "literal") {
      type = builder.literal(tokenStr);
      next();
    } else if (token === "Array.<" || token === "Array<") {
      next();
      const componentType = parseTypes();
      next(">");
      type = builder.array(componentType);
    } else if (token === "Object.<" || token === "Object<") {
      next();
      let keyType;
      let valueType = parseTypes();
      if ((token as string) === ",") {
        next();
        keyType = valueType;
        valueType = parseTypes();
      } else {
        keyType = builder.synthetic(builder.simpleType("string")); // NOTE: this branch is never hit in the debugger
      }
      next(">");
      type = builder.object(keyType, valueType);
    } else if (token === "Set.<" || token === "Set<") {
      next();
      const elementType = parseTypes();
      next(">");
      type = builder.set(elementType);
    } else if (token === "Promise.<" || token === "Promise<") {
      next();
      const resultType = parseTypes();
      next(">");
      type = builder.promise(resultType);
    } else if (token === "function(") {
      next();
      let thisType;
      let constructorType: Type;
      const paramTypes = [];
      let returnType;
      if (tokenStr === "this") {
        next();
        next(":");
        thisType = parseType();
        if ((token as string) !== ")") {
          next(",");
        }
      } else if (tokenStr === "new") {
        next();
        next(":");
        constructorType = parseType();
        if ((token as string) !== ")") {
          next(",");
        }
      }
      while ((token as string) !== ")") {
        const repeatable = (token as string) === "...";
        if (repeatable) {
          next();
        }
        let paramType = parseTypes();
        if (repeatable) {
          paramType = builder.repeatable(paramType);
        }
        const optional = (token as string) === "=";
        if (optional) {
          builder.optional(paramType);
          next();
        }
        paramTypes.push(paramType);

        // exit if there are no more parameters
        if ((token as string) !== ",") {
          break;
        }

        if (repeatable) {
          throw new SyntaxError(
            `TypeParser: only the last parameter of a function can be repeatable ` +
              `(pos: ${rLexer.lastIndex}, input='${input}')`,
          );
        }

        // consume the comma
        next();
      }
      next(")");
      if ((token as string) === ":") {
        next(":");
        returnType = parseType();
      }
      type = builder.function(
        paramTypes,
        returnType,
        thisType,
        constructorType,
      );
    } else if (token === "{") {
      const structure = Object.create(null);
      next();
      do {
        const propName = tokenStr;
        if (!/^\w+$/.test(propName)) {
          throw new SyntaxError(
            `TypeParser: structure field must have a simple name ` +
              `(pos: ${rLexer.lastIndex}, input='${input}', field:'${propName}')`,
          );
        }
        next("symbol");

        // "=" modifier for optional properties in structures
        const propOptional = (token as string) === "=";
        if (propOptional) {
          next();
        }

        let propType;
        if ((token as string) === ":") {
          next();
          propType = parseTypes();
        } else {
          propType = builder.synthetic(builder.simpleType("any"));
        }
        structure[propName] = { type: propType, optional: propOptional };
        if ((token as string) === "}") {
          break;
        }
        next(",");
      } while (token);
      next("}");
      type = builder.structure(structure);
    } else if (token === "(") {
      next();
      type = parseTypes();
      next(")");
    } else if (token === "*") {
      next();
      type = builder.simpleType("*");
    } else {
      type = builder.simpleType(tokenStr);
      next("symbol");
      // check for suffix operators: either 'type application' (generics) or 'array', but not both of them
      if (token === "<" || token === ".<") {
        next();
        const templateTypes = [];
        do {
          const templateType = parseTypes();
          templateTypes.push(templateType);
          if ((token as string) === ">") {
            break;
          }
          next(",");
        } while (token);
        next(">");
        type = builder.typeApplication(type, templateTypes);
      } else {
        while (token === "[]") {
          next();
          type = builder.array(type);
        }
      }
    }
    if ("normalizeType" in builder && builder.normalizeType) {
      type = builder.normalizeType(type);
    }
    if (nullable) {
      type = builder.nullable(type as TypeReference);
    }
    if (mandatory) {
      type = builder.mandatory(type);
    }
    return type;
  }

  function parseTypes(): Type {
    const types = [];
    do {
      types.push(parseType());
      if (token !== "|") {
        break;
      }
      next();
    } while (token);
    return types.length === 1 ? types[0] : builder.union(types);
  }

  this.parse = function (typeStr: string, tempBuilder = defaultBuilder) {
    builder = tempBuilder;
    input = String(typeStr);
    rLexer.lastIndex = 0;
    next();
    const type = parseTypes();
    next(null);
    return type;
  };
}

interface TypeParser {
  parse: (typeStr: string, tempBuilder: TSASTTypeBuilder) => Type;
}
