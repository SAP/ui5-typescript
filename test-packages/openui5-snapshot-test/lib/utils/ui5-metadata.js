const { resolve } = require("path");
const { zipObject, map, union, flatMap } = require("lodash");
const { emptyDir } = require("fs-extra");
const fetch = require("node-fetch");

const { writeUrlToFile } = require("./write-url-to-file");
const { log } = require("./logger");

/**
 * @param {string} version
 * @returns {Promise<Record<string, UI5Lib>>}
 */
async function getSapUI5LibsMeta(version) {
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
 * @returns {Promise<string[]>}
 */
async function getOpenUI5PossibleLibNames() {
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
 * @param {string[]} libs
 * @param {string} version
 * @param {string} outDir
 * @returns {Promise<void>}
 */
async function downloadLibs(libs, version, outDir) {
  emptyDir(outDir);

  // CDN libraries (example URL):
  // https://sapui5-sapui5.dispatcher.us1.hana.ondemand.com/test-resources/sap/m/designtime/api.json
  // Older versions:
  // https://sapui5.hana.ondemand.com/1.71.14/test-resources/sap/m/designtime/api.json
  const baseUrl = `https://openui5.hana.ondemand.com/${version}/test-resources/`;
  const nameToFile = zipObject(
    libs,
    map(libs, (_) => `${baseUrl}${_.replace(/\./g, "/")}/designtime/api.json`)
  );
  // Write files in parallel
  await Promise.all(
    map(nameToFile, (url, name) => {
      return writeUrlToFile(
        url,
        resolve(outDir, `${name}.designtime.api.json`)
      );
    })
  );
}

/**
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

module.exports = {
  getSapUI5LibsMeta,
  getOpenUI5PossibleLibNames,
  downloadLibs,
  expandTransitiveDeps,
};
