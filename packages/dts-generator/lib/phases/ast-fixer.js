require("lodash.combinations");
const _ = require("lodash");
const { getFqn } = require("../utils/ast-utils");

/**
 * Modifies the ast structure so that it could be
 * compiled to TypeScript definitions successfully.
 *
 * This is done by **modifying** the input direct.
 * - Has a side effect...
 *
 * @param {Ui5AstRoot[]} asts
 * @param symbolTable
 * @param directives
 *
 * @returns {Ui5AstRoot[]}
 */
function fixAsts(asts, symbolTable, directives) {
  const flatAst = _.flatMap(asts, flattenAst);
  const groupedAst = _.groupBy(flatAst, "kind");
  removeBadInterfacesInheritance(groupedAst, directives.badInterfaces);
  removeBadMethods(groupedAst, directives.badMethods);
  fixConstructors(groupedAst, symbolTable);
  fixFunctions(groupedAst, symbolTable);
  fixTypes(groupedAst, symbolTable, directives.typeTyposMap);
  fixEnums(groupedAst, symbolTable);
  fixNamespacesAsInterfaces(
    groupedAst,
    symbolTable,
    directives.namespacesToInterfaces
  );
  fixOptionalParams(groupedAst, symbolTable);
  markOverwrittenMethods(groupedAst, symbolTable);

  return asts;
}

/**
 * Some interfaces cause so many TypeScript errors, we might as well
 * remove their usage completely until they are fixed...
 */
function removeBadInterfacesInheritance(groupedAst, badInterfaces) {
  _.forEach(groupedAst.Class, (clazz) => {
    clazz.implements = _.difference(clazz.implements, badInterfaces);
  });
}

/**
 * Some methods cause so many TypeScript errors, we might as well
 * remove their usage completely until they are fixed in the original UI5 JSDocs
 */
function removeBadMethods(groupedAst, badMethods) {
  _.forEach(groupedAst.Class, (clazz) => {
    clazz.methods = _.reject(clazz.methods, (currMethod) =>
      _.includes(badMethods, currMethod.name)
    );
  });
}

/**
 * Returns a vector made up of all sub-nodes in the input AstNode.
 *
 * @param ast
 * @returns {Array<AstNode>>}
 */
function flattenAst(ast) {
  let children = [];

  _.forEach(ast, (val, key) => {
    if (_.isUndefined(val) || _.isNull(val) || key === "parent") {
      return;
    } else if (val.kind) {
      children.push(val);
    }
    // nested complex type.
    else if (key === "type" && typeof val === "object") {
      children = children.concat(_.values(val));
    } else if (_.isArray(val)) {
      const arrChildren = _.filter(val, (currVal) => _.has(currVal, "kind"));
      children = children.concat(arrChildren);
    }
  });

  let allDescendants = children;
  _.forEach(children, (child) => {
    const currDescendants = flattenAst(child);
    allDescendants = allDescendants.concat(currDescendants);
  });

  return allDescendants;
}

/**
 * A constructor is just a function name "constructor"
 * With an **implicit** return type.
 *
 * @param groupedAst
 */
function fixConstructors(groupedAst) {
  const classes = groupedAst.Class;

  _.forEach(classes, (clazz) => {
    _.forEach(clazz.constructors, (currConstructor) => {
      currConstructor.name = "constructor";
      delete currConstructor.returns;
    });
  });
}

function fixFunctions(groupedAst) {
  const namespaces = groupedAst.Namespace;
  removeIncorrectlyNamedFunctions(namespaces);
}

function fixTypes(groupedAst, symbolTable, typeTyposMap) {
  const allTypes = _.compact(
    [].concat(groupedAst.SimpleType).concat(groupedAst.UnionType)
  );

  fixTyposAndConversions(allTypes, typeTyposMap);
  fixUnknownTypes(allTypes, symbolTable);
}

/**
 * A few functions (4 known so far) on namespace implicitly define
 * a nested namespace by having a "dot" ('.') in their name.
 * This could be fully auto-fixed, but it seems simpler to just fix the original api.json files instead.
 * So we are currently ignoring these function and do not generate those to the d.ts files.
 *
 * @param {Namespace[]} namespaces
 */
