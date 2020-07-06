const { resolve } = require("path");
const { emptyDirSync, readJsonSync, writeFileSync } = require("fs-extra");
const { map, forEach, keys, mapValues, uniq, flatMap } = require("lodash");
const { jsonToDTS } = require("@ui5/dts-generator");
const {
  badInterfaces,
  badMethods,
  badSymbols,
} = require("./directives/excluded-elements");
const { typeTyposMap } = require("./directives/typos");
const {
  namespacesToInterfaces,
} = require("./directives/namespaces-to-interfaces");
const { fqnToIgnore } = require("./directives/ts-ignore");

function getTransitiveDeps(deps) {
  return uniq(
    flatMap(deps, (currDep) => {
      return [currDep].concat(getTransitiveDeps(librariesDirectDeps[currDep]));
    })
  );
}

const directives = {
  badSymbols: badSymbols,
  badMethods: badMethods,
  badInterfaces: badInterfaces,
  typeTyposMap: typeTyposMap,
  namespacesToInterfaces: namespacesToInterfaces,
  fqnToIgnore,
};

const outputDir = resolve(__dirname, "..", "./output-dts");
emptyDirSync(outputDir);

const relevantUI5MetaPath = resolve(
  __dirname,
  "..",
  "input-sdk",
  "openui5-meta.json"
);
const relevantOpenUI5Meta = readJsonSync(relevantUI5MetaPath);

const librariesDirectDeps = mapValues(
  relevantOpenUI5Meta,
  (_) => _.dependencies
);

const librariesAllDeps = mapValues(librariesDirectDeps, getTransitiveDeps);
forEach(librariesAllDeps, (deps, libName) => {
  console.log(`Compiling <${libName}> library.`);
  const depsJsonsData = map(deps, readJsonApi);
  const libJsonData = readJsonApi(libName);
  const libDTSResult = jsonToDTS(libJsonData, {
    directives,
    dependencies: depsJsonsData,
  });

  writeFileSync(
    resolve(outputDir, libDTSResult.library + ".d.ts"),
    libDTSResult.dtsText
  );
});

function readJsonApi(libName) {
  const samplesDir = resolve(__dirname, "..", "./input-sdk");
  const libJsonPath = resolve(samplesDir, libName + ".designtime.api.json");
  const libJsonData = readJsonSync(libJsonPath);
  // Generating The api.jsons using to ui5-cli seems to lose the `library` property
  libJsonData.library = libName;
  return libJsonData;
}

const imports = map(
  keys(librariesDirectDeps),
  (depLibName) => `/// <reference path="./${depLibName}.d.ts" />`
);

writeFileSync(
  resolve(outputDir, "index.d.ts"),
  imports.join("\n") + "\n",
  "UTF8"
);
