import path = require("path");
import fs = require("fs");
import ts = require("typescript");
import Hjson = require("hjson");
import collectClassInfo from "./collectClassInfo";
import {
  generateMethods,
  generateSettingsInterface,
  addLineBreakBefore,
  generateGenericTypeImports,
} from "./astGenerationHelper";
import astToString from "./astToString";
import log from "loglevel";

const factory = ts.factory;

const interestingBaseClasses: {
  [key: string]:
    | "ManagedObject"
    | "EventProvider"
    | "Element"
    | "Control"
    | undefined;
} = {
  '"sap/ui/base/ManagedObject".ManagedObject': "ManagedObject",
  '"sap/ui/base/EventProvider".EventProvider': "EventProvider",
  '"sap/ui/core/Element".UI5Element': "Element",
  '"sap/ui/core/Control".Control': "Control",
};

const interestingBaseSettingsClasses: {
  [key: string]:
    | "$ManagedObjectSettings"
    | "$EventProviderSettings"
    | "$ElementSettings"
    | "$ControlSettings"
    | undefined;
} = {
  '"sap/ui/base/ManagedObject".$ManagedObjectSettings':
    "$ManagedObjectSettings",
  '"sap/ui/base/EventProvider".$EventProviderSettings':
    "$EventProviderSettings",
  '"sap/ui/core/Element".$UI5ElementSettings': "$ElementSettings",
  '"sap/ui/core/Control".$ControlSettings': "$ControlSettings",
};

const interfaceIncompatibleModifiers = new Set([ts.SyntaxKind.AbstractKeyword]);

/**
 * Checks the given source file for any classes derived from sap.ui.base.ManagedObject and generates for each one an interface file next to the source file
 * with the name <className>.gen.d.ts
 *
 * @param sourceFile
 * @param typeChecker
 * @param allKnownGlobals
 * @param {function} [resultProcessor]
 *
 * @public
 */
function generateInterfaces(
  sourceFile: ts.SourceFile,
  typeChecker: ts.TypeChecker,
  allKnownGlobals: GlobalToModuleMapping,
  resultProcessor: (
    sourceFileName: string,
    className: string,
    interfaceText: string
  ) => void = writeInterfaceFile
) {
  const mos = getManagedObjects(sourceFile, typeChecker);
  mos.forEach((managedObjectOccurrence) => {
    const interfaceText = generateInterface(
      managedObjectOccurrence,
      allKnownGlobals
    ); // only returns the interface text if actually needed (it's not for ManagedObjects without metadata etc.)
    if (interfaceText) {
      resultProcessor(
        sourceFile.fileName,
        managedObjectOccurrence.className,
        interfaceText
      );
    }
  });
}

/**
 *
 * @param sourceFileName the complete path and name of the original source file, so the generated file can be placed next to it
 * @param className the name of the class for which the interface shall be generated (there may be several classes within one sourceFile)
 * @param interfaceText the interface file content to write
 */
function writeInterfaceFile(
  sourceFileName: string,
  className: string,
  interfaceText: string
) {
  // file output
  const pathName = path.dirname(sourceFileName);
  const newFileName = path.join(pathName, className + ".gen.d.ts");
  log.info(`Writing interface file: ${newFileName}\n\n`);
  fs.writeFileSync(newFileName, interfaceText);
}

