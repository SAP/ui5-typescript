/**
 * This marks UI5 namespaces that are used as Types
 * And should be converted to Interfaces because such usage is invalid in TypeScript.
 *
 * This conversion is done automatically for **empty** namespaces (heuristic).
 * So only none empty names need be specified here.
 */
const namespacesToInterfaces = {
  BusyIndicator: true,
  InstanceManager: true,
  URLHelper: true
};

module.exports = {
  namespacesToInterfaces
};
