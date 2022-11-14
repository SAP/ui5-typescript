<p align="center">
    :construction: Work in Progress! :construction:
</p>

[![Continuous Integration](https://github.com/SAP/ui5-typescript/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/SAP/ui5-typescript/actions/workflows/ci.yml)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/ui5-typescript)](https://api.reuse.software/info/github.com/SAP/ui5-typescript)

# UI5-TypeScript

UI5-TypeScript is an npm [mono-repo][mono-repo] that contains tooling to support [TypeScript][typescript] in SAPUI5 and OpenUI5 Projects.
This tooling can enable:

- Better IDE integration for UI5 projects (e.g content assist).
- Using TypeScript compiler to perform type checks on UI5 application code.
- More easily implementing UI5 applications and controls in TypeScript thus enjoying the general benefits of TypeScript.

Learn more about the general benefits of TypeScript here:

- https://stackoverflow.com/a/35048303
- https://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript

It currently contains two public packages:

- [@ui5/dts-generator](./packages/dts-generator) [![npm-ui5-dts-generator][npm-ui5-dts-generator-image]][npm-ui5-dts-generator-url] A low level generator which transforms the UI5 api.json format to TypeScript definition (`*.d.ts`) file format.<br> <b>NOTE: the sources in this repository represent an outdated version of the generator tool, not the one used for the new improved TypeScript definition files which are released since June 2021. The code of the new generator version is planned to be released here later as well.</b>

- [@ui5/ts-interface-generator](./packages/ts-interface-generator) [![npm-ui5-ts-interface-generator][npm-ui5-ts-interface-generator-image]][npm-ui5-ts-interface-generator-url] A tool supporting control development in TypeScript. It is used at development time and generates type definitions for the control API methods which are only created at runtime by the UI5 framework.

[npm-ui5-dts-generator-image]: https://img.shields.io/npm/v/@ui5/dts-generator.svg
[npm-ui5-dts-generator-url]: https://www.npmjs.com/package/@ui5/dts-generator
[npm-ui5-ts-interface-generator-image]: https://img.shields.io/npm/v/@ui5/ts-interface-generator.svg
[npm-ui5-ts-interface-generator-url]: https://www.npmjs.com/package/@ui5/ts-interface-generator

## How to obtain the UI5 TypeScript signatures?

The UI5 type signatures are created and published as part of the UI5 build process. There are <b>two flavors</b> of the type definitions right now:

1. the legacy flavor which defines all entities with their global names, like `sap.m.Button`. As using globals is discouraged, using this flavor should be avoided. The definition packages are named `ts-types`.
2. the "ES modules" flavor which defines ES6-style module names for the entities. These definition support using modern JavaScript syntax with ES modules and classes, but require an additional transformation step, which can be run together with the anyway required TypeScript compilation. These recommended definition packages are named `ts-types-esm`.

Both flavors are available for SAPUI5 as well as OpenUI5.

Using the modern definitions for SAPUI5 as example, the type definitions can be obtained like this:

With npm

`npm install @sapui5/ts-types-esm --save-dev`

With Yarn

`yarn add @sapui5/ts-types-esm --dev`

## Usage

To see the basic suggested project setup for TypeScript development with the new `ts-types-esm` packages, please check out the [TypeScript Hello World app](https://github.com/SAP-samples/ui5-typescript-helloworld). It not only can serve as copy template, but also includes a [detailed step-by-step guide](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) for creating this setup from scratch.

The [TypeScript branch of the "UI5 CAP Event App"](https://github.com/SAP-samples/ui5-cap-event-app/tree/typescript) sample demonstrates a slightly more complex application, using the same setup. It comes with an [explanation](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md) of what UI5 TypeScript code usually looks like and what to consider.

Overall, the best resource for using UI5 with TypeScript is https://sap.github.io/ui5-typescript.

See the [demos](./demos) directory for consumption examples of the legacy signatures.

## Status

This project is in an experimental **_Beta State_**. Significant changes are likely to occur, including potential **breaking changes**. More details and why you should not be afraid of this can be found [here](https://sap.github.io/ui5-typescript/beta-statement.html).

## Support

For issues caused by the generators please open [issues](https://github.com/SAP/ui5-typescript/issues) on GitHub.<br>
However, issues in the UI5 type definitions which are also present in the [API documentation](https://ui5.sap.com/#/api) originate from the JSDoc comments in the original OpenUI5/SAPUI5 code, so please directly open an [OpenUI5](https://github.com/SAP/openui5/issues)/SAPUI5 ticket in this case.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

[typescript]: https://www.typescriptlang.org/
[mono-repo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[openui5]: https://openui5.org/
[ui5-tooling]: https://github.com/SAP/ui5-tooling