function getManagedObjects(
  sourceFile: ts.SourceFile,
  typeChecker: ts.TypeChecker
) {
  const managedObjects: ManagedObjectInfo[] = [];
  sourceFile.statements.forEach((statement) => {
    if (ts.isClassDeclaration(statement)) {
      let managedObjectFound = false;
      statement.heritageClauses &&
        statement.heritageClauses.forEach((heritageClause) => {
          heritageClause.types &&
            heritageClause.types.forEach((typeNode) => {
              const type = typeChecker.getTypeFromTypeNode(typeNode);
              const symbol = type.getSymbol();
              if (!symbol) {
                throw new Error(
                  "Type '" +
                    typeNode.getText() +
                    "' referenced in " +
                    sourceFile.fileName +
                    " could not be resolved - are the UI5 (and other) type definitions available and known in the tsconfig? Or is there a different reason why this type would not be known?"
                );
              }

              // now check whether this type from which has been inherited is a ManagedObject
              const interestingBaseClass = getInterestingBaseClass(
                type,
                typeChecker
              );
              if (!interestingBaseClass) {
                return;
              }
              managedObjectFound = true;

              // ok, we have a ManagedObject/Control; now check whether it contains a metadata section, which means that accessor methods need to be generated
              const metadata: ts.PropertyDeclaration[] = <
                ts.PropertyDeclaration[]
              >statement.members.filter((member) => {
                if (
                  ts.isPropertyDeclaration(member) &&
                  ts.isIdentifier(member.name) &&
                  member.name.escapedText === "metadata" &&
                  member.modifiers &&
                  member.modifiers.some((modifier) => {
                    return modifier.kind === ts.SyntaxKind.StaticKeyword;
                  })
                ) {
                  return true;
                }
              });
              if (!metadata || metadata.length === 0) {
                // no metadata? => nothing to do
                log.debug(
                  `Class ${statement.name ? statement.name.text : ""} in ${
                    sourceFile.fileName
                  } inherits from ${interestingBaseClass} but has no metadata. This is not necessarily an issue, but if there is a metadata member in this class which *should* be recognized, make sure it has the 'static' keyword!`
                );
                return;
              } else if (metadata.length > 1) {
                // no metadata? => nothing to do
                log.warn(
                  `ManagedObject with ${
                    metadata.length
                  } static metadata members in class ${
                    statement.name ? statement.name.text : ""
                  } inside ${
                    sourceFile.fileName
                  }. This is unexpected. Ignoring this class.`
                );
                return;
              }

              // now check whether there is a settings type in the superclass
              // (which the generated settings type needs to inherit from)
              // There really should be, because all descendants of ManagedObject should have one!
              let settingsTypeFullName;
              const settingsTypeNode = getSettingsType(type, typeChecker);
              if (settingsTypeNode) {
                const settingsType =
                  typeChecker.getTypeFromTypeNode(settingsTypeNode);
                const symbol = settingsType.getSymbol();
                settingsTypeFullName =
                  typeChecker.getFullyQualifiedName(symbol);
              } else if (metadata) {
                throw new Error(
                  `${
                    statement.name ? statement.name.text : ""
                  } inherits from ${interestingBaseClass} and has metadata but the parent class ${typeChecker.getFullyQualifiedName(
                    type.getSymbol()
                  )} seems to have no settings type. It might have no constructors, this is where the settings type is used.

In case this parent class is also in your project, make sure to add its constructors, then try again. A comment with instructions might be in the console output above.
Otherwise, you can temporarily remove this file (${
                    sourceFile.fileName
                  }) from the project and try again to get the console output with the suggested constructors.
In any case, you need to make the parent parent class ${typeChecker.getFullyQualifiedName(
                    type.getSymbol()
                  )} have constructors with typed settings object to overcome this issue.
`
                );
              }

              // check for already available constructor signatures (if not found, the console output prompts the user to add them)
              const constructorSignaturesAvailable =
                checkConstructors(statement);

              // store the information about the identified ManagedObject/Control
              managedObjects.push({
                sourceFile,
                className: statement.name ? statement.name.text : "",
                classDeclaration: statement,
                settingsTypeFullName,
                interestingBaseClass,
                constructorSignaturesAvailable,
                metadata,
              });
              return;
            });
          if (managedObjectFound) {
            // do not look at any other heritage clauses
            return;
          }
        });
    }
  });
  return managedObjects;
}

