const { jsonToDTS } = require("@ui5/dts-generator");
const fs = require("fs-extra");
const { resolve, basename } = require("path");
const childProcess = require("child_process");
const klawSync = require("klaw-sync");
const _ = require("lodash");

const outputDir = resolve(__dirname, "../types");
fs.emptyDirSync(outputDir);

const samplesDir = resolve(__dirname, "../input");
const inputPaths = _.map(
  klawSync(samplesDir, item => _.endsWith(item.path, "api.json")),
  "path"
);

const inputJsons = _.map(inputPaths, path => {
  const fileName = basename(path);
  const libraryName = /^(.+)\.designtime\.api\.json$/.exec(fileName)[1];
  const data = fs.readJsonSync(path);
  // Generating The api.jsons using to ui5-cli seems to lose the `library` property
  data.library = libraryName;
  return data;
});

// Compile
const dtsResults = jsonToDTS(inputJsons);

_.forEach(dtsResults, dtsResult => {
  fs.writeFileSync(
    resolve(outputDir, dtsResult.library + ".d.ts"),
    dtsResult.dtsText,
    "UTF8"
  );
});

// TODO: need to create index.d.ts ?

childProcess.execSync(`npx tsc -init`, {
  cwd: outputDir,
  stdio: "inherit"
});

childProcess.execSync(`npx tsc`, {
  cwd: outputDir,
  stdio: "inherit"
});
