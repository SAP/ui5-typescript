import ts from "typescript";

function astToString(ast: ts.Node[]) {
  const file = ts.createSourceFile(
    "_.d.ts",
    "",
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );
  // @ts-ignore this assignment works
  file.statements = ts.createNodeArray(ast);

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  let result = printer.printNode(ts.EmitHint.Unspecified, file, undefined);
  result = result.replace(/\s*\/\/\n/g, "\n"); // replace dummy comments with just a linebreak
  return result;
}

export default astToString;
