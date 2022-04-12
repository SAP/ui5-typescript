import ts = require("typescript");
import astToString from "./astToString";
import log from "loglevel";

const factory = ts.factory;

function generateSettingsInterface(
  classInfo: ClassInfo,
  classFileName: string,
  constructorSignaturesAvailable: boolean,
  settingsTypeFullName: string,
  requiredImports: RequiredImports,
  knownGlobals: GlobalToModuleMapping
) {
  const interfaceProperties = [];
  const currentClassName = classInfo.name;

  // properties
  for (const n in classInfo.properties) {
    const property = classInfo.properties[n];
    if (property.visibility !== "hidden") {
      const propertyTypes: ts.TypeNode[] = [
        // allowed types: 1. the actual type, ...
        createTSTypeNode(
          property.type,
          requiredImports,
          knownGlobals,
          currentClassName
        ),
        createTSTypeNode(
          // 2. a binding info object...
          "sap.ui.base.ManagedObject.PropertyBindingInfo",
          requiredImports,
          knownGlobals,
          currentClassName
        ),
      ];

      if (property.type !== "string") {
        // ...and if "string" is not allowed, anyway, then:
        propertyTypes.push(createBindingStringTypeNode()); // 3. a binding string
      }

      interfaceProperties.push(
        factory.createPropertySignature(
          undefined,
          property.name,
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createUnionTypeNode(propertyTypes)
        )
      );
    }
  }

  // aggregations
  for (const n in classInfo.aggregations) {
    const aggregation = classInfo.aggregations[n];

    if (aggregation.visibility !== "hidden") {
      let aggregationInitializationTypeNode;
      const aggregationSingleTypeNode = createTSTypeNode(
        aggregation.type,
        requiredImports,
        knownGlobals,
        currentClassName
      );

      if (aggregation.cardinality === "0..1") {
        if (
          Array.isArray(aggregation.altTypes) &&
          aggregation.altTypes.length > 0
        ) {
          const typesToUse: ts.TypeNode[] = [
            aggregationSingleTypeNode,
            createTSTypeNode(
              // add first altType as alternative - only ONE is supported by UI5
              aggregation.altTypes[0],
              requiredImports,
              knownGlobals,
              currentClassName
            ),
          ];
          typesToUse.push(
            createTSTypeNode(
              // altType can be bound via property binding
              "sap.ui.base.ManagedObject.PropertyBindingInfo",
              requiredImports,
              knownGlobals,
              currentClassName
            )
          );
          if (aggregation.altTypes[0] !== "string") {
            // if "string" is not anyway allowed, also allow binding strings
            typesToUse.push(createBindingStringTypeNode());
          }
          aggregationInitializationTypeNode =
            factory.createUnionTypeNode(typesToUse);
        } else {
          // no altTypes
          aggregationInitializationTypeNode = aggregationSingleTypeNode;
        }
      } else {
        // 0..n
        aggregationInitializationTypeNode = factory.createUnionTypeNode([
          factory.createArrayTypeNode(aggregationSingleTypeNode), // 1. the type in an array
          aggregationSingleTypeNode, // 2. the type as single object
          createTSTypeNode(
            // 3. an aggregation binding info object
            "sap.ui.base.ManagedObject.AggregationBindingInfo",
            requiredImports,
            knownGlobals,
            currentClassName
          ),
          createBindingStringTypeNode(), // 4. a binding string
        ]);
      }

      interfaceProperties.push(
        factory.createPropertySignature(
          undefined,
          aggregation.name,
          factory.createToken(ts.SyntaxKind.QuestionToken),
          aggregationInitializationTypeNode
        )
      );
    }
  }

  // associations
  for (const n in classInfo.associations) {
    const association = classInfo.associations[n];
    if (association.visibility !== "hidden") {
      let associationInitializationTypeNode;
      const associationSingleTypeNode = createTSTypeNode(
        association.type,
        requiredImports,
        knownGlobals,
        currentClassName
      );

      // allow object and string (=ID) and in case of multiple associations also arrays
      if (association.cardinality === "0..1") {
        associationInitializationTypeNode = factory.createUnionTypeNode([
          associationSingleTypeNode,
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        ]);
      } else {
        // 0..n
        associationInitializationTypeNode = factory.createUnionTypeNode([
          associationSingleTypeNode,
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          factory.createArrayTypeNode(
            factory.createUnionTypeNode([
              associationSingleTypeNode,
              factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            ])
          ),
        ]);
      }

      factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        interfaceProperties.push(
          factory.createPropertySignature(
            undefined,
            association.name,
            factory.createToken(ts.SyntaxKind.QuestionToken),
            associationInitializationTypeNode
          )
        );
    }
  }

  // events
  for (const n in classInfo.events) {
    const event = classInfo.events[n];
    if (event.visibility !== "hidden") {
      interfaceProperties.push(
        factory.createPropertySignature(
          undefined,
          event.name,
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createFunctionTypeNode(
            [],
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                "event",
                undefined,
                createTSTypeNode(
                  "sap.ui.base.Event",
                  requiredImports,
                  knownGlobals,
                  currentClassName
                )
              ),
            ],
            factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
          )
        )
      );
    }
  }

  const ownSettingsTypeName = "$" + classInfo.name + "Settings";

  const localName = uniqueImport(
    settingsTypeFullName,
    requiredImports,
    knownGlobals,
    currentClassName
  );

  if (!constructorSignaturesAvailable) {
    printConstructorBlockWarning(
      ownSettingsTypeName,
      classInfo.name,
      classFileName
    ); // TODO: only print when the original class is missing the constructors!
  } else {
    log.debug(
      `Constructor signatures are present in implementation file of ${classInfo.name}.`
    );
  }

  const settingsSuperclass = factory.createIdentifier(localName);
  const settingsSuperclassAsExpression =
    factory.createExpressionWithTypeArguments(settingsSuperclass, undefined);
  const heritageClauses = [
    factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
      settingsSuperclassAsExpression,
    ]),
  ];
  const myInterface = factory.createInterfaceDeclaration(
    undefined,
    undefined,
    ownSettingsTypeName,
    undefined,
    heritageClauses,
    interfaceProperties
  );

  addLineBreakBefore(myInterface, 2);
  ts.addSyntheticLeadingComment(
    myInterface,
    ts.SyntaxKind.MultiLineCommentTrivia,
    "*\n * Interface defining the settings object used in constructor calls\n "
  );
  addLineBreakBefore(myInterface);
  return myInterface;
}

