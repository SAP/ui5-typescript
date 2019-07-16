export interface IDirectives {
  /**
   * names (**not** FQNs) of class methods which should be excluded from the generation
   * -  TODO: This is very inaccurate due to not using FQNs, consider improving the implementation.
   */
  badMethods: string[];
  /**
   * Fully Qualified interface names to be removed from class "implements" clauses
   */
  badInterfaces: string[];
  /**
   * A map of type names fixes.
   *   - The key is the original name
   *   - And the value is the "corrected form"
   */
  typeTyposMap: { [orgType: string]: string };

  /**
   * This marks UI5 namespaces names (**not** fqns) that are used as Types
   * And should be converted to Interfaces because such usage is invalid in TypeScript.
   *
   * This conversion is done automatically for **empty** namespaces (heuristic).
   * So only none empty names need be specified here.
   */
  namespacesToInterfaces: { [orgNamespace: string]: true };
}

export function jsonToDTS(
  json: Object[],
  options: {
    directives: IDirectives;
  }
): { library: string; dtsText: string }[];
