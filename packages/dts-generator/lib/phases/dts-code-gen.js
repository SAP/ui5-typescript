const _ = require("lodash");
const { format } = require("prettier");
const { getFqn } = require("../utils/ast-utils");
const sanitizeHtml = require("sanitize-html");

// Too much hassle to pass this down the stack
let fqnToIgnore = {};
/**
 * @param ast {Ui5AstRoot}
 * @return {string}
 */
function genDts(ast, fqnToIgnoreArg) {
  // Hacky manner to inject module scoped variable.
  fqnToIgnore = fqnToIgnoreArg;

  let text = "";
  text += `// For Library Version: ${ast.version}` + NL;
  text += `${genNamespace(ast.topLevelNamespace, { declare: true })}` + NL;

  try {
    const formattedText = format(text, { parser: "typescript" });
    return formattedText;
  } catch (e) {
    // if we can't format successfully, at least we can manually inspect the un-formatted
    // definitions and find the error...
    return text;
  }
}

const NL = "\n";
const EMPTY_STRING = "";
const COMMA = ",";

function JSDOC({
  description,
  since,
  experimental,
  deprecated,
  additionalDocs,
}) {
  if (
    _.every([description, since, deprecated, additionalDocs], _.isUndefined)
  ) {
    return EMPTY_STRING;
  }

  let contents = "";
  contents += since ? `@SINCE ${since}` + NL : EMPTY_STRING;
  contents += deprecated ? genDeprecated(deprecated) + NL : EMPTY_STRING;
  contents += experimental ? genExperimental(experimental) + NL : EMPTY_STRING;

  // Clearly separate annotations and regular doc block
  if (contents.length > 0) {
    contents += NL;
  }

  contents += description ? description + NL : EMPTY_STRING;
  contents += additionalDocs
    ? `See:\n\t${additionalDocs.join("\n\t")}` + NL
    : EMPTY_STRING;

  // Italics
  // TODO: this breaks the d.ts
  // contents = contents.replace(/<i>(.+?)<\/i>/g, "*$1*");

  // bold
  contents = contents.replace(/<b>(.+?)<\/b>/g, "**$1**");
  contents = contents.replace(/<strong>(.+?)<\/strong>/g, "**$1**");

  // emphasis
  contents = contents.replace(/<em>(.+?)<\/em>/g, "***$1***");

  // headers
  contents = contents.replace(/<h1>(.+?)<\/h1>/g, "$1:");
  contents = contents.replace(/<h2>(.+?)<\/h2>/g, "$1:");
  contents = contents.replace(/<h3>(.+?)<\/h3>/g, "$1:");
  contents = contents.replace(/<h4>(.+?)<\/h4>/g, "$1:");

  // lists
  contents = contents.replace(/<li>(.+?)<\/li>/g, "\n\t - $1");
  contents = contents.replace(/<ul>\s*<li>/g, "\n\t");

  // Code value
  contents = contents.replace(/<code>(.+?)<\/code>/g, "`$1`");

  // Code block
  contents = contents.replace(
    /<pre>([^]+?)<\/pre>/g,
    "\n```javascript\n$1```\n"
  );

  // line break
  contents = contents.replace(/<br\/>/g, "\n");
  contents = contents.replace(/<br>/g, "\n");
  contents = contents.replace(/<\/br>/g, "\n");

  contents = wordWrap(contents, 100);

  // remove all other html tags
  contents = sanitizeHtml(contents, {
    allowedTags: [],
    allowedAttributes: {},
  });

  contents = `/**\n * ${contents.replace(/\n/g, "\n * ")} \n */`;

  // Trim the end of JSDoc comments to avoid empty comment lines.
  contents = contents.replace(/(\*\s*\n\s*)+\*\//, "*/");

  // "&lt;View" --> "<View"
  contents = _.unescape(contents);

  return contents;
}

function APPEND_ITEMS(items, generator, options) {
  const { sep, args } = _.defaults(options, { sep: "", args: [] });

  const itemsText = _.map(items, (currItem) =>
    generator.apply(null, [currItem].concat(args))
  );
  return itemsText.join(sep + NL) + NL;
}

/**
 * @param ast {DeprecatedDesc}
 * @return {string}
 */
function genDeprecated(ast) {
  let contents = EMPTY_STRING;
  contents += "@deprecated";
  contents += ast.since ? ` (since ${ast.since})` : EMPTY_STRING;
  contents += ast.description ? ` - ${ast.description}` : EMPTY_STRING;
  return contents;
}

/**
 * @param ast {ExperimentalDesc}
 * @return {string}
 */
function genExperimental(ast) {
  let contents = EMPTY_STRING;
  contents += "@EXPERIMENTAL";
  contents += ast.since ? ` (since ${ast.since})` : EMPTY_STRING;
  contents += ast.description ? ` - ${ast.description}` : EMPTY_STRING;
  return contents;
}

/**
 * @param ast {Namespace}
 * @param options
 * @return {string}
 */
function genNamespace(ast, options = { declare: false }) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += `${options.declare ? "declare" : ""} namespace ${ast.name} {` + NL;

  text += APPEND_ITEMS(ast.variables, genVariable);
  text += APPEND_ITEMS(ast.functions, genFunction);
  text += APPEND_ITEMS(ast.namespaces, genNamespace);
  text += APPEND_ITEMS(ast.interfaces, genInterface);
  text += APPEND_ITEMS(ast.classes, genClass);
  text += APPEND_ITEMS(ast.enums, genEnum);
  text += "}";
  return text;
}

