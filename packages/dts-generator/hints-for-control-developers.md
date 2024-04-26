# Hints for Control Developers

This dts-generator creates TypeScript type definitions for the API of UI5 control libraries developed in JavaScript, so application developers can use TypeScript. This comes with some implications for development of UI5 controls and framework, which are described on this page.

## How it works

The UI5 API documentation is generated from the source code and JSDoc comments during the build. This same information is also used to generate \*.d.ts files, which are TypeScript's standard way of providing type information for an otherwise untyped JavaScript library.

## Restrictions

Not everything that can be done in an largely untyped language like JavaScript also makes sense and is allowed in a typed language like TypeScript. Even for UI5 development which remains being done in JavaScript and keeps most of its freedom, needs some restrictions, for example in the area of class inheritance: if a superclass has certain methods, inheriting subclasses cannot freely change the signature of these inherited methods.

## Checks

After the \*.d.ts files have been generated, they are checked with the TypeScript compiler (`tsc`). In the UI5 libraries there some existing errors, whic hcannot be easily fixed due to compatibility reasons and they are being ignored by this check (only given as "warning"), see [packages/dts-generator/src/checkCompile/ignore-list.json](the ignore list for details). But we want to avoid the introduction of new errors, hence any new errors break the check (and SAP-internally break the library build).

Because it can be a bit hard to understand what tsc errors mean for the UI5 source code, we have enriched the error message with additional information, like the probably UI5 source file that triggered the issue, the `*.d.ts` file content around the error, and in many cases with a "solution hint" which explains the situation and likely causes and suggests possible solutions.

## FAQ

### Is UI5 now going to use TypeScript for UI5 control development?

A general switch to TypeScript is currently not planned. This dts-generator is mostly about enabling app developers and required _because_ development continues to a big extent in JavaScript. However some libraries have been converted to TypeScript and others are interested, so the plan is to enable those libraries who want to switch.

### There is a TypeScript error in the check. What to do now?

Look at the entire error message in detail and try to understand it and correct the problem. It should provide plenty of context to make understanding the issue easier.

### There is a TypeScript error, but it seems completely unrelated to my change!

The UI5 module mentioned in the error message is not always the actual source of the issue. Also a change in a base class can lead to an error occurring in an inheriting class. Or the module-finding logic is just wrong. But if the error message is really about something completely different on which others are working, try rebasing your change - maybe they have fixed it.
