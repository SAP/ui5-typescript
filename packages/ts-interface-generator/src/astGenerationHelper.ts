import ts = require("typescript");
import astToString from "./astToString";

function generateSettingsInterface(
  classInfo: ClassInfo,
  classFileName: string,
  constructorSignaturesAvailable: boolean,
  settingsTypeFullName: string,
  requiredImports: {},
  knownGlobals: { [key: string]: { moduleName: string; exportName?: string } }
) {
  const interfaceProperties = [];
  const currentClassName = classInfo.name;

  // properties
  for (let n in classInfo.properties) {
    const property = classInfo.properties[n];
    if (property.visibility !== "hidden") {
      interfaceProperties.push(
        ts.createPropertySignature(
          undefined,
          property.name,
          ts.createToken(ts.SyntaxKind.QuestionToken),
          createTSTypeNode(
            property.type,
            requiredImports,
            knownGlobals,
            currentClassName
          ),
          undefined
        )
      );
    }
  }

  // aggregations
  for (let n in classInfo.aggregations) {
    const aggregation = classInfo.aggregations[n];
    if (aggregation.visibility !== "hidden") {
      interfaceProperties.push(
        ts.createPropertySignature(
          undefined,
          aggregation.name,
          ts.createToken(ts.SyntaxKind.QuestionToken),
          createTSTypeNode(
            aggregation.type,
            requiredImports,
            knownGlobals,
            currentClassName
          ),
          undefined
        )
      );
    }
  }

  // associations
  for (let n in classInfo.associations) {
    const association = classInfo.associations[n];
    if (association.visibility !== "hidden") {
      interfaceProperties.push(
        ts.createPropertySignature(
          undefined,
          association.name,
          ts.createToken(ts.SyntaxKind.QuestionToken),
          ts.createUnionTypeNode([
            createTSTypeNode(
              association.type,
              requiredImports,
              knownGlobals,
              currentClassName
            ),
            ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ]),
          undefined
        )
      );
    }
  }

  // events
  for (let n in classInfo.events) {
    const event = classInfo.events[n];
    if (event.visibility !== "hidden") {
      interfaceProperties.push(
        ts.createPropertySignature(
          undefined,
          event.name,
          ts.createToken(ts.SyntaxKind.QuestionToken),
          ts.createFunctionTypeNode(
            [],
            [
              ts.createParameter(
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
            ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
          ),
          undefined
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
    console.log(
      "Constructor signatures are present in implementation file of " +
        classInfo.name +
        "."
    );
  }

  const settingsSuperclass = ts.createIdentifier(localName);
  const settingsSuperclassAsExpression = ts.createExpressionWithTypeArguments(
    undefined,
    settingsSuperclass
  );
  const heritageClauses = [
    ts.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
      settingsSuperclassAsExpression,
    ]),
  ];
  const myInterface = ts.createInterfaceDeclaration(
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
  console.log(message);
}

function generateMethods(
  classInfo: ClassInfo,
  requiredImports: RequiredImports,
  knownGlobals: { [key: string]: { moduleName: string; exportName?: string } }
) {
  const allMethods: ts.MethodSignature[] = [];
  const currentClassName = classInfo.name;

  // properties
  for (let n in classInfo.properties) {
    const property = classInfo.properties[n];
    if (property.visibility === "hidden") {
      continue;
    }

    // property getter
    const getter = ts.createMethodSignature(
      [],
      [],
      createTSTypeNode(
        property.type,
        requiredImports,
        knownGlobals,
        currentClassName
      ),
      property.methods.get,
      undefined
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
      ts.createMethodSignature(
        [],
        [
          ts.createParameter(
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
        ts.createThisTypeNode(),
        property.methods.set,
        undefined
      )
    );
  }

  // aggregations
  for (let n in classInfo.aggregations) {
    const aggregation = classInfo.aggregations[n];
    if (aggregation.visibility === "hidden") {
      continue;
    }

    // aggregation getter
    const getter = ts.createMethodSignature(
      [],
      [],
      aggregation.cardinality === "0..n"
        ? ts.createArrayTypeNode(
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
          ),
      aggregation.methods.get,
      undefined
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
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
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
          ts.createThisTypeNode(),
          aggregation.methods.add,
          undefined
        )
      );

      // insert aggregation
      allMethods.push(
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
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
            ts.createParameter(
              undefined,
              undefined,
              undefined,
              "index",
              undefined,
              ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
            ),
          ],
          ts.createThisTypeNode(),
          aggregation.methods.insert,
          undefined
        )
      );

      // remove aggregation
      allMethods.push(
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              ts.createUnionTypeNode([
                ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                createTSTypeNode(
                  aggregation.type,
                  requiredImports,
                  knownGlobals,
                  currentClassName
                ),
              ])
            ),
          ],
          ts.createThisTypeNode(),
          aggregation.methods.remove,
          undefined
        )
      );

      // remove all aggregation
      allMethods.push(
        ts.createMethodSignature(
          [],
          [],
          ts.createArrayTypeNode(
            createTSTypeNode(
              aggregation.type,
              requiredImports,
              knownGlobals,
              currentClassName
            )
          ),
          aggregation.methods.removeAll,
          undefined
        )
      );

      // index of aggregation
      allMethods.push(
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
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
          ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
          aggregation.methods.indexOf,
          undefined
        )
      );

      //	this._sUpdater = 'update' + N;
      //	this._sRefresher = 'refresh' + N;
    } else {
      // set aggregation
      allMethods.push(
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
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
          ts.createThisTypeNode(),
          aggregation.methods.set,
          undefined
        )
      );
    }

    // destroy aggregation
    allMethods.push(
      ts.createMethodSignature(
        [],
        [],
        ts.createThisTypeNode(),
        aggregation.methods.destroy,
        undefined
      )
    );

    if (aggregation.bindable) {
      // bind aggregation
      allMethods.push(
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
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
          ts.createThisTypeNode(),
          aggregation.methods.bind,
          undefined
        )
      );

      // unbind aggregation
      allMethods.push(
        ts.createMethodSignature(
          [],
          [],
          ts.createThisTypeNode(),
          aggregation.methods.unbind,
          undefined
        )
      );
    }
  }

  // associations
  for (let n in classInfo.associations) {
    const association = classInfo.associations[n];
    if (association.visibility === "hidden") {
      continue;
    }

    // association getter
    const getter = ts.createMethodSignature(
      [],
      [],
      association.cardinality === "0..n"
        ? ts.createArrayTypeNode(
            ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
          )
        : ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      association.methods.get,
      undefined
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
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
              undefined,
              undefined,
              undefined,
              n,
              ts.createToken(ts.SyntaxKind.QuestionToken),
              ts.createUnionTypeNode([
                ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                createTSTypeNode(
                  association.type,
                  requiredImports,
                  knownGlobals,
                  currentClassName
                ),
              ])
            ),
          ],
          ts.createThisTypeNode(),
          association.methods.set,
          undefined
        )
      );
    } else {
      // 0..n

      // add association
      allMethods.push(
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              ts.createUnionTypeNode([
                ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                createTSTypeNode(
                  association.type,
                  requiredImports,
                  knownGlobals,
                  currentClassName
                ),
              ])
            ),
          ],
          ts.createThisTypeNode(),
          association.methods.add,
          undefined
        )
      );

      // remove association
      allMethods.push(
        ts.createMethodSignature(
          [],
          [
            ts.createParameter(
              undefined,
              undefined,
              undefined,
              n,
              undefined,
              ts.createUnionTypeNode([
                ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                createTSTypeNode(
                  association.type,
                  requiredImports,
                  knownGlobals,
                  currentClassName
                ),
              ])
            ),
          ],
          ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          association.methods.remove,
          undefined
        )
      );

      // remove all aggregation
      allMethods.push(
        ts.createMethodSignature(
          [],
          [],
          ts.createArrayTypeNode(
            ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
          ),
          association.methods.removeAll,
          undefined
        )
      );
    }
  }

  // events
  for (let n in classInfo.events) {
    const event = classInfo.events[n];
    if (event.visibility === "hidden") {
      continue;
    }

    // attach event
    const callback = ts.createFunctionTypeNode(
      [],
      [
        ts.createParameter(
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
      ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
    );
    const attach = ts.createMethodSignature(
      [],
      [
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          "fn",
          undefined,
          callback
        ),
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          "listener",
          ts.createToken(ts.SyntaxKind.QuestionToken),
          ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
        ),
      ],
      ts.createThisTypeNode(),
      event.methods.attach,
      undefined
    );
    addLineBreakBefore(attach, 2);
    ts.addSyntheticLeadingComment(
      attach,
      ts.SyntaxKind.SingleLineCommentTrivia,
      " event: " + n
    );
    allMethods.push(attach);

    // attach event (with data)
    const callbackWithData = ts.createFunctionTypeNode(
      [],
      [
        ts.createParameter(
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
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          "data",
          undefined,
          ts.createTypeReferenceNode("CustomDataType")
        ),
      ],
      ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
    );
    allMethods.push(
      ts.createMethodSignature(
        [
          ts.createTypeParameterDeclaration(
            "CustomDataType",
            ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
          ),
        ],
        [
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            "data",
            undefined,
            ts.createTypeReferenceNode("CustomDataType")
          ),
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            "fn",
            undefined,
            callbackWithData
          ),
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            "listener",
            ts.createToken(ts.SyntaxKind.QuestionToken),
            ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
          ),
        ],
        ts.createThisTypeNode(),
        event.methods.attach,
        undefined
      )
    );

    // detach event
    allMethods.push(
      ts.createMethodSignature(
        [],
        [
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            "fn",
            undefined,
            ts.createTypeReferenceNode("Function")
          ),
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            "listener",
            ts.createToken(ts.SyntaxKind.QuestionToken),
            ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
          ),
        ],
        ts.createThisTypeNode(),
        event.methods.detach,
        undefined
      )
    );

    // fire event
    allMethods.push(
      ts.createMethodSignature(
        [],
        [
          // TODO: describe parameter object with all details
          ts.createParameter(
            undefined,
            undefined,
            undefined,
            "parameters",
            ts.createToken(ts.SyntaxKind.QuestionToken),
            ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword)
          ),
        ],
        ts.createThisTypeNode(),
        event.methods.fire,
        undefined
      )
    );
  }

  return allMethods;
}

