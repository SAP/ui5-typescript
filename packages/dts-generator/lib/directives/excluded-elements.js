/**
 * Some interfaces are never implemented correctly and cause a TypeScript
 * Error in (supposedly) implementing classes.
 *
 * This directive causes all such interfaces to be removed from "implements"
 * clauses of all classes.
 */
const badInterfaces = [
  // All 32 cases of implementing this interface are incorrect
  "sap.ui.core.IFormContent",

  // These interfaces do not even exist in the API.json :(
  "sap.m.IHyphenation",
  "sap.ui.core.IDScope",

  // Typo - why are curly parenthesis part of the name?
  "{sap.ui.layout.cssgrid.IGridConfigurable}"
];

/**
 * This is currently a none gentle filtering out using name rather than FullyQualifiedNames.
 */
const badMethods = ["createPageObjects"];

module.exports = {
  badInterfaces,
  badMethods
};
