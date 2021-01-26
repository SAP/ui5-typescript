const _ = require("lodash");
const { assertKnownProps } = require("../utils/runtime-checks");

function jsonToAst(jsonObj) {
  return {
    version: jsonObj.version,
    topLevelNamespace: buildNamespace(jsonObj.symbols, "sap"),
  };
}

/**
 * @param symbols
 * @param {string} nsFQN
 * @returns {Namespace}
 */
function buildNamespace(symbols, nsFQN) {
  const nsSymbol = _.find(symbols, (currSymbol) => currSymbol.name === nsFQN);

  assertKnownProps(
    [
      // TODO: What is an "abstract" namespace? :)
      "abstract",
      "basename",
      "events",
      // TODO: should we add these to the documentation somehow?
      "examples",
      // TODO: why does a namespace have an "extends" property? :)
      "extends",
      "final",
      "methods",
      "name",
      "properties",
    ],
    nsSymbol
  );

  const astNode = {
    name: /\w+$/.exec(nsFQN)[0],
    kind: "Namespace",
    namespaces: buildNestedNamespaces(symbols, nsFQN),
    variables:
      nsSymbol !== undefined ? _.map(nsSymbol.properties, buildVariable) : [],
    functions:
      nsSymbol !== undefined ? _.map(nsSymbol.methods, buildFunction) : [],
    classes: buildNestedClasses(symbols, nsFQN),
    interfaces: buildNestedInterfaces(symbols, nsFQN),
    enums: buildNestedEnums(symbols, nsFQN),
    visibility: nsSymbol !== undefined ? nsSymbol.visibility : "public",
  };

  addJsDocProps(astNode, nsSymbol);
  return astNode;
}

function buildNestedNamespaces(symbols, nsFQN) {
  const nestedNamespaces = getDirectDescendants(symbols, "namespace", nsFQN);
  return _.map(nestedNamespaces, (currNestedNS) =>
    buildNamespace(symbols, currNestedNS.name)
  );
}

function buildNestedItems(symbols, nsFQN, ui5kind, builder) {
  const nestedItems = getDirectDescendants(symbols, ui5kind, nsFQN);
  return _.map(nestedItems, builder);
}

const buildNestedClasses = _.partialRight(
  buildNestedItems,
  "class",
  buildClass
);
const buildNestedInterfaces = _.partialRight(
  buildNestedItems,
  "interface",
  buildInterface
);
const buildNestedEnums = _.partialRight(buildNestedItems, "enum", buildEnum);

/**
 *
 * @param property
 * @returns {Variable}
 */
function buildVariable(property) {
  assertKnownProps(["examples", "name", "type", "value"], property);

  const astNode = {
    kind: "Variable",
    name: property.name,
    static: property.static === true,
    type: buildType(property.type),
    visibility: property.visibility,
  };

  addJsDocProps(astNode, property);
  return astNode;
}

/**
 * @param ui5Method
 * @returns {FunctionDesc}
 */
function buildFunction(ui5Method) {
  assertKnownProps(
    ["name", "parameters", "returnValue", "throws", "optional"],
    ui5Method
  );
  // Simple check to avoid having the same parameter defined twice
  const uniqueParameters = _.uniqBy(ui5Method.parameters, "name");
  const astNode = {
    kind: "FunctionDesc",
    name: ui5Method.name,
    static: ui5Method.static === true,
    parameters: _.map(uniqueParameters, buildParameter),
    returns: buildReturnDesc(ui5Method.returnValue),
    description: ui5Method.description,
    additionalDocs: ui5Method.references,
    since: ui5Method.since,
    throws: ui5Method.throws ? ui5Method.throws : [],
    deprecated: buildDeprecated(ui5Method.deprecated),
    visibility: ui5Method.visibility,
    optional: ui5Method.optional,
  };

  addJsDocProps(astNode, ui5Method);
  return astNode;
}

const buildOptionalParameter = (ui5Param) => baseBuildParameter(ui5Param, true);
const buildParameter = (ui5Param) => baseBuildParameter(ui5Param, false);

/**
 * @param ui5Param
 * @param forcedOptional
 * @returns {Parameter}
 */
