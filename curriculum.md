# Steps to Learn Developing UI5 Apps in TypeScript

This is how we recommend you as experienced UI5 application developer to learn programming UI5 apps in TypeScript.

It should not be understood as a strict curriculum to follow, but rather as recommendation. You might already know parts or not need other parts for your work.

## Condensed Summary

1. Don't be afraid of "learning a new language" - it isn't. It's just JavaScript plus some type information.
1. Get familiar with TypeScript by reading "[TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)" and "[The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)".
1. Learn about modern JavaScript [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), because you use them to write UI5 apps in TypeScript.
1. Follow the [UI5 TypeScript Tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial) to get end-to-end hands-on experience developing UI5 apps in TypeScript.
1. Read this [step-by-step documentation for creating a UI5 TypeScript setup from scratch](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md), so you understand how the transpilation works.
1. In case you get to develop controls, learn it [here for single controls in an app](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/custom-controls) and [here for entire control libraries in TypeScript](https://github.com/SAP-samples/ui5-typescript-control-library).

For additional experience, you can [see some realistic TypeScript app code explained](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md).

In any case, keep in mind that https://sap.github.io/ui5-typescript is the primary source of information regarding the use of UI5 with TypeScript, providing many additional resources, and important news can be found in the [release notes](https://sap.github.io/ui5-typescript/releasenotes.html).



## The same, but with more explanations

### Step 1: Don't be afraid

Don't be afraid of having to "learn a new language": TypeScript is not a new language, but basically JavaScript with some additional type information on top.<br>Some suggest thinking of TypeScript as a linter (code checker) - one with type assertions written in the code. Which is not far off as TypeScript only checks the code at development time and is not in the game anymore at runtime.

Not only will most of what you write still be JavaScript, you will thanks to the transpiling even be allowed to write more modern JavaScript.


### Step 2: Get familiar with TypeScript

The first step should be to read the "[TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)" introduction written by the authors of TypeScript. It builds on your JavaScript knowledge and within few minutes gives an impression what TypeScript adds on top.

You should not stop there, though, but follow the recommendation to continue reading "[The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)" - the most important sections being the top-level topics like "Everyday Types", "Functions", "Object Types", "Classes" and "Modules", but also "Mapped Types" below "Type Manipulation".

There are plenty of other TypeScript introductions, of course, which might also be valuable.

The ["TypeScript Playground](https://www.typescriptlang.org/play)" is a great place to try things out quickly.


### Step 3: Get familiar with modern JavaScript

Application code written in TypeScript needs to be transpiled to JavaScript, anyway. While during this transpilation many (not all) modern JavaScript features can be compiled to also run in very old browsers, the browsers currently supported by UI5 anyway offer great support for modern JavaScript features.

However: the UI5 type definitions actually sort of enforce using two of these modern JavaScript features - in particular ES modules (`import`/`export` instead of `sap.ui.require(...)` or `sap.ui.define(...)`) and ES classes (`class Button {...}` instead of `Control.extend("Button", {...})`).<br>
Hence, read the documentation on [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

But it might still be a good opportunity to catch up on other useful JS language features you might have missed. The [features explained in this introduction](https://babeljs.io/docs/en/learn) are actually not sooo new (ES2015), but still rarely seen in UI5 application code. Plus, the article has first-hand information about feature support by Babel (the transpiler also used in UI5 TypeScript projects).


### Step 4: Get hands-on experience of UI5 and TypeScript 

Do the exercises in the [UI5 TypeScript Tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial) to get end-to-end hands-on experience how UI5 apps are developed in TypeScript. Within about two hours, it covers everything from creating the app from scratch (using the Easy-UI5 Generator) to developing controls in TypeScript and integrating third-party libraries.


### Step 5: Understand how the transpilation setup works

In the tutorial, the setup is automatically created by the template. But it is good to know how it works even when you don't need to do the setup on your own. Hence, read [this step-by-step documentation for creating a UI5 TypeScript setup from scratch](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md). It explains all the bits and pieces that control the transpilation and project structure.<br>
The tiny app in the repository also brings these pieces to life.


### Step 6: Learn developing controls in TypeScript - in case you need to

In case you get to develop controls in TypeScript, there is an [introduction to developing custom controls](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/custom-controls) as well as one for [developing entire control libraries in TypeScript](https://github.com/SAP-samples/ui5-typescript-control-library).


### Step 7: Peek into a more realistic app

In 2020 we have developed a small UI5 app using OData V4 that has been [used productively by more than 100,000 end-users](https://news.sap.com/2020/04/rueckholprogramm-de-emergency-repatriation-covid-19/). A sample app very close to that one and explaining what's going on in the code has been published later and then [converted to TypeScript](https://github.com/SAP-samples/ui5-cap-event-app/tree/typescript/packages/ui-form/src).<br>
Apart from simply looking at the code, you can also read this [documentation](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md) highlighting some of the code parts with respect to TypeScript usage, and providing some more general explanations, including steps for [converting apps to TypeScript](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript).<br>
Parts of this (very first) documentation might be overlapping with the other sources above, but other parts are unique.


### Step 8: Know where to get more information

In general, https://sap.github.io/ui5-typescript/ is the primary source of information regarding the use of UI5 with TypeScript. It provides additional information, like how to report issues in the type definitions, links to further resources, like blog posts, videos etc., and keeps getting updated.

The [release notes](https://sap.github.io/ui5-typescript/releasenotes.html) are the place to stay informed about new features and changes.



# Legal Information & Privacy Statement

This site is hosted by [GitHub Pages](https://pages.github.com/). Please see the [GitHub Privacy Statement](https://docs.github.com/en/github/site-policy/github-privacy-statement) for any information how GitHub processes your personal data.

Please note the [SAP terms of use](https://www.sap.com/corporate/en/legal/terms-of-use.html).

[Legal Statement / Impressum](https://www.sap.com/about/legal/impressum.html)

[Trademark Notice](https://www.sap.com/corporate/en/legal/trademark.html#third-party-trademark-notices)