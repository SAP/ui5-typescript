import { AstSymbol, Namespace, SymbolTable, UI5AstRoot } from "../types/ast.js";

/**
 * @param ast
 * @return the resulting SymbolTable
 */
export function buildSymbolTable(ast: UI5AstRoot) {
  return buildNamespaceSymbols(ast.topLevelNamespace, "");
}

/**
 * @param ast
 * @return the resulting SymbolTable
 */
function buildNamespaceSymbols(ast: Namespace, fqnPrefix: string): SymbolTable {
  const prefix = fqnPrefix ? fqnPrefix + "." + ast.name : ast.name;
  const nsSymbolEntry: { [prefix: string]: Namespace } = {};
  nsSymbolEntry[prefix] = ast;

  const nestedNsSymsArr = ast.namespaces.map((nestedNs) =>
    buildNamespaceSymbols(nestedNs, prefix),
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
    enumsSyms,
  );
}

/**
 * @param symTables
 * @return the merged symbol table
 */
function mergeSymbolTables(...symTables: SymbolTable[]): SymbolTable {
  // TODO: add validations about duplicate names
  return Object.assign.apply(null, [{}].concat(symTables));
}

/**
 * @param asts
 * @param prefix
 */
function buildGenericSymbols(asts: AstSymbol[], prefix: string) {
  const entries: { [name: string]: AstSymbol } = {};
  asts.forEach((currAst) => {
    entries[prefix + "." + currAst.name] = currAst;
  });

  return entries;
}