/**
 * @param ast {Interface}
 * @return {string}
 */
function genInterface(ast) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += `interface ${ast.name}`;
  text +=
    _.isEmpty(ast.extends) === false
      ? ` extends ${ast.extends.join(", ")} `
      : "";
  text += `{` + NL;
  text += APPEND_ITEMS(ast.props, genProperty);
  text += APPEND_ITEMS(ast.methods, genInstanceMethod);

  text += "}";
  /*
   * In order to export namespaces converted to interfaces as
   * modules we need to assign those mapped interfaces to const
   *
   * The following snippet shows how such an interface needs
   * to be defined to re-export it as module:
   *
   *   interface BusyIndicator {
   *     [...]
   *   }
   *   export const BusyIndicator: BusyIndicator;
   *
   * The following snippet shows how the re-export as module
   * can be done:
   *
   *   declare module "sap/ui/core/BusyIndicator" { export default sap.ui.core.BusyIndicator; }
   *
   */
  if (ast.isNamespace) {
    text += NL + `export const ${ast.name}: ${ast.name};`;
  }
  return text;
}

/**
 * @param ast {Class}
 * @return {string}
 */
function genClass(ast) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += applyTsIgnore(ast);
  text += `class ${ast.name}`;
  if (ast.extends) {
    text += ` extends ${ast.extends} `;
  }
  if (_.isEmpty(ast.implements) === false) {
    text += ` implements ${ast.implements.join(", ")} `;
  }
  text += `{` + NL;

  text += APPEND_ITEMS(ast.constructors, genConstructor);
  text += APPEND_ITEMS(ast.fields, genField);
  text += APPEND_ITEMS(ast.methods, genPossiblyStaticMethod);
  text += "}";
  return text;
}

const genInstanceMethod = _.partialRight(genMethodOrFunction, false, false);
const genPossiblyStaticMethod = _.partialRight(
  genMethodOrFunction,
  true,
  false
);

const genFunction = _.partialRight(genMethodOrFunction, false, true);

/**
 * @param ast {FunctionDesc}
 * @param staticPossible {boolean}
 * @param isFunc {boolean}
 * @return {string}
 */
function genMethodOrFunction(ast, staticPossible, isFunc) {
  const genericTypeText = ast.genericType
    ? `<${genType(ast.genericType)}>`
    : "";
  let text = "";
  text += JSDOC(ast) + NL;
  text += ast.overwrite ? "// @ts-ignore" + NL : "";
  text += ast.static && staticPossible ? "static " : "";
  text +=
    `${isFunc ? "function " : ""}${ast.name}${
      ast.optional ? "?" : ""
    } ${genericTypeText} (` + NL;
  text += APPEND_ITEMS(ast.parameters, genParameter, { sep: COMMA });

  text += ")";

  let hasReturnType = ast.returns !== undefined && ast.returns.type;
  text += ":" + (hasReturnType ? genType(ast.returns.type) : "void");

  return text;
}

