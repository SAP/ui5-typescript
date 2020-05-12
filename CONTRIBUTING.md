# Contribution Guide

This is the common contribution guide for this mono-repo.
See each individual package's CONTRIBUTING.md for package specific details.

## Development Environment

### pre-requisites

- [Yarn](https://yarnpkg.com/lang/en/docs/install/) >= 1.4.2
- nodejs >= 10

**Yarn** rather than npm is needed as this mono-repo uses [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
and the [nohoist](https://yarnpkg.com/blog/2018/02/15/nohoist/) feature.

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

### Release Process

- Update the CHANGELOG.md files for all packages.
  - Include a version number and date.
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
