import { getLogger } from "@ui5/logger";
const log = getLogger("@ui5/dts-generator/runDTSGenerator");
import * as fs from "fs";
import * as path from "path";
const readdir = fs.promises.readdir;
import { generate } from "./generate.js";

async function findFiles(dir, extension) {
  if (dir == null) {
    return [];
  }
  const files = await readdir(dir).catch((err) => {
    if (err.code === "ENOENT") {
      return [];
    }
    log.error(`failed to read content of directory ${dir}:`, err);
    throw err;
  });

  return files
    .filter((file) => file.endsWith(extension))
    .map((file) => path.join(dir, file));
}

const existingFile = (file) => (fs.existsSync(file) ? file : null);

/**
 * The configuration for a generateFromPaths call.
 * @public
 */
export interface GenerateFromPathsConfig {
  /**
   * File path and name of the api.json file for the library for which the d.ts file should be generated.
   */
  apiFile: string;

  /**
   * Directory where the api.json files are located for the libraries on which the currently to-be-built library depends.
   */
  dependenciesApiPath: string;

  /**
   * Directory where the .dtsgenrc files for the libraries (current and dependencies) are located.
   */
  directivesPath: string;

  /**
   * Directory where the d.ts files are located of the libraries on which the currently to-be-built library depends. Only needed for the check.
   */
  dependenciesDTSPathForCheck: string;

  /**
   * File path and name of the target d.ts file to write.
   */
  targetFile: string;

  /**
   * Whether a test compilation should be executed.
   */
  runCheckCompile?: boolean;

  /**
   * Whether *.d.ts files with globals should be generated instead of ES modules.
   */
  generateGlobals?: boolean;

  /**
   * Whether the console output should be verbose.
   */
  verbose?: boolean;
}

/**
 * Generate the *.d.ts file for a UI5 library from the given apiFile and directory paths of other needed resources.
 *
 * @param config - The configuration for a generateFromPaths call.
 * @returns
 *
 * @public
 */
export async function generateFromPaths(config: GenerateFromPathsConfig) {
  const success = await generate({
    generateGlobals: config.generateGlobals,
    apiFile: config.apiFile,
    dependencyApiFiles: [
      ...(await findFiles(config.dependenciesApiPath, ".json")),
    ],
    directiveFiles: [
      existingFile(config.directivesPath),
      ...(await findFiles(config.dependenciesDTSPathForCheck, ".dtsgenrc")),
    ].filter(Boolean),
    targetFile: config.targetFile,
    dependencyDTSFilesForCheck: await findFiles(
      config.dependenciesDTSPathForCheck,
      "-d.ts",
    ),
    runCheckCompile: config.runCheckCompile,
  });
  return success;
}
