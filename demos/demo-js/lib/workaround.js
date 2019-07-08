/**
 * Strange hack to ensure ts-server will watch changes in the
 * `node_modules/@openui5/ts-types` dir when running in VSCode.
 * - See: https://github.com/microsoft/TypeScript/issues/32285.
 */
/// <reference types="@openui5/ts-types" /> #
