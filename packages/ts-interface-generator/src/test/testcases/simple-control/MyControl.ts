import Control from "sap/ui/core/Control";
import { MetadataOptions } from "sap/ui/core/Element";
import RenderManager from "sap/ui/core/RenderManager";

/**
 * This is my control.
 *
 * @namespace my
 */
export default class MyControl extends Control {
  static readonly metadata: MetadataOptions = {
    properties: {
      /**
       * The text.
       * @since 1.0
       */
      text: "string",
    },
  };

  static renderer = {
    apiVersion: 2,
    render: function (rm: RenderManager, control: MyControl) {
      rm.openStart("div", control);
      rm.openEnd();
      // @ts-ignore this only works with the generated interface
      rm.text(control.getText());
      rm.close("div");
    },
  };
}
