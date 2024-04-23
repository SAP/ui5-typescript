import { getLogger } from "@ui5/logger";
import {
  ApiJSON,
  ClassSymbol,
  ConcreteSymbol,
  InterfaceSymbol,
  ObjConstructor,
  ObjEvent,
  Ui5Property,
} from "../types/api-json.js";
const log = getLogger("@ui5/dts-generator/constructor-settings-interfaces");
import { splitName } from "./base-utils.js";
import { TypeReference } from "../types/ast.js";

export function makeSettingsName(fqn: string) {
  const [pkgname, basename] = splitName(fqn);
  return `${pkgname}.\$${basename}Settings`;
}

export function isA(
  symbolToCheck: ConcreteSymbol | string,
  name: string,
  typeUniverse: Map<string, ConcreteSymbol>,
) {
  const visited = new Set();

  const check = (symbol: ConcreteSymbol | string) => {
    if (typeof symbol === "string") {
      const lookedUp = typeUniverse.get(symbol);
      if (lookedUp == null) {
        return false;
      }
      symbol = lookedUp;
    }
    if (visited.has(symbol)) {
      return false;
    }
    visited.add(symbol); // TODO: can't this be a much more global cache?!? It's only caching within this single lookup
    if (typeof symbol === "object" && symbol.name === name) {
      return true;
    }
    if (typeof symbol === "object" && symbol.kind === "class") {
      if (symbol.extends && check(symbol.extends)) {
        return true;
      }
      if (symbol.implements && symbol.implements.some(check)) {
        return true;
      }
    } else if (typeof symbol === "object" && symbol.kind === "interface") {
      if (Array.isArray(symbol.extends)) {
        if (symbol.extends.some(check)) {
          return true;
        }
      } else if (symbol.extends) {
        if (check(symbol.extends)) {
          return true;
        }
      }
    }
    return false;
  };

  return check(symbolToCheck);
}

export function addJsDocProps(symbol, metadataEntity) {
  symbol.optional = true;

  if (metadataEntity === undefined) {
    return symbol;
  }

  if (metadataEntity.description) {
    symbol.description = metadataEntity.description;
  }

  if (metadataEntity.since) {
    symbol.since = metadataEntity.since;
  }

  if (metadataEntity.deprecated) {
    symbol.deprecated = metadataEntity.deprecated;
  }

  if (metadataEntity.experimental) {
    symbol.experimental = metadataEntity.experimental;
  }

  if (metadataEntity.references) {
    symbol.references = metadataEntity.references;
  }

  return symbol;
}

/**
 * Creates for each `ManagedObject` subclass an interface that describes the
 * settings (properties, aggregations, associations, event handlers) that can
 * be provided in the `mSettings` constructor parameter.
 *
 * The corresponding parameter of the class's constructor is re-typed to the
 * interface.
 *
 * For the dependencies of the currently processed library, only the interface itself
 * is generated (`addDetails = false`), not the individual settings. The interface
 * itself is needed so that classes of the currently processed library can find the
 * super-interface for their settings interfaces.
 *
 * This method requires the dependencies to check whether a class is a subclass of
 * `ManagedObject`.
 *
 * @param symbols
 * @param dependencies
 * @param addDetails Whether the interface should contain all settings
 */
