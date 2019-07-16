const { jsonToDTS } = require("@ui5/dts-generator");
const { emptyDirSync, readJsonSync, writeFileSync } = require("fs-extra");
const { resolve, basename } = require("path");
const klawSync = require("klaw-sync");
const _ = require("lodash");
const disclaimer = require("./disclaimer");
const { badInterfaces, badMethods } = require("./directives/excluded-elements");

const outputDir = resolve(__dirname, "../types");
emptyDirSync(outputDir);

const samplesDir = resolve(__dirname, "../input");
const inputPaths = _.map(
  klawSync(samplesDir, item => _.endsWith(item.path, "api.json")),
  "path"
);

const inputJsons = _.map(inputPaths, path => {
  const fileName = basename(path);
  const libraryName = /^(.+)\.designtime\.api\.json$/.exec(fileName)[1];
  const data = readJsonSync(path);
  // Generating The api.jsons using to ui5-cli seems to lose the `library` property
  data.library = libraryName;
  return data;
});

// Compile
const directives = {
  badMethods: badMethods,
  badInterfaces: badInterfaces
};
const dtsResults = jsonToDTS(inputJsons, {
  directives
});

_.forEach(dtsResults, dtsResult => {
  writeFileSync(
    resolve(outputDir, dtsResult.library + ".d.ts"),
    disclaimer.message + dtsResult.dtsText,
    "UTF8"
  );
});
