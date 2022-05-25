import ManagedObject from "sap/ui/base/ManagedObject";

/**
 * @name ui5tssampleapp.generics.SampleGenericManagedObject
 */
export default class SampleGenericManagedObject<
  TOptions,
  TOptions2
> extends ManagedObject {
  static readonly metadata = {
    properties: {
      text: {
        type: "string",
      },
    },
  };
}
