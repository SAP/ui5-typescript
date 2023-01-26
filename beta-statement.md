# "Experimental Beta" State

The UI5 type definitions are currently released as "experimental beta". This page explains what this means.

## TL;DR

There is no estimation yet when "beta" phase will be over, but actually "beta" or "not beta" doesn't make *that* much of a difference:<br>
On the one hand there are only few breaking changes planned right now (and they also have very limited impact). On the other hand we cannot guarantee 100% compatibility when beta state is over, either.

Get all the details below.


## What does "beta" mean with respect to the UI5 type definitions?

It means that we have not yet defined the compatibility contract for future releases of the UI5 type definitions.

It also means that we might make changes which require adaptation on your side after consuming updated type definitions. But don't let this statement make you shy away from using them! The needed adaptations will not be large and there isn't going to be a lot of difference once the types are no longer called "beta": there will be no 100% compatibility guarantee either.

In essence, we already do recommend using the currently published type definitions.

## Why will there still be breaking changes even after the type definitions have left "beta" stage?

* There are sometimes errors in the API documentation. Fixing them can change the type definitions in a way that causes TS compiler errors in code that previously compiled successfully.

  * *Example 1*: a method claims to always return a string, but it may also return "undefined". We will then fix the documentation and TypeScript code compiled with strictNullChecks=true which does not handle the "undefined" case will then no longer compile.
  * *Example 2*: a method has two parameters marked as "optional", but the documentation text explains that exactly one of them should be given. Once we notice such a situation, we might define two method signatures: one with only the first, one with only the second parameter. Application code which passes both parameters or none will then no longer compile successfully.
  * *Note:* in both cases the previous application code was not really correct. (But this doesn't mean that such a problem can only happen for incorrect code.) It did possibly work at runtime and will continue to do so with the fixed type definitions, but there will be a TypeScript error during compilation.

* Changes in TypeScript itself can either require changes on our side or make them very beneficial to do.
* A significant improvement for the users of the type definitions can only be achieved with a breaking change.
* A developer accidentally makes a change in JSDoc which leads to an incompatible change of the type definitions. Note that this is possible for the JavaScript version of UI5 as well. Typically, this would be considered a bug, and be fixed later.

## Our compatibility statement: what will "non-beta" mean, and what not?

Once we declare the type definitions to be no longer in "experimental beta state", this means that:

1.  We try to limit breaking changes to a minimum, but we can NOT completely avoid all breaking changes (see the section above for examples and reasons).
2.  We will announce any breaking changes we are aware of in the [Release Notes](releasenotes.md) and explain how to adapt your code.

    * Normally, a breaking change is indicated by an increased major version of the software. However, as the type definitions are versioned in sync with the matching UI5 version, we cannot use this version number. Also, the generator's version number may be used to rather describe incompatibilities of its usage, not of the generated type definitions, so we can't use this version number, either. Hence, we *might* introduce something like an additional generation level compatibility version which would be increased for incompatible changes.

The type definitions being declared "non-beta" might also coincide with publishing the new type definition generator, which due to its experimental nature is currently only available in-house.

## How to mitigate breaking changes? (*within* as well as *after* beta phase!)

This list of different alternatives to mitigate post-update issues is roughly sorted from "best, but most effort" to "basic, but easy":

1.  Actually change your code to match what the updated type definitions require.
2.  Override/extend the new UI5 type definitions on your side in a way that still allows your current usage. Depending on the nature of the change, this might be easily possible in a small *.ts file in your project - or maybe not.
3.  Use type "any" or some type cast in locations where problems occur. This is not the best solution, though, as you might lose type safety or hide errors doing so, and it may also not apply to all kinds of problems.
4.  Delay the adoption of new type definitions. *Note*: you can still update the UI5 runtime version! A version mismatch between type definitions and UI5 runtime only means that TypeScript does not yet know new UI5 APIs/controls. Anything that was available in the older UI5 version remains available. In fact, this is a trivial and very good solution for application code that is not supposed to be touched anymore because this code does not need to access new APIs and will always fit the type definitions it was written with.
5.  Use a long-term-maintenance version of UI5. This is anyway recommended for application code which is not touched intensely and hence requires the best level of compatibility. As long as the major/minor version of the UI5 runtime does not change, the type definitions - by definition - should not change either. You can go with this option for years and might have embarked on it anyway, even before referencing the type definitions.

## What kind of breaking changes are currently envisioned and hence delaying the end of the "beta" phase? And how to adapt in case they happen?

The following is NOT a list of tasks to do before beta phase ends, but rather a list of open/strange areas of the type definitions where we feel that some changes need to be done. Some of it may happen before "beta" phase ends, some after, some never. 

*Note*: the mentioned changes will not necessarily require adaptation on application code side, so they are rather a kind of plan for future development than a list of incompatible changes.

Also note that the list is not complete.

1.  Entities like "sap.m.BackgroundHelper" are currently declared as namespaces. However, they probably should rather be *named exports* of the respective library. We need to figure out why they are not and whether we can change that.

    * A change would mean that those entities need to be imported differently if used in application code.
    * UPDATE: in 1.111 this has been fixed (without any noticeable impact on applications).

1.  The currently generated type definitions contain methods with optional parameters where occasionally more parameter combinations are allowed by the type definitions than actually supported by the runtime. This happens when the JSDoc is not very precise and additional constraints are only specified in the documentation full-text (or not at all...).

    * A change would mean that your code calling such methods in an actually wrong way would need to be corrected to only pass allowed parameter combinations.

1.  Similarly and more generally, there may be other incorrect or imprecise declarations, leading to wrong or too loose definitions of APIs. One example is APIs which are wrongly claiming that they will never return null/undefined. But there could also be plain mistakes, where the JSDoc declares e.g. a wrong return type or parameter type for a method or even contains a typo within a method name. We definitely intend to fix such issues as we notice them.

    * A change/fix, however, would mean that your code calling such an API in an actually wrong way would need to be corrected.

1.  Right now, deprecated APIs are still contained in the type definitions. In favor of cleaner usage we might decide to completely omit older deprecated APIs from the type definitions. However, to not force adapting new applications, we would likely do this only for APIs that have been deprecated for a long time already, like e.g. since UI5 1.84 or earlier. We do not intend to also remove newer APIs at a later stage. At least for the foreseeable time, such a removal would only happen *before* the end of the beta phase.

    * A change would mean that you have to adapt code using very old deprecated APIs to use any newer replacements.

1.  Enums are declared in an asymmetric way in the UI5 type definitions: where UI5 APIs expect enums, real TypeScript enums AS WELL AS strings (the enum keys) are allowed. This reflects how enums are typically used in application code. However, where UI5 APIs return enums, according to the type definitions they ONLY return the real TypeScript enum entities, not strings.

    * Any change of this behavior would likely be compatible, as current TypeScript application code has to cope with receiving back enum entities and this will continue to work..

1.  Marker interfaces in the type definitions are generated with one specific boolean property that contains the qualified name of the interface:

    interface IBar {
        __implements__sap_m_IBar: boolean;
    }

    Any implementing class has to also declare this property. This has been done because TypeScript uses *structural* (not *nominal*) typing, which means it allows any object with the same shape to be used, not only objects that "officially" implement the respective interface. By adding this "magic property" we basically achieve more nominal typing using the same as [demonstrated in the TypeScript documentation](https://www.typescriptlang.org/play#example/nominal-typing).

    The [GitHub issue requesting nominal typing for TypeScript](https://github.com/Microsoft/TypeScript/issues/202) is still open, so it might be supported by some future TypeScript version. When this happens, our workaround may become unnecessary and we might use the official mechanism then.

    * A change would only affect those who developed classes implementing such marker interfaces (e.g. Bar-like custom controls implementing the "IBar" interface). It is not clear yet, however, what this change would exactly mean for them. Depending on how the feature will be implemented in TypeScript, they might have to adopt the official mechanism for nominally implementing the interface.

1.  The UI5 APIs related to OPA tests are not fitting TypeScript usage well yet. Further analysis will show what can be done about it.

    * It is not yet clear what a change would *exactly* mean.

1.  In general, we intend to remove any remaining globals.

    * A change would not affect anyone only using imported modules. Those who access globals will need to import the modules instead.
    * UPDATE: in 1.111 the majority of remaining globals were removed, see the [release notes](releasenotes.md).

1.  The generated type definitions still cause a (low) number of TypeScript errors (actually only *one* in sap.fe.macros.d.ts) and a few dtslint warnings (several in sap.ushell and other libraries, but also one in the v2.ODataListBinding). We might try to get rid of these.

    * It is not clear whether and how they will be addressed. To pick one example: the proposal given by dtslint with the "unified-signatures" error message regarding the v2.ODataListBinding is misleading and unlikely to lead to any change.

1.  We could make better use of generics and generally embrace TypeScript concepts better.

    * How such changes could look is not clear yet. Also, this is rather a long-term goal.

1.  Currently, the type definitions are single files (one per UI5 library), but published as *one* big package on npm. We consider releasing one package per library.

    * A complete switch would mean that the dependencies to the types need to be changed (i.e. replace the dependency in package.json by one dependency per library).

1.  We intend to rename the type definition packages from @openui5/ts-types-esm to @openui5/types (and the same for @sapui5). This step will probably happen together with ending the "beta" phase.

    * Adapting to this means changing the dependency name of the types in package.json once you transition from using the "beta" types to the "final" ones.
    * UPDATE: we will NOT change the current delivery from a separate package to within the libraries for the time being. This eases staying on an older version of the types while updating the UI5 runtime (this is one of the options to mitigate incompatible changes in the types).

## What is the plan regarding different TypeScript versions? Which ones will each type definition release be compatible with?

There are three version dimensions:
1. UI5 versions
2. generator versions (resulting in potentially incompatible type definitions), and 
3. TypeScript versions.

We cannot guarantee that all possible combinations of these will be supported/available. In general, we aim for testing type definitions with the version of TypeScript which is current at the time of their release. Anything beyond that we will have to see.