function removeIncorrectlyNamedFunctions(namespaces) {
  _.forEach(namespaces, (ns) => {
    ns.functions = _.reject(
      ns.functions,
      // a function name must be a single Identifier
      // Spotting a Dot means someone forgot to add another namespace...
      (func) => {
        const hasInvalidName = func.name.indexOf(".") !== -1;
        if (hasInvalidName) {
          const fqn = getFqn(func);
          console.warn(
            `AUTOFIXING - Incorrect Function name - <${func.name}> in <${fqn}>`
          );
        }
        return hasInvalidName;
      }
    );
  });
}

/**
 * Will perform type name fixes (e.g int -> number)
 *
 * @param {Array<AstNode>>} withTypes - AstNode that have a "type" property.
 */
function fixTyposAndConversions(withTypes, typeTyposMap) {
  _.forEach(withTypes, (astElem) => {
    if (_.has(astElem, "type")) {
      const currentType = astElem.type;
      if (_.has(typeTyposMap, currentType) && astElem.ignoreIssues !== true) {
        const newType = typeTyposMap[currentType];
        astElem.type = newType;
        const fqn = getFqn(astElem);
        console.warn(
          `AUTOFIXING - Typo - <${currentType}> converted to <${newType}> in <${fqn}>`
        );
      }
    }
  });
}

/**
 * Replaces unresolved fully qualified types with "any"
 *
 * @param {Array<AstNode>>} withTypes
 * @param symbolTable
 */
function fixUnknownTypes(withTypes, symbolTable) {
  _.forEach(withTypes, (astElem) => {
    if (astElem.type !== undefined && typeof astElem.type === "string") {
      const type = astElem.type;
      // "dotted" type
      if (astElem.type.indexOf(".") !== -1 && astElem.ignoreIssues !== true) {
        // TODO: requires better parsing of JSDocs types, the regexp below is just an hack.
        const typeNameOnly = /(\w+(?:\.\w+)*)(?:\[])?/.exec(astElem.type)[1];
        if (_.has(symbolTable, typeNameOnly) === false) {
          console.warn(
            `AUTOFIXING - unresolved dotted type name <${type}> converting to "any".`
          );
          astElem.type = "any";
        }
      }
    }
  });
}

/**
 * A few enums implicitly define
 * a parent namespace by having a "dot" ('.') in their name.
 *
 * The implicit namespace would be added by another fixer function
 * So all we have left to do is to modify the enum name.
 *
 * @param {Array<AstNode>>} withTypes
 * @param symbolTable
 */
function fixEnums(groupedAst, symbolTable) {
  _.forEach(groupedAst.Enum, (currEnum) => {
    if (currEnum.name.indexOf(".") !== -1) {
      console.warn(
        `AUTOFIXING - Enum named <${currEnum.name}> contains a dot, that is an invalid enum name!`
      );
      const noDotsName = /\.(\w+)$/.exec(currEnum.name)[1];
      currEnum.name = noDotsName;
    }
  });
}

/**
 * In the API.json structure, namespaces are sometimes
 * (incorrectly) used to define custom types.
 *
 * In TypeScript however, namespaces may not be used as types
 * so this function converts such namespaces to interfaces.
 *
 * Note that sometimes an API.json namespace is **both** a custom type and
 * an actual namespace. In such cases we must add the matching interface but do not remove
 * the original namespace.
 *
 * @param groupedAst
 * @param symbolTable
 * @param namespacesToInterfaces
 */
