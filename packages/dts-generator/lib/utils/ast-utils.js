const _ = require("lodash");

function getFqn(ast) {
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

module.exports = {
  getFqn,
};