function baseBuildParameter(ui5Param, forcedOptional) {
  assertKnownProps(
    [
      "name",
      "type",
      "parameterProperties",
      "optional",
      "defaultValue",
      // from UI5 metadata for mSettings
      "group",
      "methods",
      "bindable",
    ],
    ui5Param
  );

  const complexType = ui5Param.parameterProperties;

  const astNode = {
    kind: "Parameter",
    name: ui5Param.name,
    type: complexType
      ? buildComplexParamType(complexType)
      : buildType(ui5Param.type),
    defaultValue: ui5Param.defaultValue,
    optional: forcedOptional === true ? true : ui5Param.optional === true,
  };

  addJsDocProps(astNode, ui5Param);
  return astNode;
}

/**
 *
 * @param ui5ItemMeta - An item from ui5-metadata sub array on a ui5 API.json Control.
 * @param buildType {function}
 * @returns {Parameter}
 */
function buildParameterWithType(ui5ItemMeta, buildType) {
  assertKnownProps(
    [
      "name",
      "type",
      "parameterProperties",
      "optional",
      "defaultValue",
      // from UI5 metadata for mSettings
      "group",
      "methods",
      "bindable",
      "parameters",
      "singularName",
      "cardinality",
      "dnd",
      // TODO: more magic new ways to describe types in UI5
      //       need to look into this property and its meaning
      //       this only appears 12 times in 350K LOC
      //       so perhaps it is not important enough to care about...
      "altTypes",
    ],
    ui5ItemMeta
  );

  const astNode = {
    kind: "Parameter",
    name: ui5ItemMeta.name,
    // TODO: We need to support complex function types to generate those in d.ts (e.g `(a:number, b:string) => boolean`)
    type: buildType(ui5ItemMeta),
    defaultValue: null,
    optional: true,
  };

  addJsDocProps(astNode, ui5ItemMeta);
  return astNode;
}

function buildComplexParamType(ui5ComplexParam) {
  return _.mapValues(ui5ComplexParam, buildParameter);
}

/**
 * @param ui5ReturnValue
 * @returns {ReturnDesc}
 */
function buildReturnDesc(ui5ReturnValue) {
  if (_.isUndefined(ui5ReturnValue)) {
    return undefined;
  }

  assertKnownProps(["description", "type"], ui5ReturnValue);

  return {
    kind: "ReturnDesc",
    type: buildType(ui5ReturnValue.type),
    description: ui5ReturnValue.description,
  };
}

/**
 * @param ui5Class
 * @returns {Class}
 */
function buildClass(ui5Class) {
  assertKnownProps(
    [
      "abstract",
      "basename",
      "constructor",
      "events",
      "extends",
      "implements",
      // Final classes do not exist in TypeScript **signatures**
      // -https://github.com/Microsoft/TypeScript/issues/8306
      // todo: Consider adding a @final annotation?
      "final",
      "methods",
      "name",
      "properties",
    ],
    ui5Class
  );

  const astNode = {
    kind: "Class",
    name: ui5Class.basename,
    extends: ui5Class.extends,
    implements: ui5Class.implements ? ui5Class.implements : [],
    constructors: ui5Class.constructor
      ? [buildFunction(ui5Class.constructor)]
      : [],
    fields: _.map(ui5Class.properties, buildVariable),
    methods: _.map(ui5Class.methods, buildFunction),
    isAbstract: ui5Class.abstract === true,
    visibility: ui5Class.visibility,
  };

  const ui5Meta = ui5Class["ui5-metadata"];

  if (isSpecialControlConstructor(astNode, ui5Meta)) {
    augmentMSettingsParam(astNode, ui5Meta);
  }

  addJsDocProps(astNode, ui5Class);
  return astNode;
}

const ui5ExtendsToArray = (ui5Extends) => {
  if (_.isArray(ui5Extends)) {
    return _.clone(ui5Extends);
  }
  return ui5Extends ? [ui5Extends] : [];
};

/**
 * @param ui5Interface
 * @returns {Interface}
 */
