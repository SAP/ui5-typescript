const _ = require("lodash");
const { transformAst } = require("./phases/ast-transform");
const fixApiJson = require("./phases/json-fixer").fixApiJson;
const jsonToAst = require("./phases/json-to-ast").jsonToAst;
const fixAsts = require("./phases/ast-fixer").fixAsts;
const genDts = require("./phases/dts-code-gen").genDts;
const { buildSymbolTable, mergeSymbolTables } = require("./phases/symbols.js");
const { addTsRefs } = require("./phases/add-ts-references");

function jsonToDTS(jsons) {
  const fixedJsons = timer(function fixJson() {
    return _.map(jsons, fixApiJson);
  });

  // Transform The api.json files to an hierarchical well defined (see ast.d.ts)
  //  Data structure
  let asts = timer(function buildAst() {
    return _.map(fixedJsons, jsonToAst);
  });

  // Create a Symbol Table
  const allSymbolsTables = timer(function buildSymbolsTableStage() {
    return _.map(asts, buildSymbolTable);
  });

  const symbolTable = mergeSymbolTables.apply(null, allSymbolsTables);

  // AST transformations that are a pre-requisite for future steps.
  asts = timer(function transformAstStage() {
    return _.map(asts, (ast, i) =>
      transformAst(ast, allSymbolsTables[i], jsons[i].library)
    );
  });

  // Heavy lifting for fixing UI5 -> DTS issues is done here.
  const fixedAsts = timer(function fixAstsStage() {
    return fixAsts(asts, symbolTable);
  });

  // d.ts text generation, do not add any other kind of logic here!
  const dtsTexts = timer(function genDtsStage() {
    return _.map(fixedAsts, genDts);
  });

  // https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
  const dtsTextsWithRef = timer(function addRefsDirectives() {
    return _.map(dtsTexts, (currText, idx) => {
      const otherLibs = _.clone(jsons);
      // mutation
      _.pullAt(otherLibs, [idx]);
      return addTsRefs(currText, otherLibs);
    });
  });

  // TODO: add disclaimer on generated code and alpha version

  return _.zipWith(jsons, dtsTextsWithRef, (apiJson, dtsText) => {
    return { library: apiJson.library, dtsText };
  });
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
