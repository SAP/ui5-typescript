const chai = require("chai");
chai.use(require("chai-match"));
const _ = require("lodash");
const { resolve } = require("path");
const { readJsonSync } = require("fs-extra");
const expect = chai.expect;

describe("Version Consistency Assumptions", () => {
  const pkgPath = resolve(__dirname, "../package.json");
  const pkgJson = readJsonSync(pkgPath);
  const apiJsonVersion = pkgJson.openUI5Version;

  it("ensures OpenUI5 version has no wildcards", () => {
    expect(apiJsonVersion).to.match(/\d+\.\d+\.\d+/);
  });
});
