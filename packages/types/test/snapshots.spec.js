const { expect } = require("chai");
const _ = require("lodash");
const { resolve, basename, relative } = require("path");
const { copySync, emptyDirSync, readFileSync } = require("fs-extra");
const klawSync = require("klaw-sync");

describe("Snapshot Tests", () => {
  const typesDir = resolve(__dirname, "../types");
  const expectedTypesDir = resolve(__dirname, "../temp/types");

  before(function() {
    this.timeout(30000);
    emptyDirSync(expectedTypesDir);
    copySync(typesDir, expectedTypesDir);
    // regenerate the d.ts files
    require("../scripts/gen-dts");
  });

  const dtsFiles = klawSync(typesDir, { nodir: true });

  _.forEach(dtsFiles, fileDesc =>
    it(`ensures <${relative(typesDir, fileDesc.path)}> is up-to-date`, () => {
      const actualText = readFileSync(fileDesc.path, "utf8");
      const expectedPath = resolve(expectedTypesDir, basename(fileDesc.path));
      const expectedText = readFileSync(expectedPath, "utf8");
      expect(expectedText).to.equal(actualText);
    })
  );
});
