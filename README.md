# UI5-TypeScript

This page provides an overview of all official TypeScript-related resources in the UI5 world.

### <cb>What is TypeScript about?
[TypeScript](typescriptlang.org) is an extension of JavaScript for providing type information and helps by error detection through type checking and by providing code assist in many supporting code editors (code completion, inline documentation,...). Browsers cannot execute TypeScript directly, a transpilation step is needed.

### What is the overall approach for using TypeScript in UI5 applications?
The UI5 team publishes type definition files describing all the UI5 APIs and types. With the help of these definitions, the TypeScript tools can do their job and support writing UI5 apps in TypeScript (and [even JavaScript](https://github.com/SAP-samples/ui5-cap-event-app/tree/js-with-typescript-support#applying-typescript-benefits-to-a-javascript-application)). The "typescript" branch of the "ui5-cap-event-app" project gives an [overview on UI5 code written in TypeScript](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md), typical traps and topics like debugging.

### How to set up a new UI5 app for TypeScript development?
By adding TypeScript and the UI5 type definitions as dev dependencies and setting up the transpilation step. This can be done in few minutes. The "ui5-typescript-helloworld" project can serve as copy template and provides a [detailed step-by-step guide](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) for setting up a TypeScript project. Furthermore, there is a [template generator](https://github.com/ui5-community/generator-ui5-ts-app) for new apps.

### How to convert an existing UI5 app to TypeScript?
By doing most of the basic [setup for TypeScript projects](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) mentioned in the previous section and then following the [four conversion steps briefly explained here](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md#converting-ui5-apps-from-javascript-to-typescript). The detailed explanation [how to enhance JavaScript applications with type information](https://github.com/SAP-samples/ui5-cap-event-app/tree/js-with-typescript-support#applying-typescript-benefits-to-a-javascript-application) will also help because the process of tightening the checks and then fixing the resulting issues is the same - just use real TypeScript syntax instead of the JSDoc comments used in that guide!

### How to develop custom controls in TypeScript?
There is [documentation](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/custom-controls/README.md) and sample code in the ["custom-controls" branch of the Hello World application](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/custom-controls) which explains how custom controls can be implemented in TypeScript within UI5 applications. It makes use of a [tool for generating TypeScript interfaces for the control API](https://github.com/SAP/ui5-typescript/tree/main/packages/ts-interface-generator) which has been [released via npm](https://www.npmjs.com/package/@ui5/ts-interface-generator) in alpha state. There is also a sample project that demonstrates how flull-fledged [control libraries can be developed in TypeScript](https://github.com/SAP-samples/ui5-typescript-control-library).

### How to test in TypeScript?
This topic is not covered by samples and documentation yet. While using qunit is straightforward, the OPA APIs cause a few difficulties for which suitable solutions are still being worked on.

### How to profit from TypeScript even when doing plain JavaScript development?
The "js-with-typescript-support" branch of the "ui5-cap-event-app" project contains an extensive [guide how to add TypeScript-based benefits to an existing JavaScript app](https://github.com/SAP-samples/ui5-cap-event-app/blob/js-with-typescript-support/README.md) without actually switching to TypeScript development.

### What are the TypeScript projects and releases provided by the UI5 development team?
UI5 provides type definitions for the UI5 APIs, which let TypeScript understand all the involved types, so it can do its job. They are provided both for OpenUI5 and for SAPUI5, in two different flavors ([`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm), [`@openui5/ts-types`](https://www.npmjs.com/package/@openui5/ts-types), [`@sapui5/ts-types-esm`](https://www.npmjs.com/package/@sapui5/ts-types-esm), [`@sapui5/ts-types`](https://www.npmjs.com/package/@sapui5/ts-types)). The OpenUI5 esm types are also [provided at npm as `@types/openui5`](https://www.npmjs.com/package/@types/openui5) via [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/openui5). In addition to the samples, tutorials and template generator mentioned above, in the "[ui5-typescript](https://github.com/SAP/ui5-typescript)" repository the generator is developed, which creates the UI5 type definitions from the JavaScript implementation and JSDoc as well as other tools (<b>NOTE</b>: the generator code in the repository is outdated and will NOT produce the type definitions mentioned above!).

### Where to report issues?
Issues within the type definition files can be [reported in the issue tracker of the "ui5-typescript" project](https://github.com/SAP/ui5-typescript/issues). Issues in the demo apps or documentation linked above should be reported in the respective GitHub repository. Note that there is no official support guarantee.

### What is the Future Roadmap for TypeScript in UI5?
The current focus is on working on the unfinished corners, like providing better support and guidance for topics like control development and testing.

## Other Resources

* Blog post from Volker Buzek: [How to debug a CAP app with UI5 TypeScript UI component with VS Code](https://blogs.sap.com/2021/11/16/debug-a-cap-app-with-ui5-typescript-ui-component-with-vs-code/)
* Blog post series "My first experience with TypeScript in UI5" from Wouter Lemaire:
    * [Introduction](https://blogs.sap.com/2021/11/19/my-first-experience-with-typescript-in-ui5-introduction/)
	* [Setup project](https://blogs.sap.com/2021/11/23/my-first-experience-with-typescript-in-ui5-prepare-ts-project/)
## Status

The type definitions provided for UI5 are in an experimental **_Beta State_**. Significant changes are likely to occur, including potential **breaking changes**.

## Support

Please open [issues](https://github.com/SAP/ui5-typescript/issues) on GitHub.

## Contributing

See [CONTRIBUTING.md](https://github.com/SAP/ui5-typescript/blob/master/CONTRIBUTING.md).


## License

Copyright (c) 2021 SAP SE and ui5-typescript contributors.

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.

## Legal Information & Privacy Statement

This site is hosted by [GitHub Pages](https://pages.github.com/). Please see the [GitHub Privacy Statement](https://docs.github.com/en/github/site-policy/github-privacy-statement) for any information how GitHub processes your personal data.

Please note the [SAP terms of use](https://www.sap.com/corporate/en/legal/terms-of-use.html).

[Legal Statement / Impressum](https://www.sap.com/about/legal/impressum.html)

[Trademark Notice](https://www.sap.com/corporate/en/legal/trademark.html#third-party-trademark-notices)