function fixNamespacesAsInterfaces(
  groupedAst,
  symbolTable,
  namespacesToInterfaces
) {
  _.forEach(groupedAst.Namespace, (currNS) => {
    const namespacesToConvert = _.filter(currNS.namespaces, (nestedNs) => {
      const nsDirectiveVal = namespacesToInterfaces[nestedNs.name];
      return (
        nsDirectiveVal === true ||
        (_.isArray(nsDirectiveVal) && nsDirectiveVal[0] === true) ||
        // A completely empty Namespace seems to be how UI defined custom types.
        (_.isEmpty(nestedNs.classes) &&
          _.isEmpty(nestedNs.enums) &&
          _.isEmpty(nestedNs.interfaces) &&
          _.isEmpty(nestedNs.namespaces) &&
          _.isEmpty(nestedNs.functions) &&
          _.isEmpty(nestedNs.variables))
      );
    });
    const namespacesToKeep = _.filter(namespacesToConvert, (nestedNs) => {
      const nsDirectiveVal = namespacesToInterfaces[nestedNs.name];
      return (
        _.isArray(nsDirectiveVal) &&
        nsDirectiveVal[0] === true &&
        nsDirectiveVal[1] === "keep_original_ns"
      );
    });

    const namespacesToRemove = _.difference(
      namespacesToConvert,
      namespacesToKeep
    );
    currNS.namespaces = _.difference(currNS.namespaces, namespacesToRemove);

    const replacementInterfaces = _.map(namespacesToConvert, (nestedNs) => {
      return {
        kind: "Interface",
        name: nestedNs.name,
        methods: nestedNs.functions,
        parent: currNS,
      };
    });

    _.forEach(replacementInterfaces, (inter) => {
      const interFqn = getFqn(inter);
      console.warn(
        `AUTOFIXING - Replacing Namespace with Interface - <${interFqn}> was Converted to Interface`
      );
    });
    currNS.interfaces = currNS.interfaces.concat(replacementInterfaces);
  });
}

/**
 * In UI5 APIs a function may contain optional arguments
 * that appear **before** required arguments, e.g:
 *
 * ```
 * function foo(a, b?, c) {}
 * ```
 *
 * That is invalid in TypeScript.
 * function overloading however is valid in TypeScript
 * and can be used to model the incorrect usage of optional arguments:
 *
 * ```
 * // This is equivalent to the definition above
 * function foo(a, c) {}
 * function foo(a, b, c) {}
 * ```
 *
 *   - Note that the number of required overloads grows exponentially
 *     as we add more optional arguments **before** required ones.
 *
 * @param groupedAst
 * @param symbolTable
 */
function fixOptionalParams(groupedAst, symbolTable) {
  const namespaces = groupedAst.Namespace ? groupedAst.Namespace : [];
  const classes = groupedAst.Class ? groupedAst.Class : [];
  const interfaces = groupedAst.Interface ? groupedAst.Interface : [];

  fixFunctionOptionalParams(namespaces, "functions");
  fixFunctionOptionalParams(classes.concat(interfaces), "methods");
  fixFunctionOptionalParams(classes, "constructors");
}

function fixFunctionOptionalParams(containers, prop) {
  _.forEach(containers, (currContainer) => {
    const toOverload = _.filter(
      currContainer[prop],
      hasRequiredParamAfterOptional
    );
    // assumes only a single "optional overload" per func (at most).
    const overloadedFuncs = _.flatMap(toOverload, createOverloadsForOptional);

    _.forEach(overloadedFuncs, (func) => {
      const funcFqn = getFqn(func);
      console.warn(
        `AUTOFIXING - Function Overloads - function/method <${funcFqn}> was overloaded`
      );
    });

    // TODO: Should the functions and other properties be sorted by name?
    currContainer[prop] = currContainer[prop].concat(overloadedFuncs);
  });
}

function hasRequiredParamAfterOptional(func) {
  const firstOptionalIdx = _.findIndex(
    func.parameters,
    (param) => param.optional === true
  );
  const lastRequiredIdx = _.findLastIndex(
    func.parameters,
    (param) => param.optional === false
  );
  // This func does have both types of params, so the condition can  never be met.
  if (firstOptionalIdx === -1 || lastRequiredIdx === -1) {
    return false;
  } else {
    return lastRequiredIdx > firstOptionalIdx;
  }
}

/**
 *
 * @param orgFunc
 * @returns {Array}
 */
