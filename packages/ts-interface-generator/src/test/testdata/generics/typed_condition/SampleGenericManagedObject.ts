import ManagedObject from "sap/ui/base/ManagedObject";
import UIComponent, { $UIComponentSettings } from "sap/ui/core/UIComponent";
import Component, {
  $ComponentSettings as $RenamedComponentSettings,
} from "sap/ui/core/Component";

/**
 * @name ui5tssampleapp.generics.SampleGenericManagedObject
 */
export default class SampleGenericManagedObject<
  TOptions extends $UIComponentSettings,
  TOptions2 extends $RenamedComponentSettings,
  TOptions3 extends Component,
  TOptions4 extends {} = any
> extends ManagedObject {
  static readonly metadata = {
    properties: {
      text: {
        type: "string",
      },
    },
  };

  private _component: TOptions3;
  private _uiComponent: UIComponent;
}
