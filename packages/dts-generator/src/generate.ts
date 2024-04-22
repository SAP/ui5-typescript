import { getLogger } from "@ui5/logger";
const log = getLogger("@ui5/dts-generator/generate");
import * as path from "path";
import ts from "typescript";
import { generateFromObjects, Directives } from "./generate-from-objects.js";
import { default as checkCompile } from "./checkCompile/check-compile.js";
import { writeFileSafe, loadJSON } from "./utils/file-utils.js";

const loadedCache = new Map();

async function loadAPIJSON(file: string) {
  log.info(`load api.json from ${path.basename(file)}`);
  let apijson = loadedCache.get(file);
  if (apijson == null) {
    apijson = await loadJSON(file);
    loadedCache.set(file, apijson);
  }
  return JSON.parse(JSON.stringify(apijson)); // return a clone
}

/**
 * @param directivesPaths - Array of path names of directives files
 * @returns
 */
async function loadDirectives(directivesPaths: string[]) {
  const directives: Directives = {
    badSymbols: [],
    badMethods: [],
    badInterfaces: [],
    typeTyposMap: {},
    namespacesToInterfaces: {},
    forwardDeclarations: {},
    fqnToIgnore: {},
    overlays: {},
  };

  function mergeDirectives(loadedDirectives: Directives) {
    Object.keys(loadedDirectives).forEach((key: keyof Directives) => {
      if (Array.isArray(directives[key])) {
        directives[key] = (directives[key] as Array<any>).concat(
          loadedDirectives[key],
        ) as any;
      } else if (directives[key]) {
        Object.assign(directives[key], loadedDirectives[key]);
      } else {
        directives[key] = loadedDirectives[key] as any;
      }
    });
  }

  await Promise.all(
    directivesPaths.map(async (file) =>
      mergeDirectives((await loadJSON(file)) as Directives),
    ),
  );

  log.verbose(`merged directives: ${JSON.stringify(directives, null, "\t")}`);
  return directives;
}

/**
 * The configuration for *.d.ts file generation from an existing api.json file.
 *
 * @public
 */
export type GenerateConfig = {
  /**
   * File path and name of the api.json file for the library for which the d.ts file should be generated.
   */
  apiFile: string;

  /**
   * An array of file paths and names of the api.json files for the libraries on which the currently to-be-built library depends.
   */
  dependencyApiFiles: string[];

  /**
   * An array of file paths and names of the .dtsgenrc files for the libraries (current and dependencies).
   */
  directiveFiles: string[];

  /**
   * File path and name of the target d.ts file to write.
   */
  targetFile: string;

  /**
   * An array of file paths and names of the d.ts files of the libraries on which the currently to-be-built library depends.
   */
  dependencyDTSFilesForCheck: string[];

  /**
   * Whether types for deprecated globals (instead of ES modules) should be generated.
   */
  generateGlobals?: boolean;

  /**
   * Whether a test compilation should be executed.
   */
  runCheckCompile?: boolean;

  /**
   * Path and name of a file into which the test compilation errors should be written.
   */
  errorOutputFile?: string;
};

/**
 * Generate the *.d.ts file content for a UI5 library.
 *
 * @returns a Promise which resolves with true if the generation and the optional test (enabled with the runCheckCompile parameter) was successful
 *
 * @public
 */
export async function generate({
  apiFile,
  dependencyApiFiles,
  directiveFiles,
  targetFile,
  dependencyDTSFilesForCheck,
  generateGlobals,
  runCheckCompile,
  errorOutputFile,
}: GenerateConfig): Promise<boolean> {
  const start = Date.now();
  const loadedDirectives = await loadDirectives(directiveFiles);

  const ownApiJson = await loadAPIJSON(apiFile);
  const dependenciesApiJsons = await Promise.all(
    dependencyApiFiles.map((apiFile) => loadAPIJSON(apiFile)),
  );

  const dtsResult = await generateFromObjects({
    apiObject: ownApiJson,
    directives: loadedDirectives,
    dependencyApiObjects: dependenciesApiJsons,
    generateGlobals,
  });

  await writeFileSafe(targetFile, dtsResult.dtsText);

  if (runCheckCompile) {
    log.info(
      `running a test compile for ${[
        ...dependencyDTSFilesForCheck,
        targetFile,
      ]}`,
    );
    const success = checkCompile({
      mainFile: targetFile,
      dependencyFiles: dependencyDTSFilesForCheck,
      tsOptions: {
        noEmit: true,
        noImplicitAny: true,
        strict: true,
        target: ts.ScriptTarget.ES2015,
        module: ts.ModuleKind.ES2015,
      },
      errorOutputFile: errorOutputFile,
    });
    const end = Date.now();
    log.info(
      `Generation and check of ${path.basename(targetFile)} completed in ${(
        (end - start) /
        1000
      ).toFixed(1)} seconds.`,
    );
    return success;
  } else {
    const end = Date.now();
    log.info(
      `Generation of ${path.basename(targetFile)} (using ${
        generateGlobals ? "globals" : "modules"
      }) completed in ${((end - start) / 1000).toFixed(1)} seconds.`,
    );
    return true;
  }
}
