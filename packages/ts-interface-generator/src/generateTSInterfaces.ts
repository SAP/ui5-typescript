#!/usr/bin/env node
import fs from "fs";
import path from "path";
import ts from "typescript";
import yargs from "yargs";
import { generateInterfaces } from "./interfaceGenerationHelper";
import { initialize } from "./typeScriptEnvironment";
import { addSourceExports } from "./addSourceExports";
// @ts-ignore as the "rootDir" in tsconfig.json is set to "src", this file is outside the source tree. But that's fine and we don't want to make "." the root because this would include more files and cause build result path problems (files going to "dist/src").
import pkg from "../package.json";
import log from "loglevel";
log.setDefaultLevel("info");

interface Args {
  watch?: boolean;
  config?: string;
  loglevel?: "debug" | "info" | "warn" | "error";
}

// configure yargs with the cli options as launcher
const version = `${pkg.version} (from ${__filename})`;
yargs.version(version);
yargs
  .option({
    config: {
      alias: "c",
      type: "string",
      description: "Path to the configuration file to use",
    },
    watch: {
      alias: "w",
      type: "boolean",
      description: "Run in watch mode",
    },
    loglevel: {
      choices: ["error", "warn", "info", "debug", "trace"],
      description: "Set the console logging verbosity",
    },
  })
  .default("watch", false)
  .default("loglevel", "info");

const appArgs = yargs.argv as Args;
main(appArgs);

// main entry point
function main(args: Args) {
  const watchMode = args.watch;

  const level = args.loglevel;
  if (
    level === "error" ||
    level === "warn" ||
    level === "info" ||
    level === "debug" ||
    level === "trace"
  ) {
    log.setDefaultLevel(level);
    log.info(`Log level set to: ${level}`);
  }

  let tsconfig = args.config;
  let logFound = "";
  if (
    !tsconfig ||
    !fs.existsSync(tsconfig) ||
    fs.lstatSync(tsconfig).isDirectory()
  ) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    tsconfig = ts.findConfigFile("./", ts.sys.fileExists, "tsconfig.json");
    if (!tsconfig) {
      throw new Error(
        "Could not find a valid 'tsconfig.json'. Please specify it using the '--config' parameter."
      );
    } else {
      logFound = " (automatically found, as none was given)";
    }
  }
  log.info(
    `Using the following TypeScript configuration file${logFound}: ${tsconfig}`
  );

  initialize(tsconfig, onTSProgramUpdate, { watchMode });
}

/**
 * Whenever the code changes, this is called, in oder to re-generate the interfaces
 *
 *
 * TODO: can we use the knowledge about the changed files to limit the scope here?
 *       A Problem is that also a change in a different file could influence the generation of an unchanged file. E.g. when an update of the
 *       UI5 type definitions changes the base class of sap.m.Button to something where API methods are not generated, then
 *       the next generation run would no longer create a *.generated.tsinterface.ts file for Controls deriving from Button (ok, extreme example...)
 * @param program
 * @param typeChecker
 * @param changedFiles
 * @param allKnownGlobals
 */
function onTSProgramUpdate(
  program: ts.Program,
  typeChecker: ts.TypeChecker,
  changedFiles: string[], // is an empty array in non-watch case; is at least one file in watch case - but overall not reliable!
  allKnownGlobals: GlobalToModuleMapping
) {
  // this block collects all path mappings from the compiler configuration, so we can find out the logical name for a concrete file path
  const paths = program.getCompilerOptions().paths;
  const allPathMappings: { target: string; sourcePattern: string }[] = []; // contains target/sourcePattern couples; built as array, not a map, to make sure duplicate targets for different patterns work as well
  if (paths) {
    for (let sourcePattern in paths) {
      // e.g.  'com/myorg/myUI5Library/*': [ 'src-ts/com/myorg/myUI5Library\*' ]
      const targets = paths[sourcePattern];
      sourcePattern = path.normalize(sourcePattern); // e.g. 'com\myorg\myUI5Library\*'
      if (sourcePattern === "*") {
        sourcePattern = ".";
      } else if (sourcePattern.endsWith("*")) {
        sourcePattern = sourcePattern.slice(0, -1);
      }
      for (let i = 0; i < targets.length; i++) {
        let target = path.normalize(targets[i]); // e.g. 'src-ts\com\myorg\myUI5Library\*'
        if (target === "*") {
          target = ".";
        } else if (target.endsWith("*")) {
          target = target.slice(0, -1);
        }
        allPathMappings.push({ target, sourcePattern });
      }
    }
  }

  const allRelevantSourceFiles: ts.SourceFile[] = [];
  const allKnownLocalExports: GlobalToModuleMapping = {};

  // path mappings are relative to the "baseUrl", so find out what it is
  let basePath = path.normalize(program.getCurrentDirectory()); // e.g. 'c:\SAPDevelop\git\ui5-typescript-control-library\'
  const options = program.getCompilerOptions();
  if (options.baseUrl) {
    basePath = path.normalize(options.baseUrl);
  }

  // loop all files, filter for relevant ones, and extract knowledge about all their module exports
  program
    .getSourceFiles()
    .filter((sourceFile) => {
      return (
        sourceFile.fileName.indexOf("@types") === -1 &&
        sourceFile.fileName.indexOf("node_modules/") === -1
      ); // do not generate interfaces for dependencies
    })
    .forEach((sourceFile: ts.SourceFile) => {
      allRelevantSourceFiles.push(sourceFile);
      addSourceExports(
        sourceFile,
        basePath,
        typeChecker,
        allPathMappings,
        allKnownLocalExports
      ); // extract all local exports
    });

  // now actually generate the interface files for all source files
  allRelevantSourceFiles.forEach((sourceFile) => {
    generateInterfaces(
      sourceFile,
      typeChecker,
      Object.assign(allKnownLocalExports, allKnownGlobals)
    ); // don't modify the ambient globals here, as they might have a different lifecycle and we don't want to keep adding the same properties again
  });
}
