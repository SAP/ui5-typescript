const badInterfaces = [
  // All 32 cases of implementing this interface are incorrect
  "sap.ui.core.IFormContent",

  // These interfaces do not even exist in the API.json :(
  "sap.m.IHyphenation",
  "sap.ui.core.IDScope",

  // Typo - why are curly parenthesis part of the name?
  "{sap.ui.layout.cssgrid.IGridConfigurable}",
  // This interface does not seem to exist (at least in 1.78.1)
  "sap.ui.layout.cssgrid.IGridItemLayoutData",
];

const badMethods = ["createPageObjects"];

const badSymbols = [
  // typo: this class extends: "sap.ui.core.ManagedObject"
  //       but it should extend "sap.ui.base.ManagedObject" which actually exists.
  "sap.ui.core.InvisibleMessage",
];

module.exports = {
  badInterfaces,
  badMethods,
  badSymbols,
};
