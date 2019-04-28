<p align="center">
    :construction: Work in Progress! :construction:
</p>

[![CircleCI](https://circleci.com/gh/SAP/ui5-typescript.svg?style=svg)](https://circleci.com/gh/SAP/ui5-typescript)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/SAP/ui5-typescript.svg)](https://greenkeeper.io/)

# UI5-TypeScript

UI5-TypeScript is an npm [mono-repo][mono-repo] that contains tooling to support [TypeScript][typescript] in SAP UI5 Projects.
These tooling can enable:

- Better IDE integration for SAP UI5 projects (e.g content assist).
- Using TypeScript compiler to perform type checks on SAP UI5 applications.
- More easily implementing UI5 applications in TypeScript thus enjoying the general benefits of TypeScript.

Learn more about the general benefits of TypeScript here:

- https://stackoverflow.com/a/35048303
- https://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript

It currently contains two packages:

- [@openui5/ts-types](./packages/ts-types) TypeScript signatures for the [SAP OpenUI5][openui5] project.
- [@ui5/dts-generator](./packages/dts-generator) A low level compiler which transforms SAP UI5 api.json format to TypeScript definition(dts) file format.
  - This package is used by @openui5/ts-types to generate the SAP OpenUI5 TypeScript signatures.
  - This is currently a "repo internal" package, not published on npmjs.com.

## TODO

In the future this repo **_may_** contain additional npm packages, for example:

- A [UI5-Tooling][ui5-tooling] module that enables the creation of TypeScript signatures for 3rd party UI5 libraries.
- Editor related Tooling that would assist in the usage of UI5 TypeScript signatures in popular IDEs (e.g VSCode).

## Status

This project is in an experimental **_Beta State_**. Significant changes are likely to occur,
including potential **breaking changes**.

## Support

Please open [issues](https://github.com/SAP/ui5-typescript/issues) on github.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](./LICENSE).

[typescript]: https://www.typescriptlang.org/
[mono-repo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[openui5]: https://openui5.org/
[ui5-tooling]: https://github.com/SAP/ui5-tooling
