# Type Safe JSONModel

This package provides type-safe data binding in UI5 applications,
focusing on the `JSONModel` and its methods.

## Prerequisites

- Make sure the node package manager `npm` is installed.
- Install the dependencies:

```bash
npm install
```

- You can now run the demo application by executing:

```bash
npm start
```

## Overview

The primary goal of this repo is to provide type-safe getters and setters for the `JSONModel`,
particularly for the `getProperty`, `setProperty`, `getData`, and `setData` methods.

Up to certain limitations, described in [limitations.ts](webapp/model/test/cases/limitations.ts),
the inference of the retrieved data by `getProperty` and `getData` is type-safe,
as well as the binding paths in all methods mentioned above.
The limits are presumably a rather theoretical problem, but are to be kept in mind.

A test-driven approach has been followed to implement the required types:
Expectations have been articulated in the folder [`webapp/model/test/cases`](webapp/model/test/cases).

Since there is no common approach to test typings,
a simple [test framework](test_typing.mjs) has been implemented to evaluate the expectations
from the test cases. It is kind of an integration test that
runs the TypeScript compiler and checks if the specified errors are thrown.

It works as follows:

- You mark a line where you expect a type error like this:

```typescript
/** @expect error */ const test: number = "42";
```

- If you expect a specific error, you identify it by its error code:

```typescript
/** @expect ts2322 */ const test: number = "42";
```

> Type 'string' is not assignable to type 'number'.ts(2322)

- If you expect the statement to throw **no error**, you can use:

```typescript
/** @expect ok */ const test: number = 42;
```

You can run those integration tests by executing the following command:

```bash
npm test
```

or, in case you want to test files in a specific folder, you can run:

```bash
node test_typing.mjs path/to/your/test/cases
```

Additionally, you can run the demo application and see a minimalistic UI5 application
that uses the type-safe model:

```bash
npm start
```
