import WebComponent, { MetadataOptions } from "sap/ui/core/webc/WebComponent";

/**
 * A SampleWebComponent is a control wrapper for a Web Component and this is its documentation.
 *
 * @namespace ui5tssampleapp.control
 */
export default class SampleWebComponent extends WebComponent {
  // The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
  constructor(idOrSettings?: string | $SampleWebComponentSettings);
  constructor(id?: string, settings?: $SampleWebComponentSettings);
  constructor(id?: string, settings?: $SampleWebComponentSettings) {
    super(id, settings);
  }

  static readonly metadata: MetadataOptions = {
    tag: "sample-webcomponent",
    properties: {
      /**
       * The text that appears below the main text.
       * @since 1.0
       */
      subtext: "string",

      /**
       * Determines the text color of the <code>SampleWebComponent</code>.
       *
       * @experimental
       */
      textColor: { type: "sap.ui.core.CSSColor", defaultValue: "" },

      /**
       * Usage of mapping
       */
      text: {
        type: "string",
        mapping: {
          type: "textContent",
        },
      },
    },
    aggregations: {
      /**
       * Determines the content of the <code>SampleWebComponent</code>.
       */
      content: { multiple: true, type: "sap.ui.core.Control", bindable: true },
      header: { multiple: false, type: "sap.ui.core.webc.WebComponent" },
      tooltip: {
        multiple: false,
        type: "sap.ui.core.TooltipBase",
        altTypes: ["string"],
      },
    },
    defaultAggregation: "content",
    associations: {
      partnerControl: "SampleWebComponent",
      /**
       * This is an association.
       */
      alsoLabelledBy: { type: "sap.ui.core.Control", multiple: true },
    },
    events: {
      /**
       * Fired when double-clicked.
       */
      doublePress: { allowPreventDefault: true },
    },
    methods: ["somePublicMethod"],
    getters: ["somePublicGetter"],
  };
}

/**
 * implement the methods and getters
 */
declare module "./SampleWebComponent" {
  export default interface SampleWebComponent {
    /**
     * Some public method returning a "string"
     *
     * @since 1.0
     *
     * @returns Value of property "subtext"
     */
    somePublicMethod(): string;

    /**
     * Some public getter being a "string"
     */
    somePublicGetter: string;
  }
}
