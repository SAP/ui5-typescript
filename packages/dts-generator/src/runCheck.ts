import { getLogger, setLogLevel } from "@ui5/logger";
const log = getLogger("@ui5/dts-generator/runCheck");
import esMain from "es-main";

import * as path from "path";
import { promises as fsp, readdirSync, readFileSync } from "fs";
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

  // TS6 no longer auto-includes @types packages; discover which ones are declared
  // as dependencies and walk up from CWD to find where they're installed.
  const declaredTypes = new Set<string>();
  let dir = process.cwd();
  while (true) {
    try {
      const pkg = JSON.parse(
        readFileSync(path.join(dir, "package.json"), "utf8"),
      );
      for (const deps of [pkg.dependencies, pkg.devDependencies]) {
        if (deps) {
          for (const name of Object.keys(deps)) {
            if (name.startsWith("@types/")) {
              declaredTypes.add(name.slice("@types/".length));
            }
          }
        }
      }
      break;
    } catch {
      // no package.json at this level
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  const typeRoots: string[] = [];
  const types = new Set<string>();
  dir = process.cwd();
  while (true) {
    const candidate = path.join(dir, "node_modules", "@types");
    try {
      for (const entry of readdirSync(candidate, { withFileTypes: true })) {
        if (entry.isDirectory() && declaredTypes.has(entry.name)) {
          types.add(entry.name);
        }
      }
      typeRoots.push(candidate);
    } catch {
      // doesn't exist at this level
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  log.verbose(`Running a compile check for ${dtsFiles}`);
  const success = checkCompile({
    dependencyFiles: dtsFiles,
    tsOptions: {
      noEmit: true,
      noImplicitAny: true,
      strict: true,
      target: ScriptTarget.ES2015,
      module: ModuleKind.ESNext,
      moduleResolution: ModuleResolutionKind.Bundler,
      ...(typeRoots.length > 0 && { typeRoots, types: [...types] }),
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
