[![npm (scoped)](https://img.shields.io/npm/v/@ui5/dts-generator.svg)](https://www.npmjs.com/package/@ui5/dts-generator)

# @ui5/dts-Generator

This npm package is used for generating (and checking) TypeScript type definitions (`*.d.ts` files) for SAPUI5/OpenUI5 libraries implemented in JavaScript, using their `api.json` files as input.

These `api.json` files for a UI5 library can be generated with the command `ui5 build jsdoc`, executed within the root folder of the respective library. This works for your own custom libraries as well as for the original UI5 sources.
This command creates the `api.json` file at `dist/test-resources/<library_namespace_and_name>/designtime/api.json` (do not confuse this file with the `api.json` file one folder below inside `apiref` - that one is meant for the UI5 SDK).

For the original UI5 framework libraries, the resulting type definitions are published as [@sapui5/types](https://www.npmjs.com/package/@sapui5/types) and [@openui5/types](https://www.npmjs.com/package/@openui5/types).

The generator can produce both, the new "ES modules" version of the type definitions as well as the legacy "globals" version of the types, which is released as `ts-types` but will be discontinued for UI5 2.x.

In addition to the generation, this package also provides means to _check_ the generated `*.d.ts` files in two ways:

1. by compiling them with the TypeScript compiler and
2. by running a `dtslint` check.
   The latter is mainly done because it is required for publishing the resulting type definitions at [DefinitelyTyped](http://definitelytyped.org/). The UI5 team only applies this check to the OpenUI5 libraries which are actually published there.

Details about the implementation of this package can be found in [TECHNICAL.md](./TECHNICAL.md).

## Usage

Install the latest version via npm:

`npm install @ui5/dts-generator --save-dev`

You can then use the tool either from the command line as CLI or from your own NodeJS code using its APIs. Make sure to use at least version 3.x of the dts-generator, as its usage and API changed vastly compared to previous versions 2.x and below!<br>
There is a complete [example for using one of the APIs a few sections below](#generatefromobjects-example). A simple CLI call looks like this:

`npx @ui5/dts-generator <api_json_file> --targetFile <dts_target_file>`

But in many cases you will want to pass additional arguments related to generation directives, paths of library dependencies etc.

### The APIs

- `generate`: generate the `*.d.ts` **file** for one UI5 library from its `api.json` **file** (and optionally other **files**)
- `generateFromObjects`: generate the `*.d.ts` content as **string** for one UI5 library from its `api.json` **content** given as JS object (and optionally other **objects**)
- `generateFromPaths`: generate the `*.d.ts` **file** for one UI5 library from its `api.json` **file** (and optionally other directory **paths**)

Please see the [TypeScript API](./types/api.d.ts) for a detailed documentation and the respective arguments.

### The CLIs

When started from the command line, the main file `index.js` is an entry point for generating `*.d.ts` files:

```
Usage:
node index.js <apiFile> <options>

With:
<apiFile>               File path+name of the api.json file for the library for which the d.ts file should be generated.

<options>:
  -h, --help            Show this help message and exit
  --dependenciesApiPath PATH
                        Directory where the api.json files are located for the libraries on which the currently to-be-built library depends.
  --dependenciesDTSPathForCheck PATH
                        Directory where the d.ts files are located of the libraries on which the currently to-be-built library depends. Only needed for the
                        check.
  --directivesPath PATH
                        Directory where the .dtsgenrc files for the libraries (current and dependencies) are located.
  --targetFile FILE
                        File path and name of the target d.ts file to write.
  --verbose             Set when the console output should be verbose.
  --skipCheckCompile    Set when the test compilation should be skipped.
  --dependenciesDTSPathForCheckForGlobals PATH
                        Directory where the d.ts files (using globals, not ES modules) are located of the libraries on which the currently to-be-built library
                        depends. Only needed when globals are generated and the check is run.
  --targetFileForGlobals FILE
                        File path and name of the target d.ts file to write for the type defiitions with globals (not ES modules). Only needed when globals
                        should be generated.
```

The file `runCheck.js` is used for triggering a check of the generated `*.d.ts` files.

```
Usage:
node runCheck.js <dtsDir> [-h, --help] [--verbose] [--checkDtslint]

With:
<dtsDir>          File path+name of the api.json file for the library for which the d.ts file should be generated.

<options>:
  -h, --help      show this help message and exit
  --verbose       Set when the console output should be verbose.
  --checkDtslint  Set when the test compilation should be skipped.
```

### Usage Example `generateFromObjects`<a id='generatefromobjects-example'></a>

```javascript
import { generateFromObjects } from "@ui5/dts-generator";
// Note: as the dts-generator is implemented as ES modules, this import only works
// when your code is an ES module as well. Otherwise, you can use:
// const { generateFromObjects } = await import("@ui5/dts-generator");

// This is the content of some minimal dummy api.json file.
// Normally these files are huge (3.5 MB in case of the sap.ui.core library),
// containing all APIs and documentation of the library,
// and are created by the UI5 build (as explained above).
const apiObject = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.120.0",
  library: "sap.dummy",
  symbols: [],
};

// Directives help the dts Generator handle typos and other inconsistencies in api.json files.
// They are maintained as '.dtsgenrc' files within some of the UI5 control libraries, e.g. in
// sap.ui.core, sap.m, and sap.f
const directives = {};

// Trigger the d.ts generation
const result = generateFromObjects({
  apiObject,
  directives,
  dependencyApiObjects: [
    // Array of api.json files for library dependencies
    // (as plain JavaScript objects just like libJsonData).
    // The above dummy library has no dependencies, hence the array is empty.
  ],
});

// Usually one would output the d.ts content to a file instead.
console.log(result.dtsText);
```

## Support

For problems caused by the transformation process implemented in this dts-generator, please open [issues](https://github.com/SAP/ui5-typescript/issues) in this repository on GitHub.<br>
However, issues in the UI5 type definitions which are also present in the [API documentation](https://ui5.sap.com/#/api) originate from the JSDoc comments in the original OpenUI5/SAPUI5 code, so please directly open an [OpenUI5](https://github.com/SAP/openui5/issues)/SAPUI5 ticket in this case.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
