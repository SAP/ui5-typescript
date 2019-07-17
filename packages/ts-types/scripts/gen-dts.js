const { jsonToDTS } = require("@ui5/dts-generator");
const { emptyDirSync, readJsonSync, writeFileSync } = require("fs-extra");
const { resolve } = require("path");
const _ = require("lodash");
const disclaimer = require("./disclaimer");

// Currently using same shared directives for all libraries
const { badInterfaces, badMethods } = require("./directives/excluded-elements");
const { typeTyposMap } = require("./directives/typos");
const {
  namespacesToInterfaces
} = require("./directives/namespaces-to-interfaces");
const { fqnToIgnore } = require("./directives/ts-ignore");

const directives = {
  badMethods: badMethods,
  badInterfaces: badInterfaces,
  typeTyposMap: typeTyposMap,
  namespacesToInterfaces: namespacesToInterfaces,
  fqnToIgnore
};

const outputDir = resolve(__dirname, "../types");
emptyDirSync(outputDir);

function getTransitiveDeps(deps) {
  return _.uniq(
    _.flatMap(deps, currDep => {
      return [currDep].concat(getTransitiveDeps(librariesDirectDeps[currDep]));
    })
  );
}

const librariesDirectDeps = {
  "sap.f": ["sap.ui.core", "sap.m"],
  "sap.m": ["sap.ui.core", "sap.ui.unified"],
  "sap.tnt": ["sap.ui.core", "sap.m"],
  "sap.ui.codeeditor": ["sap.ui.core"],
  "sap.ui.commons": ["sap.ui.core", "sap.ui.layout", "sap.ui.unified"],
  "sap.ui.core": [],
  "sap.ui.demokit.demoapps": ["sap.ui.core", "sap.ui.commons"],
  "sap.ui.documentation.sdk": ["sap.ui.core", "sap.ui.layout", "sap.m"],
  "sap.ui.dt": ["sap.ui.core"],
  "sap.ui.fl": ["sap.ui.core", "sap.m"],
  "sap.ui.layout": ["sap.ui.core"],
  "sap.ui.suite": ["sap.ui.core"],
  "sap.ui.support": [
    "sap.m",
    "sap.ui.codeeditor",
    "sap.ui.core",
    "sap.ui.fl",
    "sap.ui.layout"
  ],
  "sap.ui.unified": ["sap.ui.core"],
  "sap.ui.table": ["sap.ui.core", "sap.ui.unified"],
  "sap.ui.ux3": ["sap.ui.core", "sap.ui.commons"],
  "sap.uxap": ["sap.ui.core", "sap.ui.layout", "sap.m"]
};

const librariesAllDeps = _.mapValues(librariesDirectDeps, getTransitiveDeps);

_.forEach(librariesAllDeps, (deps, libName) => {
  console.log(`Compiling <${libName}> library.`);
  const depsJsonsData = _.map(deps, readJsonApi);
  const libJsonData = readJsonApi(libName);
  const libDTSResult = jsonToDTS(libJsonData, {
    directives,
    dependencies: depsJsonsData
  });

  writeFileSync(
    resolve(outputDir, libDTSResult.library + ".d.ts"),
    disclaimer.message + libDTSResult.dtsText,
    "UTF8"
  );
});

function readJsonApi(libName) {
  const samplesDir = resolve(__dirname, "../input");
  const libJsonPath = resolve(samplesDir, libName + ".designtime.api.json");
  const libJsonData = readJsonSync(libJsonPath);
  // Generating The api.jsons using to ui5-cli seems to lose the `library` property
  libJsonData.library = libName;
  return libJsonData;
}

const index = disclaimer.message;
const imports = _.map(
  _.keys(librariesDirectDeps),
  depLibName => `/// <reference path="./${depLibName}.d.ts" />`
);

writeFileSync(
  resolve(outputDir, "index.d.ts"),
  disclaimer.message + imports.join("\n") + "\n",
  "UTF8"
);
