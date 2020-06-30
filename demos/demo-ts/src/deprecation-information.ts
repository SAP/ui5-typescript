sap.ui.define(["sap/ui/core/ComponentMetadata"], function (
  ComponentMetadata: typeof sap.ui.core.ComponentMetadata
) {
  const instance = new ComponentMetadata("666", {});
  // Calling a deprecated method
  instance.getComponents();
});
