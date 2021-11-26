import Button from "sap/m/Button";
import RenderManager from "sap/ui/core/RenderManager";

/**
 * @namespace ui5tssampleapp.control
 */
class SampleControl extends Button {
  // The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
  constructor(idOrSettings?: string | $SampleControlSettings);
  constructor(id?: string, settings?: $SampleControlSettings);
  constructor(id?: string, settings?: $SampleControlSettings) {
    super(id, settings);
  }

  static readonly metadata = {
    properties: {
      subtext: "string",
      textColor: { type: "sap.ui.core.CSSColor", defaultValue: "" },
    },
    aggregations: {
      content: { multiple: true, type: "sap.ui.core.Control", bindable: true },
      header: { multiple: false, type: "sap.ui.core.Control" },
    },
    associations: {
      partnerControl: "SampleControl",
      alsoLabelledBy: { type: "sap.ui.core.Control", multiple: true },
    },
    events: {
      doublePress: { allowPreventDefault: true },
    },
  };

  static renderer = function (oRm: RenderManager, oControl: SampleControl) {
    oRm.openStart("div", oControl);
    oRm.openEnd();

    oRm.text(oControl.getText());
    // @ts-ignore this only works with the generated interface
    oRm.text(oControl.getSubtext());
    // @ts-ignore this only works with the generated interface
    const content = oControl.getContent();
    for (let i = 0; i < content.length; i++) {
      oRm.renderControl(content[i]);
    }

    new SampleControl();
    oRm.close("div");
  };

  doit() {
    alert("Hello");
  }
}

export default SampleControl;
