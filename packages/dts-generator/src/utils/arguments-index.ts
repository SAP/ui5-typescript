import { ArgumentParser } from "argparse";

export const args = (() => {
  const parser = new ArgumentParser({
    description:
      "@ui5/dts-generator: Generate the *.d.ts type definition file for a UI5 library.",
  });

  parser.add_argument("apiFile", {
    help: "File path and name of the api.json file for the library for which the d.ts file should be generated.",
  });
  parser.add_argument("--dependenciesApiPath", {
    help: "Directory where the api.json files are located for the libraries on which the currently to-be-built library depends.",
  });
  parser.add_argument("--dependenciesDTSPathForCheck", {
    help:
      "Directory where the d.ts files are located of the libraries on which the currently to-be-built library depends. Typically used for" +
      " other UI5 libraries for which types are being generated in the same build run. Only needed for the check.",
  });
  parser.add_argument("--dependenciesTypePackagesForCheck", {
    help:
      "[DEPRECATED: @types packages are now auto-discovered from the nearest package.json] " +
      "Comma-separated list of additional @types package names to include in the TS compilation check." +
      " Typically no longer needed — declared @types/* dependencies are discovered automatically.",
  });
  parser.add_argument("--directivesPath", {
    help: "Directory where the .dtsgenrc files for the libraries (current and dependencies) are located.",
  });
  parser.add_argument("--targetFile", {
    help: "File path and name of the target d.ts file to write.",
    required: true,
  });
  parser.add_argument("--verbose", {
    help: "Set when the console output should be verbose.",
    action: "store_true",
  });
  parser.add_argument("--skipCheckCompile", {
    help: "Set when the test compilation should be skipped.",
    action: "store_true",
  });
  parser.add_argument("--dependenciesDTSPathForCheckForGlobals", {
    help: "Directory where the d.ts files (using globals, not ES modules) are located of the libraries on which the currently to-be-built library depends. Only needed when globals are generated and the check is run.",
  });
  parser.add_argument("--targetFileForGlobals", {
    help: "File path and name of the target d.ts file to write for the type definitions with globals (not ES modules). Only needed when globals should be generated.",
  });

  const args = parser.parse_args();
  return args;
})();
