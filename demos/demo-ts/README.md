# UI5-TypeScript Demo

This is a minimal project that can be used as a playground to
inspect the UI5-TypeScript project. particularly the @openui5/ts-types npm package.

## Prerequisites

- A [maintained](https://nodejs.org/en/about/releases/) Nodejs version.

## Usage

### Initial setup

First open the project in an IDE:

- **Option1 - Local Dev Env**

  - clone this repo.
  - `cd ./ui5-typescript/demo/demo-ts`
  - `npm install`
  - Open this folder in your favorite IDE.

- **Option2 - Using GitPod WebIDE (Which uses Eclipse Theia)**

  - Open [this package in Gitpod](https://gitpod.io/#https://github.com/sap/ui5-typescript/tree/master/demo/demo-ts).
  - `cd ./demo/demo-ts`
  - `npm install`

### The Scenarios

Now try out the demonstrated scenarios:

#### Content Assist

Open any of the files in the [src directory](./src)
begin editing and request "Auto-Complete" (often ctrl-k/cmd-k shortcut)
from your editor in various text positions.

#### Type Checking on UI5 TypeScript Files

- Modify one of the files in the [src directory](./src) in a way to break the code.
  - e.g: use an [invalid constructor argument](https://github.com/SAP/ui5-typescript/blob/master/demos/demo-ts/src/constructor-signatures.js#L7).
- Enter this(./demo/demo-ts) folder.
- `npm run compile`
- inspect the compilation errors in the command line.
