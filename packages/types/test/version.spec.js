const chai = require("chai");
chai.use(require("chai-match"));
const _ = require("lodash");
const { resolve } = require("path");
const { readJsonSync } = require("fs-extra");
const expect = chai.expect;

describe("Version Consistency Assumptions", () => {
  const pkgPath = resolve(__dirname, "../package.json");
  const pkgJson = readJsonSync(pkgPath);
  const typesVersion = pkgJson.version;
  const apiJsonVersion = pkgJson.openUI5Version;

  it("ensures OpenUI5 version has no wildcards", () => {
    expect(apiJsonVersion).to.match(/\d+\.\d+\.\d+/);
  });

  it("ensures the major and minor version always match between the Type's package and OpenUI5", () => {
    const typesVerParts = /(\d+)\.(\d+)\.\d+/.exec(typesVersion);
    const majorTypes = typesVerParts[1];
    const minorTypes = typesVerParts[2];

    const openUI5VerParts = /(\d+)\.(\d+)\.\d+/.exec(apiJsonVersion);
    const majorOpenUI5 = openUI5VerParts[1];
    const minorOpenUI5 = openUI5VerParts[2];

    expect(majorTypes).to.equal(majorOpenUI5);
    expect(minorTypes).to.equal(minorOpenUI5);
  });
});
