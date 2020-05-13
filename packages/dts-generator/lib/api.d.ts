export interface IDirectives {
  /**
   * Full Qualified Symbol names from the UI5 SDK to completely ignore during generation.
   */
  badSymbols: string[];

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

  /**
   * For these Fully Qualified (currently only **classes**) Names a
   * "// @ts-ignore" comment would be generated.
   *
   * The corresponding value for each key(fqn) of this map is the the reason
   * why the ignore is applied in each case.
   *
   * This directive is used to brute force "solve" hard problems.
   * Only use this as a last resort...
   */
  fqnToIgnore: { [fqn: string]: string };
}

export function jsonToDTS(
  json: Object[],
  options: {
    directives: IDirectives;
    /**
     * All api.json dependencies (including **transitive**)
     */
    dependencies: Object[];
    /**
     * @param dtsText - The generated TypeScript definition file text.
     * @param depLibsNames - The names of the libraries this generated file depends on.
     */
    importsGen?: (dtsText: string, depLibsNames: string[]) => string;
  }
): { library: string; dtsText: string }[];