// creates a template string that matches all binding strings
function createBindingStringTypeNode() {
  return factory.createTemplateLiteralType(
    factory.createTemplateHead("{", "{"),
    [
      factory.createTemplateLiteralTypeSpan(
        factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        factory.createTemplateTail("}", "}")
      ),
    ]
  );
}

function printConstructorBlockWarning(
  settingsTypeName: string,
  className: string,
  fileName: string
) {
  const constructorBlock = createConstructorBlock(settingsTypeName);

  const message = `
NOTE:
Class ${className} in file ${fileName} needs to contain the following constructors, in order to make TypeScript aware of the possible constructor settings. Please copy&paste the block manually, as the ts-interface-generator will not touch your source files:
===== BEGIN =====
// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
${astToString(constructorBlock)}===== END =====
`;
  log.warn(message);
}

function generateMethods(
  classInfo: ClassInfo,
  requiredImports: RequiredImports,
  knownGlobals: GlobalToModuleMapping
) {
  const allMethods: ts.MethodSignature[] = [];
  const currentClassName = classInfo.name;

  // properties
  for (const n in classInfo.properties) {
    const property = classInfo.properties[n];
    if (property.visibility === "hidden") {
      continue;
    }

    // property getter
    const getter = factory.createMethodSignature(
      undefined,
      property.methods.get,
      undefined,
      [],
      [],
      createTSTypeNode(
        property.type,
        requiredImports,
        knownGlobals,
        currentClassName
      )
    );
    addLineBreakBefore(getter, 2);
    ts.addSyntheticLeadingComment(
      getter,
      ts.SyntaxKind.SingleLineCommentTrivia,
      " property: " + n
    );
    allMethods.push(getter);

    // property setter
    allMethods.push(
      factory.createMethodSignature(
        undefined,
        property.methods.set,
        undefined,
        [],
        [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            n,
            undefined,
            createTSTypeNode(
              property.type,
              requiredImports,
              knownGlobals,
              currentClassName
            )
          ),
        ],
        factory.createThisTypeNode()
      )
    );
  }

  // aggregations
  for (const n in classInfo.aggregations) {
    const aggregation = classInfo.aggregations[n];
    if (aggregation.visibility === "hidden") {
      continue;
    }

    // aggregation getter
    const getter = factory.createMethodSignature(
      undefined,
      aggregation.methods.get,
      undefined,
      [],
      [],
      aggregation.cardinality === "0..n"
        ? factory.createArrayTypeNode(
            createTSTypeNode(
              aggregation.type,
              requiredImports,
              knownGlobals,
              currentClassName
            )
          )
        : createTSTypeNode(
            aggregation.type,
            requiredImports,
            knownGlobals,
            currentClassName
          )
    );
    addLineBreakBefore(getter, 2);
    ts.addSyntheticLeadingComment(
      getter,
      ts.SyntaxKind.SingleLineCommentTrivia,
      " aggregation: " + n
    );
    allMethods.push(getter);

    if (aggregation.cardinality === "0..n") {
      // add aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          aggregation.methods.add,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              createTSTypeNode(
                aggregation.type,
                requiredImports,
                knownGlobals,
                currentClassName
              )
            ),
          ],
          factory.createThisTypeNode()
        )
      );

      // insert aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          aggregation.methods.insert,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              createTSTypeNode(
                aggregation.type,
                requiredImports,
                knownGlobals,
                currentClassName
              )
            ),
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              "index",
              undefined,
              factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
            ),
          ],
          factory.createThisTypeNode()
        )
      );

      // remove aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          aggregation.methods.remove,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              factory.createUnionTypeNode([
                factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                createTSTypeNode(
                  aggregation.type,
                  requiredImports,
                  knownGlobals,
                  currentClassName
                ),
              ])
            ),
          ],
          factory.createThisTypeNode()
        )
      );

      // remove all aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          aggregation.methods.removeAll,
          undefined,
          [],
          [],
          factory.createArrayTypeNode(
            createTSTypeNode(
              aggregation.type,
              requiredImports,
              knownGlobals,
              currentClassName
            )
          )
        )
      );

      // index of aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          aggregation.methods.indexOf,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              createTSTypeNode(
                aggregation.type,
                requiredImports,
                knownGlobals,
                currentClassName
              )
            ),
          ],
          factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
        )
      );

      //	this._sUpdater = 'update' + N;
      //	this._sRefresher = 'refresh' + N;
    } else {
      // set aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          aggregation.methods.set,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              createTSTypeNode(
                aggregation.type,
                requiredImports,
                knownGlobals,
                currentClassName
              )
            ),
          ],
          factory.createThisTypeNode()
        )
      );
    }

    // destroy aggregation
    allMethods.push(
      factory.createMethodSignature(
        undefined,
        aggregation.methods.destroy,
        undefined,
        [],
        [],
        factory.createThisTypeNode()
      )
    );

    if (aggregation.bindable) {
      // bind aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          aggregation.methods.bind,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              "bindingInfo",
              undefined,
              createTSTypeNode(
                "sap.ui.base.ManagedObject.AggregationBindingInfo",
                requiredImports,
                knownGlobals,
                currentClassName
              )
            ),
          ],
          factory.createThisTypeNode()
        )
      );

      // unbind aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          aggregation.methods.unbind,
          undefined,
          [],
          [],
          factory.createThisTypeNode()
        )
      );
    }
  }

  // associations
  for (const n in classInfo.associations) {
    const association = classInfo.associations[n];
    if (association.visibility === "hidden") {
      continue;
    }

    // association getter
    const getter = factory.createMethodSignature(
      undefined,
      association.methods.get,
      undefined,
      [],
      [],
      association.cardinality === "0..n"
        ? factory.createArrayTypeNode(
            factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
          )
        : factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
    );
    addLineBreakBefore(getter, 2);
    ts.addSyntheticLeadingComment(
      getter,
      ts.SyntaxKind.SingleLineCommentTrivia,
      " association: " + n
    );
    allMethods.push(getter);

    // association setter
    if (association.cardinality === "0..1") {
      // set association
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          association.methods.set,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              n,
              factory.createToken(ts.SyntaxKind.QuestionToken),
              factory.createUnionTypeNode([
                factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                createTSTypeNode(
                  association.type,
                  requiredImports,
                  knownGlobals,
                  currentClassName
                ),
              ])
            ),
          ],
          factory.createThisTypeNode()
        )
      );
    } else {
      // 0..n

      // add association
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          association.methods.add,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              factory.createUnionTypeNode([
                factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                createTSTypeNode(
                  association.type,
                  requiredImports,
                  knownGlobals,
                  currentClassName
                ),
              ])
            ),
          ],
          factory.createThisTypeNode()
        )
      );

      // remove association
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          association.methods.remove,
          undefined,
          [],
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              factory.createUnionTypeNode([
                factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                createTSTypeNode(
                  association.type,
                  requiredImports,
                  knownGlobals,
                  currentClassName
                ),
              ])
            ),
          ],
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        )
      );

      // remove all aggregation
      allMethods.push(
        factory.createMethodSignature(
          undefined,
          association.methods.removeAll,
          undefined,
          [],
          [],
          factory.createArrayTypeNode(
            factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
          )
        )
      );
    }
  }

  // events
  for (const n in classInfo.events) {
    const event = classInfo.events[n];
    if (event.visibility === "hidden") {
      continue;
    }

    // attach event
    const callback = factory.createFunctionTypeNode(
      [],
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "event",
          undefined,
          createTSTypeNode(
            "sap.ui.base.Event",
            requiredImports,
            knownGlobals,
            currentClassName
          )
        ),
      ],
      factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
    );
    const attach = factory.createMethodSignature(
      undefined,
      event.methods.attach,
      undefined,
      [],
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "fn",
          undefined,
          callback
        ),
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "listener",
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
        ),
      ],
      factory.createThisTypeNode()
    );
    addLineBreakBefore(attach, 2);
    ts.addSyntheticLeadingComment(
      attach,
      ts.SyntaxKind.SingleLineCommentTrivia,
      " event: " + n
    );
    allMethods.push(attach);

    // attach event (with data)
    const callbackWithData = factory.createFunctionTypeNode(
      [],
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "event",
          undefined,
          createTSTypeNode(
            "sap.ui.base.Event",
            requiredImports,
            knownGlobals,
            currentClassName
          )
        ),
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "data",
          undefined,
          factory.createTypeReferenceNode("CustomDataType")
        ),
      ],
      factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
    );
    allMethods.push(
      factory.createMethodSignature(
        undefined,
        event.methods.attach,
        undefined,
        [
          factory.createTypeParameterDeclaration(
            "CustomDataType",
            factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
          ),
        ],
        [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "data",
            undefined,
            factory.createTypeReferenceNode("CustomDataType")
          ),
          factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "fn",
            undefined,
            callbackWithData
          ),
          factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "listener",
            factory.createToken(ts.SyntaxKind.QuestionToken),
            factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
          ),
        ],
        factory.createThisTypeNode()
      )
    );

    // detach event
    allMethods.push(
      factory.createMethodSignature(
        undefined,
        event.methods.detach,
        undefined,
        [],
        [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "fn",
            undefined,
            callback
          ),
          factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "listener",
            factory.createToken(ts.SyntaxKind.QuestionToken),
            factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
          ),
        ],
        factory.createThisTypeNode()
      )
    );

    // fire event
    allMethods.push(
      factory.createMethodSignature(
        undefined,
        event.methods.fire,
        undefined,
        [],
        [
          // TODO: describe parameter object with all details
          factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "parameters",
            factory.createToken(ts.SyntaxKind.QuestionToken),
            factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
          ),
        ],
        factory.createThisTypeNode()
      )
    );
  }

  return allMethods;
}

