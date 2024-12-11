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
    deprecatedEnumAliases: {},
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
   *
   * This is meant for other libraries which belong to the same project and are built in the same build run, as opposed to external
   * libraries. E.g. when the OpenUI5 types are built, then the core library is built first and its resulting d.ts file is a dependency
   * for building the types of other libraries like sap.m.
   *
   * Only needed for the check.
   */
  dependencyDTSFilesForCheck: string[];

  /**
   * Array of package names of the libraries on which the currently to-be-built types depends.
   *
   * This is meant for entire npm packages developed separately (often by others), not sibling libraries built in the same batch.
   * E.g. when a custom UI5 control library is built by an application team, then it usually depends on the OpenUI5 types because
   * those define the base classes like Control.
   * Setting this has the effect that for the TS compilation check, the `types` field of the package.json file will be set to the
   * respective package names and any other type packages are no longer considered.
   *
   * Only needed for the check.
   */
  dependenciesTypePackagesForCheck?: string[];

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
  dependenciesTypePackagesForCheck,
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

    // set up the tsconfig for the test compile
    const tsOptions: ts.BuildOptions = {
      noEmit: true,
      noImplicitAny: true,
      strict: true,
      target: ts.ScriptTarget.ES2015,
      module: ts.ModuleKind.ES2015,
      lib: ["lib.es2015.d.ts", "lib.dom.d.ts"],
    };

    // if type dependencies are set, use them
    if (
      dependenciesTypePackagesForCheck &&
      dependenciesTypePackagesForCheck.length > 0
    ) {
      tsOptions.types = dependenciesTypePackagesForCheck;
    }

    const success = checkCompile({
      mainFile: targetFile,
      dependencyFiles: dependencyDTSFilesForCheck,
      tsOptions,
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
