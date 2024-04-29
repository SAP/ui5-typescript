#!/usr/bin/env node

import { getLogger } from "@ui5/logger";
const log = getLogger("@ui5/dts-generator/index");
import esMain from "es-main";
import { generateFromPaths } from "./generate-from-paths.js";

// re-exported APIs
export {
  default as checkCompile,
  CheckCompileConfig,
  ScriptTarget,
  ModuleKind,
  ModuleResolutionKind,
} from "./checkCompile/check-compile.js";
export {
  default as checkDtslint,
  CheckDtslintConfig,
} from "./checkDtslint/check-dtslint.js";
export { ApiJSON } from "./types/api-json.js";
export {
  generateFromObjects,
  GenerateFromObjectsConfig,
  Directives,
} from "./generate-from-objects.js";
export { generate, GenerateConfig } from "./generate.js";
export {
  generateFromPaths,
  GenerateFromPathsConfig,
} from "./generate-from-paths.js";

// CLI support for generation of (optionally) both globals and modules flavor in one go
async function main() {
  const start = Date.now();
  const { args } = await import("./utils/arguments-index.js");

  const {
    apiFile,
    dependenciesApiPath,
    dependenciesDTSPathForCheckForGlobals,
    dependenciesDTSPathForCheck,
    dependenciesTypePackagesForCheck,
    directivesPath,
    targetFileForGlobals,
    targetFile,
    verbose,
    skipCheckCompile,
  } = args;

  log.info(`Transform api.json to TypeScript definitions`);
  log.info(`  own api.json file: ${apiFile}`);
  log.info(`  own directives file: ${directivesPath || "(none)"}`);
  log.info(`  dependency dir (api.json): ${dependenciesApiPath || "(none)"}`);
  log.info(
    `  dependency dir for globals (d.ts and directives): ${
      dependenciesDTSPathForCheckForGlobals || "(none)"
    }`,
  );
  log.info(
    `  dependency dir for modules (d.ts and directives): ${
      dependenciesDTSPathForCheck || "(none)"
    }`,
  );
  log.info(
    `  dependency type packages: ${
      dependenciesTypePackagesForCheck || "(none)"
    }`,
  );
  log.info(`  target file for globals: ${targetFileForGlobals}`);
  log.info(`  target file for modules: ${targetFile}`);
  log.info(`  verbose: ${verbose}`);
  log.info(`  skipCheckCompile: ${skipCheckCompile}`);
  log.info(``);

  const runCheckCompile = !skipCheckCompile;
  let success = true,
    successESM = true;

  if (targetFileForGlobals) {
    // if this required parameter for *globals* generation is given, do the globals generation
    success = await generateFromPaths({
      generateGlobals: true,
      apiFile,
      dependenciesApiPath,
      directivesPath,
      dependenciesDTSPathForCheck: dependenciesDTSPathForCheckForGlobals,
      dependenciesTypePackagesForCheck,
      targetFile: targetFileForGlobals,
      runCheckCompile,
      verbose,
    });
  }

  if (targetFile) {
    // if this required parameter for *modules* generation is given, do the modules generation
    successESM = await generateFromPaths({
      generateGlobals: false,
      apiFile,
      dependenciesApiPath,
      directivesPath,
      dependenciesDTSPathForCheck,
      dependenciesTypePackagesForCheck,
      targetFile,
      runCheckCompile,
      verbose,
    });
  }

  if (!success || !successESM) {
    throw new Error("TypeScript compilation failed, check log for errors");
  }

  const end = Date.now();
  log.info(
    `Generation completed in ${((end - start) / 1000).toFixed(1)} seconds.`,
  );
}

// if called as CLI, parse arguments and trigger generation
if (esMain(import.meta)) {
  main().then(
    () => {
      log.info(`Done.`);
    },
    (err) => {
      log.error("An error occurred", err);
      process.exit(1);
    },
  );
}
