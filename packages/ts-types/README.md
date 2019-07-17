[![npm (scoped)](https://img.shields.io/npm/v/@openui5/ts-types.svg)](https://www.npmjs.com/package/@openui5/ts-types)

# @openui5/ts-types

This npm package contain the types signatures for all the SAP OpenUI5 libraries,
( sap.ui.core / sap.m / sap.f / ... ).

These signatures can be used to:

1. Enable advanced content assist in IDEs, e.g: (VSCode / IntelliJ / Webstorm) for OpenUI5.
1. Integrate type checking for OpenUI5 applications using the TypeScript compiler.

These two capabilities are available both for OpenUI5 apps written in TypeScript **and** in JavaScript.

## Status

This project is in an experimental **_Beta State_**. Significant changes are likely to occur,
including potential **breaking changes**.

## TLDR

Try it out now:

- [Runnable JavaScript Demo Package](../../demos/demo-js)
- [Runnable TypeScript Demo Package](../../demos/demo-ts)

## Prerequisites

- A [maintained](https://nodejs.org/en/about/releases/) Nodejs version.

## Limitations

- The TypeScript signatures provided in this package require TypeScript version >= 3.2.4
  to compile successfully.

## Installation

For the latest version:

- `npm install @openui5/ts-types --save-dev`

It is recommended to align with the specific OpenUI5 version you may be using, e.g for OpenUI5 1.60:

- `npm install @openui5/ts-types@1.60 --save-dev`

Note that the version matching is only for the major and minor versions.
**By design** the patch versions of @openui5/ts-types do not match the patch version of the OpenUI5 runtime.
This is done to enable a **de-coupled life-cycle** for the @openui5/ts-types package.

Also Note that the @openui5/ts-types package is **currently only supported for 1.60.x versions of OpenUI5 runtime**.

## Usage

These instruction currently focus on the editor services scenario (e.g: content assist / highlighting api errors).
Additional scenarios such as developing UI5 applications in TypeScript or using TypeScript
for build time type checks would be added at a later date.

### Project Configuration

The TypeScript compiler does not resolve global definitions from [scoped npm packages](https://docs.npmjs.com/misc/scope).
To resolve this a [tsconfig.json][ts-config] file must be added to the root of your npm based project:

The most simple [tsconfig.json][ts-config] would look like this:

```json
{
  "compilerOptions": {
    "module": "none",
    "noEmit": true,
    "checkJs": true,
    "allowJs": true,
    "types": ["@openui5/ts-types"]
  }
}
```

The important things to note are:

- `"module": "none"` because UI5 has its own unique modules system.
- `"noEmit": true` as we are not interested in generating any code.
- `"checkJs": true, "allowJs": true` to enable the TypeScript based language service to inspect
  our UI5 Javascript files.
- `"types": ["@openui5/ts-types"]` to help the TypeScript based language service resolve the global
  type definitions from the @openui5/ts-types package.

### Known Issue - IDE reload may be needed.

There seems to be an [issue](https://github.com/microsoft/TypeScript/issues/32285) in the TypeScript language server
which **may** cause the signatures from `@openui5/ts-types` to **not** get automatically "picked up" after the initial `npm install`
without a **restart** of the TS-Server (accomplished by restarting the IDE).

The simplest "workaround" is to just restart the relevant IDE.
A more robust workaround can be achieved by adding a triple slash type directive to a file
in the project, e.g:

```javascript
/**
 * Strange hack to ensure ts-server will watch changes in the
 * `node_modules/@openui5/ts-types` dir when running in VSCode.
 * - See: https://github.com/microsoft/TypeScript/issues/32285.
 */
/// <reference types="@openui5/ts-types" /> #
```

Note:

- This directive is only needed a **single** file, **not every** file in the project.
- The file in which it is added must be tracked by ts-server (e.g be in the lib directory).

### UI5 Source Code

There are two kinds of UI5 source code.

#### Global Imports

For UI5 source code using the legacy global imports no additional changes would be needed, simply,
open your project in an IDE (VSCode / Eclipse Theia / IntelliJ WebStorm)
that supports TypeScript definitions based languages services and start coding.

#### sap.ui.define Imports

For UI5 source code using the newer `sap.ui.define` syntax, an additional JSDocs parameter is needed.
This parameter "helps" the TypeScript compiler understand the UI5 import syntax and "link" to the correct types signature.

```javascript
sap.ui.define(
  ["sap/ui/core/TooltipBase"], // 1. UI5 runtime import
  /**
   *        // 2. Linking TypeScript global signatures (below)
   * @param {typeof sap.ui.core.TooltipBase} TooltipBase
   */
  function(TooltipBase) {
    // 3. Define function parameter

    const toolTipInstance = new TooltipBase("myID", {
      // try content assist here:
      dependents: null,
      blocked: true,
      closeDelay: 666
    });
  }
);
```

Note the `@param {typeof sap.ui.core.TooltipBase} TooltipBase` syntax linking the:

1. UI5 runtime import `"sap/ui/core/TooltipBase"`.
2. Linking TypeScript global signatures `{typeof sap.ui.core.TooltipBase}`.
3. Define function parameter: `TooltipBase`.

## Support

Please open [issues](https://github.com/SAP/ui5-typescript/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](../../LICENSE).

[ts-config]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
