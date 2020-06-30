sap.ui.define(["sap/ui/base/ManagedObject"], function (
  ManagedObject: typeof sap.ui.base.ManagedObject
) {
  const instance = new ManagedObject();

  // with overload - suboptimal UX
  instance.attachValidationSuccess(() => {}, {});
  // Regular optionals, good UX.
  instance.addAggregation("bamba", null, true);
});