// checks for the presence of the standard constructor signatures, so the tool can report them as missing
function checkConstructors(classDeclaration: ts.ClassDeclaration) {
  let singleParameterDeclarationFound = false,
    doubleParameterDeclarationFound = false,
    implementationFound = false;

  classDeclaration.members.forEach((member: ts.ClassElement) => {
    if (ts.isConstructorDeclaration(member)) {
      if (member.parameters.length === 1 && member.body === undefined) {
        const parameter = member.parameters[0];
        if (parameter.questionToken && ts.isUnionTypeNode(parameter.type)) {
          if (parameter.type.types.length === 2) {
            if (
              isOneAStringAndTheOtherASettingsObject(
                parameter.type.types[0],
                parameter.type.types[1]
              )
            ) {
              singleParameterDeclarationFound = true;
            }
          }
        }
      } else if (member.parameters.length === 2) {
        if (
          isOneAStringAndTheOtherASettingsObject(
            member.parameters[0].type,
            member.parameters[1].type
          )
        ) {
          if (member.body) {
            implementationFound = true;
          } else {
            doubleParameterDeclarationFound = true;
          }
        }
      } else {
        log.warn(
          `Unexpected constructor signature with a parameter number other than 1 or 2 in class ${member.parent.name.text}`
        );
      }
    }
  });

  const found =
    singleParameterDeclarationFound &&
    doubleParameterDeclarationFound &&
    implementationFound;
  if (!found) {
    log.debug(
      classDeclaration.name.text +
        " is missing required constructor signatures: " +
        (singleParameterDeclarationFound
          ? ""
          : "\n- constructor declaration with single parameter") +
        (doubleParameterDeclarationFound
          ? ""
          : "\n- constructor declaration with two parameters") +
        (implementationFound
          ? ""
          : "\n- constructor implementation with two parameters")
    );
  }
  return found;
}

function isOneAStringAndTheOtherASettingsObject(
  type1: ts.TypeNode,
  type2: ts.TypeNode
) {
  return (
    (type1.kind === ts.SyntaxKind.StringKeyword &&
      ts.isTypeReferenceNode(type2)) || // TODO: more specific check for second type
    (type2.kind === ts.SyntaxKind.StringKeyword &&
      ts.isTypeReferenceNode(type1))
  );
}

/**
 * Returns the type of the settings object used in the constructor of the given type
 * Needed to derive the new settings object type for the subclass from it.
 */
function getSettingsType(type: ts.Type, typeChecker: ts.TypeChecker) {
  const declarations = type.getSymbol().getDeclarations();
  for (let i = 0; i < declarations.length; i++) {
    const declaration = declarations[i] as ts.ClassDeclaration;
    const members = declaration.members;
    for (let j = 0; j < members.length; j++) {
      if (ts.isConstructorDeclaration(members[j])) {
        const settingsType = getSettingsTypeFromConstructor(
          members[j] as ts.ConstructorDeclaration,
          typeChecker
        );
        if (settingsType) {
          return settingsType;
        }
      }
    }
  }
}

/**
 * Returns the type of the first found settings object (inheriting from sap/ui/base/ManagedObject/$ManagedObjectSettings
 * occurring among the parameters of the given constructor. Or undefined.
 */
function getSettingsTypeFromConstructor(
  ctor: ts.ConstructorDeclaration,
  typeChecker: ts.TypeChecker
) {
  for (let i = 0; i < ctor.parameters.length; i++) {
    const parameter = ctor.parameters[i];
    if (parameter.type.kind === ts.SyntaxKind.TypeReference) {
      // could be the settings type
      const interestingBaseSettingsClass = getInterestingBaseSettingsClass(
        typeChecker.getTypeFromTypeNode(parameter.type),
        typeChecker
      );
      if (interestingBaseSettingsClass) {
        return parameter.type;
      }
    }
  }
}

/**
 * Returns "ManagedObject", "EventProvider", "Element", "Control" - or undefined
 */
function getInterestingBaseClass(
  type: ts.Type,
  typeChecker: ts.TypeChecker
): "ManagedObject" | "EventProvider" | "Element" | "Control" | undefined {
  //const typeName = typeChecker.typeToString(type);
  //log.debug("-> " + typeName + " (" + typeChecker.getFullyQualifiedName(type.getSymbol()) + ")");

  let interestingBaseClass =
    interestingBaseClasses[typeChecker.getFullyQualifiedName(type.getSymbol())];
  if (interestingBaseClass) {
    return interestingBaseClass;
  }
  if (!type.isClassOrInterface()) {
    return;
  }
  const baseTypes = typeChecker.getBaseTypes(type);
  for (let i = 0; i < baseTypes.length; i++) {
    if (
      (interestingBaseClass = getInterestingBaseClass(
        baseTypes[i],
        typeChecker
      ))
    ) {
      return interestingBaseClass;
    }
  }
  return undefined;
}

/**
 * Returns tha name of the closest base class settings type ("$ManagedObjectSettings" | "$EventProviderSettings"
 * | "$ElementSettings" | "$ControlSettings") - or undefined
 */
