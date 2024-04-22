import { getLogger } from "@ui5/logger";
const log = getLogger("@ui5/dts-generator/fixAsts");
import _ from "lodash";
import {
  AstNode,
  Class,
  Export,
  FunctionDesc,
  Interface,
  Kinds,
  Namespace,
  UI5AstRoot,
} from "../types/ast.js";
import "lodash.combinations";
import { getFqn } from "../utils/ast-utils.js";

/**
 * Modifies the ast structure so that it could be
 * compiled to TypeScript definitions successfully.
 *
 * This is done by **modifying** the input directly.
 * - Has a side effect...
 *
 * @param ast
 *
 * @returns the modified ast
 */
export function fixAsts(ast: UI5AstRoot) {
  const flatAst = _.flatMap([ast], flattenAst);
  const groupedAst = _.groupBy(flatAst, "kind");
  fixConstructors(groupedAst);
  fixOptionalParams(groupedAst);
  return ast;
}
const kinds: Kinds[] = [];
/**
 * Returns a vector made up of all sub-nodes in the input AstNode.
 *
 * @param ast
 * @returns {AstNode[]}
 */
function flattenAst(ast: AstNode | UI5AstRoot | string) {
  if (typeof ast === "string") {
    return; // the version in the AST root
  }
  if (
    "kind" in
      ast /* prevent TS from complaining about ast.kind; "in" used because TS doesn't seem to recognize Object.hasOwn() yet */ &&
    !kinds.includes(ast.kind)
  ) {
    kinds.push(ast.kind);
  }
  let children: AstNode[] = [];

  _.forEach(ast, (val: AstNode, key) => {
    if (_.isUndefined(val) || _.isNull(val) || key === "parent") {
      return;
    } else if (val.kind) {
      children.push(val as AstNode);
    }
    // nested complex type.
    else if (key === "type" && typeof val === "object") {
      children = children.concat(Object.values(val));
    } else if (_.isArray(val)) {
      const arrChildren = _.filter(val, (currVal) => _.has(currVal, "kind"));
      children = children.concat(arrChildren);
    }
  });

  let allDescendants = children;
  children.forEach((child) => {
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
function fixConstructors(groupedAst: { [kind: string]: AstNode[] }) {
  const classes = groupedAst.Class as Class[];

  _.forEach(classes, (clazz) => {
    _.forEach(clazz.constructors, (currConstructor) => {
      currConstructor.name = "constructor";
      delete currConstructor.returns;
    });
  });
}

/**
 * Does two kinds of fixes for optional params.
 *
 * 1.)
 * In UI5 APIs a function may contain optional arguments
 * that appear **before** required arguments, e.g:
 *
 * ```
 * function foo(a, b?, c) {}
 * ```
 *
 * This is invalid in TypeScript.
 * function overloading however is valid in TypeScript
 * and can be used to model the incorrect usage of optional arguments:
 *
 * ```
 * // This is equivalent to the definition above
 * function foo(a, c) {}
 * function foo(a, b, c) {}
 * ```
 *
 * 2.)
 * In UI5 APIs, "optional" *may* sometimes mean that the param can be omitted
 * despite subsequent params being given. The implementation checks the type
 * of the params and shifts the subsequent params once it recognizes that one
 * is missing.
 * This is invalid in TypeScript. Optional parameters can be omitted, but only
 * "from the end": one cannot pass only the third of three optional parameters.
 * Such params are listed with the @ui5-omissible-params tag and marked as
 * "omissible" in the AST.
 *
 * Hence, for
 *
 * ```
 * function foo(a, b?, c?) {}
 * ```
 *
 * where parameter b is omissible, the following additional signature is created:
 *
 * ```
 * function foo(a, c?) {}
 * ```
 *
 * If both a and b would be optional and omissible, then the following additional signatures would be created:
 *
 * ```
 * function foo(a?, c?) {}
 * function foo(b?, c?) {}
 * function foo(c?) {}
 * ```
 *
 * More complex omission patterns like "x can only be omitted if y is present"
 * or "x and y can only be omitted together"
 * or "x can only be omitted when y has a certain value or type"
 * can not be expressed. In such cases, parameters should not be marked as omissible,
 * which means they simply have to be given as "undefined" by the user.
 *
 *
 *   - Note that the number of required overloads grows exponentially
 *     as we add more omissible params and optional arguments **before** required ones.
 *
 * @param groupedAst
 */
function fixOptionalParams(groupedAst: { [kind: string]: AstNode[] }) {
  const namespaces = (
    groupedAst.Namespace ? groupedAst.Namespace : []
  ) as Namespace[];
  const classes = (groupedAst.Class ? groupedAst.Class : []) as Class[];
  const interfaces = (
    groupedAst.Interface ? groupedAst.Interface : []
  ) as Interface[];

  // create permutations for optional params followed by mandatory ones (make the optional ones mandatory in each permutation)
  fixFunctionOptionalParams(
    namespaces,
    "functions",
    hasRequiredParamAfterOptional,
    createOverloadsForOptionalBeforeMandatory,
  );
  fixFunctionOptionalParams(
    (classes as AstNode[]).concat(interfaces) as Class[] | Interface[],
    "methods",
    hasRequiredParamAfterOptional,
    createOverloadsForOptionalBeforeMandatory,
  );
  fixFunctionOptionalParams(
    classes,
    "constructors",
    hasRequiredParamAfterOptional,
    createOverloadsForOptionalBeforeMandatory,
  );

  // create permutations for omissible params (subsequent params remain optional, but appear at a shifted position)
  fixFunctionOptionalParams(
    namespaces,
    "functions",
    hasOmissibleParam,
    createOverloadsForOmissible,
  );
  fixFunctionOptionalParams(
    (classes as AstNode[]).concat(interfaces) as Class[] | Interface[],
    "methods",
    hasOmissibleParam,
    createOverloadsForOmissible,
  );
  fixFunctionOptionalParams(
    classes,
    "constructors",
    hasOmissibleParam,
    createOverloadsForOmissible,
  );

  /**
   * Functions that are direct module exports and that require overloading
   * have to be handled separately as they require redundant wrappers of kind 'Export'.
   * Do the same two fixes for those now.
   */
  const exports = (groupedAst.Export ? groupedAst.Export : []) as Export[];
  fixFunctionExportsOptionalParams(
    exports,
    hasRequiredParamAfterOptional,
    createOverloadsForOptionalBeforeMandatory,
  );
  fixFunctionExportsOptionalParams(
    exports,
    hasOmissibleParam,
    createOverloadsForOmissible,
  );
}

function fixFunctionOptionalParams(
  containers: Namespace[] | Class[] | Interface[],
  prop: string,
  checkWhetherToFix: (func: FunctionDesc) => boolean,
  createOverloads: (orgFunc: FunctionDesc) => FunctionDesc[],
) {
  containers.forEach((currContainer: Class | Namespace | Interface) => {
    const toOverload = _.filter(
      currContainer[prop] as FunctionDesc[],
      checkWhetherToFix,
    );
    // assumes only a single "optional overload" per func (at most).
    const overloadedFuncs = _.flatMap(toOverload, createOverloads);

    _.forEach(overloadedFuncs, (func) => {
      const funcFqn = getFqn(func);
      log.warn(
        `AUTOFIXING - Function Overloads - function/method <${funcFqn}> was overloaded`,
      );
    });

    currContainer[prop] = currContainer[prop].concat(overloadedFuncs);
    currContainer[prop].sort((p1: FunctionDesc, p2: FunctionDesc) => {
      if (p1.static !== p2.static) {
        // all static methods first
        return p1.static ? -1 : 1;
      }
      return p1.name.localeCompare(p2.name); // if both are static or not static, sort by name
    });
  });
}

/**
 * @param exports
 */
function fixFunctionExportsOptionalParams(
  exports: Export[],
  checkWhetherToFix: (func: FunctionDesc) => boolean,
  createOverloads: (orgFunc: FunctionDesc) => FunctionDesc[],
) {
  const functionExportsToOverload = exports.filter(
    ({ expression }) =>
      expression &&
      expression.kind === "FunctionDesc" &&
      checkWhetherToFix(expression),
  );

  functionExportsToOverload.forEach((_export: Export) => {
    const overloadedFuncs = createOverloads(_export.expression as FunctionDesc);
    const overloadedExports = overloadedFuncs.map((func) => {
      // create a clone of the 'Export' wrapper
      const overloadedExport = _.clone(_export);
      overloadedExport.expression = func;
      return overloadedExport;
    });

    // insert new Exports right after the original export
    _export.parent.exports.splice(
      _export.parent.exports.indexOf(_export) + 1,
      0,
      ...overloadedExports,
    );
  });
}

function hasRequiredParamAfterOptional(func: FunctionDesc) {
  const firstOptionalIdx = _.findIndex(
    func.parameters,
    (param) => param.optional === true,
  );
  const lastRequiredIdx = _.findLastIndex(
    func.parameters,
    (param) => param.optional === false,
  );
  // This func does not have both types of params, so the condition can never be met.
  if (firstOptionalIdx === -1 || lastRequiredIdx === -1) {
    return false;
  } else {
    return lastRequiredIdx > firstOptionalIdx;
  }
}

function hasOmissibleParam(func: FunctionDesc) {
  return func.parameters.some((parameter) => parameter.omissible);
}

/**
 *
 * @param orgFunc
 * @returns
 */
function createOverloadsForOptionalBeforeMandatory(orgFunc: FunctionDesc) {
  const clonedParamsReverse = _.reverse(_.clone(orgFunc.parameters));
  const numOfParams = orgFunc.parameters.length;
  const firstReversedMandatoryIdx = _.findIndex(
    clonedParamsReverse,
    (param) => param.optional === false,
  );

  // find all optional indices that appear **before** the last required argument
  const invalidOptionalIndices: number[] = _.reduce(
    clonedParamsReverse,
    (result, param, idx) => {
      if (param.optional === true && idx > firstReversedMandatoryIdx) {
        const idxInOriginalParams = numOfParams - 1 - idx;
        result.push(idxInOriginalParams);
      }
      return result;
    },
    [],
  );

  // The number of combinations grows exponentially in relationship to ${invalidOptionalIndices.length}
  const invalidOptionsCombos = _.flatMap(invalidOptionalIndices, (v, i, a) =>
    _.combinations(a, i + 1),
  );

  const overloads = invalidOptionsCombos.map((currInvalidCombo) => {
    const overloadedFunc = cloneAstNodeDeep(orgFunc);
    const toMandatory = _.difference(invalidOptionalIndices, currInvalidCombo);
    toMandatory.forEach((idx) => {
      overloadedFunc.parameters[idx].optional = false;
    });
    // PullAt modifies (side effect) the parameter array.
    // So we are in fact **removing** the remaining invalid optional arguments in this scenario
    _.pullAt(overloadedFunc.parameters, currInvalidCombo);
    return overloadedFunc;
  });

  // In the original function/method all the optionals preceding a mandatory argument must be replaced
  // with mandatory parameters
  invalidOptionalIndices.forEach((idx) => {
    orgFunc.parameters[idx].optional = false;
  });

  return overloads;
}

/**
 *
 * @param orgFunc
 * @returns
 */
function createOverloadsForOmissible(orgFunc: FunctionDesc) {
  // find all omissible indices
  const numOfParams = orgFunc.parameters.length;
  const omissibleIndices: number[] = orgFunc.parameters.reduce(
    (acc, param, i) => {
      if (param.omissible && i < numOfParams - 1) {
        // no need for an overload with the last param missing - it is optional and can hence be omitted, anyway
        acc.push(i);
      }
      return acc;
    },
    [],
  );

  // The number of combinations grows exponentially in relationship to ${omissibleIndices.length}
  const combinations = _.flatMap(omissibleIndices, (v, i, a) =>
    _.combinations(a, i + 1),
  );

  const overloads = combinations.map((currentCombination) => {
    const overloadedFunc = cloneAstNodeDeep(orgFunc);

    // PullAt modifies (side effect) the parameter array.
    // So we are in fact **removing** the remaining invalid optional arguments in this scenario
    _.pullAt(overloadedFunc.parameters, currentCombination);
    return overloadedFunc;
  });

  return overloads;
}

function cloneAstNodeDeep<NodeType extends AstNode>(
  astNode: NodeType,
): NodeType {
  const orgParent = astNode.parent;
  // cyclic cloning is bad mmm-okay?
  astNode.parent = null;
  const clonedNode = _.cloneDeep(astNode);
  clonedNode.parent = orgParent;
  astNode.parent = orgParent;

  return clonedNode;
}