function buildInterface(ui5Interface) {
  assertKnownProps(["basename", "name", "methods", "events"], ui5Interface);

  const astNode = {
    kind: "Interface",
    name: ui5Interface.basename,
    // The input UI5 Interfaces either have no or a single 'extends', but might have multiple in future.
    extends: ui5ExtendsToArray(ui5Interface.extends),
    methods: _.map(ui5Interface.methods, buildFunction),
    // The input UI5 interfaces only have methods, never properties
    props: [],
    visibility: ui5Interface.visibility,
  };

  addJsDocProps(astNode, ui5Interface);
  return astNode;
}

/**
 * @param ui5Enum
 * @returns {Enum}
 */
function buildEnum(ui5Enum) {
  assertKnownProps(["name", "basename", "properties"], ui5Enum);

  const astNode = {
    kind: "Enum",
    name: ui5Enum.basename,
    values: _.map(ui5Enum.properties, buildVariable),
    visibility: ui5Enum.visibility,
  };

  addJsDocProps(astNode, ui5Enum);
  return astNode;
}

/**
 *
 * @param ui5Deprecated
 * @returns {DeprecatedDesc}
 */
function buildDeprecated(ui5Deprecated) {
  if (_.isUndefined(ui5Deprecated)) {
    return null;
  }

  assertKnownProps(["since", "text"], ui5Deprecated);

  return {
    kind: "DeprecatedDesc",
    description: ui5Deprecated.text,
    since: ui5Deprecated.since,
  };
}

/**
 * @param ui5Exp
 * @returns {ExperimentalDesc}
 */
function buildExperimental(ui5Exp) {
  if (_.isUndefined(ui5Exp)) {
    return null;
  }

  assertKnownProps(["since", "text", "description"], ui5Exp);

  return {
    kind: "ExperimentalDesc",
    since: ui5Exp.since,
    text: ui5Exp.text,
  };
}

/**
 *
 * @param ui5Type
 * @returns {Type}
 */
function buildType(ui5Type) {
  if (ui5Type === undefined) {
    return undefined;
  }

  // TODO: Need to parse this with doctrine or another JSDocs Type Parser.
  if (/[<>{}]/.test(ui5Type)) {
    return {
      kind: "SimpleType",
      // ignoring any "too complex" types for now
      type: "any",
    };
  }

  const isUnion = ui5Type.indexOf("|") !== -1;

  if (isUnion) {
    const split = ui5Type.split("|");
    const trimmed = _.map(split, _.trim);
    const unionTypesAsts = _.map(trimmed, buildType);
    return {
      kind: "UnionType",
      types: unionTypesAsts,
    };
  } else {
    return {
      kind: "SimpleType",
      type: ui5Type,
    };
  }
}

function getDirectDescendants(symbols, kind, nsFQN) {
  const directDescendantsOfKind = _.filter(symbols, (currSymbol) => {
    const currKind = currSymbol.kind;
    const currName = currSymbol.name;
    return (
      currKind === kind &&
      currName.startsWith(nsFQN + ".") &&
      //  No more dots, so this is a **direct** child.
      currName.substr(nsFQN.length + 1).indexOf(".") === -1
    );
  });
  return directDescendantsOfKind;
}

function addJsDocProps(astNode, jsonProperty) {
  if (jsonProperty === undefined) {
    return;
  }

  if (jsonProperty.description) {
    astNode.description = jsonProperty.description;
  }

  if (jsonProperty.since) {
    astNode.since = jsonProperty.since;
  }

  if (jsonProperty.deprecated) {
    astNode.deprecated = buildDeprecated(jsonProperty.deprecated);
  }

  if (jsonProperty.experimental) {
    astNode.experimental = buildExperimental(jsonProperty.experimental);
  }

  if (jsonProperty.references) {
    astNode.additionalDocs = jsonProperty.references;
  }
}

function isSpecialControlConstructor(classAstNode, ui5Meta) {
  // special case for ManagedObject
  if (classAstNode.name === "ManagedObject") {
    return true;
  }

  const constructor = classAstNode.constructors && classAstNode.constructors[0];
  const hasSettings =
    constructor.parameters &&
    constructor.parameters.length === 2 &&
    constructor.parameters[1].name === "mSettings";

  return (
    ui5Meta &&
    (ui5Meta.stereotype === "control" || ui5Meta.stereotype === "element") &&
    hasSettings
  );
}