function getInterestingBaseSettingsClass(
  type: ts.Type,
  typeChecker: ts.TypeChecker
):
  | "$ManagedObjectSettings"
  | "$EventProviderSettings"
  | "$ElementSettings"
  | "$ControlSettings"
  | undefined {
  let interestingBaseSettingsClass =
    interestingBaseSettingsClasses[
      typeChecker.getFullyQualifiedName(type.getSymbol())
    ];
  if (interestingBaseSettingsClass) {
    return interestingBaseSettingsClass;
  }
  if (!type.isClassOrInterface()) {
    return;
  }
  const baseTypes = typeChecker.getBaseTypes(type);
  for (let i = 0; i < baseTypes.length; i++) {
    if (
      (interestingBaseSettingsClass = getInterestingBaseSettingsClass(
        baseTypes[i],
        typeChecker
      ))
    ) {
      return interestingBaseSettingsClass;
    }
  }
  return undefined;
}

// const sourceFile = ts.createSourceFile("src/control/MyButton.ts", fs.readFileSync("src/control/MyButton.ts").toString(), ts.ScriptTarget.Latest);

function generateInterface(
  {
    sourceFile,
    className,
    classDeclaration,
    settingsTypeFullName,
    interestingBaseClass,
    constructorSignaturesAvailable,
    metadata,
  }: {
    sourceFile: ts.SourceFile;
    className: string;
    classDeclaration: ts.ClassDeclaration;
    settingsTypeFullName: string;
    interestingBaseClass:
      | "ManagedObject"
      | "EventProvider"
      | "Element"
      | "Control"
      | undefined;
    constructorSignaturesAvailable: boolean;
    metadata: ts.PropertyDeclaration[];
  },
  allKnownGlobals: GlobalToModuleMapping
) {
  const fileName = sourceFile.fileName;

  // by now we have something that looks pretty much like a ManagedObject metadata object

  const metadataText = metadata[0].initializer.getText(sourceFile);
  let metadataObject: ClassInfo;
  try {
    metadataObject = Hjson.parse(metadataText) as ClassInfo; // parse with some fault tolerance: it's not a real JSON object, but JS code which may contain comments and property names which are not enclosed in double quotes
  } catch (e) {
    throw new Error(
      `When parsing the metadata of ${className} in ${fileName}: metadata is no valid JSON and could not be quick-fixed to be. Please make the metadata at least close to valid JSON. In particular, TypeScript type annotations cannot be used. Error: ${
        (e as Error).message
      }`
    );
  }

  if (
    !metadataObject.properties &&
    !metadataObject.aggregations &&
    !metadataObject.associations &&
    !metadataObject.events
  ) {
    // No API for which accessors are generated? => no interface needed
    // FIXME // TODO: constructor may still be needed for inherited properties?
    return;
  }

  log.debug(
    `\n\nClass ${className} inside ${fileName} inherits from ${interestingBaseClass} and contains metadata.`
  );

  const classInfo = collectClassInfo(metadataObject, className);

  const moduleName = path.basename(fileName, path.extname(fileName));
  const ast = buildAST(
    classInfo,
    sourceFile,
    classDeclaration,
    constructorSignaturesAvailable,
    moduleName,
    settingsTypeFullName,
    allKnownGlobals
  );
  if (!ast) {
    // no interface needs to be generated
    return;
  }

  return astToString(ast);
}

