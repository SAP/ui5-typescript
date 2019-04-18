sap.ui.define(
  ["sap/ui/core/TooltipBase"],
  /**
   * @param {typeof sap.ui.core.TooltipBase} TooltipBase
   */
  function(TooltipBase) {
    const toolTipInstance = new TooltipBase();

    // Inherited instance methods calls.
    toolTipInstance.addStyleClass("bamba");

    // Inherited instance method from indirect ancestor
    toolTipInstance.addCustomData(null);
  }
);
