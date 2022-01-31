## Development Notes

This file keeps internal information for the development of this tool.

### Structure

The generation consists of the following parts:

- Initializing the TypeScript watch mode with the given or found tsconfig file, so the same type world is known as during normal compilation
- Whenever the watch mode detects file changes (or exactly once on startup in non-watch mode), the interface generation is triggered
- A huge map of all UI5 global names (`allKnownGlobals`) is created which contains information in which module the respective entity resides (important to decide whether a certain enum is in a module of its own or inside a library module)
- All real source files in this list (i.e. <i>not</i> type definitions) are checked for definitions of classes which are derived from `sap.ui.base.ManagedObject`
- For each such class definition, a TypeScript AST is created which represents a file with an interface definition containing all UI5 accessor methods for the properties, aggregations etc. in the class. It also contains the required imports. The interface has the same name as the class to which it is related, so the TypeScript merging can happen which lets TypeScript know that these additional methods also exist.
- This AST is transformed to a nicely formatted string and written to a \*.gen.d.ts file next to the file in which the respective class was defined.

### npm Publishing

### Watch mode

#### In Theory

Main task: re-generate control interfaces once

1. a file with metadata has been added
2. metadata has been added to a file not covered so far
3. metadata in an already covered file has changed
4. metadata has been deleted from a file covered so far
5. a file with metadata has been deleted

Files to watch:

1. new ts file creation
2. content change in known ts file without metadata
3. content change in known ts file with metadata
4. content change in known ts file with metadata
5. ts file deletion

### In Practice

The TypeScript compiler API offers a watch mode (or rather 2-3 flavors) which do not offer detailed change information, but are an apparently really optimized way of avoiding the multi-second TS initialization on every change. There are several callback hooks which need to be used in combination:

1.  reportWatchStatusChanged is called with initially NO program, later an old program, and undefined error count and e.g. "message TS6032: File change detected. Starting incremental compilation..."
2.  createProgram notifies that a change was detected
3.  afterProgramCreate is called with the new Program (needed to create a TypeChecker!), but it is not yet known whether there are errors
4.  reportDiagnostic is called for each error; the file name can be derived for each
5.  reportWatchStatusChanged is then called with an error summary, the error count and e.g. "message TS6194: Found 4 errors. Watching for file changes." and can still access the new updated program

There does not seem to be a way to get informed about deleted files.<br>
New files and changed files can be enumerated by calling `program.getSemanticDiagnosticsOfNextAffectedFile()`. But this only works in the `afterProgramCreate` callback. By the time `reportWatchStatusChanged` is called, the "affected files" have already been handled and can no longer be accessed like this.

The program object does have a `getState()` method and the state has a `changedFilesSet` property which contains the changed files, but those are not a public API, so they are not used.

So the information about file changes is limited, but it is anyway questionable whether only changed files need to be considered when re-generating the interfaces: a change in a base class or in the UI5 type definitions could also influence the interface of an unchanged control implementation file. As performance for the overall standard flow is REALLY good (~20ms for a re-scan of all modules in UI5 and analyzing the types in the project files), there does not seem to be a need to restrict interface generation to those which MIGHT have an actual change.

Open: should all interfaces be deleted before generation to get rid of those which are no longer needed?
