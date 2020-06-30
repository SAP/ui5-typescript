sap.ui.define(
  ["sap/ui/core/ComponentMetadata"],
  /**
   * @param {typeof sap.ui.core.ComponentMetadata} ComponentMetadata
   */
  function (ComponentMetadata) {
    const instance = new ComponentMetadata("666", {});
    // Calling a deprecated method
    instance.getComponents();
  }
);
