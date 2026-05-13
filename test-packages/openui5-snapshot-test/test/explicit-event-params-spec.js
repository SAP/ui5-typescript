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

  describe("overlay merge for events", function () {
    const baseLibApi = {
      library: "sap.ui.core",
      version: "3.0.0",
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

    it("overlay can set explicit: true on an existing event by name", async () => {
      const apiObject = {
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
            description: "A test class.",
            events: [
              makeEvent("change", {
                selectedItem: {
                  name: "selectedItem",
                  type: "string",
                  optional: false,
                  description: "The selected item.",
                },
              }),
            ],
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

      const directivesWithOverlay = {
        ...directives,
        overlays: {
          testlib: [
            {
              name: "testlib.MyClass",
              events: [{ name: "change", explicit: true }],
            },
          ],
        },
      };

      const result = await generateFromObjects({
        apiObject: structuredClone(apiObject),
        dependencyApiObjects: [structuredClone(baseLibApi)],
        directives: directivesWithOverlay,
      });

      const selectedItemLine = findPropertyLine(result.dtsText, "selectedItem");
      assert.ok(selectedItemLine, "selectedItem should appear in output");
      assert.ok(
        !selectedItemLine.includes("?"),
        `overlay should make selectedItem required, got: "${selectedItemLine.trim()}"`,
      );
    });

    it("overlay does not affect events with different names", async () => {
      const apiObject = {
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
            description: "A test class.",
            events: [
              makeEvent("change", {
                selectedItem: {
                  name: "selectedItem",
                  type: "string",
                  optional: false,
                  description: "The selected item.",
                },
              }),
              makeEvent("press", {
                source: {
                  name: "source",
                  type: "string",
                  optional: false,
                  description: "The source.",
                },
              }),
            ],
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
              {
                name: "attachPress",
                visibility: "public",
                returnValue: { type: "this" },
                parameters: [
                  { name: "oData", type: "object", optional: true },
                  { name: "fnFunction", type: "function", optional: false },
                  { name: "oListener", type: "object", optional: true },
                ],
              },
              {
                name: "detachPress",
                visibility: "public",
                returnValue: { type: "this" },
                parameters: [
                  { name: "fnFunction", type: "function", optional: false },
                  { name: "oListener", type: "object", optional: true },
                ],
              },
              {
                name: "firePress",
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

      const directivesWithOverlay = {
        ...directives,
        overlays: {
          testlib: [
            {
              name: "testlib.MyClass",
              events: [{ name: "change", explicit: true }],
            },
          ],
        },
      };

      const result = await generateFromObjects({
        apiObject: structuredClone(apiObject),
        dependencyApiObjects: [structuredClone(baseLibApi)],
        directives: directivesWithOverlay,
      });

      const selectedItemLine = findPropertyLine(result.dtsText, "selectedItem");
      assert.ok(
        !selectedItemLine.includes("?"),
        `change event should have required selectedItem, got: "${selectedItemLine.trim()}"`,
      );
      // press event was NOT targeted by overlay, so source stays optional
      assert.match(result.dtsText, /source\?/);
    });
  });

  describe("inheritance with explicit flag", function () {
    const baseLibApi = {
      library: "sap.ui.core",
      version: "4.0.0",
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
        {
          kind: "class",
          name: "sap.ui.base.Parent",
          basename: "Parent",
          resource: "sap/ui/base/Parent.js",
          module: "sap/ui/base/Parent",
          export: "",
          visibility: "public",
          extends: "sap.ui.base.EventProvider",
          description: "A parent class with a change event.",
          events: [
            makeEvent("change", {
              value: {
                name: "value",
                type: "string",
                optional: false,
                description: "The value.",
              },
            }),
          ],
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

    it("inherited parameters remain optional when only subclass is explicit", async () => {
      // Parent has "change" event with "value" (optional: false) but is NOT explicit
      // Child has "change" event with "value" (inherited) + "extra" (new, optional: false) and IS explicit
      // Expected: "extra" becomes required, but "value" stays optional (inherited from parent interface)
      const childEvent = makeEvent(
        "change",
        {
          value: {
            name: "value",
            type: "string",
            optional: false,
            description: "The value.",
          },
          extra: {
            name: "extra",
            type: "string",
            optional: false,
            description: "Extra param added by child.",
          },
        },
        true,
      );

      const apiObject = {
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
            name: "testlib.Child",
            basename: "Child",
            resource: "testlib/Child.js",
            module: "testlib/Child",
            export: "",
            visibility: "public",
            extends: "sap.ui.base.Parent",
            description: "A child class.",
            events: [childEvent],
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

      const result = await generate(apiObject, [baseLibApi]);

      // "extra" is new in the child and explicit: true → required
      const extraLine = findPropertyLine(result.dtsText, "extra");
      assert.ok(extraLine, "extra should appear in output");
      assert.ok(
        !extraLine.includes("?"),
        `extra should be required (no '?'), got: "${extraLine.trim()}"`,
      );

      // "value" is inherited from parent (not explicit) → stays optional in parent interface
      // The child interface extends the parent interface and does NOT redeclare "value"
      assert.ok(
        !findPropertyLine(result.dtsText, "value"),
        "value should NOT appear in child interface (it is inherited from parent)",
      );

      // The child interface should extend the parent interface
      assert.match(
        result.dtsText,
        /Child\$ChangeEventParameters extends Parent\$ChangeEventParameters/,
      );
    });

    it("inherited parameters become required when parent is also explicit", async () => {
      // Both parent and child have explicit: true
      const baseLibApiWithExplicitParent = structuredClone(baseLibApi);
      const parentEvent = baseLibApiWithExplicitParent.symbols.find(
        (s) => s.name === "sap.ui.base.Parent",
      ).events[0];
      parentEvent.explicit = true;

      const childEvent = makeEvent(
        "change",
        {
          value: {
            name: "value",
            type: "string",
            optional: false,
            description: "The value.",
          },
          extra: {
            name: "extra",
            type: "string",
            optional: false,
            description: "Extra param.",
          },
        },
        true,
      );

      const apiObject = {
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
            name: "testlib.Child",
            basename: "Child",
            resource: "testlib/Child.js",
            module: "testlib/Child",
            export: "",
            visibility: "public",
            extends: "sap.ui.base.Parent",
            description: "A child class.",
            events: [childEvent],
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

      const result = await generate(apiObject, [baseLibApiWithExplicitParent]);

      // "extra" is new in the child and explicit → required
      const extraLine = findPropertyLine(result.dtsText, "extra");
      assert.ok(extraLine, "extra should appear in output");
      assert.ok(
        !extraLine.includes("?"),
        `extra should be required, got: "${extraLine.trim()}"`,
      );

      // "value" is inherited from parent which is also explicit → required in parent interface
      // It should NOT appear in the child interface (still inherited)
      assert.ok(
        !findPropertyLine(result.dtsText, "value"),
        "value should NOT appear in child interface (inherited from explicit parent)",
      );
    });
  });
});
