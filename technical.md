# Technical Background

This document explains the technical background how UI5 type definition files are generated and provided and lists some design desicions, constraints etc. which explain why the UI5 TypeScript support is like it is.

It is hence interesting for developers who want to work on the TypeScript support and interested users of TypeScript support who want to understand what is going on behind the scenes.

This is **work in progress!**


## Content of Type Definition Files
This section explains how and why certain TypeScript language constructs are used for expressing the UI5 APIs, as well as certain additional aspects, e.g. .

### Part 1: How the TypeScript Language is Being Used

### Part 2: Additional Aspects

#### Avoiding Excessive Type Casts with Generated Methods

Similar to the existing UI5 API `Component.getRouterFor(this)`, one could add one `Control.getFor(id)` API to UI5 and in the dts generator generate typed versions for each control. Instead of type-casting like `this.byId("myBtn") as Button` one could then write `Button.fromId("mybtn")`. However, usually the containing View would also need to be given, so there is minimal gain in code size.<br>
*Maybe* we'll look at allowing `this.byId<Button>("myBtn")` once revisiting generics. But this neither provides a real advantage over `<Button> this.byId("myBtn")`.

#### Adding jQuery, qUnit and three.js as Dependencies
SAPUI5 APIs contain types from these libraries (OpenUI5 only from the two former ones). Up to version 1.99 of `@openui5/ts-types-esm` and `@sapui5/ts-types-esm`, applications must import these types to avoid "missing types" errors when checking the libraries - and of course also when application code is using these APIs, so TypeScript knows them.
These libraries come with UI5 in a specific version, so they could easily be added as dependencies and would be automatically available and could be kept in sync with the version actually bundled with UI5.
This was requested in: https://github.com/SAP/ui5-typescript/issues/314#issuecomment-982854155
Initial concerns: then it might be difficult to substitute these 3rd-party type definitions with either a different version (UI5 can be launched with no jQuery, if an alternative jQuery version is loaded beforehand) or an alternative type definition set. But these concerns were found to be unfounded.

Hence for release 1.100 the following change was applied:
* `@openui5/types` and `@sapui5/types` (back then called: `@openui5/ts-types-esm` and `@sapui5/ts-types-esm`):
  * add jquery and qunit types as dependencies (not devDependencies - they are needed when the types are USED, not when developed - devDependencies of devDependencies are not installed) in the correct version (SAPUI5 also the THREE.js types and `@types/offscreencanvas`, which is referenced inside the THREE.js types).
  * `npm i` in an application using these types then installs these required types to `node_modules/@types`. NO NEED to add them as devDependnecies anymore!
  * The types will be found by the editor, as they are in the default location for types. However, `tsconfig.json` must contain a `typeRoots` entry when the `@*/types`/`@*/ts-types-esm` are used. If the typeRoots ONLY include the .../types (or .../ts-types-esm) path, then the default `@types` directory is NOT used. So in this case it must be added. In most cases it may already be present for other libraries, though.
    ```
	        "typeRoots": [
	            "node_modules/@types",
	            "node_modules/@openui5/types"
	        ]
    ```
* `@types/openui5`, however:
  * DOES already have jquery and qunit types as dependencies - due to triple-slash references in the index.d.ts file required by DefinitelyTyped. But without a specific version. (TODO: Can we fix that? It seems like DefinitelyTyped does not foresee the option to reference a specific version.)

How can apps now use a different version of the jQuery, qUnit,... types?
  * When the app ALSO directly requires the jquery types in a different version in its `package.json` file, then the openui5-required ones go into `node_modules/@openui5/ts-types-esm/node_modules/@types/jquery` and both reside with their respective required version. The code editor uses the version required by the app. Even when that second version of the types is deleted it seems hard to get the copy below ts-types-esm to work for the editor (adding to the typeRoots in `tsconfig.json` didn’t seem to work).
  * As soon as there is an own copy of the jquery types below ts-types-esm, nothing will move it back up to the main `node_modules/@types` directory. Not even requesting the exactly same version and deleting `package-lock.json` and deleting the toplevel copy of the jquery types. Only when the copy of the types below ts-types-esm is deleted and another `npm i` is done, npm is happy with only placing ONE copy of the jquery types to the main node_modules folder again (if versions match).
  * All in all, this shows that applications can easily require matching types for their own copy of jquery with a different version. They could also require a different flavor of jquery types and ignore the UI5-required jQuery types by setting specific `typeRoots` paths.