/**
 *
 * @param astNode {Class}
 * @param ui5Meta
 */
function augmentMSettingsParam(astNode, ui5Meta) {
  const ui5Props = _.reject(ui5Meta.properties, { visibility: "hidden" });
  const ui5PropsNames = _.map(ui5Props, "name");
  const ui5PropsParams = _.map(ui5Props, buildOptionalParameter);
  const ui5PropComplexType = _.zipObject(ui5PropsNames, ui5PropsParams);

  const ui5Events = _.reject(ui5Meta.events, { visibility: "hidden" });
  const ui5EventsNames = _.map(ui5Events, "name");
  const ui5EventsParams = _.map(ui5Events, (event) =>
    buildParameterWithType(event, () => {
      // All events (currently return a simple function
      // TODO: what are the arguments for this simple function?
      return {
        kind: "SimpleType",
        type: "Function",
      };
    })
  );
  const ui5EventComplexType = _.zipObject(ui5EventsNames, ui5EventsParams);

  const ui5Aggregations = _.reject(ui5Meta.aggregations, {
    visibility: "hidden",
  });
  const ui5AggregationsNames = _.map(ui5Aggregations, "name");
  const ui5AggregationsParams = _.map(ui5Aggregations, (aggre) =>
    buildParameterWithType(aggre, (aggregation) => {
      const aggreType = aggregation.type;
      // https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject
      // for 0..1 aggregations, the value has to be an instance of the aggregated type
      // for 0..n aggregations, the value has to be an array of instances of the aggregated type or a single instance

      switch (aggregation.cardinality) {
        case "0..1":
          return {
            kind: "SimpleType",
            type: aggreType,
          };
        case "0..n":
          return {
            kind: "UnionType",
            types: [
              {
                kind: "SimpleType",
                // TODO: we need to represent array types in a more consistent manner
                type: aggreType + "[]",
              },
              {
                kind: "SimpleType",
                type: aggreType,
              },
            ],
          };
        default:
          throw `None Exhaustive Match: <${aggregation.cardinality}>`;
      }
    })
  );
  const ui5AggregationsComplexType = _.zipObject(
    ui5AggregationsNames,
    ui5AggregationsParams
  );

  const ui5Associations = _.reject(ui5Meta.associations, {
    visibility: "hidden",
  });
  const ui5AssociationsNames = _.map(ui5Associations, "name");
  const ui5AssociationsParams = _.map(ui5Associations, (assoc) =>
    buildParameterWithType(assoc, (aggregation) => {
      const assocType = aggregation.type;
      // https://sapui5.hana.ondemand.com/#/api/sap.ui.base.ManagedObject
      // for 0..1 associations, an instance of the associated type or an id (string) is accepted
      // for 0..n associations, an array of instances of the associated type or of IDs is accepted

      switch (aggregation.cardinality) {
        case "0..1":
          return {
            kind: "UnionType",
            types: [
              {
                kind: "SimpleType",
                // TODO: we need to represent array types in a more consistent manner
                type: assocType,
              },
              {
                kind: "SimpleType",
                type: "string",
              },
            ],
          };
        case "0..n":
          return {
            kind: "UnionType",
            types: [
              {
                kind: "SimpleType",
                // TODO: we need to represent array types in a more consistent manner
                type: assocType + "[]",
              },
              {
                kind: "SimpleType",
                type: "string[]",
              },
            ],
          };
        default:
          throw `None Exhaustive Match: <${aggregation.cardinality}>`;
      }
    })
  );
  const ui5AssociationsComplexType = _.zipObject(
    ui5AssociationsNames,
    ui5AssociationsParams
  );

  // this property chain is safe to access because it was checked in <isSpecialControlConstructor> condition.
  astNode.constructors[0].parameters[1].type = _.assign(
    {},
    ui5PropComplexType,
    ui5EventComplexType,
    ui5AggregationsComplexType,
    ui5AssociationsComplexType
  );

  astNode.isUI5Control = true;
}

module.exports = {
  jsonToAst,
};
