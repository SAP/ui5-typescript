sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function(Controller) {
    const ui5Instance = new Controller("666");

    // "own" instance methods calls
    ui5Instance.createId("bamba");
    ui5Instance.onBeforeRendering();
  }
);
