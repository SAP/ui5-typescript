# UI5-TypeScript Demo

This is a minimal project that can be used as a playground to
inspect the UI5-TypeScript project. particularly the @sapui5/ts-types npm package.

## Perquisites

- A [maintained](https://nodejs.org/en/about/releases/) Nodejs version.

## Usage

### Initial setup

First open the project in an IDE:

- **Option1 - Local Dev Env**

  - clone this repo.
  - `cd ./ui5-typescript/demo/demo-js`
  - `npm install`
  - Open this folder in your favorite IDE.

- **Option2 - Using GitPod WebIDE (Which uses Eclipse Theia)**

  - Open [this package in Gitpod](https://gitpod.io/#https://github.com/sap/ui5-typescript/tree/master/demo/demo-js).
  - `cd ./demo/demo-js`
  - `npm install`

### The Scenarios

Now try out the demonstrated scenarios:

#### Content Assist

Open any of the files in the [lib directory](./lib)
begin editing and request "Auto-Complete" (often ctrl-k/cmd-k shortcut)
from your editor in various text positions.

#### Type Checking on UI5 JavaScript Files

- Modify one of the files in the [lib directory](./lib) in a way to break the code.
  - e.g: use an [invalid constructor argument](https://github.com/SAP/ui5-typescript/blob/master/demos/demo-js/lib/constructor-signatures.js#L10).
- Enter this(./demo/demo-js) folder.
- `npm run type-check`
- inspect the compilation errors in the command line.

## In Depth Guide

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
    "types": ["@sapui5/ts-types"]
  }
}
```

The important things to note are:

- `"module": "none"` because UI5 has its own unique modules system.
- `"noEmit": true` as we are not interested in generating any code.
- `"checkJs": true, "allowJs": true` to enable the TypeScript based language service to inspect
  our UI5 Javascript files.
- `"types": ["@sapui5/ts-types"]` to help the TypeScript based language service resolve the global
  type definitions from the @sapui5/ts-types package.

### UI5 Source Code

There are two variants of UI5 source code.

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
  function (TooltipBase) {
    // 3. Define function parameter

    const toolTipInstance = new TooltipBase("myID", {
      // try content assist here:
      dependents: null,
      blocked: true,
      closeDelay: 666,
    });
  }
);
```

Note the `@param {typeof sap.ui.core.TooltipBase} TooltipBase` syntax linking the:

1. UI5 runtime import `"sap/ui/core/TooltipBase"`.
2. Linking TypeScript global signatures `{typeof sap.ui.core.TooltipBase}`.
3. Define function parameter: `TooltipBase`.
