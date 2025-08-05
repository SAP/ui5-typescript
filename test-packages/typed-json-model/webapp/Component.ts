import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace typed.json.model
 */
export default class Component extends UIComponent {
  public static metadata = {
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
    manifest: "json",
  };

  public init(): void {
    super.init();
  }
}
