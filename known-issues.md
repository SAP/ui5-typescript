# Known Issues for the UI5 Type Definitions

This page lists known issues one might encounter when using UI5 with TypeScript. In addition, please also check the issues reports in the respective GitHub repository and the central [UI5 TypeScript issue tracker](https://github.com/SAP/ui5-typescript/issues).

## Error TS2688: Cannot find type definition file for 'node_modules'

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

SOLUTION: remove any additional jQuery/qUnit type definitions from the application's `package.json` file, delete the `.../node_modules/@openui5/node_modules` folder (or `...@sapui5...`, respectively) and do another `npm install`. If the inner `node_modules` folder is created again, also delete `package-lock.json` (or other package manager's lock file) and re-try. In general, check which types exactly end up in this folder and make sure they are only referenced as dependency from ONE place or in exactly the same version.<br>
Not setting any `typeRoots` - as recommended below - should also solve the issue.

Also see [this FAQ entry](how-to-reference-the-ui5-types-in-tsconfigjson-as-types-or-typeroots-also-error-ts2688-cannot-find-type-definition-file-for-node_modules).


## Error TS2688: Cannot find type definition file for '@sapui5/types'
(or Error TS2688: Cannot find type definition file for '@openui5/types')<br>
This error may occur in TypeScript 5.1 or above due to [an incompatible Change](https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/#explicit-typeroots-disables-upward-walks-for-node_modules-types):

```ts
error TS2688: Cannot find type definition file for '@sapui5/types'.
  The file is in the program because:
    Entry point of type library '@sapui5/types' specified in compilerOptions

  tsconfig.json:16:9
    16         "@sapui5/types",
               ~~~~~~~~~~~~~~~
    File is entry point of type library specified here.
```

The recommendation for tsconfig in TypeScript 5.1 onwards (but also usable in lower versions) is hence not to set *any* `typeRoots`, but instead to set `types` to `@openui5/types` or `@sapui5/types` respectively - plus all other used types (once any `types` are listed, only the listed ones are available). In case `@types/openui5` in the default types namespace is used, none of these settings are needed.

When Yarn 2.x or later with PnP is used, dependencies are handled in a different way than with regular yarn or (p)npm and you need to create a special setup. This is independent from the UI5 type definitions, please do the setup according to instructions for this yarn version.

Also see [this FAQ entry](how-to-reference-the-ui5-types-in-tsconfigjson-as-types-or-typeroots-also-error-ts2688-cannot-find-type-definition-file-for-node_modules).


## @sapui5/types 1.121.1 and 1.122.1: errors in type definitions

Only in these versions and only in the SAPUI5 types there are TypeScript errors like `'JQuery' only refers to a type, but is used as namespace here.`. This is because some of the type definition files were wrongly named (e.g. `core-1.122.0-esm-d.ts` instead of `sap.ui.core.d.ts`) and hence no longer treated as ambient files (they no longer end with ".d.ts"). As a workaround, stick to the initial patch version 1.121.0 or 1.122.0 until you can use 1.123.x.


# Legal Information & Privacy Statement

This site is hosted by [GitHub Pages](https://pages.github.com/). Please see the [GitHub Privacy Statement](https://docs.github.com/en/github/site-policy/github-privacy-statement) for any information how GitHub processes your personal data.

Please note the [SAP terms of use](https://www.sap.com/corporate/en/legal/terms-of-use.html).

[Legal Statement / Impressum](https://www.sap.com/about/legal/impressum.html)

[Trademark Notice](https://www.sap.com/corporate/en/legal/trademark.html#third-party-trademark-notices)