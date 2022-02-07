# UI5-TypeScript

This page provides an overview of all official TypeScript-related resources in the UI5 world.

### Topics
- [What is TypeScript about?](#what-is-typescript-about)
- [What is the overall approach for using TypeScript in UI5 applications?](#what-is-the-overall-approach-for-using-typescript-in-ui5-applications)
- [How can I get an end-to-end hands-on impression of creating and developing an app?](#how-can-i-get-an-end-to-end-hands-on-impression-of-creating-and-developing-a-ui5-app-in-typescript)
- [How to set up a new UI5 app for TypeScript development?](#how-to-set-up-a-new-ui5-app-for-typescript-development)
- [How to convert an existing UI5 app to TypeScript?](#how-to-convert-an-existing-ui5-app-to-typescript)
- [How to develop custom controls in TypeScript?](#how-to-develop-custom-controls-in-typescript)
- [How to test in TypeScript?](#how-to-test-in-typescript)
- [How to use third-party libraries from npm in UI5 apps?](#how-to-use-third-party-libraries-from-npm-in-ui5-apps)
- [How to profit from TypeScript even when doing plain JavaScript development?](#how-to-profit-from-typescript-even-when-doing-plain-javascript-development)
- [What are the TypeScript projects and releases provided by the UI5 development team?](#what-are-the-typescript-projects-and-releases-provided-by-the-ui5-development-team)
- [Where to report issues? What is the support status?](#where-to-report-issues)
- [What is the future roadmap for TypeScript in UI5?](#what-is-the-future-roadmap-for-typescript-in-ui5)


### What is TypeScript about?
[TypeScript](typescriptlang.org) is an extension of JavaScript for providing type information and helps by error detection through type checking and by providing code assist in many supporting code editors (code completion, inline documentation,...). Browsers cannot execute TypeScript directly, a transpilation step is needed.

### What is the overall approach for using TypeScript in UI5 applications?
The UI5 team publishes type definition files describing all the UI5 APIs and types. With the help of these definitions, the TypeScript tools can do their job and support writing UI5 apps in TypeScript (and [even JavaScript](https://github.com/SAP-samples/ui5-cap-event-app/tree/js-with-typescript-support#applying-typescript-benefits-to-a-javascript-application)). The "typescript" branch of the "ui5-cap-event-app" project gives an [overview on UI5 code written in TypeScript](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md), typical traps and topics like debugging.

### How to set up a new UI5 app for TypeScript development?
By adding TypeScript and the UI5 type definitions as dev dependencies and setting up the transpilation step. This can be done in few minutes. The "ui5-typescript-helloworld" project can serve as copy template and provides a [detailed step-by-step guide](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) for setting up a TypeScript project.<br>
To get started even faster, there are two Yeoman-/[easy-ui5](https://github.com/SAP/generator-easy-ui5)-based TypeScript app templates:
* A [plain app template](https://github.com/ui5-community/generator-ui5-ts-app) which contains one view and basic routing setup and is explained in [this blog post](https://blogs.sap.com/2021/07/01/getting-started-with-typescript-for-ui5-application-development/)
* A [more comprehensive template](https://github.com/ui5-community/generator-ui5-ts-app-fcl) including a FlexibleColumnLayout and allowing OData service and entity configuration within the wizard.

### How can I get an end-to-end hands-on impression of creating and developing a UI5 app in TypeScript?
There is a [1-2-hours tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial), starting from scratch using an app template, extending the resulting app, and also covering advanced topics later on, like control development and integrating third-party libraries from npm.

### How to convert an existing UI5 app to TypeScript?
By doing most of the basic [setup for TypeScript projects](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) mentioned in the previous section and then following the [four conversion steps briefly explained here](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md#converting-ui5-apps-from-javascript-to-typescript). The detailed explanation [how to enhance JavaScript applications with type information](https://github.com/SAP-samples/ui5-cap-event-app/tree/js-with-typescript-support#applying-typescript-benefits-to-a-javascript-application) will also help because the process of tightening the checks and then fixing the resulting issues is the same - just use real TypeScript syntax instead of the JSDoc comments used in that guide!

### How to develop custom controls in TypeScript?
There is [documentation](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/custom-controls/README.md) and sample code in the ["custom-controls" branch of the Hello World application](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/custom-controls) which explains how custom controls can be implemented in TypeScript within UI5 applications. It makes use of a [tool for generating TypeScript interfaces for the control API](https://github.com/SAP/ui5-typescript/tree/main/packages/ts-interface-generator) which has been [released via npm](https://www.npmjs.com/package/@ui5/ts-interface-generator) in alpha state. There is also a sample project that demonstrates how flull-fledged [control libraries can be developed in TypeScript](https://github.com/SAP-samples/ui5-typescript-control-library).

### How to use third-party libraries from npm in UI5 apps?
Third-part libraries written for running in a browser environment can be easily used with very natural `npm install` and `import <moduleName> from 'dependencyName'`, resulting in code completion for those libraries and automatic transpiling into UI5's own AMD-like module format.
[Exercise 8 of the TypeScript tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial/tree/main/exercises/ex8) shows how this is done, including the required setup of the [ui5-tooling-modules](https://www.npmjs.com/package/ui5-tooling-modules) extension for the UI5 tooling.


### How to test in TypeScript?
This topic is not covered by samples and documentation yet. While using qunit is straightforward, the OPA APIs cause a few difficulties for which suitable solutions are still being worked on.

### How to profit from TypeScript even when doing plain JavaScript development?
The "js-with-typescript-support" branch of the "ui5-cap-event-app" project contains an extensive [guide how to add TypeScript-based benefits to an existing JavaScript app](https://github.com/SAP-samples/ui5-cap-event-app/blob/js-with-typescript-support/README.md) without actually switching to TypeScript development.

### What are the TypeScript projects and releases provided by the UI5 development team?
UI5 provides *generated* type definitions for the UI5 APIs, which let TypeScript understand all the involved types, so it can do its job. These definitions are provided both for OpenUI5 and for SAPUI5, in two different flavors each. The two flavors are:
1. the *legacy* type definitions ("ts-types") which allow the (discouraged!) usage of global objects like `sap.ui.Button`. They are not in our focus anymore and receive less support, but may still be needed for old application  projects.
1. the new type definitions ("ts-types<b>-esm</b>") which require the loading of dependencies as [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) like `import Button from "sap/ui/Button"`, encouraging the use of modern JavaScript language features

Multiplied out, as result, there are four different type definition packages:
* [`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm) (OpenUI5, new)
* [`@openui5/ts-types`](https://www.npmjs.com/package/@openui5/ts-types) (OpenUI5, legacy)
* [`@sapui5/ts-types-esm`](https://www.npmjs.com/package/@sapui5/ts-types-esm) (SAPUI5, new)
* [`@sapui5/ts-types`](https://www.npmjs.com/package/@sapui5/ts-types) (SAPUI5, legacy)

The "new OpenUI5" types are also [provided at npm as `@types/openui5`](https://www.npmjs.com/package/@types/openui5) via [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/openui5) because that's the standard name and place to share type definitions and easier to consume. The definition files are identical to `@openui5/ts-types-esm`, but the [versioning *within* a minor release is different](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/openui5/README.md#versioning) (which should not be noticeable, though).

In addition to the samples, tutorials and template generator mentioned elsewhere in this document, in the "[ui5-typescript](https://github.com/SAP/ui5-typescript)" repository, the generator is developed, which creates the UI5 type definitions from the JavaScript implementation and JSDoc as well as other tools (<b>NOTE</b>: the generator code in the repository is currently outdated and will NOT produce the type definitions mentioned above!).

### Where to report issues?
Note that there is no official support guarantee, as the type definitions and code samples are provided "as-is". However, it is in our interest to improve them and fix issues, so please report them:
* Issues in sample app code or documentation in the repositories linked above should be reported in the issue tracker of the respective GitHub repository. 
* Issues within the type definition files can *in general* be [reported in the issue tracker of the "ui5-typescript" project](https://github.com/SAP/ui5-typescript/issues).
* However, when those issues are clearly coming from missing or wrong API documentation within OpenUI5, they can be [reported as OpenUI5 issues](https://github.com/SAP/openui5/blob/master/CONTRIBUTING.md#report-an-issue). However, not all typing constructs of TypeScript can be expressed as JSDoc and converted to TypeScript by our generator (e.g. adding generics), so this should be mainly done for straightforward cases.


### What is the future roadmap for TypeScript in UI5?
The current focus is on working on the unfinished corners, like providing better support and guidance for topics like testing, but also on an overall improvement of the TypeScript usage experience, so we are reacting on feedback and issue reports.

## Other Resources

* The UI5con 2021 session on TypeScript ([recording available at YouTube](https://www.youtube.com/watch?v=5jfHNKQ48w8)) explains and demonstrates the overall approach for TypeScript and UI5
* Blog post by Volker Buzek: [How to debug a CAP app with UI5 TypeScript UI component with VS Code](https://blogs.sap.com/2021/11/16/debug-a-cap-app-with-ui5-typescript-ui-component-with-vs-code/)
* Blog post series "My first experience with TypeScript in UI5" by Wouter Lemaire:
    * [Introduction](https://blogs.sap.com/2021/11/19/my-first-experience-with-typescript-in-ui5-introduction/)
	* [Project Setup](https://blogs.sap.com/2021/11/23/my-first-experience-with-typescript-in-ui5-prepare-ts-project/)
	* [Adding a Base Controller](https://blogs.sap.com/2021/11/25/my-first-experience-with-typescript-in-ui5-basecontroller/)
	* [ODataModel Service Wrapper](https://blogs.sap.com/2021/11/30/my-first-experience-with-typescript-in-ui5-odatamodel-service-wrapper/)
	* [Using Classes and State/Model Manager](https://blogs.sap.com/2021/12/07/my-first-experience-with-typescript-in-ui5-classes-and-state-model-manager/)
	* [Final Part](https://blogs.sap.com/2021/12/08/my-first-experience-with-typescript-in-ui5-final/)
* Blog post by Lena Hammerer: [Full Stack TypeScript App for Cloud Foundry – Sample Repository](https://blogs.sap.com/2021/12/09/full-stack-typescript-app-for-cloud-foundry-sample-repository/), including a complete [sample app on GitHub](https://github.com/SAP-samples/btp-full-stack-typescript-app), which uses the SAP Cloud Application Programming Model (CAP) for Node.js.
## Status

The type definitions provided for UI5 are in an experimental **_Beta State_**. Significant changes are likely to occur, including potential **breaking changes**.

## Support

Please open [issues](https://github.com/SAP/ui5-typescript/issues) on GitHub.

## Contributing

See [CONTRIBUTING.md](https://github.com/SAP/ui5-typescript/blob/master/CONTRIBUTING.md).


## License

Copyright (c) 2022 SAP SE and ui5-typescript contributors.

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.

## Legal Information & Privacy Statement

This site is hosted by [GitHub Pages](https://pages.github.com/). Please see the [GitHub Privacy Statement](https://docs.github.com/en/github/site-policy/github-privacy-statement) for any information how GitHub processes your personal data.

Please note the [SAP terms of use](https://www.sap.com/corporate/en/legal/terms-of-use.html).

[Legal Statement / Impressum](https://www.sap.com/about/legal/impressum.html)

[Trademark Notice](https://www.sap.com/corporate/en/legal/trademark.html#third-party-trademark-notices)

