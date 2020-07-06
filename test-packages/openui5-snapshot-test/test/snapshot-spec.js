const { readdirSync, readFileSync } = require("fs");
const { resolve, relative } = require("path");
const { forEach, difference } = require("lodash");
const { expect } = require("chai");

describe("The OpenUI5 d.ts snapshots", () => {
  const projectRootDir = resolve(__dirname, "..");
  const snapshotsDir = resolve(projectRootDir, "input-sdk");
  const reGenDir = resolve(projectRootDir, "temp");
  const snapshotFiles = readdirSync(snapshotsDir);
  // Only interested in the actual metadata.
  const relevantSnapshotsFiles = difference(snapshotFiles, [
    "openui5-meta.json",
  ]);

  forEach(relevantSnapshotsFiles, (_) =>
    it(`"${_}" is up-to-date`, () => {
      const snapshotPath = resolve(snapshotsDir, _);
      const reGenPath = resolve(reGenDir, _);
      const snapshotText = readFileSync(snapshotPath, "UTF-8");
      const reGenText = readFileSync(reGenPath, "UTF-8");
      expect(
        snapshotText === reGenText,
        `${relative(projectRootDir, snapshotPath)} !== ${relative(
          projectRootDir,
          reGenPath
        )}`
      ).to.be.true;
    })
  );

  before(() => {
    // TODO: generate to temp dir
  });
});