function createConstructorSettingsInterfaces(
  symbols: ConcreteSymbol[],
  dependencies: ApiJSON[],
  addDetails: boolean,
) {
  const typeUniverse = new Map<string, ConcreteSymbol>();
  [symbols, ...dependencies.map((api) => api.symbols)].forEach(
    (symArray: ConcreteSymbol[]) => {
      symArray.forEach((symbol) => typeUniverse.set(symbol.name, symbol));
    },
  );

  const isManagedObject = (
    symbol: ConcreteSymbol | string,
  ): symbol is ClassSymbol => {
    return isA(symbol, "sap.ui.base.ManagedObject", typeUniverse);
  };

  const clone = (obj: object) => JSON.parse(JSON.stringify(obj));

  const dedup = <T extends ConcreteSymbol>(arr: T[]) =>
    arr.filter(
      (elem, idx) => arr.findIndex((cand) => cand.name === elem.name) === idx,
    );

  function settingsForProperties(symbol: ClassSymbol) {
    let settings = [];
    if (symbol["ui5-metadata"]) {
      settings = settings.concat(
        symbol["ui5-metadata"]?.properties?.map((prop) => {
          const propType = {
            kind: "UnionType",
            types: [
              clone(prop.type),
              {
                kind: "TypeReference",
                typeName: "sap.ui.base.ManagedObject.PropertyBindingInfo",
              },
            ],
          };

          if (
            !(
              prop.type.kind === "TypeReference" &&
              prop.type.typeName === "string"
            )
          ) {
            propType.types.push({
              kind: "TypeReference",
              typeName: "`{${string}}`",
            });
          }

          return addJsDocProps(
            {
              name: prop.name,
              type: propType,
              visibility: prop.visibility,
            },
            prop,
          );
        }) || [],
      );
      settings = settings.concat(
        symbol["ui5-metadata"]?.specialSettings?.map((setting) => {
          return addJsDocProps(
            {
              name: setting.name,
              type: setting.type,
              visibility: setting.visibility,
            },
            setting,
          );
        }) || [],
      );
    }
    return settings;
  }

  type AggregationOrAssociationType =
    | {
        kind: string;
        typeName: string;
      }
    | {
        kind: string;
        elementType: AggregationOrAssociationType;
      }
    | {
        kind: string;
        types: AggregationOrAssociationType[];
      };

  function settingsForAggregations(symbol: ClassSymbol) {
    if (
      "ui5-metadata" in symbol &&
      symbol["ui5-metadata"] &&
      symbol["ui5-metadata"].aggregations
    ) {
      return symbol["ui5-metadata"].aggregations.map((aggregation) => {
        // https://ui5.sap.com/#/api/sap.ui.base.ManagedObject
        // for 0..1 aggregations, the value has to be an instance of the aggregated type
        // for 0..n aggregations, the value has to be an array of instances of the aggregated type or a single instance

        let aggrType: AggregationOrAssociationType = {
          kind: "TypeReference",
          typeName: aggregation.type.typeName,
        };

        // if there're altTypes, create a union type from obj type and alt type
        // additonally, if it is a 0..1 aggregation, it can be bound like a property
        if (
          Array.isArray(aggregation.altTypes) &&
          aggregation.altTypes.length > 0
        ) {
          aggrType = {
            kind: "UnionType",
            types: [
              {
                kind: "TypeReference",
                typeName: aggregation.altTypes[0],
              },
              aggrType,
            ],
          };

          if (aggregation.cardinality === "0..1") {
            aggrType.types.push({
              kind: "TypeReference",
              typeName: "sap.ui.base.ManagedObject.PropertyBindingInfo",
            });
            if (aggregation.altTypes[0] !== "string") {
              aggrType.types.push({
                kind: "TypeReference",
                typeName: "`{${string}}`",
              });
            }
          }
        }

        // finally create the setting type based on the cardinality
        // for 0..1 aggregations, the value has to be an instance of the aggregated type
        // for 0..n aggregations, the value has to be an array of instances of the aggregated type or a single instance
        switch (aggregation.cardinality) {
          case "0..1":
            // do nothing
            break;
          case "0..n":
            aggrType = {
              kind: "UnionType",
              types: [
                {
                  kind: "ArrayType",
                  elementType: clone(aggrType),
                },
                aggrType,
                {
                  kind: "TypeReference",
                  typeName: "sap.ui.base.ManagedObject.AggregationBindingInfo",
                },
                {
                  kind: "TypeReference",
                  typeName: "`{${string}}`",
                },
              ],
            };
            break;
          default:
            throw new TypeError(
              `Unexpected aggregation cardinality ${aggregation.cardinality}`,
            );
        }

        return addJsDocProps(
          {
            name: aggregation.name,
            type: aggrType,
            visibility: aggregation.visibility,
          },
          aggregation,
        );
      });
    }
    return [];
  }

  function settingsForAssociations(symbol: ClassSymbol) {
    if (symbol["ui5-metadata"] && symbol["ui5-metadata"].associations) {
      return symbol["ui5-metadata"].associations.map((association) => {
        // https://ui5.sap.com/#/api/sap.ui.base.ManagedObject
        // for 0..1 associations, an instance of the associated type or an id (string) is accepted
        // for 0..n associations, an array of instances of the associated type or of IDs is accepted
        let assocType: AggregationOrAssociationType = {
          kind: "UnionType",
          types: [
            {
              kind: "TypeReference",
              typeName: association.type.typeName,
            },
            {
              kind: "TypeReference",
              typeName: "string",
            },
          ],
        };

        switch (association.cardinality) {
          case "0..1":
            // nothing to do
            break;
          case "0..n":
            assocType = {
              kind: "ArrayType",
              elementType: assocType,
            };
            break;
          default:
            throw new TypeError(
              `Unexpected association cardinality ${association.cardinality}`,
            );
        }

        return addJsDocProps(
          {
            name: association.name,
            type: assocType,
            visibility: association.visibility,
          },
          association,
        );
      });
    }
    return [];
  }

  function settingsForEvents(symbol: ClassSymbol) {
    if (symbol["ui5-metadata"] && symbol["ui5-metadata"].events) {
      return symbol["ui5-metadata"].events.map((event) => {
        return addJsDocProps(
          {
            name: event.name,
            type: {
              kind: "FunctionType",
              parameters: [
                {
                  name: "oEvent",
                  type: {
                    kind: "TypeReference",
                    typeName: "sap.ui.base.Event",
                  },
                },
              ],
              type: {
                kind: "TypeReference",
                typeName: "void",
              },
            },
            visibility: event.visibility,
          },
          event,
        );
      });
    }
    return [];
  }

  const settingsInterfaces: InterfaceSymbol[] = [];
  symbols.forEach((symbol) => {
    if (isManagedObject(symbol)) {
      log.verbose(`adding settings interface for ${symbol.name}`);
      const settings: InterfaceSymbol = {
        kind: "interface",
        name: makeSettingsName(symbol.name),
        basename: `\$${symbol.basename}Settings`,
        module: symbol.module,
        resource: symbol.resource,
        export: `\$${symbol.basename}Settings`,
        properties: addDetails
          ? dedup([
              ...settingsForProperties(symbol),
              ...settingsForAggregations(symbol),
              ...settingsForAssociations(symbol),
              ...settingsForEvents(symbol),
            ])
          : [],
        visibility: symbol.visibility,
        __isNotAMarkerInterface: true,
      };
      if (isManagedObject(symbol.extends)) {
        settings.extends = makeSettingsName(symbol.extends);
      }
      settings.description = `Describes the settings that can be provided to the ${symbol.basename} constructor.`;
      if (symbol.deprecated) {
        settings.deprecated = symbol.deprecated;
      }
      if (symbol.experimental) {
        settings.experimental = symbol.experimental;
      }
      settingsInterfaces.push(settings);
      if (Object.hasOwn(symbol, "constructor")) {
        const params =
          "parameters" in symbol.constructor
            ? symbol.constructor.parameters
            : undefined;
        if (Array.isArray(params)) {
          let arg = 0;
          while (arg < params.length && !/settings/i.test(params[arg].name)) {
            arg++;
          }
          if (
            arg < params.length &&
            params[arg].type.kind === "TypeReference" &&
            (params[arg].type as TypeReference).typeName?.match(/object/i)
          ) {
            log.verbose(`replacing ctor param for ${symbol.name}`);
            (params[arg].type as TypeReference).typeName = settings.name;
            if (arg === 1 && params[0].optional) {
              symbol.__hasOverloadedConstructor = true;
            }
          } else {
            log.warn(`could not replace ctor param for ${symbol.name}`);
          }
        }
      }
    }
  });

  symbols.push(...settingsInterfaces);
}

export function addConstructorSettingsInterfaces(
  apijson: ApiJSON,
  dependencies: ApiJSON[],
) {
  dependencies.forEach((dep) =>
    createConstructorSettingsInterfaces(dep.symbols, dependencies, false),
  );
  createConstructorSettingsInterfaces(apijson.symbols, dependencies, true);
}
