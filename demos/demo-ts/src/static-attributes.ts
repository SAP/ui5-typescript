sap.ui.define(["sap/ui/model/SelectionModel", "sap/ui/Device/system"], function(
  SelectionModel: typeof sap.ui.model.SelectionModel,
  system: typeof sap.ui.Device.system
) {
  // Static Fields on Class
  console.log(SelectionModel.SINGLE_SELECTION);
  console.log(SelectionModel.MULTI_SELECTION);

  // "Static" properties on namespaces
  console.log(system.desktop);
  console.log(system.phone);
});
