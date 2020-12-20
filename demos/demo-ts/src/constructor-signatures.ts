sap.ui.define(
  ["sap/ui/core/TooltipBase"],
  function (TooltipBase: typeof sap.ui.core.TooltipBase) {
    const toolTipInstance = new TooltipBase("myID", {
      dependents: null,
      // uncomment the following line and run `npm run compile` for an example type check error.
      // blockedd: true,
      closeDelay: 666,
    });
  }
);
