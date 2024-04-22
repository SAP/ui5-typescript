sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof import('sap/ui/core/mvc/Controller').default} Controller
   */
  function (Controller) {
    Controller.extend("foo", {
      // bar: function () {
      //     this.getVlah();
      // }
    });
    const ui5Instance = new Controller("666");

    // "own" instance methods calls
    ui5Instance.createId("bamba");
    ui5Instance.onBeforeRendering();
  }
);