function createOverloadsForOptional(orgFunc) {
  const clonedParamsReverse = _.reverse(_.clone(orgFunc.parameters));
  const numOfParams = orgFunc.parameters.length;
  const firstReversedMandatoryIdx = _.findIndex(
    clonedParamsReverse,
    (param) => param.optional === false
  );

  // find all optional indices that appear **before** the last required argument
  const invalidOptionalIndices = _.reduce(
    clonedParamsReverse,
    (result, param, idx) => {
      if (param.optional === true && idx > firstReversedMandatoryIdx) {
        const idxInOriginalParams = numOfParams - 1 - idx;
        result.push(idxInOriginalParams);
      }
      return result;
    },
    []
  );

  // The number of combinations grows exponentially in relationship to ${invalidOptionalIndices.length}
  const invalidOptionsCombos = _.flatMap(invalidOptionalIndices, (v, i, a) =>
    _.combinations(a, i + 1)
  );

  const overloads = _.map(invalidOptionsCombos, (currInvalidCombo) => {
    const overloadedFunc = cloneAstNodeDeep(orgFunc);
    const toMandatory = _.difference(invalidOptionalIndices, currInvalidCombo);
    _.forEach(toMandatory, (idx) => {
      overloadedFunc.parameters[idx].optional = false;
    });
    // PullAt modifies (side effect) the parameter array.
    // So we are in fact **removing** the remaining invalid optional arguments in this scenario
    _.pullAt(overloadedFunc.parameters, currInvalidCombo);
    return overloadedFunc;
  });

  // In the original function/method all the optionals preceding a mandatory argument must be replaced
  // with mandatory parameters
  _.forEach(invalidOptionalIndices, (idx) => {
    orgFunc.parameters[idx].optional = false;
  });

  return overloads;
}

/**
 *
 * @param groupedAst
 * @param symbolTable
 */
function markOverwrittenMethods(groupedAst, symbolTable) {
  const classes = groupedAst.Class;
  _.forEach(classes, (clazz) => {
    const ancestors = getClassAncestors(clazz, symbolTable);
    const ancestorsMethodMaps = _.map(ancestors, (currAncestor) =>
      methodArrToMap(currAncestor.methods)
    );
    const combinedAncestorsMethodsMap = _.defaults.apply(
      null,
      ancestorsMethodMaps
    );

    _.forEach(clazz.methods, (ownMethod) => {
      // overwritten method
      if (combinedAncestorsMethodsMap[ownMethod.name]) {
        ownMethod.overwrite = true;
        const clazzFqn = getFqn(clazz);
        console.log(
          `AUTOFIXING - Marking method <${ownMethod.name}> in class <${clazzFqn}> as overwritten.`
        );
      }
    });

    // our computation has a side effect on the input structure, so to avoid strange
    // errors we will re-assign the original methods prop at a later phase
    // TODO: save the temp data outside the AST - this is just ugly :(
    clazz.flattenedMethods = _.values(combinedAncestorsMethodsMap);
  });
}

function methodArrToMap(methods) {
  const ownMethodNames = _.map(methods, "name");
  const methodsMap = _.zipObject(ownMethodNames, methods);
  return methodsMap;
}

function getClassAncestors(clazz, symbolTable) {
  const ancestors = [];

  let currClazz = clazz;
  while (currClazz && currClazz.extends !== undefined) {
    const ancestorSymbol = symbolTable[currClazz.extends];
    if (ancestorSymbol !== undefined) {
      ancestors.push(ancestorSymbol);
      currClazz = ancestorSymbol;
    } else {
      // loop stopping condition
      currClazz = null;
    }
  }

  return ancestors;
}

function cloneAstNodeDeep(astNode) {
  const orgParent = astNode.parent;
  // cyclic cloning is bad mmm-okay?
  astNode.parent = null;
  const clonedNode = _.cloneDeep(astNode);
  clonedNode.parent = orgParent;
  astNode.parent = orgParent;

  return clonedNode;
}

module.exports = {
  fixAsts,
};
