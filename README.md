<p align="center">
    :construction: Work in Progress! :construction:
</p>

[![CircleCI](https://circleci.com/gh/SAP/ui5-typescript.svg?style=svg)](https://circleci.com/gh/SAP/ui5-typescript)

# UI5-TypeScript

UI5-TypeScript is an npm [mono-repo][mono-repo] that contains tooling to support [TypeScript][typescript] in SAP UI5 Projects.
It currently contains two packages:

- [@openui5/types](./packages/types) TypeScript signatures for the [SAP OpenUI5][openui5] project.
- [@ui5/dts-generator](./packages/dts-generator) A low level compiler from UI5 api.json format to TypeScript definition files format.

In the future it **_may_** contain additional packages, for example:

- A [UI5-Tooling][ui5-tooling] module that enables the creation of TypeScript signatures for 3rd party UI5 libraries.
- Editor Tooling that would assist in the usage of UI5 TypeScript signatures in popular IDEs (e.g VSCode).

## Status

This project is in an experimental **_Beta State_**. Significant changes are likely to occur,
including potential **breaking changes**.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](./LICENSE).

[typescript]: https://www.typescriptlang.org/
[mono-repo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[openui5]: https://openui5.org/
[ui5-tooling]: https://github.com/SAP/ui5-tooling
