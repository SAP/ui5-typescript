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
* UI5 APIs contain types from these libraries. Currently, applications must import these types to avoid "missing types" errors when checking the libraries - and of course also when using these APIs.
* These libraries come with UI5 in a specific version, so they could easily be added as dependencies and would be automatically available.
* But then it might be difficult or even impossible to substitute these 3rd-party type definitions with either a different version or an alternative type definition. 
* Current state of discussion: https://github.com/SAP/ui5-typescript/issues/314#issuecomment-982854155


### Part 3: UI5 API Choices Influencing the Generated Types

#### Renderers not Available in Type Definitions
Almost all renderers are marked as private (except InputRenderer), as they are not supposed to be inherited from. If still needed, one has to define their types in a custom way. 

#### Private APIs
Private UI5 APIs are intentionally not contained in the type definitions (as of 02/2022). This is supposed to prevent misuse of private APIs in applications.

However, the type definitions may also be used by control development and SAP-internal development for which access to specific APIs is allowed (`@SAP-restricted` - this means the API will not remain stable, but in case of changes, the consumers can be notified). Those consumers are hence missing API descriptions they need.

It remains open how to support this. A single switch (two versions) is not sufficient because there are different profiles of such consumers.



## Generation of Type Definition Files 
This section explains how the type definition files are generated.

TODO:
* generator project, JSDoc -> api.json -> d.ts
* .dtsgenrc, removing/fixing APIs

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