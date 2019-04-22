# Contribution Guide

This is the dts-generator package contribution guide.
Please read the shared [mono-repo contribution](../../CONTRIBUTING.md) guide first.

## Heuristics

The transformation process from an api.json to a d.ts file is not straight-forward.
This is because:

- The api.json structure is not well defined and also subject to change.
- The contents of the api.json files are collected from SAP UI5 source code, This means that we are dealing
  with manually entered data which is often not even well validated (e.g JSDocs syntax).
- The semantics of the SAP UI5 type system often does not perfectly match the semantics of the TypeScript type system.

Due to these reasons there are many heuristics and transformations happening during the compilation process.
Inspect the source code the the log when the dts-generator is executed to learn more.

## Testing
