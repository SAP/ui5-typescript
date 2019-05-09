const { execSync } = require("child_process");
const { resolve } = require("path");
const { readJsonSync, emptyDirSync, copySync } = require("fs-extra");
const _ = require("lodash");
const klawSync = require("klaw-sync");
const minimist = require("minimist");

const tempDir = resolve(__dirname, "../temp");
emptyDirSync(tempDir);
const argv = minimist(process.argv.slice(2));
const pkgPath = resolve(__dirname, "../package.json");
const pkgJson = readJsonSync(pkgPath);

let versionTag = undefined;
if (argv.tag) {
  versionTag = argv.tag;
} else {
  versionTag = pkgJson.openUI5Version;
}

function execute(command, options) {
  const defaultOptions = { cwd: tempDir, stdio: "inherit" };
  const actualOptions = _.defaults(options, defaultOptions);

  console.warn(`executing: <${command}>`);
  console.warn(`CWD: <${actualOptions.cwd}>`);
  execSync(command, actualOptions);
}

execute(
  `git clone -b "${versionTag}" --single-branch --depth 1 https://github.com/SAP/openui5.git`
);

// See: https://github.com/SAP/openui5/blob/master/docs/developing.md#advanced-setup
// and: https://github.com/SAP/ui5-tooling#whats-the-thing-with-yarn
execute("yarn", { cwd: resolve(tempDir, "openui5") });

const ui5Bin = resolve(__dirname, "..", "node_modules", ".bin", "ui5");
execute(`${ui5Bin} build jsdoc --all`, {
  cwd: resolve(tempDir, "openui5", "src", "testsuite")
});

// Avoiding any platform dependent syntax ("/" vs "\")
const apisOutPath = resolve(
  tempDir,
  "openui5",
  "src",
  "testsuite",
  "dist",
  "test-resources",
  "sap"
);
const filterFn = item =>
  _.endsWith(item.path, "api.json") && /apiref/.test(item.path) === false;
const paths = klawSync(apisOutPath, { traverseAll: true, filter: filterFn });
const pathsAndLibNames = _.map(paths, currPath => {
  const libPathPart = currPath.path.replace(
    /^.+dist[\\/]test-resources[\\/](.+)[\\/]api.json$/,
    "$1"
  );
  const libName = libPathPart.replace(/[\\/]/g, ".");
  return {
    path: currPath.path,
    name: libName
  };
});

const inputDir = resolve(__dirname, "../input");
emptyDirSync(inputDir);
_.forEach(pathsAndLibNames, ({ path, name }) => {
  const src = path;
  const target = resolve(inputDir, name + ".api.json");
  console.warn(`copying: <${src}> -> <${target}>`);
  copySync(src, target);
});

emptyDirSync(tempDir);
