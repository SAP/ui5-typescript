sap.ui.define(
  ["sap/ui/core/TooltipBase"],
  function (TooltipBase: typeof sap.ui.core.TooltipBase) {
    const toolTipInstance = new TooltipBase();

    // Inherited instance methods calls.
    toolTipInstance.addStyleClass("bamba");

    // Inherited instance method from indirect ancestor
    toolTipInstance.addCustomData(null);
  }
);
