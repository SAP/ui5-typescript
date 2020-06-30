sap.ui.define(
  ["sap/ui/model/SelectionModel", "sap/ui/Device/system"],
  /**
   * @param {typeof sap.ui.model.SelectionModel} SelectionModel
   * @param {typeof sap.ui.Device.system} system
   */
  function (SelectionModel, system) {
    // Static Fields on Class
    console.log(SelectionModel.SINGLE_SELECTION);
    console.log(SelectionModel.MULTI_SELECTION);

    // "Static" properties on namespaces
    console.log(system.desktop);
    console.log(system.phone);
  }
);
