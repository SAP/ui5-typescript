[![npm (scoped)](https://img.shields.io/npm/v/@ui5/dts-generator.svg)](https://www.npmjs.com/package/@ui5/dts-generator)

# @ui5/DTS-Generator

This npm package contains the logic for generating
TypeScript signatures from SAP UI5 api.json files.

It is used by the [@sapui5/ts-types](https://www.npmjs.com/package/@sapui5/ts-types) package to generate the TypeScript signatures
For UI5.

## Status

This project is in an experimental **_Beta State_**. Significant changes are likely to occur,
including potential **breaking changes**

## Installation

For the latest version:

- `npm install @ui5/dts-generator --save-dev`

## Usage

Please see the [TypeScript API](./lib/api.d.ts) for additional details for each argument.

```javascript
const { jsonToDTS } = require("@ui5/dts-generator");

// Directives help the DTS Generator handle typos and other inconsistencies in api.json files.
const directives = {};

const dtsText = jsonToDTS(libJsonData, {
  directives,
  dependencies: [
    /* Array of api.json dependencies as plain JavaScript objects */
  ],
});

// Normally one would output the `dtsText` to a file.
console.log(dtsText);
```

## Support

Please open [issues](https://github.com/SAP/ui5-typescript/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