function createTSTypeNode(
  typeName: string,
  requiredImports: RequiredImports,
  knownGlobals: GlobalToModuleMapping,
  currentClassName: string
): ts.TypeNode {
  switch (typeName) {
    case "string":
      return factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);

    case "string[]":
      return factory.createArrayTypeNode(
        factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
      );

    case "int":
    case "float":
      return factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);

    case "int[]":
    case "float[]":
      return factory.createArrayTypeNode(
        factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
      );

    case "boolean":
      return factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);

    case "boolean[]":
      return factory.createArrayTypeNode(
        factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
      );

    case "object":
      return factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);

    case "object[]":
      return factory.createArrayTypeNode(
        factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
      );

    case "any":
      return factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);

    case "any[]": // a kinda strange type, but to be complete, let's cover it
      return factory.createArrayTypeNode(
        factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
      );

    default:
      // UI5 type, something like "sap.ui.core.CSSSize"
      return factory.createTypeReferenceNode(
        uniqueImport(typeName, requiredImports, knownGlobals, currentClassName)
      );
  }
}

function uniqueImport(
  typeName: string,
  requiredImports: RequiredImports,
  knownGlobals: GlobalToModuleMapping,
  currentClassName: string
) {
  if (typeName === currentClassName) {
    // this is the class we are currently dealing with; no import and no name uniqueness check required
    requiredImports.selfIsUsed = true; // FIXME: improve this shortcut
    return typeName;
  }

  if (requiredImports[typeName]) {
    return requiredImports[typeName].localName;
  }

  const parts = typeName.split(".");
  let localName = parts[parts.length - 1];

  // ensure uniqueness
  while (nameIsUsed(localName, requiredImports)) {
    localName += "_";
  }

  let moduleInfo: {
    moduleName: string;
    exportName?: string;
    localName?: string;
  } = knownGlobals[typeName];

  if (!moduleInfo) {
    // FIXME  e.g. a local module within the app
    const match = typeName.match(/"([^"]+)"\.(.*)/);
    if (match) {
      moduleInfo = {
        localName: localName,
        moduleName: match[1],
        exportName: match[2] || undefined,
      };
    } else {
      const moduleName = typeName.replace(/\./g, "/"); // FIXME
      moduleInfo = {
        localName,
        moduleName,
        exportName: undefined, // FIXME
      };
      log.warn(
        `For the type '${typeName}' an import is created with module name '${moduleName}', using its default export. Is this correct?`
      );
    }
  }

  requiredImports[typeName] = {
    localName: localName,
    moduleName: moduleInfo.moduleName,
    exportName: moduleInfo.exportName,
  };
  return localName;
}

