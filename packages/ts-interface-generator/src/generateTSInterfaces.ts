#!/usr/bin/env node
import fs = require("fs");
import path = require("path");
import ts = require("typescript");
import yargs = require("yargs");
import { generateInterfaces } from "./interfaceGenerationHelper";
import { initialize } from "./typeScriptEnvironment";
const pkg = require("../package.json");

// configure yargs with the cli options as launcher
const version = `${pkg.version} (from ${__filename})`;
yargs.version(version);
const args = yargs.argv;
main(args);

// main entry point
function main(args: any) {
  let watchMode = args.watch;

  let tsconfig = args.config;
  if (
    !tsconfig ||
    !fs.existsSync(tsconfig) ||
    fs.lstatSync(tsconfig).isDirectory()
  ) {
    console.log(
      "No tsconfig file was given using the '--config' parameter, searching for it..."
    );
    tsconfig = ts.findConfigFile("./", ts.sys.fileExists, "tsconfig.json");
    if (!tsconfig) {
      throw new Error(
        "Could not find a valid 'tsconfig.json'. Please specify using the '--config' parameter."
      );
    }
  }
  console.log("Using the following TypeScript configuration file: ", tsconfig);

  initialize(tsconfig, onTSProgramUpdate, { watchMode });
}

function onTSProgramUpdate(
  program: ts.Program,
  typeChecker: ts.TypeChecker,
  changedFiles: string[], // is an empty array in non-watch case; is at least one file in watch case
  allKnownGlobals: {
    [key: string]: { moduleName: string; exportName?: string };
  }
) {
  // loop all files and generate interfaces where needed

  // TODO: can we use the knowledge about the changed files to limit the scope here?
  //       Problem is that also a change in a different file could influence the generation of an unchanged file. E.g. when an update of the
  //       UI5 type definitions changes the base class of sap.m.Button to something where API methods are not generated, then
  //       the next generation run would no longer create a *.generated.tsinterface.ts file for Controls deriving from Button (ok, extreme example...)
  program.getSourceFiles().forEach((sourceFile: ts.SourceFile) => {
    if (
      sourceFile.fileName.indexOf("@types") === -1 &&
      sourceFile.fileName.indexOf("node_modules/") === -1
    ) {
      // TODO: compare with fileName or just use those
      generateInterfaces(sourceFile, typeChecker, allKnownGlobals);
    }
  });
}
