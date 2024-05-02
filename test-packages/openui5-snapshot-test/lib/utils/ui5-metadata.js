const { resolve } = require("path");
const { readFile } = require("fs").promises;
const { zipObject, map, union, flatMap } = require("lodash");
const { emptyDir } = require("fs-extra");

const { writeUrlToFile } = require("./write-url-to-file");
const { log } = require("./logger");

/* 
 * This file contains functions to get metadata of SAPUI5 libraries and download them:
 * - getSAPUI5LibsMeta fetches the metadata of SAPUI5 libraries for a specific version from the @sapui5/distribution-metadata package
 *   which is meant for tooling consumption via unpkg.com.
 * - getOpenUI5PossibleLibNames fetches the names of all OpenUI5 libraries from the npm registry by assuming that all OpenUI5 libraries 
 *   are scoped with @openui5 and everything scoped with @openui5 is an OpenUI5 library. It does not try to look for a specific version because
 *   getting a superset of all library names is fine.
 * - expandTransitiveDeps finds the transitive dependencies of the given libraries and returns the list of all libraries including the transitive dependencies.
 * - downloadApiJsonFiles downloads the api.json files of the specified libraries from the openui5.org CDN.
 * - downloadDtsgenrcFiles downloads the .dtsgenrc files of the specified libraries from the openui5 GitHub repository - if they exist.
 * - loadDirectives loads directives from the specified .dtsgenrc files and merges them into a single object.
 */

/**
 * Fetches the metadata of all SAPUI5 libraries for a specific version from the @sapui5/distribution-metadata package on npm.
 * For accessing the etadata file directly, it uses the unpkg.com CDN.
 * @param {string} version
 * @returns {Promise<Record<string, UI5Lib>>}
 */
async function getSAPUI5LibsMeta(version) {
  const fetch = (await import("node-fetch")).default;
  const sapUI5Response = await fetch(
    `https://unpkg.com/@sapui5/distribution-metadata@${version}/metadata.json`
  );
  if (!sapUI5Response.ok) {
    log(`error fetching sapui5 metadata`);
    return [];
  }
  const sapUI5MetadataText = await sapUI5Response.text();
  const sapUI5Metadata = JSON.parse(sapUI5MetadataText);
  return sapUI5Metadata.libraries;
}

/**
 * Gets the names of all possible OpenUI5 libraries from npmjs by assuming that all OpenUI5 libraries are scoped with @openui5.
 * @returns {Promise<string[]>}
 */
async function getOpenUI5PossibleLibNames() {
  const fetch = (await import("node-fetch")).default;
  const openUI5OrgResponse = await fetch(
    `https://registry.npmjs.com/-/v1/search?text=scope:openui5&size=100`
  );
  if (!openUI5OrgResponse.ok) {
    log(`error fetching sapui5 metadata`);
    return [];
  }
  const openUI5OrgSearchText = await openUI5OrgResponse.text();
  const openUI5OrgSearch = JSON.parse(openUI5OrgSearchText);
  const possibleOpenUI5LibNames = map(openUI5OrgSearch.objects, (_) =>
    _.package.name.substr("@openui5/".length)
  );
  return possibleOpenUI5LibNames;
}

/**
 * Finds the transitive dependencies of the given libraries (by using the information in the given metadata) and returns
 * the list of all libraries including the transitive dependencies.
 *  
 * @param {string[]} libs
 * @param {Object} libsMetadata
 * @returns {string[]}
 */
function expandTransitiveDeps(libs, libsMetadata) {
  let allDeps = libs;
  let addedLastIteration = libs.length;
  do {
    const nextLayerDeps = flatMap(allDeps, (_) => libsMetadata[_].dependencies);
    const nextLayerAllDeps = union(allDeps, nextLayerDeps);
    addedLastIteration = nextLayerAllDeps - allDeps.length;
    allDeps = nextLayerAllDeps;
  } while (addedLastIteration > 0);

  return allDeps;
}