function createTSTypeNode(
  typeName: string,
  requiredImports: RequiredImports,
  knownGlobals: { [key: string]: { moduleName: string; exportName?: string } },
  currentClassName: string
) {
  switch (typeName) {
    case "string":
      return ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);

    case "int":
    case "float":
      return ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);

    case "boolean":
      return ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);

    case "object":
      return ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);

    case "any":
      return ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);

    default:
      // UI5 type, something like "sap.ui.core.CSSSize"
      const localTypeName = uniqueImport(
        typeName,
        requiredImports,
        knownGlobals,
        currentClassName
      );
      return ts.createTypeReferenceNode(localTypeName);
  }
}

function uniqueImport(
  typeName: string,
  requiredImports: RequiredImports,
  knownGlobals: { [key: string]: { moduleName: string; exportName?: string } },
  currentClassName: string
) {
  if (typeName === currentClassName) {
    // this is the class we are currently dealing with; no import and no name uniqueness check required
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
      console.warn(
        "For the type '" +
          typeName +
          "' an import is created with module name '" +
          moduleName +
          "', using its default export. Is this correct?"
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
  for (let importName in requiredImports) {
    if (requiredImports[importName].localName === localName) {
      // name already used
      return true;
    }
  }
}

function addLineBreakBefore(node: ts.Node, count: number = 1) {
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
    ts.createConstructor(
      undefined,
      undefined,
      [
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          "idOrSettings",
          ts.createToken(ts.SyntaxKind.QuestionToken),
          ts.createUnionTypeNode([
            ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            ts.createTypeReferenceNode(settingsTypeName),
          ])
        ),
      ],
      undefined
    )
  );

  // This creates:
  //   constructor(id?: string, settings?: $SampleControlSettings);
  nodes.push(
    ts.createConstructor(
      undefined,
      undefined,
      [
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          "id",
          ts.createToken(ts.SyntaxKind.QuestionToken),
          ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        ),
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          "settings",
          ts.createToken(ts.SyntaxKind.QuestionToken),
          ts.createTypeReferenceNode(settingsTypeName)
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
    ts.createConstructor(
      undefined,
      undefined,
      [
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          "id",
          ts.createToken(ts.SyntaxKind.QuestionToken),
          ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        ),
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          "settings",
          ts.createToken(ts.SyntaxKind.QuestionToken),
          ts.createTypeReferenceNode(settingsTypeName)
        ),
      ],
      ts.createBlock([
        ts.createExpressionStatement(
          ts.createCall(ts.createSuper(), undefined, [
            ts.createIdentifier("id"),
            ts.createIdentifier("settings"),
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
