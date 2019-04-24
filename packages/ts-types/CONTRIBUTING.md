# Contribution Guide

This is the @openui5/ts-types package contribution guide.
Please read the shared [mono-repo contribution](../../CONTRIBUTING.md) guide first.

## Generated Files

This package includes many generated files, which **should not** be modified directly.

- [The OpenIU5 api.json files](./input)
  - These files are **not** part of the @openui5/ts-types npm package, see [.npmignore](./.npmignore).
  - These files are generated using the [gen-api-json.js](./scripts/gen-api-json.js) script.
    - The version of SAP OpenUI5 sources used to generate the api.json files is listed in the `openUI5Version`
      entry in the [package.json](./package.json).
  - These generated files are committed to the source code because their generation process is very slow
    and required checking out the SAP OpenUI5 repository, in the future these api.json files
    **may** be consumed directly from the @openui5 npm packages e.g: (@openui5/sap.m) which would simplify
    the development flows on this package.
- [The OpenUI5 TypeScript Signatures](./types)
  - These files are the main content of the of the @openui5/ts-types npm package.
  - These files are generated using the [gen-dts.js](./scripts/gen-dts.js) script.
  - These generated files are committed to the source code to enable a ["snapshot testing"](https://jestjs.io/docs/en/snapshot-testing)
    development methodology (See relevant section below).

## Snapshot Testing

This project's output is tens of thousand of codes of TypeScript signatures code.
This scenario is not simple to test, but one thing we can still do is carefully inspect the diffs
due to each change we make.

The [package.json](./package.json) of @openui5/ts-types defines a **precommit** npm task
which re-generates the d.ts files and add them to the commit.
In addition, there is a [snapshots.spec.js](./test/snapshots.spec.js) unit test which
verifies that the generated d.ts files are up-to-date.

These things mean that any change in this mono repo that would affect the generated output
would be included in a git commit/pull request diff. This makes it very easy to understand
the impact of any source code changes on the final output signatures.

## Nightly Build

A cron job is defined in the [circleci config](../../.circleci/config.yml) to run once every 24 hours
and test that the source code in this repository's master branch can still generate the type signatures
from the SAP OpenUI5 repository's master version. This is used to detect early upcoming failures
in the d.ts generation process.

See the logs here: https://circleci.com/gh/SAP/ui5-typescript and look at the "nightly" job tag.

## Updating OpenUI5 Version

This is normally done as part of a pre-release process when we want
to update the master branch to point to a new version of the SAP OpenUI5 library.

- Update the `openUI5Version` entry in the [package.json](./package.json).
- `yarn run gen:api-json`
