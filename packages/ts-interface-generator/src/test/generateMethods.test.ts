import astToString from "../astToString";
import { generateMethods } from "../astGenerationHelper";

test("Generate methods for property", () => {
  const expected = `// property: text
getText(): string;
setText(text: string): this;`;

  const requiredImports: RequiredImports = {};
  const knownGlobals: {
    [key: string]: { moduleName: string; exportName?: string };
  } = {};
  const classInfo: ClassInfo = {
    name: "MyTestClass",
    properties: {
      text: {
        name: "text",
        type: "string",
        methods: { get: "getText", set: "setText" },
      },
    },
    defaultProperty: "text",
  };

  const methods = generateMethods(
    classInfo,
    requiredImports,
    knownGlobals,
    {},
    {}
  );

  const interfaceText = astToString(methods);

  expect(interfaceText.trim()).toEqual(expected);
});

test("Generate methods for aggregation", () => {
  const expected = `// aggregation: content
getContent(): Control[];
addContent(content: Control): this;
insertContent(content: Control, index: number): this;
removeContent(content: number | string | Control): this;
removeAllContent(): Control[];
indexOfContent(content: Control): number;
destroyContent(): this;
bindContent(bindingInfo: AggregationBindingInfo): this;
unbindContent(): this;`;

  const requiredImports: RequiredImports = {};
  const knownGlobals: {
    [key: string]: { moduleName: string; exportName?: string };
  } = {};
  const classInfo: ClassInfo = {
    name: "MyTestClass",
    aggregations: {
      content: {
        name: "content",
        type: "Control",
        cardinality: "0..n",
        altTypes: null,
        bindable: true,
        singularName: "content",
        methods: {
          get: "getContent",
          add: "addContent",
          insert: "insertContent",
          remove: "removeContent",
          removeAll: "removeAllContent",
          indexOf: "indexOfContent",
          bind: "bindContent",
          unbind: "unbindContent",
          destroy: "destroyContent",
        },
      },
    },
    defaultAggregation: "content",
  };

  const methods = generateMethods(
    classInfo,
    requiredImports,
    knownGlobals,
    {},
    {}
  );

  const interfaceText = astToString(methods);

  expect(interfaceText.trim()).toEqual(expected);
});
