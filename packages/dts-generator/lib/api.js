const _ = require("lodash");
const { transformAst } = require("./phases/ast-transform");
const fixApiJson = require("./phases/json-fixer").fixApiJson;
const jsonToAst = require("./phases/json-to-ast").jsonToAst;
const fixAsts = require("./phases/ast-fixer").fixAsts;
const genDts = require("./phases/dts-code-gen").genDts;
const { buildSymbolTable, mergeSymbolTables } = require("./phases/symbols.js");
const { addTsRefs } = require("./phases/add-ts-references");

function jsonToDTS(targetLibJson, options) {
  const targetLibFixedJson = fixApiJson(targetLibJson);
  const depsFixedJsons = timer(function fixJson() {
    return _.map(options.dependencies, fixApiJson);
  });

  // Transform The api.json files to an hierarchical well defined  Data structure (see ast.d.ts)
  const targetLibAst = jsonToAst(targetLibFixedJson);
  const depsAsts = timer(function buildAst() {
    return _.map(depsFixedJsons, jsonToAst);
  });

  // Create a Symbol Table
  const allSymbolsTables = timer(function buildSymbolsTableStage() {
    const allAsts = [targetLibAst].concat(depsAsts);
    return _.map(allAsts, buildSymbolTable);
  });

  const symbolTable = mergeSymbolTables.apply(null, allSymbolsTables);
  const targetLibTransformedAst = transformAst(
    targetLibAst,
    allSymbolsTables[0],
    targetLibFixedJson.library
  );
  const targetLibFixAst = fixAsts(
    targetLibTransformedAst,
    symbolTable,
    options.directives
  );

  // d.ts text generation, do not add any other kind of logic here!
  let targetLibDtsText = genDts(
    targetLibFixAst,
    options.directives.fqnToIgnore
  );

  if (options.importsGen) {
    const depLibNames = _.map(options.dependencies, dep => dep.library);
    targetLibDtsText = options.importsGen(targetLibDtsText, depLibNames);
  }

  return {
    library: targetLibJson.library,
    dtsText: targetLibDtsText
  };
}

function timer(func) {
  const start = _.now();
  const result = func();
  const end = _.now();

  console.log(`${func.name}: ${end - start}ms`);
  return result;
}

module.exports = {
  jsonToDTS
};
