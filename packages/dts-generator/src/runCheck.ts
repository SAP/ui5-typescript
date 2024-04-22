import { getLogger, setLogLevel } from "@ui5/logger";
const log = getLogger("@ui5/dts-generator/runCheck");
import esMain from "es-main";

import * as path from "path";
import { promises as fsp } from "fs";
const readdir = fsp.readdir;

import {
  checkCompile,
  checkDtslint as checkDtslintApi,
  ScriptTarget,
  ModuleKind,
  ModuleResolutionKind,
} from "./index.js";

async function findFiles(dir: string, extension: string) {
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

// CLI support for checking types (both, checkCompile and checkDtslint, if requested)
async function main() {
  const start = Date.now();
  const { args } = await import("./utils/arguments-runCheck.js");

  const { dtsDir, checkDtslint, verbose } = args;

  setLogLevel(verbose ? "verbose" : "info");

  log.info(`Run a check on TypeScript definitions`);
  log.info(`  d.ts dir: ${dtsDir}`);
  log.info(`  verbose: ${verbose}`);
  log.info(`  checkDtslint: ${checkDtslint}`);
  log.info(``);

  const dtsFiles = await findFiles(dtsDir, "d.ts");

  log.verbose(`Running a compile check for ${dtsFiles}`);
  const success = checkCompile({
    dependencyFiles: dtsFiles,
    tsOptions: {
      noEmit: true,
      noImplicitAny: true,
      strict: true,
      target: ScriptTarget.ES2015,
      module: ModuleKind.ES2015,
      moduleResolution: ModuleResolutionKind.NodeJs,
    },
  });

  if (!success) {
    throw new Error("TypeScript compilation failed, check log for errors");
  }

  if (checkDtslint) {
    log.verbose(`Running a dtslint check for ${dtsFiles}`);
    checkDtslintApi(dtsDir);
  }

  const end = Date.now();
  log.info(`Check completed in ${((end - start) / 1000).toFixed(1)} seconds.`);
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
