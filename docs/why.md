# Why UI5-TypeScript?

This document lists the main potential benefits for the UI5-TypeScript project
and how it could benefit the UI5 eco-system in general.

## Short Version

- Better Integrating SAP UI5 and the **modern** JavaScript eco-system.

  - **Editor Tooling** & Functionality.

    - Working with many Editors / IDEs.
    - Content Assist.
    - Type Checks.
    - Go To Definition.
    - ...

  - UI5 applications written in **TypeScript**

  - CLI Tooling integration (tsc).

- Improving UI5 Docs.

## In Depth

### Better Integrating SAP UI5 and the **modern** JavaScript eco-system:

By providing TypeScript type signatures for UI5 libraries it becomes possible to
integrate UI5 application into the modern JavaScript ecosystem.

#### Editor Tooling

UI5 uses custom proprietary syntax for modules(import / exports) and class inheritance.
This makes it difficult for popular IDEs to provide editor related capabilities(e.g content assist)
as those tools simply do not understand the UI5 syntax.

By creating TypeScript signatures for UI5 libraries we are effectively **_bridging the gap_**
thus enabling the IDEs and Editors to provide their advanced capabilities even when implementing
UI5 applications in JavaScript.

- Note these advance editor services are available in [many IDE][editors-lsp] and Editors via the [LSP](LSP) protocol.

It is even possible to extend the functionality of some of these editor services via Language Server Plugins.

- https://github.com/Microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin

For example see the Angular Language Service:

- https://angular.io/guide/language-service

#### CLI Tooling

The integration into the JS ecosystem is not limited to editor functionality.
The type checking capabilities of the TypeScript compiler can be used directly from the CLI
(e.g in a Continuous Integration flow) to increase the quality of a UI5 application.

Note that this capability of the TypeScript Compiler (tsc) is even available for
JavaScript sources:

- https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html

#### UI5 applications written in **TypeScript**

TypeScript is a popular superset of JavaScript which (among other things) adds support for an optional type system.
This type system capability which is sorely lacking in JavaScript is very suitable for the development
of large and complex applications.

By providing type signatures for UI5 libraries we enable easier integration of UI5 apps
and the TypeScript "flavor" of JavaScript, without such signatures no type checking can be performed
on API usage of UI5 libraries.

References on TypeScript popularity:

- https://www.wired.com/story/typescript-microsoft-javascript-alternative-most-popular/
- https://www.npmtrends.com/typescript (> 20M monthly downloads on npm).
- https://2018.stateofjs.com/javascript-flavors/overview/

#### Improving UI5 Docs

There are two elements to this topic

1. If the UI5 docs are automatically transformed to TypeScript definitions
   Than the **I5 type system would slowly have to more strongly conform to the TypeScript type system**.
   The latter being much more robust than the combination of UI5/JSDocs type systems.

2) **Promoting end users to raise issues with errors and inaccuracies in the API reference**:

   SAP UI5 has a large in depth API Reference:

   - https://sapui5.hana.ondemand.com/#/api

   However there exists no validation between an end user's source code and the content of the API Reference.
   In essence the API Reference is meant **only** for human consumption. Once the API Reference is available
   as a "compiler readable" format (d.ts) inaccuracies and mistakes in the API reference will begin surfacing
   simply because once type checking is enabled these inaccuracies and mistakes would cause
   distractions to **end users**.

   For example: If a method argument is marked as mandatory but is in fact optional
   It would not be possible to use it as optional without receiving a type error.
   The end user would have to add a `// @ts-ignore annotation` to silence the error
   and it is thus much more likely for an issue to be raised by the end user asking to improve the API Reference.

[lsp]: https://langserver.org/
[editors-lsp]: https://microsoft.github.io/language-server-protocol/implementors/tools/
