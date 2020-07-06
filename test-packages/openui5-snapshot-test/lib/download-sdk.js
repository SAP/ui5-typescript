const { resolve } = require("path");
const { pick } = require("lodash");
const { writeJsonSync } = require("fs-extra");
const {
  downloadLibs,
  expandTransitiveDeps,
  getOpenUI5PossibleLibNames,
  getSapUI5LibsMeta,
} = require("./utils/ui5-metadata");
const { log } = require("./utils/logger");

async function main() {
  const pkgJson = require("../package.json");
  const version = pkgJson.snapshot.version;
  const ui5LibsMeta = await getSapUI5LibsMeta(version);
  const possibleOpenUI5LibNames = await getOpenUI5PossibleLibNames();
  const openUI5Meta = pick(ui5LibsMeta, possibleOpenUI5LibNames);
  const allDependentOpenUI5Libs = expandTransitiveDeps(
    pkgJson.snapshot.libs,
    openUI5Meta
  );

  const inputSdkDir = resolve(__dirname, "..", "input-sdk");
  await downloadLibs(allDependentOpenUI5Libs, version, inputSdkDir);
  const openUI5MetaPath = resolve(inputSdkDir, "openui5-meta.json");
  log(`writing: ${openUI5MetaPath}`);
  writeJsonSync(openUI5MetaPath, pick(openUI5Meta, allDependentOpenUI5Libs));
}

main();