/**
 * @param ast {FunctionDesc}
 * @return {string}
 */
function genConstructor(ast) {
  let text = "";

  text += JSDOC(ast) + NL;
  text += ast.overwrite ? "// @ts-ignore" + NL : "";
  text += `${ast.name} (` + NL;
  text += APPEND_ITEMS(ast.parameters, genParameter, { sep: COMMA });
  text += ")";

  return text;
}

/**
 *
 * @param ast {Property}
 * @returns {string}
 */
function genProperty(ast) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += applyTsIgnore(ast);
  text +=
    `${ast.name}${ast.optional ? "?" : ""} : ${
      ast.type ? genType(ast.type) : "any"
    }` + NL;
  return text;
}

/**
 * @param ast {Variable}
 * @return {string}
 */
function genField(ast) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += applyTsIgnore(ast);
  text += ast.static ? "static " : "";
  text += `${ast.name} : ${ast.type ? genType(ast.type) : "any"}` + NL;
  return text;
}

/**
 * @param ast {Parameter}
 * @return {string}
 */
function genParameter(ast) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += ast.name;
  text += ast.optional ? "?" : "";

  // "complex" options param
  if (typeof ast.type === "object" && typeof ast.type.kind !== "string") {
    text += ": {" + NL;
    _.forEach(ast.type, (nestedType) => {
      text += genParameter(nestedType) + NL;
    });
    text += "}" + NL;
  } else {
    text += `: ${ast.type ? genType(ast.type) : "any"}`;
  }

  return text;
}

/**
 * @param ast {Enum}
 * @return {string}
 */
function genEnum(ast) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += `enum ${ast.name} {` + NL;
  text += APPEND_ITEMS(ast.values, genEnumValue);
  text += "}";

  return text;
}

/**
 * @param ast {Variable}
 * @returns {string}
 */
function genEnumValue(ast) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += `${ast.name},`;

  return text;
}

/**
 * @param ast {Variable}
 * @returns {string}
 */
function genVariable(ast) {
  let text = "";
  text += JSDOC(ast) + NL;
  text += `export const ${ast.name} : ${genType(ast.type)};` + NL;

  return text;
}

/**
 * @param ast {Type}
 * @returns {string}
 */
function genType(ast) {
  if (ast.kind === "SimpleType") {
    return ast.type;
  } else if (ast.kind === "UnionType") {
    const unionTypes = _.map(ast.types, genType);
    return unionTypes.join(" | ");
  }
}

// TODO: apply this to more ast node types
function applyTsIgnore(ast) {
  const fqn = getFqn(ast);
  if (fqnToIgnore[fqn]) {
    let description = "";
    if (_.isString(fqnToIgnore[fqn])) {
      description = fqnToIgnore[fqn];
    }
    return `// @ts-ignore - ${description}` + NL;
  } else {
    return "";
  }
}

function wordWrap(text, maxLineLength) {
  let c;
  let codeBlock = false;
  let listItem = false;
  let wsPrefix = true;
  let column = 0;

  let result = "";

  for (let i = 0; i < text.length; i++) {
    column++;
    c = text[i];

    if (c === "\n") {
      listItem = false;
      wsPrefix = true;
      column = 0;
    }
    if (c === "-" && wsPrefix) {
      listItem = true;
    }

    if (c === "`" && text[i + 1] === "`" && text[i + 2] === "`") {
      codeBlock = !codeBlock;
    }

    // do not word wrap in a code block
    if (codeBlock) {
      result += c;
    } else {
      // we wrap on spaces
      if (column > maxLineLength && c === " ") {
        column = 0;
        result += "\n";
        // multi line item
        // - line 1
        //   line2 is indented
        if (listItem) {
          result += "\t\t\t";
        }
      } else {
        result += c;
      }
    }

    // first none WS character in a line
    if (c !== " " && c !== "\t" && c !== "\n") {
      wsPrefix = false;
    }
  }

  return result;
}

module.exports = {
  genDts,
};
