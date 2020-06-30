sap.ui.define(
  ["sap/ui/core/TooltipBase"],
  /**
   * @param {typeof sap.ui.core.TooltipBase} TooltipBase
   */
  function (TooltipBase) {
    const toolTipInstance = new TooltipBase("myID", {
      dependents: null,
      // uncomment the following line and run `npm run type-check` for an example type check error.
      // blockedd: true,
      closeDelay: 666,
    });
  }
);
