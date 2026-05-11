# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/SAP/ui5-typescript/compare/@ui5/typed-json-model@1.3.0...@ui5/typed-json-model@2.0.0) (2026-05-11)

### Bug Fixes

- **typed-json-model:** correct a wrong event type ([d62ede0](https://github.com/SAP/ui5-typescript/commit/d62ede09a4a61e9487b259525e19eeafd2fabf34))

- chore(dts-generator)!: update TypeScript to 6.0.3 across repo ([050d7df](https://github.com/SAP/ui5-typescript/commit/050d7df30c5d9b7bfb7614058493f2bab7be9189))

### BREAKING CHANGES

- The re-exported ModuleResolutionKind enum no longer
  includes the deprecated NodeJs value. Consumers using
  ModuleResolutionKind.NodeJs must switch to Node16.
  The runCheck CLI now uses Node16 module resolution instead of Node10,
  which enforces file extensions and respects package.json exports.

Adapt all tsconfigs for TS6 changed defaults:

- explicit types arrays (TS6 defaults to [])
- explicit rootDir (TS6 requires it with outDir)
- explicit strict: false where previously relying on default
- moduleResolution: "node" → "bundler" in test-packages
- dedicated tsconfig for API type-check test (TS6 errors on tsc + files

* tsconfig)

# [1.3.0](https://github.com/UI5/typescript/compare/@ui5/typed-json-model@1.2.1...@ui5/typed-json-model@1.3.0) (2026-04-24)

### Features

- **dts-generator:** add bindContext declarations and tests to TypedJSONModel ([b2575d1](https://github.com/UI5/typescript/commit/b2575d12456b99a4b9385ce785e1d21d4337a1e8))
- **dts-generator:** add bindList declarations and tests to TypedJSONModel ([2064445](https://github.com/UI5/typescript/commit/2064445468fb6bf22628db032a14abcf6236cbe8))
- **dts-generator:** add bindProperty declarations and tests to TypedJSONModel ([66a87f5](https://github.com/UI5/typescript/commit/66a87f5ef68332c23147600857d138d1ea8f791a))
- **dts-generator:** add bindTree declarations and tests to TypedJSONModel ([ab756ba](https://github.com/UI5/typescript/commit/ab756ba7c33f5173107aa74badfa423e057a208d))
- **dts-generator:** add getMessagesByPath declarations and tests to TypedJSONModel ([b7ecc5d](https://github.com/UI5/typescript/commit/b7ecc5d9e11d39a1343be84ecc5028276bc16a90))

## [1.2.1](https://github.com/UI5/typescript/compare/@ui5/typed-json-model@1.2.0...@ui5/typed-json-model@1.2.1) (2026-01-26)

### Reverts

- **dts-generator:** revert add getOriginalProperty declarations and tests to TypedJSONModel ([#537](https://github.com/UI5/typescript/issues/537)) ([9b90b1b](https://github.com/UI5/typescript/commit/9b90b1bd83dc0669daac97c16a1750c1c333fe8f))

# [1.2.0](https://github.com/UI5/typescript/compare/@ui5/typed-json-model@1.1.1...@ui5/typed-json-model@1.2.0) (2026-01-20)

### Features

- **typed-json-model:** add getOriginalProperty declarations and tests to TypedJSONModel ([#534](https://github.com/UI5/typescript/issues/534)) ([ae4ba2e](https://github.com/UI5/typescript/commit/ae4ba2eec5359cee8d4153624c555a25876dd33e))

## [1.1.1](https://github.com/SAP/ui5-typescript/compare/@ui5/typed-json-model@1.1.0...@ui5/typed-json-model@1.1.1) (2025-10-15)

**Note:** Version bump only for package @ui5/typed-json-model

# 1.1.0 (2025-08-08)

### Features

- **dts-generator:** add TypedJSONModel ([#516](https://github.com/SAP/ui5-typescript/issues/516)) ([0573f46](https://github.com/SAP/ui5-typescript/commit/0573f46f04e1856d80535b89b0a29df89dbec484))