function buildAST(
  classInfo: ClassInfo,
  sourceFile: ts.SourceFile,
  classDeclaration: ts.ClassDeclaration,
  constructorSignaturesAvailable: boolean,
  moduleName: string,
  settingsTypeFullName: string,
  allKnownGlobals: GlobalToModuleMapping
) {
  const { fileName: classFileName } = sourceFile;

  const requiredImports: RequiredImports = {};
  const methods = generateMethods(classInfo, requiredImports, allKnownGlobals);
  if (methods.length === 0) {
    // nothing needs to be generated!
    return null;
  }

  const settingsInterface = generateSettingsInterface(
    classInfo,
    classFileName,
    constructorSignaturesAvailable,
    settingsTypeFullName,
    requiredImports,
    allKnownGlobals
  );

  const statements: ts.Statement[] = getImports(requiredImports);

  const requiredGenericTypeImports = generateGenericTypeImports(
    sourceFile,
    classDeclaration,
    statements,
    requiredImports
  );

  if (requiredGenericTypeImports.length > 0) {
    statements.push(...requiredGenericTypeImports);
  }

  const myInterface = factory.createInterfaceDeclaration(
    undefined,
    classDeclaration.modifiers?.filter(
      (modifier) => !interfaceIncompatibleModifiers.has(modifier.kind)
    ),
    classInfo.name,
    classDeclaration.typeParameters,
    undefined,
    methods
  );
  addLineBreakBefore(myInterface, 2);

  // assemble the module declaration
  const module = factory.createModuleDeclaration(
    [],
    [factory.createModifier(ts.SyntaxKind.DeclareKeyword)],
    factory.createStringLiteral("./" + moduleName),
    factory.createModuleBlock([settingsInterface, myInterface])
  );
  if (statements.length > 0) {
    addLineBreakBefore(module, 2);
  }
  statements.push(module);

  // if needed, assemble the second module declaration
  if (requiredImports.selfIsUsed) {
    const myInterface2 = factory.createInterfaceDeclaration(
      undefined,
      undefined,
      classInfo.name,
      undefined,
      undefined,
      methods
    );

    const module2 = factory.createModuleDeclaration(
      [],
      [factory.createModifier(ts.SyntaxKind.DeclareKeyword)],
      factory.createStringLiteral("./" + moduleName),
      factory.createModuleBlock([myInterface2])
    );
    addLineBreakBefore(module2, 2);
    ts.addSyntheticLeadingComment(
      module2,
      ts.SyntaxKind.SingleLineCommentTrivia,
      " this duplicate interface without export is needed to avoid \"Cannot find name '" +
        classInfo.name +
        "'\" TypeScript errors above"
    );

    statements.push(module2);
  }

  return statements;
}

function getImports(requiredImports: RequiredImports) {
  const imports = [];
  for (const dependencyName in requiredImports) {
    if (dependencyName === "selfIsUsed") {
      continue;
    }
    const singleImport = requiredImports[dependencyName];
    const localNameIdentifier = factory.createIdentifier(
      singleImport.localName
    );
    const namedImportOriginalNameIdentifier =
      singleImport.exportName &&
      singleImport.localName !== singleImport.exportName
        ? factory.createIdentifier(singleImport.exportName)
        : undefined;

    let importClause;
    if (singleImport.exportName) {
      // if we have a named (non-default) export, we need a different import clause (with curly braces around the names to import)
      let importSpecifier;
      if (parseFloat(ts.version) >= 4.5) {
        // TypeScript API changed incompatibly in 4.5
        importSpecifier = factory.createImportSpecifier(
          false /* typeOnly */,
          namedImportOriginalNameIdentifier,
          // @ts-ignore after 4.5, createImportSpecifier got a third parameter (in the beginning!). This code shall work with older and newer versions, but as the compile-time error check is considering either <4.5 or >=4.5, one of these lines is recognized as error
          localNameIdentifier
        );
      } else {
        // @ts-ignore after 4.5, createImportSpecifier got a third parameter (in the beginning!). This code shall work with older and newer versions, but as the compile-time error check is considering either <4.5 or >=4.5, one of these lines is recognized as error
        importSpecifier = factory.createImportSpecifier(
          namedImportOriginalNameIdentifier,
          localNameIdentifier
        );
      }
      importClause = factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports([importSpecifier])
      );
    } else {
      importClause = factory.createImportClause(
        false,
        factory.createIdentifier(singleImport.localName),
        undefined
      ); // importing the default export, so only the local name matters
    }

    imports.push(
      factory.createImportDeclaration(
        undefined,
        undefined,
        importClause,
        factory.createStringLiteral(singleImport.moduleName)
      )
    );
  }

  if (!imports.length) {
    // this would result in an ambient module declaration which doesn't work for us. Enforce some implementation code to make it non-ambient.
    const importDeclaration = factory.createImportDeclaration(
      undefined,
      undefined,
      factory.createImportClause(
        false,
        factory.createIdentifier("Core"),
        undefined
      ),
      factory.createStringLiteral("sap/ui/core/Core")
    );
    ts.addSyntheticTrailingComment(
      importDeclaration,
      ts.SyntaxKind.SingleLineCommentTrivia,
      " dummy import to make this non-ambient"
    );
    imports.push(importDeclaration);
  }

  return imports;
}

export { generateInterfaces };
