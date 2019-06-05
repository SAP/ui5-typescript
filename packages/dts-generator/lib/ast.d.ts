type UI5Visibility = "restricted" | "protected" | "public" | undefined;

interface Ui5AstRoot {
  version: string;
  topLevelNamespace: Namespace;
}

interface Namespace extends UI5JSDocs {
  kind: "Namespace";
  name: string;
  namespaces: Namespace[];
  variables: Variable[];
  functions: FunctionDesc[];
  classes: Class[];
  interfaces: Interface[];
  enums: Enum[];
  visibility: UI5Visibility;
}

interface Variable extends UI5JSDocs {
  kind: "Variable";
  name: string;
  static?: boolean;
  type: Type;
  visibility: UI5Visibility;
}

interface FunctionDesc extends UI5JSDocs {
  kind: "FunctionDesc";
  name: string;
  static?: boolean;
  overwrite: boolean;
  parameters: Parameter[];
  returns: ReturnDesc;
  // descriptions of potential errors being throws
  throws?: { type?: string; description: string }[];
  visibility: UI5Visibility;
}

interface Property extends UI5JSDocs {
  kind: "Property";
  name: string;
  type: Type;
  optional: boolean;
}

interface Parameter extends UI5JSDocs {
  kind: "Parameter";
  name: string;
  type: Type | { [paramName: string]: Parameter };
  defaultValue: any;
  optional: boolean;
}

interface ReturnDesc {
  kind: "ReturnDesc";
  type?: Type;
  description?: string;
}

interface Class extends UI5JSDocs {
  kind: "Class";
  name: string;
  extends: string;
  implements: string[];
  constructors: FunctionDesc[];
  fields: Variable[];
  methods: FunctionDesc[];
  isAbstract: boolean;
  visibility: UI5Visibility;
  isUI5Control?: boolean;
}

interface Enum extends UI5JSDocs {
  kind: "Enum";
  name: string;
  values: Variable[];
  visibility: UI5Visibility;
}

interface Stakeholder {
  name: string;
}

interface Interface extends UI5JSDocs {
  kind: "Interface";
  name: string;
  extends: Interface[];
  methods: FunctionDesc[];
  props: Property[];
  visibility: UI5Visibility;
  stakeholders: Stakeholder[];
}

interface DeprecatedDesc {
  kind: "DeprecatedDesc";
  description: string;
  since: string;
}

interface ExperimentalDesc {
  kind: "ExperimentalDesc";
  description: string;
  since: string;
}

type Type = SimpleType | UnionType;

interface SimpleType {
  kind: "SimpleType";
  type: string;
  // skip any and all auto fixes for this special type.
  ignoreIssues: boolean;
}

interface UnionType {
  kind: "UnionType";
  types: SimpleType[];
}

type AstSymbol = Namespace | Enum | Class | Interface;
type SymbolTable = { [id: string]: AstSymbol };

interface UI5JSDocs {
  description?: string;
  since?: string;
  deprecated?: DeprecatedDesc;
  experimental?: ExperimentalDesc;
  additionalDocs?: string[];
}
