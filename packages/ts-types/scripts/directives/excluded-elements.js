const badInterfaces = [
  // All 32 cases of implementing this interface are incorrect
  "sap.ui.core.IFormContent",

  // These interfaces do not even exist in the API.json :(
  "sap.m.IHyphenation",
  "sap.ui.core.IDScope",

  // Typo - why are curly parenthesis part of the name?
  "{sap.ui.layout.cssgrid.IGridConfigurable}"
];

const badMethods = ["createPageObjects"];

module.exports = {
  badInterfaces,
  badMethods
};
