"use strict";

const assert = require("assert");

describe("explicit event parameters", function () {
  this.timeout(10000);

  let generateFromObjects;

  before(async () => {
    ({ generateFromObjects } = await import("@ui5/dts-generator"));
  });

  const directives = {
    badSymbols: [],
    badMethods: [],
    badInterfaces: [],
    typeTyposMap: {},
    namespacesToInterfaces: {},
    forwardDeclarations: {},
    fqnToIgnore: {},
    overlays: {},
    deprecatedEnumAliases: {},
    modulesWithNamedExports: [],
  };

  function makeEvent(name, parameterProperties, explicit) {
    const event = {
      name,
      visibility: "public",
      parameters: [
        {
          name: "oControlEvent",
          type: "sap.ui.base.Event",
          parameterProperties: {
            getSource: {
              name: "getSource",
              type: "sap.ui.base.EventProvider",
              optional: false,
            },
            getParameters: {
              name: "getParameters",
              type: "object",
              optional: false,
              parameterProperties,
            },
          },
        },
      ],
    };
    if (explicit !== undefined) {
      event.explicit = explicit;
    }
    return event;
  }

  function findPropertyLine(dtsText, propName) {
    return dtsText
      .split("\n")
      .find(
        (l) =>
          l.includes(propName) &&
          l.includes(":") &&
          !l.includes("/**") &&
          !l.includes("*"),
      );
  }

  async function generate(apiObject, dependencyApiObjects) {
    return generateFromObjects({
      apiObject,
      dependencyApiObjects,
      directives,
    });
  }

  describe("EventProvider subclass", function () {
    const baseLibApi = {
      library: "sap.ui.core",
      version: "1.0.0",
      symbols: [
        {
          kind: "namespace",
          name: "sap.ui.base",
          basename: "base",
          resource: "sap/ui/base/library.js",
          module: "sap/ui/base/library",
          export: "",
          visibility: "public",
          description: "",
        },
        {
          kind: "class",
          name: "sap.ui.base.EventProvider",
          basename: "EventProvider",
          resource: "sap/ui/base/EventProvider.js",
          module: "sap/ui/base/EventProvider",
          export: "",
          visibility: "public",
          abstract: true,
          description: "Base event provider.",
          methods: [
            {
              name: "attachEvent",
              visibility: "public",
              returnValue: { type: "this" },
              parameters: [
                { name: "sEventId", type: "string", optional: false },
                { name: "oData", type: "object", optional: true },
                { name: "fnFunction", type: "function", optional: false },
                { name: "oListener", type: "object", optional: true },
              ],
            },
            {
              name: "detachEvent",
              visibility: "public",
              returnValue: { type: "this" },
              parameters: [
                { name: "sEventId", type: "string", optional: false },
                { name: "fnFunction", type: "function", optional: false },
                { name: "oListener", type: "object", optional: true },
              ],
            },
            {
              name: "fireEvent",
              visibility: "public",
              returnValue: { type: "this" },
              parameters: [
                { name: "sEventId", type: "string", optional: false },
                { name: "mParameters", type: "object", optional: true },
              ],
            },
          ],
        },
      ],
    };

    function makeTestLib(events) {
      return {
        library: "testlib",
        version: "1.0.0",
        symbols: [
          {
            kind: "namespace",
            name: "testlib",
            basename: "testlib",
            resource: "testlib/library.js",
            module: "testlib/library",
            export: "",
            visibility: "public",
            description: "",
          },
          {
            kind: "class",
            name: "testlib.MyClass",
            basename: "MyClass",
            resource: "testlib/MyClass.js",
            module: "testlib/MyClass",
            export: "",
            visibility: "public",
            extends: "sap.ui.base.EventProvider",
            description: "A test class extending EventProvider.",
            events,
            methods: [
              {
                name: "attachChange",
                visibility: "public",
                returnValue: { type: "this" },
                parameters: [
                  { name: "oData", type: "object", optional: true },
                  { name: "fnFunction", type: "function", optional: false },
                  { name: "oListener", type: "object", optional: true },
                ],
              },
              {
                name: "detachChange",
                visibility: "public",
                returnValue: { type: "this" },
                parameters: [
                  { name: "fnFunction", type: "function", optional: false },
                  { name: "oListener", type: "object", optional: true },
                ],
              },
              {
                name: "fireChange",
                visibility: "public",
                returnValue: { type: "this" },
                parameters: [
                  { name: "mParameters", type: "object", optional: true },
                ],
              },
            ],
          },
        ],
      };
    }

    it("without explicit flag, all event parameters are optional", async () => {
      const event = makeEvent("change", {
        selectedItem: {
          name: "selectedItem",
          type: "string",
          optional: false,
          description: "The selected item.",
        },
        value: {
          name: "value",
          type: "string",
          optional: true,
          description: "The value.",
        },
      });

      const result = await generate(makeTestLib([event]), [baseLibApi]);

      assert.match(result.dtsText, /selectedItem\?/);
      assert.match(result.dtsText, /value\?/);
    });

    it("with explicit: true, non-optional parameters become required", async () => {
      const event = makeEvent(
        "change",
        {
          selectedItem: {
            name: "selectedItem",
            type: "string",
            optional: false,
            description: "The selected item.",
          },
          value: {
            name: "value",
            type: "string",
            optional: true,
            description: "The value.",
          },
        },
        true,
      );

      const result = await generate(makeTestLib([event]), [baseLibApi]);

      const selectedItemLine = findPropertyLine(result.dtsText, "selectedItem");
      const valueLine = findPropertyLine(result.dtsText, "value");

      assert.ok(selectedItemLine, "selectedItem should appear in output");
      assert.ok(valueLine, "value should appear in output");
      assert.ok(
        !selectedItemLine.includes("?"),
        `selectedItem should be required (no '?'), got: "${selectedItemLine.trim()}"`,
      );
      assert.ok(
        valueLine.includes("?"),
        `value should be optional (has '?'), got: "${valueLine.trim()}"`,
      );
    });

    it("with explicit: true, parameters without optional field default to optional", async () => {
      const event = makeEvent(
        "press",
        {
          source: {
            name: "source",
            type: "string",
            description: "The event source.",
          },
        },
        true,
      );

      const result = await generate(makeTestLib([event]), [baseLibApi]);

      assert.match(result.dtsText, /source\?/);
    });

    it("with explicit: true and optional: true, parameter stays optional", async () => {
      const event = makeEvent(
        "change",
        {
          selectedItem: {
            name: "selectedItem",
            type: "string",
            optional: true,
            description: "The selected item.",
          },
        },
        true,
      );

      const result = await generate(makeTestLib([event]), [baseLibApi]);

      assert.match(result.dtsText, /selectedItem\?/);
    });

    it("with explicit: false, behaves same as no explicit flag", async () => {
      const event = makeEvent(
        "change",
        {
          selectedItem: {
            name: "selectedItem",
            type: "string",
            optional: false,
            description: "The selected item.",
          },
        },
        false,
      );

      const result = await generate(makeTestLib([event]), [baseLibApi]);

      assert.match(result.dtsText, /selectedItem\?/);
    });
  });

  describe("Control subclass (extends sap.ui.core.Control)", function () {
    const baseLibApi = {
      library: "sap.ui.core",
      version: "2.0.0",
      symbols: [
        {
          kind: "namespace",
          name: "sap.ui.base",
          basename: "base",
          resource: "sap/ui/base/library.js",
          module: "sap/ui/base/library",
          export: "",
          visibility: "public",
          description: "",
        },
        {
          kind: "namespace",
          name: "sap.ui.core",
          basename: "core",
          resource: "sap/ui/core/library.js",
          module: "sap/ui/core/library",
          export: "",
          visibility: "public",
          description: "",
        },
        {
          kind: "class",
          name: "sap.ui.base.EventProvider",
          basename: "EventProvider",
          resource: "sap/ui/base/EventProvider.js",
          module: "sap/ui/base/EventProvider",
          export: "",
          visibility: "public",
          abstract: true,
          description: "Base event provider.",
          methods: [
            {
              name: "attachEvent",
              visibility: "public",
              returnValue: { type: "this" },
              parameters: [
                { name: "sEventId", type: "string", optional: false },
                { name: "oData", type: "object", optional: true },
                { name: "fnFunction", type: "function", optional: false },
                { name: "oListener", type: "object", optional: true },
              ],
            },
            {
              name: "detachEvent",
              visibility: "public",
              returnValue: { type: "this" },
              parameters: [
                { name: "sEventId", type: "string", optional: false },
                { name: "fnFunction", type: "function", optional: false },
                { name: "oListener", type: "object", optional: true },
              ],
            },
            {
              name: "fireEvent",
              visibility: "public",
              returnValue: { type: "this" },
              parameters: [
                { name: "sEventId", type: "string", optional: false },
                { name: "mParameters", type: "object", optional: true },
              ],
            },
          ],
        },
        {
          kind: "class",
          name: "sap.ui.base.ManagedObject",
          basename: "ManagedObject",
          resource: "sap/ui/base/ManagedObject.js",
          module: "sap/ui/base/ManagedObject",
          export: "",
          visibility: "public",
          extends: "sap.ui.base.EventProvider",
          description: "Base class for managed objects.",
          "ui5-metadata": {
            stereotype: "object",
          },
        },
        {
          kind: "class",
          name: "sap.ui.core.Element",
          basename: "Element",
          resource: "sap/ui/core/Element.js",
          module: "sap/ui/core/Element",
          export: "",
          visibility: "public",
          extends: "sap.ui.base.ManagedObject",
          description: "Base class for UI elements.",
          "ui5-metadata": {
            stereotype: "element",
          },
        },
        {
          kind: "class",
          name: "sap.ui.core.Control",
          basename: "Control",
          resource: "sap/ui/core/Control.js",
          module: "sap/ui/core/Control",
          export: "",
          visibility: "public",
          extends: "sap.ui.core.Element",
          description: "Base class for controls.",
          "ui5-metadata": {
            stereotype: "control",
          },
        },
      ],
    };

    function makeTestLib(events) {
      return {
        library: "testlib",
        version: "1.0.0",
        symbols: [
          {
            kind: "namespace",
            name: "testlib",
            basename: "testlib",
            resource: "testlib/library.js",
            module: "testlib/library",
            export: "",
            visibility: "public",
            description: "",
          },
          {
            kind: "class",
            name: "testlib.MyControl",
            basename: "MyControl",
            resource: "testlib/MyControl.js",
            module: "testlib/MyControl",
            export: "",
            visibility: "public",
            extends: "sap.ui.core.Control",
            description: "A test control extending sap.ui.core.Control.",
            "ui5-metadata": {
              stereotype: "control",
              events: [
                {
                  name: "change",
                  visibility: "public",
                  description: "Fired when value changes.",
                  parameters: {
                    selectedItem: {
                      name: "selectedItem",
                      type: "string",
                      description: "The selected item.",
                    },
                  },
                },
              ],
            },
            events,
            methods: [
              {
                name: "attachChange",
                visibility: "public",
                returnValue: { type: "this" },
                parameters: [
                  { name: "oData", type: "object", optional: true },
                  { name: "fnFunction", type: "function", optional: false },
                  { name: "oListener", type: "object", optional: true },
                ],
              },
              {
                name: "detachChange",
                visibility: "public",
                returnValue: { type: "this" },
                parameters: [
                  { name: "fnFunction", type: "function", optional: false },
                  { name: "oListener", type: "object", optional: true },
                ],
              },
              {
                name: "fireChange",
                visibility: "public",
                returnValue: { type: "this" },
                parameters: [
                  { name: "mParameters", type: "object", optional: true },
                ],
              },
            ],
          },
        ],
      };
    }

    it("without explicit flag, all event parameters are optional", async () => {
      const event = makeEvent("change", {
        selectedItem: {
          name: "selectedItem",
          type: "string",
          optional: false,
          description: "The selected item.",
        },
      });

      const result = await generate(makeTestLib([event]), [baseLibApi]);

      assert.match(result.dtsText, /selectedItem\?/);
    });

    it("with explicit: true, non-optional parameters become required", async () => {
      const event = makeEvent(
        "change",
        {
          selectedItem: {
            name: "selectedItem",
            type: "string",
            optional: false,
            description: "The selected item.",
          },
          value: {
            name: "value",
            type: "string",
            optional: true,
            description: "The value.",
          },
        },
        true,
      );

      const result = await generate(makeTestLib([event]), [baseLibApi]);

      const selectedItemLine = findPropertyLine(result.dtsText, "selectedItem");
      const valueLine = findPropertyLine(result.dtsText, "value");

      assert.ok(selectedItemLine, "selectedItem should appear in output");
      assert.ok(valueLine, "value should appear in output");
      assert.ok(
        !selectedItemLine.includes("?"),
        `selectedItem should be required (no '?'), got: "${selectedItemLine.trim()}"`,
      );
      assert.ok(
        valueLine.includes("?"),
        `value should be optional (has '?'), got: "${valueLine.trim()}"`,
      );
    });

    it("with explicit: true and optional: true, parameter stays optional", async () => {
      const event = makeEvent(
        "change",
        {
          selectedItem: {
            name: "selectedItem",
            type: "string",
            optional: true,
            description: "The selected item.",
          },
        },
        true,
      );

      const result = await generate(makeTestLib([event]), [baseLibApi]);

      assert.match(result.dtsText, /selectedItem\?/);
    });
  });
});
