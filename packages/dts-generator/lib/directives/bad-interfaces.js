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
  "sap.ui.core.IDScope"
];

module.exports = {
  badInterfaces
};
