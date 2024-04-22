import _ from "lodash";
import {
  AstNode,
  AstSymbol,
  Class,
  Enum,
  Interface,
  Namespace,
  UI5AstRoot,
} from "../types/ast.js";

export function transformAst(
  ast: UI5AstRoot,
  symbolTable: { [key: string]: AstSymbol },
  libraryName: string,
) {
  filterNonePublicApis(ast);

  if (libraryName === "sap.ui.core") {
    updateDefineArrayDepsTypes(symbolTable);
  }

  // adding the parent property must be done last after any other
  // ast transformations that add ast nodes
  addParentProp(ast);

  return ast;
}

function addParentProp(node: AstNode | UI5AstRoot) {
  _.forEach(node, (child: AstNode, key) => {
    // sub-node in the AST
    if (_.has(child, "kind") && key !== "parent") {
      addParentProp(child);
      child.parent = node as AstNode;
    } else if (_.isArray(child)) {
      _.forEach(child, (childElemNode) => {
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
 * @param ast
 */
function filterNonePublicApis(ast: UI5AstRoot) {
  filterNamespace(ast.topLevelNamespace);
}

/**
 * @param ast
 */
function filterNamespace(ast: Namespace) {
  ast.namespaces = ast.namespaces.filter(isPublic);
  ast.variables = ast.variables.filter(isPublic);
  ast.functions = ast.functions.filter(isPublic);
  ast.classes = ast.classes.filter(isPublic);
  ast.interfaces = ast.interfaces.filter(isPublic);
  ast.enums = ast.enums.filter(isPublic);

  _.forEach(ast.namespaces, filterNamespace);
  _.forEach(ast.classes, filterClass);
  _.forEach(ast.interfaces, filterInterface);
  _.forEach(ast.enums, filterEnum);
}

/**
 * @param ast
 */
function filterClass(ast: Class) {
  ast.fields = ast.fields.filter(isPublic);
  ast.methods = ast.methods.filter(isPublic);
}

/**
 * @param ast
 */
function filterInterface(ast: Interface) {
  ast.methods = ast.methods.filter(isPublic);
}

/**
 * @param ast
 */
function filterEnum(ast: Enum) {
  ast.values = ast.values.filter(isPublic);
}

function isPublic<Symbol extends AstSymbol>(ast: Symbol): boolean {
  return (
    ast.visibility === "public" ||
    // "protected" APIs are kind of public
    ast.visibility === "protected" ||
    ast.visibility === undefined
  );
}

/**
 * Modify the "aDependencies" parameter of the "sap.ui.define" and "sap.ui.require"
 * function (for all signature variants) to add code completion support for the known UI5 module names.
 *
 * TODO better introduce a dedicated type in UI5 for module names and replace that type in the generator
 * @param symbolTable
 */
function updateDefineArrayDepsTypes(symbolTable: { [key: string]: AstSymbol }) {
  const sapUiNs = symbolTable["sap.ui"] as Namespace;

  // sap.ui.define
  _.filter(
    sapUiNs && sapUiNs.functions,
    (func) => func.name === "define",
  ).forEach((defineFunction) => {
    const aDependenciesParam = _.find(
      defineFunction.parameters,
      (param) => param.name === "aDependencies",
    );
    if (aDependenciesParam) {
      aDependenciesParam.type = {
        kind: "ArrayType",
        elementType: {
          kind: "NativeTSTypeExpression",
          type: "keyof IUI5DefineDependencyNames | (string & {IGNORE_ME?:never})",
        },
      };
    }
  });

  // sap.ui.require
  _.filter(
    sapUiNs && sapUiNs.functions,
    (func) => func.name === "require",
  ).forEach((requireFunction) => {
    const vDependenciesParam = _.find(
      requireFunction.parameters,
      (param) => param.name === "vDependencies",
    );
    if (
      vDependenciesParam &&
      vDependenciesParam.type &&
      vDependenciesParam.type.kind === "UnionType"
    ) {
      vDependenciesParam.type.types.forEach((subType, index, unionTypes) => {
        if (subType && subType.kind === "ArrayType") {
          unionTypes[index] = {
            kind: "ArrayType",
            elementType: {
              kind: "NativeTSTypeExpression",
              type: "keyof IUI5DefineDependencyNames | (string & {IGNORE_ME?:never})",
            },
          };
        }
      });
    }
  });
}