### Part 3: UI5 API Choices Influencing the Generated Types

#### Renderers not Available in Type Definitions
Almost all renderers are marked as private (except InputRenderer), as they are not supposed to be inherited from. If still needed, one has to define their types in a custom way. 

#### Private APIs
Private UI5 APIs are intentionally not contained in the type definitions (as of 02/2022). This is supposed to prevent misuse of private APIs in applications.

However, the type definitions may also be used by control development and SAP-internal development for which access to specific APIs is allowed (`@SAP-restricted` - this means the API will not remain stable, but in case of changes, the consumers can be notified). Those consumers are hence missing API descriptions they need.

It remains open how to support this. A single switch (two versions) is not sufficient because there are different profiles of such consumers.

### Extracting configuration objects into named types using `@typedef`

In general, doing this is currently not a recommendation, as it pulls the structures out of their place, so they are e.g. a click away in the documentation.<br>
However, when there is re-use of structures in several places, then it is recommended, in order to avoid having to maintain duplicate documentation and to make usage clearer.<br>
For documentation of structured return types creating separate `@typedef`s is an option, as `@returns` tags cannot be accumulated like `@param` tags to build nested structures.

### Documenting structured return types

This is currently an open point; the only mechanism working right now is defining the structure in JSDoc separately, using a `@typedef`. Defining the structure in-place (like `@returns {{callback: function}} an object with a property 'callback' that is a function`) does ONLY work for function types right now and is overall fragile and not recommended (yet).

## Generation of Type Definition Files 
This section explains how the type definition files are generated.

TODO:
* generator project, JSDoc -> api.json -> d.ts
* .dtsgenrc, removing/fixing APIs

## Testing of Type Definition Files

The type definition files are tested using a


## Distribution of Type Definition Files
This section explains which packages exist on which channels - and why.

## Control Development Support
This section explains why the control development support is like it is.

### TypeScript Interface Generator for ManagedObjects

Decisions:
* After investigating multiple potential options, generating additional TypeScript interfaces was found to be the only feasible way to have the information about runtime-generated methods available to TypeScript compiler at development time.
* The generator shall produce additional files and not interfere with content of files written by the developer.
  * This requires a certain content of these generated files (`declare module <control name>` etc.) to make TypeScript merge the definitions.
  * An accepted drawback of not touching the developer-written files is that constructors with the available signatures cannot be generated, as they cannot be part of interfaces. As mitigation, the suggested constructors are written to the console. Furthermore, the generator detects whether the constructors already exist in the control implementation and it generates the settings types (used in the constructors) into the generated file.
* The name of the generated files was decided to...
  * ...start with the control name (with the usual one-to-one mapping of control implementations to files, this makes the files appear next to each other)
  * ...contain the string `.gen.` to indicate that the file is generated
  * ...end with `.d.ts`, as this is the appropriate file ending for pure definition files without implementation parts that don't need to be compiled to JavaScript. `.d.ts` files supposedly contain type information which is only available at runtime, so the TypeScript compiler needs to be made aware. That's exactly what the files are generated for. 



# Legal Information & Privacy Statement

This site is hosted by [GitHub Pages](https://pages.github.com/). Please see the [GitHub Privacy Statement](https://docs.github.com/en/github/site-policy/github-privacy-statement) for any information how GitHub processes your personal data.

Please note the [SAP terms of use](https://www.sap.com/corporate/en/legal/terms-of-use.html).

[Legal Statement / Impressum](https://www.sap.com/about/legal/impressum.html)

[Trademark Notice](https://www.sap.com/corporate/en/legal/trademark.html#third-party-trademark-notices)