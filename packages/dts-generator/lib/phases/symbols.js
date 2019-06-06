const _ = require("lodash");

/**
 * @param ast {Ui5AstRoot}
 * @return {SymbolTable}
 */
function buildSymbolTable(ast) {
  return buildNamespaceSymbols(ast.topLevelNamespace, "");
}

/**
 * @param ast {Namespace}
 * @return {SymbolTable}
 */
function buildNamespaceSymbols(ast, fqnPrefix) {
  const prefix = fqnPrefix ? fqnPrefix + "." + ast.name : ast.name;
  const nsSymbolEntry = {};
  nsSymbolEntry[prefix] = ast;

  const nestedNsSymsArr = _.map(ast.namespaces, nestedNs =>
    buildNamespaceSymbols(nestedNs, prefix)
  );
  const nestedNsSyms = mergeSymbolTables.apply(null, nestedNsSymsArr);

  const classesSyms = buildGenericSymbols(ast.classes, prefix);
  const interfacesSyms = buildGenericSymbols(ast.interfaces, prefix);
  const enumsSyms = buildGenericSymbols(ast.enums, prefix);

  return mergeSymbolTables(
    nsSymbolEntry,
    nestedNsSyms,
    classesSyms,
    interfacesSyms,
    enumsSyms
  );
}

/**
 * @param symTables {SymbolTable[]}
 * @return {SymbolTable}
 */
function mergeSymbolTables(...symTables) {
  // TODO: add validations about duplicate names
  return _.assign.apply(null, [{}].concat(symTables));
}

/**
 * @param asts
 * @param {string} prefix
 */
function buildGenericSymbols(asts, prefix) {
  const entries = {};
  _.forEach(asts, currAst => {
    entries[prefix + "." + currAst.name] = currAst;
  });

  return entries;
}

module.exports = {
  buildSymbolTable,
  mergeSymbolTables
};
