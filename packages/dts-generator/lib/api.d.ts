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
}

export function jsonToDTS(
  json: Object[],
  options: {
    directives: IDirectives;
  }
): { library: string; dtsText: string }[];
