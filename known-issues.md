# Release Notes for the UI5 Type Definitions

This page lists known issues one might encounter when using UI5 with TypeScript. In addition, please also check the issues reports in the respective GitHub repository and the central [UI5 TypeScript issue tracker](https://github.com/SAP/ui5-typescript/issues).

## TS2688 Cannot find type definition file for 'node_modules'

This error can be displayed by the TypeScript compiler and at the first character of the `tsconfig.json` file in the code editor:

```
error TS2688: Cannot find type definition file for 'node_modules'.
The file is in the program because:
Entry point for implicit type library 'node_modules'
```
It does not affect successful compilation, but is still irritating and not wanted.

This happens when the UI5 type definitions are referenced by a `typeRoots` entry in `tsconfig.json` and there is a `node_modules` folder *within* these referenced type definitions.<br>
The latter happens when the `package.json` of the application does reference the `@types/jQuery` or `@types/qUnit` package: the UI5 types also reference these and npm resolves this conflict by putting the version required by the UI5 types into a sub-folder.<br>
The details are explained in [this issue comment](https://github.com/ui5-community/generator-ui5-ts-app-fcl/issues/5#issuecomment-1199967459).

SOLUTION: remove any additional jQuery/qUnit type definitions from the application's `package.json` file, delete the `.../node_modules/@openui5/node_modules` folder (or `...@sapui5...`, respectively) and do another `npm install`. If the inner `node_modules` folder is created again, also delete `package-lock.json` (or other package manager's lock file) and re-try. In general, check which types exactly end up in this folder and make sure they are only referenced as dependency from ONE place or in exactly the same version.