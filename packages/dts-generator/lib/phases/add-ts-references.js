const _ = require("lodash");

function addTsRefs(orgDtsText, depLibsNames) {
  const references = _.map(
    depLibsNames,
    depLibName => `/// <reference path="./${depLibName}.d.ts" />`
  );
  let dtsTextWithRef = references.join("\n") + "\n";
  dtsTextWithRef += orgDtsText;

  return dtsTextWithRef;
}

module.exports = {
  addTsRefs
};
