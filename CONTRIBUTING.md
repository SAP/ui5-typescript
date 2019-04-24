# Contribution Guide

This is the common contribution guide for this mono-repo.
See each individual package's CONTRIBUTING.md for package specific details.

## Development Environment

### pre-requisites

- [Yarn](https://yarnpkg.com/lang/en/docs/install/) >= 1.4.2
- nodejs >= 8

Yarn rather than npm is needed as this mono-repo uses [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
and the [nohoist](https://yarnpkg.com/blog/2018/02/15/nohoist/) feature.

Nodejs versions older than 8, would no longer be supported after 04/2019.
Currently (04/2019) nodejs 10.0 is the "current" node version and thus the recommended one to use.

- https://nodejs.org/en/about/releases/

### Initial Setup

The initial setup is trivial:

- clone this repo
- `yarn`

### Formatting.

[Prettier](https://prettier.io/) is used to ensure consistent code formatting in this repository.
This is normally transparent as it is activated in a pre-commit hook using [lint-staged](https://github.com/okonet/lint-staged).
However this does mean that dev flows that do not use a full dev env (e.g editing directly on github)
may result in voter failures.

### Testing

Mocha is used for unit-testing.
Please refrain from integrating multiple testing libraries to keep things consistent.

### Release Life-Cycle.

For the initial release all (both) the packages will use the **same version**.
This version would match the major and minor versions of the OpenUI5 project, but **not the patch version**.

The coupling between @openui5/ts-types and the openui5 runtime versions is self explanatory.
The coupling between @ui5/dts-generator and the openui5 runtime versions is less obvious.
This is a temporary measure due to the dts-generator containing "directives" needed
to successfully compile ui5 api.json files to TypeScript d.ts files for **specific** OpenUI5 versions.
In the future this coupling would hopefully be severed and the dts-generator would have its own versions life-cycle.

The de-coupling of the patch versions is done to allow releasing TypeScript definitions "fixes" separately from
OpenUI5 versions, This is not a concern because according to [semantic Versioning][semver] patch versions should not include API changes

### Release Process

- Update the CHANGELOG.md files for all packages.
  - Include a version number and date.
- Update the api.json files if relevant.
  - See [api.json files guide](./packages/ts-types/CONTRIBUTING.md#updating-openui5-version).
- Commit pre release changes to master.
- `yarn run lerna:version`
- Follow the lerna CLI instruction and choose a new version mode matching the version number
  chosen in step one (CHANGELOG.md).
- Track the relevant tag build on circle-ci.
  - https://circleci.com/gh/SAP/ui5-typescript.
- Once the tag build has finished successfully inspect the npm registry to see the new version
  for all the packages of this mono-repo.
  - `npm view [package-name] version`

[semver]: https://semver.org/#semantic-versioning-200
