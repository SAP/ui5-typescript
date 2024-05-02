const { resolve } = require("path");
const { readdirSync } = require('fs');
const { emptyDirSync, readJsonSync, writeFileSync } = require("fs-extra");
const { map, keys, mapValues, uniq, flatMap } = require("lodash");
const { loadDirectives } = require("./ui5-metadata");

/**
 *
 * @param {string} inputDir
 * @param {string} outputDir
 */
async function genDtsToDir({ inputDir, outputDir }) {
  const { generateFromObjects } = await import("@ui5/dts-generator");

  function readJsonApi(libName) {
    const libJsonPath = resolve(inputDir, libName + ".designtime.api.json");
    const libJsonData = readJsonSync(libJsonPath);
    // Generating the api.jsons using to ui5-cli seems to lose the `library` property
    libJsonData.library = libName;
    return libJsonData;
  }

  function getTransitiveDeps(deps) {
    return uniq(
      flatMap(deps, (currDep) => {
        return [currDep].concat(
          getTransitiveDeps(librariesDirectDeps[currDep])
        );
      })
    );
  }

  // const outputDir = resolve(__dirname, "..", "./output-dts");
  emptyDirSync(outputDir);

  const relevantUI5MetaPath = resolve(inputDir, "openui5-meta.json");
  const relevantOpenUI5Meta = readJsonSync(relevantUI5MetaPath);

  const librariesDirectDeps = mapValues(
    relevantOpenUI5Meta,
    (_) => _.dependencies
  );

  const librariesAllDeps = mapValues(librariesDirectDeps, getTransitiveDeps);
  const allInputDirFiles = readdirSync(inputDir).map((file) => resolve(inputDir, file));
  const directiveFiles = allInputDirFiles.filter(file => file.endsWith(".dtsgenrc"));
  const directives = await loadDirectives(directiveFiles);

  // use for...of to allow for an async function
  for (const [libName, deps] of Object.entries(librariesAllDeps)) {
    console.log(`Generating type definitions for <${libName}> library.`);
    const depsJsonsData = map(deps, readJsonApi);
    const libJsonData = readJsonApi(libName);
    const libDTSResult = await generateFromObjects({
      apiObject: libJsonData,
      directives,
      dependencyApiObjects: depsJsonsData,
      generateGlobals: false
    });

    writeFileSync(
      resolve(outputDir, libDTSResult.library + ".d.ts"),
      libDTSResult.dtsText
    );
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
}

module.exports = {
  genDtsToDir,
};
