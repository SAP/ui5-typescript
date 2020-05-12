const _ = require("lodash");

function transformAst(ast, symbolTable, libraryName) {
  updateConstructorMSettingsParam(ast.topLevelNamespace);
  filterNonePublicApis(ast);
  addDefineArrayInterface(ast, symbolTable);

  if (libraryName === "sap.ui.core") {
    updateDefineArrayDepsTypes(symbolTable);
    // This interface exists for every single library and our symbol table
    // does not support multiple symbols with the same name
    // but it is enough to put some kind of placeholder here to avoid
    // having the reference to this type from "sap.ui.define" function
    // being converted to "any" type during the ast-fixing phase.
    symbolTable["sap.IUI5DefineDependencyNames"] = { placeHolder: true };
  }

  // adding the parent property must be done last after any other
  // ast transformations that add ast nodes
  addParentProp(ast);

  return ast;
}

/**
 * @param {Namespace} ast
 */
function updateConstructorMSettingsParam(ast) {
  function genMsettingInterfaceName(className) {
    return `$${className}Settings`;
  }

  function buildExtendedInterfaceName(extendedClassName) {
    const nameParts = extendedClassName.split(".");
    const prefix = _.dropRight(nameParts);
    const suffix = _.last(nameParts);
    return prefix.join(".") + "." + genMsettingInterfaceName(suffix);
  }

  const controlClasses = _.filter(
    ast.classes,
    clazz => clazz.kind === "Class" && clazz.isUI5Control === true
  );

  const mSettingsInterfaces = _.map(controlClasses, ctrlClazz => {
    const newInterfaceName = genMsettingInterfaceName(ctrlClazz.name);
    const orgParam = ctrlClazz.constructors[0].parameters[1];
    // Create a new interface for each mSettings param in UI5 Control
    const newInterface = {
      kind: "Interface",
      name: newInterfaceName,
      // "ManagedObject" is the top of the hierarchy chain for mSettings object properties inheritance.
      extends:
        ctrlClazz.extends && ctrlClazz.name !== "ManagedObject"
          ? [buildExtendedInterfaceName(ctrlClazz.extends)]
          : [],
      methods: [],
      // "isUI5Control" ensure that the below property access is safe.
      props: _.map(orgParam.type, paramToProp),
      visibility: ctrlClazz.visibility

      // Not copying the JSDocs because it does not seem like any of these
      // docs are relevant in the context of the new generate interface.
    };

    // Reference the new interface from the original param type.
    orgParam.type = {
      kind: "SimpleType",
      type: newInterfaceName
    };

    return newInterface;
  });
  ast.interfaces = ast.interfaces.concat(mSettingsInterfaces);
  _.forEach(ast.namespaces, updateConstructorMSettingsParam);
}

function addParentProp(node) {
  _.forEach(node, (child, key) => {
    // sub-node in the AST
    if (_.has(child, "kind") && key !== "parent") {
      addParentProp(child);
      child.parent = node;
    } else if (_.isArray(child)) {
      _.forEach(child, childElemNode => {
        if (_.has(childElemNode, "kind") && key !== "parent") {
          addParentProp(childElemNode);
          childElemNode.parent = node;
        }
      });
    }
    // This code assumes we never have a dictionary/map as a childNode.
    // Only direct children or children as elements in an array.
  });
}

/**
 * @param {Ui5AstRoot} ast
 */
function filterNonePublicApis(ast) {
  filterNamespace(ast.topLevelNamespace);
}

/**
 * @param {Namespace} ast
 */
function filterNamespace(ast) {
  ast.namespaces = _.filter(ast.namespaces, isPublic);
  ast.variables = _.filter(ast.variables, isPublic);
  ast.functions = _.filter(ast.functions, isPublic);
  ast.classes = _.filter(ast.classes, isPublic);
  ast.interfaces = _.filter(ast.interfaces, isPublic);
  ast.enums = _.filter(ast.enums, isPublic);

  _.forEach(ast.namespaces, filterNamespace);
  _.forEach(ast.classes, filterClass);
  _.forEach(ast.interfaces, filterInterface);
  _.forEach(ast.enums, filterEnum);
}

/**
 * @param {Class} ast
 */
function filterClass(ast) {
  ast.fields = _.filter(ast.fields, isPublic);
  ast.methods = _.filter(ast.methods, isPublic);
}

/**
 * @param {Interface} ast
 */
function filterInterface(ast) {
  ast.methods = _.filter(ast.methods, isPublic);
}

/**
 * @param {Enum} ast
 */
function filterEnum(ast) {
  ast.values = _.filter(ast.values, isPublic);
}

function isPublic(ast) {
  return (
    ast.visibility === "public" ||
    // TODO: Investigate: I get the impression that "protected" APIs are kind of public
    ast.visibility === "protected" ||
    ast.visibility === undefined
  );
}

/**
 *
 * @param param {Parameter}
 * @returns {Property}
 */
function paramToProp(param) {
  return {
    kind: "Property",
    name: param.name,
    type: param.type,
    optional: param.optional,

    // JSDocs related info
    description: param.description,
    since: param.since,
    deprecated: param.deprecated,
    experimental: param.experimental,
    additionalDocs: param.additionalDocs
  };
}

/**
 * Creates an interface for sap.ui.define()
 *
 * interface ui5defineArrNames {
 *   "sap.ui.core.XXX": undefined,
 *   "sap.m.Button": undefined
 * }
 *
 * @param ast
 * @param symbolTable
 */
function addDefineArrayInterface(ast, symbolTable) {
  const defineDepNames = _.reduce(
    symbolTable,
    (result, symbol, fqn) => {
      if (symbol.kind === "Class" || symbol.kind === "Interface") {
        result.push(fqn);
      }
      return result;
    },
    []
  );

  // Assuming the top level namespace is always "sap"
  // TODO: Would need to be modified for non-sap libraries
  if (ast.topLevelNamespace.name === "sap") {
    ast.topLevelNamespace.interfaces.push({
      kind: "Interface",
      name: "IUI5DefineDependencyNames",
      extends: [],
      methods: [],
      props: _.map(defineDepNames, fqn => {
        return {
          kind: "Property",
          // These names include "slashes" so we must wrap them in quotes.
          name: `"${fqn.replace(/\./g, "/")}"`,
          type: "undefined",
          optional: false
        };
      }),
      visibility: "public"
    });
  }
}

function updateDefineArrayDepsTypes(symbolTable) {
  const sapUiNs = symbolTable["sap.ui"];
  const defineFunction = _.find(
    sapUiNs.functions,
    func => func.name === "define"
  );
  const aDependenciesParam = _.find(
    defineFunction.parameters,
    param => param.name === "aDependencies"
  );
  aDependenciesParam.type = {
    kind: "SimpleType",
    type:
      "(keyof sap.IUI5DefineDependencyNames | (string & { IGNORE_ME?:never}) )[]",
    ignoreIssues: true
  };
}

module.exports = {
  transformAst
};
