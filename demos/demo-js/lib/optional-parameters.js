sap.ui.define(
  ["sap/ui/base/ManagedObject"],
  /**
   * @param {typeof sap.ui.base.ManagedObject} ManagedObject
   */
  function(ManagedObject) {
    const instance = new ManagedObject();

    // with overload - suboptimal UX
    instance.attachValidationSuccess(() => {}, {});
    // Regular optionals, good UX.
    instance.addAggregation("bamba", null, true);
  }
);