function nameIsUsed(localName: string, requiredImports: RequiredImports) {
  for (const importName in requiredImports) {
    if (requiredImports[importName].localName === localName) {
      // name already used
      return true;
    }
  }
}

function addLineBreakBefore(node: ts.Node, count = 1) {
  for (let i = 0; i < count; i++) {
    ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.SingleLineCommentTrivia,
      ""
    );
  }
}

function createConstructorBlock(settingsTypeName: string) {
  const nodes: ts.Node[] = [];

  // This creates:
  //   constructor(id?: string | $SampleControlSettings);
  nodes.push(
    factory.createConstructorDeclaration(
      undefined,
      undefined,
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "idOrSettings",
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createUnionTypeNode([
            factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            factory.createTypeReferenceNode(settingsTypeName),
          ])
        ),
      ],
      undefined
    )
  );

  // This creates:
  //   constructor(id?: string, settings?: $SampleControlSettings);
  nodes.push(
    factory.createConstructorDeclaration(
      undefined,
      undefined,
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "id",
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        ),
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "settings",
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createTypeReferenceNode(settingsTypeName)
        ),
      ],
      undefined
    )
  );

  // This creates:
  //   constructor(id?: string, settings?: $SampleControlSettings) {
  //      super(id, settings);
  //   }
  nodes.push(
    factory.createConstructorDeclaration(
      undefined,
      undefined,
      [
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "id",
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        ),
        factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "settings",
          factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createTypeReferenceNode(settingsTypeName)
        ),
      ],
      factory.createBlock([
        factory.createExpressionStatement(
          factory.createCallExpression(factory.createSuper(), undefined, [
            factory.createIdentifier("id"),
            factory.createIdentifier("settings"),
          ])
        ),
      ])
    )
  );

  return nodes;
}

export {
  generateMethods,
  generateSettingsInterface,
  addLineBreakBefore,
  createConstructorBlock,
};
