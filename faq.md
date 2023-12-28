# FAQ - Frequently Asked Questions for the UI5 Type Definitions

While the [main page](README.md) answers the high-level questions, this page focuses on specific questions and tricky areas one might encounter when using UI5 with TypeScript, especially for those questions where the answers may still be developing or are subject to change.

## How to reference the UI5 types in tsconfig.json? As `types` or `typeRoots`? (also: "*error TS2688 Cannot find type definition file for 'node_modules'*")

Short answer: 
* `@types/openui5` do not need to be specifically listed in tsconfig due to the standard package name
* for `@openui5/types` and `@sapui5/types` the current suggestion is to write:
  ```
  "types": ["@openui5/types", ...]
  ```
  where `...` is the list of other needed type packages. (As soon as *one* package is explicitly listed as `types`, other packages from the default namespace `@types` are no longer automatically loaded.)

The history of this topic unfolds in [this issue report](https://github.com/ui5-community/generator-ui5-ts-app-fcl/issues/5). An in-depth analysis [can be found here](https://github.com/ui5-community/generator-ui5-ts-app-fcl/issues/5#issuecomment-1199967459). The proposed solution changed over time, triggered by [changes in TypeScript](https://github.com/ui5-community/generator-ui5-ts-app-fcl/issues/5#issuecomment-1589396608) itself.


Related error messages (helping people to find this explanation) are:

```
error TS2688: Cannot find type definition file for 'node_modules'.
  The file is in the program because:
    Entry point for implicit type library 'node_modules'
```

```
error TS2688: Cannot find type definition file for '@sapui5/types'.
  The file is in the program because:
    Entry point of type library '@sapui5/types' specified in compilerOptions
```

Also see [this](known-issues.md#error-ts2688-cannot-find-type-definition-file-for-node_modules) and [this](known-issues.md#error-ts2688-cannot-find-type-definition-file-for-sapui5types) article about these "known issues".

## How to use Controller Extensions in TypeScript?

There are two distinct ways of working with Controller Extensions in UI5:

1. Writing an extension to modify the behavior of an existing Controller without touching its code. This is done to extend/change e.g. SAP-delivered standard apps. This topic was mainly handled [here](https://github.com/SAP/ui5-typescript/issues/332). In particular see the explanation of the solution [here](https://github.com/SAP/ui5-typescript/issues/332#issuecomment-1477774839) and the references to documentation and samples [here](https://github.com/SAP/ui5-typescript/issues/332#issuecomment-1664197599).


2. Using a pre-defined controller extension when writing a controller in order to benefit from the functionality provided by this extension. One could also characterize this as applying mix-ins to add functionality. There are a couple of such controller extensions provided by `sap.fe`. This topic is being handled [here](https://github.com/SAP/ui5-typescript/issues/420) and not 100% complete despite a [change that provided support for this use-case](https://github.com/ui5-community/babel-plugin-transform-modules-ui5/pull/120) (check out the details there).


# Legal Information & Privacy Statement

This site is hosted by [GitHub Pages](https://pages.github.com/). Please see the [GitHub Privacy Statement](https://docs.github.com/en/github/site-policy/github-privacy-statement) for any information how GitHub processes your personal data.

Please note the [SAP terms of use](https://www.sap.com/corporate/en/legal/terms-of-use.html).

[Legal Statement / Impressum](https://www.sap.com/about/legal/impressum.html)

[Trademark Notice](https://www.sap.com/corporate/en/legal/trademark.html#third-party-trademark-notices)