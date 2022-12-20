# Release Notes for the UI5 Type Definitions

This page provides information about changes in the UI5 type definitions. It does *not* mention any new UI5 APIs (they are covered by the general UI5 "[What's New](https://ui5.sap.com/#/topic/99ac68a5b1c3416ab5c84c99fefa250d)" and [Change Log](https://ui5.sap.com/#/releasenotes.html)), but focuses on **changes in how the JSDoc is parsed and turned into type definitions**. Some significant JSDoc changes done with the type definitions in mind are also contained.

The list is manually curated and not necessarily complete. Every release usually also contains several further JSDoc fixes which are meant to improve the type definitions.

Changes are grouped by UI5 version, as parser and generator changes so far only affect type definitions of later UI5 releases.

When doing control development also be aware of the [@ui5/ts-interface-generator change log](https://github.com/SAP/ui5-typescript/blob/main/packages/ts-interface-generator/CHANGELOG.md).

## 1.110 (January 2022)

* FEATURE: the `metadata` object specified when defining a new control (or other ManagedObject) has now been formally typed in [sap.ui.core.Element.MetadataOptions](https://openui5nightly.hana.ondemand.com/api/sap.ui.core.Element.MetadataOptions) and related types.<br>
This not only helps with [issues when inheriting from TypeScript-developed controls](https://github.com/SAP/ui5-typescript/issues/338), but also gives type safety and code completion for those metadata objects:<br>
![This is an image](./assets/metadata_object.png)


## 1.109 (end of November 2022)

no news


## 1.108 (November 2022)

* FEATURE: the JSDoc parser and dts-generator have been improved to support optional properties and nullable map entries. Examples:
  ```
  @param {{width: number, height=: number}} dimensions - height is optional
  ```
  in JSDoc ends up in the *.d.ts file as:
  ```ts
  dimensions: {width: number; height?: number;}
  ```
  And
  ```
  @param {Object<string,string?>} someMap - with nullable entries
  ```
  in JSDoc ends up in the *.d.ts file as:
  ```ts
  someMap: Record<string, string | null>
  ```
  There are not many occurrences of this yet (one is [`FacetFilterList.getSelectedKeys(...)`](https://sdk.openui5.org/api/sap.m.FacetFilterList#methods/getSelectedKeys)), but this feature can now be used in the ongoing improvements of the UI5 JSDoc.

## 1.107 (October 2022)

no news

## 1.106 (September 2022)

* FIX: The JSDoc for [100+ UI5 APIs in sap.ui.core](https://github.com/SAP/openui5/commit/5c24494c5ca88a77904cd8d921937ad530a21475) and [~20 more in other libraries](https://github.com/SAP/openui5/commit/f066ae92beed86211d1f547ab5fb08f1eae1aec6) has been fixed to potentially return `undefined`/`null`. Furthermore, [a fix in the central generation of accessor methods](https://github.com/SAP/openui5/commit/e205887bd0cd5df90ca2a9d8c85ede533967d12f) has done the same (they can also return `null`) for dozens of named `removeAssociation` calls like `removeAriaDescribedBy`.<br>
If you are using `strictNullChecks=true`, you now have to verify that the result of these methods is not nullish before using it. So this change is *potentially breaking* (see the first bullet point for the 1.105 release below for details and an example).

* FIX: 20-30 API documentations, in particular return types, [have been fixed or improved with a more detailed structure description](https://github.com/SAP/openui5/commit/7f29468a4d06897c70c0e7bb810a7d5d77882f12) to ease their usage with TypeScript.


## 1.105 (August 2022)

* BREAKING: *potentially* breaking *when using strictNullChecks=true* are the JSDoc fixes mentioned below, which add `undefined` to the returned types of some APIs:<br>
E.g. in case you have been using `this.getView().doSomething(...)` in a controller, TypeScript will show an error after updating to the 1.105 types, saying that `getView()` might return "undefined" and you cannot use the result without checking first.<br>
A possible solution is to change the code like this
  ```ts
  const view = this.getView();
  if (view) {
    view.doSomething();
  }
  ```
  This seems tedious, as in "normal" controllers, when "properly" set up with a view, always the actual view will be returned - never "undefined". But the point of the "strictNullChecks" option of TypeScript is to protect from running into an issue at runtime where an object is not defined. This protection can only work when every posible "undefined" value is properly documented.

* FEATURE: the JSDoc parser plugin has been [enhanced](https://github.com/SAP/openui5/commit/dae14be1a2b7ad7a4dbe4b084ba925328ca3da5e) to no longer collapse all object structure descriptions into the type "object", but to preserve the structure, so it gets part of the type definitions.<br>
This means the type information about return structures can now be more detailed than with the JSDoc default behavior. This has an immediate positive effect on those APIs which already had precise descriptions and allows further upcoming improvements (e.g. the return type fix mentioned two bullet points below).

* FIX: The JSDoc for some central UI5 APIs [has been fixed](https://github.com/SAP/openui5/commit/78e6c31c36068a62de7df591b8d2c10d925445c7) to potentially return `undefined`. (Implementation-wise there was no change - `undefined` was returned in certain circumstances before - and the fulltext documentation already mentioned it, but the type definitions did not.)<br>
If you are using [`strictNullChecks=true`](https://www.typescriptlang.org/tsconfig/#strictNullChecks), you now have to verify that the result of these methods is not nullish before using it. So this change is *potentially breaking* (see the first item above). The affected methods are:
  * `sap/ui/core/mvc/Controller.getView()`
  * `sap/ui/core/mvc/Controller.byId()`
  * `sap/ui/core/mvc/Controller.getOwnerComponent()`
  * `sap/ui/core/mvc/View.byId()`
  * `sap/ui/core/mvc/View.getLocalId()`
  * `sap/ui/core/routing/Router.getRoute()`

* FIX: Dozens of API documentations, in particular return types, [have been fixed or improved with a more detailed structure description](https://github.com/SAP/openui5/commit/a43178b8980b00b5c198d0640864f639de3f60b6) to ease their usage with TypeScript.



## 1.104 (July 2022)

no news

## 1.103 (June 2022)

* INTERNAL: set the minimum TypeScript version for dtslint checks to 4.3

## 1.102 (May 2022)

* FEATURE: Allow binding strings for properties and aggregations.<br>
This has a huge impact on the type definitions across all of UI5: before this change the types did not allow binding strings like `{count}` in `new MyControl({count: "{count}"})` for non-string properties.

## 1.101 (April 2022)

no news

## 1.100 (March 2022)

* FEATURE: add jQuery and qUnit definitions to the ts-type-esm packages (also THREE.js for SAPUI5), so they no longer need to be added as dependency in applications.
* FEATURE: type parser: allow variant types in more places without wrapping them in parentheses
* FIX: type parser: don't accept function signatures where a comma is missing
* FIX: type parser: don't accept generic types w/o type parameters
* FIX: several return structure fixes (incl. [this one](https://github.com/SAP/openui5/commit/0ae83355922042fccc4a001cff0402b42126e780)) in preparation for the "object structure" feature, which was finally enabled for 1.105.

## 1.99 (February 2022)

* FEATURE: generator updated to use `strictNullChecks=true` - including the changes to allow that
* FEATURE: generator updated to use `strictPropertyInitialization=true` - including the changes to allow that
* FIX: no longer remove the full-text documentation for return types in the type definitions
* FIX: permutations for optional parameters fixed in generator
* INTERNAL: internally enabled dtslint checks for the types resulting from any UI5 code change
* INTERNAL: enable type error checks for the so-far-excluded sap.fe library 
