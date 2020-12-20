sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  function (Controller: typeof sap.ui.core.mvc.Controller) {
    const ui5Instance = new Controller("666");
    // Multiple Method Chaining
    ui5Instance.byId("666").getCustomData()[0].getKey();
  }
);