/**
 * Downloads the api.json files of the specified libraries from the openui5.org CDN.
 * 
 * @param {string[]} libs
 * @param {string} version
 * @param {string} outDir
 * @returns {Promise<void>}
 */
async function downloadApiJsonFiles(libs, version, outDir) {
  await emptyDir(outDir);

  // CDN libraries (example URL):
  // https://sdk.openui5.org/${version}/test-resources/sap/m/designtime/api.json
  const baseUrl = `https://sdk.openui5.org/${version}/test-resources/`;
  const libraryNameToApiJsonFileUrl = zipObject(
    libs,
    map(libs, (_) => `${baseUrl}${_.replace(/\./g, "/")}/designtime/api.json`)
  );
  // Write files in parallel
  await Promise.all(
    map(libraryNameToApiJsonFileUrl, (url, name) => {
      return writeUrlToFile(
        url,
        resolve(outDir, `${name}.designtime.api.json`)
      );
    })
  );
}

/**
 * Downloads the .dtsgenrc files of the specified libraries from the openui5 GitHub repository.
 * 
 * @param {string[]} libs
 * @param {string} version
 * @param {string} outDir
 * @param {boolean} [prepareDir=false] whether to create/empty the output directory before downloading
 * @returns {Promise<void>}
 */
async function downloadDtsgenrcFiles(libs, version, outDir, prepareDir = false) {
  if (prepareDir) {
    await emptyDir(outDir);
  }

  // GitHub libraries (example URL):
  // https://raw.githubusercontent.com/SAP/openui5/${version}/src/sap.m/.dtsgenrc
  const baseUrl = `https://raw.githubusercontent.com/SAP/openui5/${version}/src/`;
  const libraryNameToDtsgenrcFileUrl = zipObject(
    libs,
    map(libs, (_) => `${baseUrl}${_}/.dtsgenrc`)
  );
  // Write files in parallel
  await Promise.all(
    map(libraryNameToDtsgenrcFileUrl, (url, name) => {
      return writeUrlToFile(
        url,
        resolve(outDir, `${name}.dtsgenrc`)
      );
    })
  );
}

/**
 * Loads the content of a JSON file; if the file is a .dtsgenrc file, it removes comments before parsing.
 * @param file - Path to JSON file
 * @returns {Promise<any>}
 */
async function loadJSON(file) {
  let content = await readFile(file, "utf8");
  if (file.endsWith(".dtsgenrc")) {
      const stripJsonComments = (await import("strip-json-comments")).default;
      // allow comments in .dtsgenrc files
      content = stripJsonComments(String(content));
  }
  return JSON.parse(content);
}

/**
 * Loads directives from the specified .dtsgenrc files and merges them into a single object.
 * @param directivesFiles - Array of full path + file names of directives files
 * @returns
 */
async function loadDirectives(directivesFiles) {
  const directives = {
      badSymbols: [],
      badMethods: [],
      badInterfaces: [],
      typeTyposMap: {},
      namespacesToInterfaces: {},
      forwardDeclarations: {},
      fqnToIgnore: {},
      overlays: {},
  };
  function mergeDirectives(loadedDirectives) {
      Object.keys(loadedDirectives).forEach((key) => {
          if (Array.isArray(directives[key])) {
              directives[key] = directives[key].concat(loadedDirectives[key]);
          }
          else if (directives[key]) {
              Object.assign(directives[key], loadedDirectives[key]);
          }
          else {
              directives[key] = loadedDirectives[key];
          }
      });
  }
  await Promise.all(directivesFiles.map(async (file) => mergeDirectives((await loadJSON(file)))));
  //log(`merged directives: ${JSON.stringify(directives, null, "\t")}`);
  return directives;
}

module.exports = {
  getSAPUI5LibsMeta,
  getOpenUI5PossibleLibNames,
  expandTransitiveDeps,
  downloadApiJsonFiles,
  downloadDtsgenrcFiles,
  loadDirectives,
};
