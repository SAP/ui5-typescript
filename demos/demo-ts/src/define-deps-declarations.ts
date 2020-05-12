sap.ui.define(
  // try autocomplete here
  [
    "sap/ui/core/TooltipBase",
    // searching the suffix works very well
    "sap/m/ComboBoxTextField",
    // Filtering while Typing works well, but only if no "/" is used.
    // Once a "/" is used the filtering resets itself and the auto completed text may be invalid!
    // - This is an Editor Level issue
    "sap/ui/"
  ],
  function(TooltipBase: typeof sap.ui.core.TooltipBase) {}
);
