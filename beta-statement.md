# "Experimental Beta" State

Versions lower than 1.116.0 of the UI5 type definitions were released as "experimental beta". 

With version 1.116.0, they are released for general usage. We encourage you to use UI5 with TypeScript for an improved development efficiency and experience. TypeScript itself keeps evolving and we try to further improve the UI5 type definitions, so there could be potential incompatible changes between versions of the type definitions. However, such incompatibilities would only affect the compilation of your code but will not cause runtime issues in your application. Plus, there are various ways to easily deal with them: you can, for example, simply keep using the previous version of the UI5 type definitions together with an updated UI5 runtime.<br>
To keep track of any significant changes, observe the [Release Notes](releasenotes.md).

## Why will there still be breaking changes even after the type definitions have left "beta" stage?

* There are sometimes errors in the API documentation. Fixing them can change the type definitions in a way that causes TS compiler errors in code that previously compiled successfully.

  * *Example 1*: a method claims to always return a string, but it may also return "undefined". We will then fix the documentation and TypeScript code compiled with strictNullChecks=true which does not handle the "undefined" case will then no longer compile.
  * *Example 2*: a method has two parameters marked as "optional", but the documentation text explains that exactly one of them should be given. Once we notice such a situation, we might define two method signatures: one with only the first, one with only the second parameter. Application code which passes both parameters or none will then no longer compile successfully.
  * *Note:* in both cases the previous application code was not really correct. (But this doesn't mean that such a problem can only happen for incorrect code.) It did possibly work at runtime and will continue to do so with the fixed type definitions, but there will be a TypeScript error during compilation.

* Changes in TypeScript itself can either require changes on our side or make them very beneficial to do.
* A significant improvement for the users of the type definitions can only be achieved with a breaking change.
* A developer accidentally makes a change in JSDoc which leads to an incompatible change of the type definitions. Note that this is possible for the JavaScript version of UI5 as well. Typically, this would be considered a bug, and be fixed later.

## Our compatibility statement: what does "non-beta" mean, and what not?

When the type definitions are no longer in "experimental beta state" starting with version 1.116.0, this means that:

1.  We try to limit breaking changes to a minimum, but we can NOT completely avoid all breaking changes (see the section above for examples and reasons).
2.  We will announce any breaking changes we are aware of in the [Release Notes](releasenotes.md) and explain how to adapt your code.

    * Normally, a breaking change is indicated by an increased major version of the software. However, as the type definitions are versioned in sync with the matching UI5 version, we cannot use this version number. Also, the generator's version number may be used to rather describe incompatibilities of its usage, not of the generated type definitions, so we can't use this version number, either. Hence, we *might* introduce something like an additional generation level compatibility version which would be increased for incompatible changes.

Even though the type definitions are "non-beta" with 1.116.0, the new type definition generator is currently still only available in-house.

## How to mitigate breaking changes? (*within* as well as *after* beta phase!)

This list of different alternatives to mitigate post-update issues is roughly sorted from "best, but most effort" to "basic, but easy":

1.  Actually change your code to match what the updated type definitions require.
2.  Override/extend the new UI5 type definitions on your side in a way that still allows your current usage. Depending on the nature of the change, this might be easily possible in a small *.ts file in your project - or maybe not.
3.  Use type "any" or some type cast in locations where problems occur. This is not the best solution, though, as you might lose type safety or hide errors doing so, and it may also not apply to all kinds of problems.
4.  Delay the adoption of new type definitions. *Note*: you can still update the UI5 runtime version! A version mismatch between type definitions and UI5 runtime only means that TypeScript does not yet know new UI5 APIs/controls. Anything that was available in the older UI5 version remains available. In fact, this is a trivial and very good solution for application code that is not supposed to be touched anymore because this code does not need to access new APIs and will always fit the type definitions it was written with.
5.  Use a long-term-maintenance version of UI5. This is anyway recommended for application code which is not touched intensely and hence requires the best level of compatibility. As long as the major/minor version of the UI5 runtime does not change, the type definitions - by definition - should not change either. You can go with this option for years and might have embarked on it anyway, even before referencing the type definitions.

## What is the plan regarding different TypeScript versions? Which ones will each type definition release be compatible with?

There are three main version dimensions:
1. UI5 versions
2. generator versions (resulting in potentially incompatible type definitions), and 
3. TypeScript versions.

Plus, there are also types-related tools like the @ui5/ts-interface-generator for control development and the ui5-tooling-transpile middleware and task, which are developed and versioned independently, as well as different NodeJS version.

We cannot guarantee that all possible combinations of these will be supported/available. In general, we aim for testing type definitions with the version of TypeScript which is current at the time of their release. Anything beyond that we will have to see.


# Legal Information & Privacy Statement

This site is hosted by [GitHub Pages](https://pages.github.com/). Please see the [GitHub Privacy Statement](https://docs.github.com/en/github/site-policy/github-privacy-statement) for any information how GitHub processes your personal data.

Please note the [SAP terms of use](https://www.sap.com/corporate/en/legal/terms-of-use.html).

[Legal Statement / Impressum](https://www.sap.com/about/legal/impressum.html)

[Trademark Notice](https://www.sap.com/corporate/en/legal/trademark.html#third-party-trademark-notices)
