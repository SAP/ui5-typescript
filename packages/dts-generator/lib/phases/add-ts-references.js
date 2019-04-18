const _ = require("lodash");

function addTsRefs(orgDtsText, otherLibraries) {
  const references = _.map(
    otherLibraries,
    ({ library }) => `/// <reference path="./${library}.d.ts" />`
  );
  let dtsTextWithRef = references.join("\n") + "\n";
  dtsTextWithRef += orgDtsText;

  return dtsTextWithRef;
}

module.exports = {
  addTsRefs
};
