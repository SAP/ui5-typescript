# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.4.0...@ui5/ts-interface-generator@0.4.1) (2022-03-22)

### Bug Fixes

- **ts-interface-generator:** fix interface not generated when superclass not recognized ([183920f](https://github.com/SAP/ui5-typescript/commit/183920fbb221a30bc0f357d2bf229a6b4f9014a4)), closes [#337](https://github.com/SAP/ui5-typescript/issues/337)
- **ts-interface-generator:** handle simple type arrays in metadata properly ([9f6ab01](https://github.com/SAP/ui5-typescript/commit/9f6ab01f62044434ada9132510f8ee6e31032250)), closes [#345](https://github.com/SAP/ui5-typescript/issues/345)

# [0.4.0](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.3.2...@ui5/ts-interface-generator@0.4.0) (2022-01-31)

### Features

- **ts-interface-generator:** change the file name extension to ".gen.d.ts" ([4887157](https://github.com/SAP/ui5-typescript/commit/488715718a19be8b7eb59d9c5d237bf423f619b6))

## [0.3.2](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.3.1...@ui5/ts-interface-generator@0.3.2) (2022-01-18)

### Bug Fixes

- **ts-interface-generator:** improve log whitespace ([5390491](https://github.com/SAP/ui5-typescript/commit/53904912ac448d839fd2df8fc06b986419952df0))

## [0.3.1](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.3.0...@ui5/ts-interface-generator@0.3.1) (2022-01-18)

### Bug Fixes

- **ts-interface-generator:** fix dependencies ([eb29c1c](https://github.com/SAP/ui5-typescript/commit/eb29c1cc465fd5af96e688e3c52ae35e2c0c34f0))

# [0.3.0](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.2.3...@ui5/ts-interface-generator@0.3.0) (2022-01-18)

### Bug Fixes

- **ts-interface-generator:** avoid misleading output in non-watch mode ([8b01804](https://github.com/SAP/ui5-typescript/commit/8b01804dcbbc2295aebdae30db85d86110c69eed))
- **ts-interface-generator:** don't crash on non-static metadata in a ManagedObject ([66acf42](https://github.com/SAP/ui5-typescript/commit/66acf42dc6e11b330428b31c24e8507696e7116f))
- **ts-interface-generator:** don't crash on uninitialized metadata ([9fc26ba](https://github.com/SAP/ui5-typescript/commit/9fc26ba8fdc87ec3e69c959948eaf088184ab7a8))
- update project dependencies and fix tests ([#313](https://github.com/SAP/ui5-typescript/issues/313)) ([62626f4](https://github.com/SAP/ui5-typescript/commit/62626f4069d0fa701528d84ae431ccc2a4b69933))

### Features

- **ts-interface-generator:** extend range of log levels (add "warn") ([616c226](https://github.com/SAP/ui5-typescript/commit/616c226dac2943c40a61ce1c345288442971d00a))
- **ts-interface-generator:** make log level configurable; document commandline arguments ([f8a7834](https://github.com/SAP/ui5-typescript/commit/f8a7834c931a76b523b08b87dd35e90c83b51498))

## [0.2.3](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.2.2...@ui5/ts-interface-generator@0.2.3) (2021-12-09)

### Bug Fixes

- **ts-interface-generator:** don't fail on missing superclass ctor parameters ([de4510d](https://github.com/SAP/ui5-typescript/commit/de4510d7bf10df7387c7d5791fe4b3ace00f1154)), closes [#322](https://github.com/SAP/ui5-typescript/issues/322)
- **ts-interface-generator:** fix wrong type multiplicity in constructor settings ([fb5cd5b](https://github.com/SAP/ui5-typescript/commit/fb5cd5b9961ae744221b269bdff4ca337866a292))

## [0.2.2](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.2.1...@ui5/ts-interface-generator@0.2.2) (2021-12-03)

### Bug Fixes

- **ts-interface-generator:** adapt to incompatible TS API change ([5399a98](https://github.com/SAP/ui5-typescript/commit/5399a98ee8d14167d33405cf2e746446b3ed2bea)), closes [/github.com/microsoft/TypeScript/wiki/API-Breaking-Changes#typescript-45](https://github.com//github.com/microsoft/TypeScript/wiki/API-Breaking-Changes/issues/typescript-45) [#321](https://github.com/SAP/ui5-typescript/issues/321)

## [0.2.1](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.2.0...@ui5/ts-interface-generator@0.2.1) (2021-12-02)

### Bug Fixes

- **ts-interface-generator:** re-add binary to enable npx usage ([d98e4b7](https://github.com/SAP/ui5-typescript/commit/d98e4b7973c814199868b93a418d238f7b521540)), closes [#319](https://github.com/SAP/ui5-typescript/issues/319)

# [0.2.0](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.1.2...@ui5/ts-interface-generator@0.2.0) (2021-11-26)

### Features

- **ts-interface-generator:** generate interface in a way that requires no named export anymore ([fe2acb2](https://github.com/SAP/ui5-typescript/commit/fe2acb26adee7d89cf09a0c7a0cef9b5c38c7b08))

## [0.1.2](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.1.1...@ui5/ts-interface-generator@0.1.2) (2021-11-17)

### Bug Fixes

- **ts-interface-generator:** fix missing npm release package content ([45e545a](https://github.com/SAP/ui5-typescript/commit/45e545af62e733ad61aefc73899aac65b65141ca))

## [0.1.1](https://github.com/SAP/ui5-typescript/compare/@ui5/ts-interface-generator@0.1.0...@ui5/ts-interface-generator@0.1.1) (2021-11-17)

**Note:** Version bump only for package @ui5/ts-interface-generator

# 0.1.0 (2021-11-17)

### Features

- **ts-interface-generator:** initial commit of ts-interface-generator package ([#299](https://github.com/SAP/ui5-typescript/issues/299)) ([03abc4b](https://github.com/SAP/ui5-typescript/commit/03abc4bf843566e7db38d7fa308e6ce8c1903e58))
