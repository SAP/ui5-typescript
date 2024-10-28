# UI5-TypeScript

This page provides an overview of all official TypeScript-related resources in the UI5 world.

To get started quickly with a hands-on example, you can jump into the [UI5 TypeScript Tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial) right away (or watch the [video](https://www.youtube.com/watch?v=CRKNIiXZN6U) walking you through this tutorial), or, for a more structured approach, [follow the learning guidance outlined here](curriculum.md).

If your development is based on SAP Fiori Elements, using the SAP Fiori tools, and you are less interested in the basic technical setup and general TypeScript coding introduction, then [this workshop](https://github.com/c-kobo/ui5con2023/) is for you. A [presentation recording](https://www.youtube.com/watch?v=aCyMC27ED80&t=3703s) and [resulting repository](https://github.com/MariusFreitag/ui5con2023) demonstrates important aspects in a more compact way.

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
- [Are the type definitions ready for productive use?](#are-the-type-definitions-ready-for-productive-use)
- [Where can I find release notes or news about changes in the UI5 type definitions?](#where-can-i-find-release-notes-or-news-about-changes-in-the-ui5-type-definitions)
- [Where can I find the types for UI5 2.0?](#where-can-i-find-the-types-for-ui5-20)
- [What is the future roadmap for TypeScript in UI5?](#what-is-the-future-roadmap-for-typescript-in-ui5)
- [What if I have further questions?](#what-if-i-have-further-questions)


### What is TypeScript about?
[TypeScript](typescriptlang.org) is an extension of JavaScript for providing type information and helps by error detection through type checking and by providing code assist in many supporting code editors (code completion, inline documentation,...). Browsers cannot execute TypeScript directly, a transpilation step to JavaScript is needed, which basically strips away the type information.

### What is the overall approach for using TypeScript in UI5 applications?
The UI5 team publishes type definition files describing all the UI5 APIs and types. With the help of these definitions, the TypeScript compiler and the editors can do their job and support writing UI5 apps in TypeScript (and [even JavaScript](https://github.com/SAP-samples/ui5-cap-event-app/tree/js-with-typescript-support#applying-typescript-benefits-to-a-javascript-application)). The "typescript" branch of the "ui5-cap-event-app" project gives an [overview on UI5 code written in TypeScript](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md), typical traps and topics like debugging.

### How to set up a new UI5 app for TypeScript development?
By adding TypeScript and the UI5 type definitions as dev dependencies and setting up the transpilation step. The fastest way to get started are two Yeoman-/[easy-ui5](https://github.com/SAP/generator-easy-ui5)-based TypeScript app templates:
* A [plain app template](https://github.com/ui5-community/generator-ui5-ts-app) which contains one view and basic routing setup and is explained in [this blog post](https://blogs.sap.com/2021/07/01/getting-started-with-typescript-for-ui5-application-development/)
* A [more comprehensive template](https://github.com/ui5-community/generator-ui5-ts-app-fcl) including a FlexibleColumnLayout and allowing OData service and entity configuration within the wizard.

Exercises 0 and 1 of the [UI5 TypeScript Tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial) walk you through using the simple app template and demonstrate how to continue from there.

If you prefer understanding how everything works under the hood in this template, you can create the setup in few minutes on your own. A [detailed step-by-step guide](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) shows how to create the "ui5-typescript-helloworld" project, which is the same as what you get using the template.

### How can I get an end-to-end hands-on impression of creating and developing a UI5 app in TypeScript?
There is a [2-hours tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial), starting from scratch using an app template, extending the resulting app, and covering further topics later on, like control development, integrating third-party libraries from npm, and testing.<br>
A very comprehensive look at all the important concepts in UI5 and how they are being used in TypeScript can be found in the [TypeScript Walkthrough](https://github.com/SAP-samples/ui5-typescript-walkthrough/).

### How to convert an existing UI5 app to TypeScript?
By doing most of the basic [setup for TypeScript projects](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) mentioned [above](#how-to-set-up-a-new-ui5-app-for-typescript-development) and then following the [four conversion steps briefly explained here](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md#converting-ui5-apps-from-javascript-to-typescript). The detailed explanation [how to enhance JavaScript applications with type information](https://github.com/SAP-samples/ui5-cap-event-app/tree/js-with-typescript-support#applying-typescript-benefits-to-a-javascript-application) will also help because the process of tightening the checks and then fixing the resulting issues is the same - just use real TypeScript syntax instead of the JSDoc comments used in that guide!

### How to develop custom controls in TypeScript?
[Exercise 5 of the TypeScript tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial/tree/main/exercises/ex5) is all about control development. Furthermore, there is [documentation](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/custom-controls/README.md) and sample code in the ["custom-controls" branch of the Hello World application](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/custom-controls) which explains how custom controls can be implemented in TypeScript within UI5 applications.<br>
Control development makes use of a [tool for generating TypeScript interfaces for the control API](https://github.com/SAP/ui5-typescript/tree/main/packages/ts-interface-generator) which has been [released via npm](https://www.npmjs.com/package/@ui5/ts-interface-generator) in alpha state.<br>
There is also a sample project that demonstrates how flull-fledged [control libraries can be developed in TypeScript](https://github.com/SAP-samples/ui5-typescript-control-library).

### How to use third-party libraries from npm in UI5 apps?
Third-part libraries written for running in a browser environment can be easily used with very natural `npm install` and `import <moduleName> from 'dependencyName'`, resulting in code completion for those libraries and automatic transpiling into UI5's own AMD-like module format.
[Exercise 4 of the TypeScript tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial/tree/main/exercises/ex4) shows how this is done, including the required setup of the [ui5-tooling-modules](https://www.npmjs.com/package/ui5-tooling-modules) extension for the UI5 tooling.


### How to test in TypeScript?
How to write tests is documented in [exercise 6 of the TypeScript tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial/blob/main/exercises/ex6/README.md) and in the [`testing` branch of the "Hello World" sample app](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/testing). While using qunit is straightforward, the OPA APIs cause a few difficulties in TypeScript, which we avoid using a simplified suggestion for how to write the pages and journeys.

### How to profit from TypeScript even when doing plain JavaScript development?
The "js-with-typescript-support" branch of the "ui5-cap-event-app" project contains an extensive [guide how to add TypeScript-based benefits to an existing JavaScript app](https://github.com/SAP-samples/ui5-cap-event-app/blob/js-with-typescript-support/README.md) without actually switching to TypeScript development.

### What are the TypeScript projects and releases provided by the UI5 development team?

Type definitions, samples, and various tools. In detail:

UI5 provides *generated* type definitions for the UI5 APIs, which let TypeScript understand all the involved types, so it can do its job. These definitions are provided both for OpenUI5 and for SAPUI5, in two different flavors each. The two flavors are:
1. the *legacy* type definitions ("ts-types") which allow the (discouraged!) usage of global objects like `sap.ui.Button`. They are not in our focus anymore and receive less support, but may still be needed for old application projects.
1. the new type definitions (simply "types", used to be named "ts-types<b>-esm</b>" before release 1.113) which require the loading of dependencies as [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) like `import Button from "sap/ui/Button"`, encouraging the use of modern JavaScript language features

Multiplied out, as result, there are currently four different type definition packages:
* [`@openui5/types`](https://www.npmjs.com/package/@openui5/types) (OpenUI5, new)
* [`@openui5/ts-types`](https://www.npmjs.com/package/@openui5/ts-types) (OpenUI5, legacy)
* [`@sapui5/types`](https://www.npmjs.com/package/@sapui5/types) (SAPUI5, new)
* [`@sapui5/ts-types`](https://www.npmjs.com/package/@sapui5/ts-types) (SAPUI5, legacy)

Plus for older versions before 1.113 (plus a few releases afterwards), the "types" ones were available under a different name:
* [`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm)
* [`@sapui5/ts-types-esm`](https://www.npmjs.com/package/@sapui5/ts-types-esm)

The "new OpenUI5" types are additionally [provided at npm as `@types/openui5`](https://www.npmjs.com/package/@types/openui5) via [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/openui5) because that's the standard package name and place to share type definitions and easier to consume. These definition files are identical to `@openui5/types`, but the [versioning *within* a minor release](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/openui5/README.md#versioning) and [how the jQuery and QUnit types are referenced](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/openui5#jquery-and-qunit-references-and-their-versions) are slightly different (this should usually not be noticeable, though).

In addition to the samples, tutorials and template generator mentioned elsewhere in this document, in the "[ui5-typescript](https://github.com/SAP/ui5-typescript)" repository, the generator is developed, which creates the UI5 type definitions from the JavaScript implementation and JSDoc as well as other tools (<b>NOTE</b>: the generator code in the repository is currently outdated and will NOT produce the type definitions mentioned above!).<br>
For control development in TypeScript, the [control interface generator](https://www.npmjs.com/package/@ui5/ts-interface-generator) is provided and the [ui5-tooling-transpile](https://www.npmjs.com/package/ui5-tooling-transpile) task and middleware nicely integrates all TypeScript transpilation related tasks into the UI5 build tooling, so you are not bothered with configuring the Babel transpiler.

### Where to report issues?
* Issues in sample app code or documentation in the repositories linked above should be reported in the issue tracker of the respective GitHub repository. 
* Issues within the type definition files can have one of two origins and trying to choose the correct place to report them helps us dealing with them faster:
  1. Some issues stem from missing or wrong API documentation within OpenUI5/SAPUI5. This is often the case when one (/some) specific API has wrong types or is missing. Such issues can be reported in the regular support channels where functional issues for the same code would be reported ([OpenUI5 issue tracker](https://github.com/SAP/openui5/blob/master/CONTRIBUTING.md#report-an-issue) and public or internal SAPUI5 support components).
  2. Other issues are caused by how the type definitions are generated from the JSDoc in the UI5 sources. The "dts-generator" may accidentally omit certain parts of APIs or translate them in a wrong way. Such issues would typically be visible for many similar APIs across the UI5 code base. These issues can be [reported in the issue tracker of this "ui5-typescript" project on GitHub](https://github.com/SAP/ui5-typescript/issues).

Before reporting an issue, please check the [list of known issues](known-issues.md).


### Are the type definitions ready for productive use?

Yes, starting with version 1.116.0 (mid July 2023) they are.

We encourage you to use UI5 with TypeScript for an improved development efficiency and experience. TypeScript itself keeps evolving and we try to further improve the UI5 type definitions, so there could be potential incompatible changes between versions of the type definitions. However, such incompatibilities would only affect the compilation of your code but will not cause runtime issues in your application. Plus, there are various ways to easily deal with them: you can, for example, simply keep using the previous version of the UI5 type definitions together with an updated UI5 runtime.<br>
To keep track of any significant changes, observe the [Release Notes](releasenotes.md).

Versions prior to 1.116.0 are in "experimental beta" state, which means an increased likelyhood of issues and of incompatibilities with upgrades. However, the list of known such changes is available in the [Release Notes](releasenotes.md), so you know what is ahead on the road to version 1.116. Note that "non-beta" releases do not come with a 100% compatibility guarantee either.<br>
Find all the details [here](beta-statement.md).

If you are bound to a UI5 runtime version lower than 1.116.0, you can still consider using it with UI5 types 1.116.0 or later. You can definitely encounter issues such as APIs being offered by TypeScript which do not actually exist yet in your runtime version of UI5, but this is in fact not different at all from regular JavaScript development, where - when using the newest version of the API documentation you would also have to check the "since" annotation of APIs before using them. And of course such a new API would be noticed as soon as the code is executed. There is no support for this usage, but it could improve the usage experience a lot, as the types have become better and better.

### Where can I find release notes or news about changes in the UI5 type definitions?

In short: [here](releasenotes.md).<br>
There is not *one specific* changelog for the type definitions, as they are influenced by changes in three different areas:
1. the **JSDoc** across all UI5 code, which is the source of API information
2. the UI5 JSDoc **parser** (extending the original JSDoc parser), which parses and processes the JSDoc
3. the UI5 **type generator**, which turns the processed API information into TypeScript type definitions

The former two are included in the general UI5 "[What's New](https://ui5.sap.com/#/topic/99ac68a5b1c3416ab5c84c99fefa250d)" and [Change Log](https://ui5.sap.com/#/releasenotes.html) (which contain also many changes not affecting the type definitions, though).<br>
The type generator, on the other hand, influences *how* the types are generated and can hence have a huge impact as well, independently of any UI5 changes. It is currently not developed in this repository, but for the time being we list any significant or even *breaking* changes on the [release notes](releasenotes.md) page (also ones originating from the UI5 JSDoc or parser).

### Where can I find the types for UI5 2.0?

The type definitions for the OpenUI5 2.0 preview are published as part of its nightly release at https://sdk.openui5.org/nightly/2/-/types.tgz. The [`ui5-2.0` branch](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/ui5-2.0) of the ui5-typescript-helloworld sample app demonstrates how these type definitions can be used for trying them: simply reference the types package in `package.json` via URL like
   ```
   "@types/openui5": "https://sdk.openui5.org/nightly/2/-/types.tgz"
   ```
   The difference of this package to the 1.x types is mainly that the deprecated methods/classes/libraries of UI5 1.x have been removed.<br>
   The SAPUI5 2.x types are not available yet.

### What is the future roadmap for TypeScript in UI5?
The current focus is working on an overall improvement of the TypeScript usage experience, so we are reacting on feedback and issue reports.

### What if I have further questions?

For more specific questions, please see [the FAQ](faq.md). If it does not contain an answer, please try asking the [community](https://openui5.org/community/) or in cases that are interesting for a wider audience and go beyond a specific issue with your code open an issue in the [GitHub issue tracker](https://github.com/SAP/ui5-typescript/issues).


## Other Deliverables

* There are also type definitions describing the manifest.json files. They are published inside [@ui5/manifest](https://www.npmjs.com/package/@ui5/manifest) on npm. They would only be useful, though, wehn you write code interacting with `manifest.json` content.

## Other Resources

While the already mentioned UI5 TypeScript [tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial) is the best starting point and [its recording](https://www.youtube.com/watch?v=CRKNIiXZN6U) also comes with a short introduction to TypeScript and how it is transpiled in UI5 apps, there are other not yet mentioned resources which provide partly complementary content:

* The UI5con 2021 session on TypeScript ([recording available at YouTube](https://www.youtube.com/watch?v=5jfHNKQ48w8)) explains and demonstrates the overall approach for TypeScript and UI5 but is outdated regardign the build pipeline setup.
* The ["UI5 NewsCast" Podcast session #27 ("Bringing TypeScript to UI5")](https://podcast.opensap.info/ui5-newscast/2022/06/29/ui5-newscast-027-bringing-typescript-to-ui5/) explains background, history and the work being done in UI5 for TypeScript support.
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

Starting with version 1.116.0, the UI5 type definitions are provided for general use.

We encourage you to use UI5 with TypeScript for an improved development efficiency and experience. TypeScript itself keeps evolving and we try to further improve the UI5 type definitions, so there could be potential incompatible changes between versions of the type definitions. However, such incompatibilities would only affect the compilation of your code but will not cause runtime issues in your application. Plus, there are various ways to easily deal with them: you can, for example, simply keep using the previous version of the UI5 type definitions together with an updated UI5 runtime.<br>
To keep track of any significant changes, observe the [Release Notes](releasenotes.md).

 Lower versions are in an experimental **_Beta State_** and significant changes on the way to 1.116.0 can be looked up in the [release notes](releasenotes.md).

## Support

The type definitions and tools for TypeScript support are provided as-is. For reporting issues, please see [the respective section above](#where-to-report-issues). 

## Contributing

See [CONTRIBUTING.md](https://github.com/SAP/ui5-typescript/blob/master/CONTRIBUTING.md).


## License

Copyright (c) 2021-2024 SAP SE and ui5-typescript contributors.

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.

## Legal Information & Privacy Statement

This site is hosted by [GitHub Pages](https://pages.github.com/). Please see the [GitHub Privacy Statement](https://docs.github.com/en/github/site-policy/github-privacy-statement) for any information how GitHub processes your personal data.

Please note the [SAP terms of use](https://www.sap.com/corporate/en/legal/terms-of-use.html).

[Legal Statement / Impressum](https://www.sap.com/about/legal/impressum.html)

[Trademark Notice](https://www.sap.com/corporate/en/legal/trademark.html#third-party-trademark-notices)

