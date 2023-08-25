#!/usr/bin/env node

// @ts-ignore as the "rootDir" in tsconfig.json is set to "src", this file is outside the source tree. But that's fine and we don't want to make "." the root because this would include more files and cause build result path problems (files going to "dist/src").
import pkgJson from "../package.json";
import { Args, main } from "./generateTSInterfacesAPI";

import yargs from "yargs";

// configure yargs with the cli options as launcher
const version = `${pkgJson.version} (from ${__filename})`;
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
    jsdoc: {
      choices: ["none", "minimal", "verbose"],
      default: "verbose",
      description:
        "Determines the amount of JSDoc that is generated for the methods; 'minimal' only adds JSDoc present in the source class, 'verbose' also the standard boilerplate texts.",
    },
  })
  .default("watch", false)
  .default("loglevel", "info");

const appArgs = yargs.argv as Args;
main(appArgs);
