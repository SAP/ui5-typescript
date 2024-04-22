import _ from "lodash";
import { AstNode, AstSymbol } from "../types/ast.js";

export function getFqn(ast: AstNode) {
  const hierarchy = [ast];
  let currAncestor = ast.parent;
  while (currAncestor !== undefined) {
    hierarchy.push(currAncestor);
    currAncestor = currAncestor.parent;
  }

  hierarchy.reverse();
  const fqnParts = _.map(hierarchy, "name");
  return _.drop(fqnParts).join(".");
}
