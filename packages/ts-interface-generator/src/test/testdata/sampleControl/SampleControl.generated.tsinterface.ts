import { CSSColor } from "sap/ui/core/library";
import Control from "sap/ui/core/Control";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import Event from "sap/ui/base/Event";
import { $ButtonSettings } from "sap/m/Button";

declare module "./SampleControl" {
  /**
   * Interface defining the settings object used in constructor calls
   */
  interface $SampleControlSettings extends $ButtonSettings {
    subtext?: string;
    textColor?: CSSColor;
    content?: Control[] | Control;
    header?: Control;
    partnerControl?: SampleControl | string;
    alsoLabelledBy?: Control | string | (Control | string)[];
    doublePress?: (event: Event) => void;
  }

  export default interface SampleControl {
    // property: subtext
    getSubtext(): string;
    setSubtext(subtext: string): this;

    // property: textColor
    getTextColor(): CSSColor;
    setTextColor(textColor: CSSColor): this;

    // aggregation: content
    getContent(): Control[];
    addContent(content: Control): this;
    insertContent(content: Control, index: number): this;
    removeContent(content: number | string | Control): this;
    removeAllContent(): Control[];
    indexOfContent(content: Control): number;
    destroyContent(): this;
    bindContent(bindingInfo: AggregationBindingInfo): this;
    unbindContent(): this;

    // aggregation: header
    getHeader(): Control;
    setHeader(header: Control): this;
    destroyHeader(): this;

    // association: partnerControl
    getPartnerControl(): string;
    setPartnerControl(partnerControl?: string | SampleControl): this;

    // association: alsoLabelledBy
    getAlsoLabelledBy(): string[];
    addAlsoLabelledBy(alsoLabelledBy: string | Control): this;
    removeAlsoLabelledBy(alsoLabelledBy: number | string | Control): string;
    removeAllAlsoLabelledBy(): string[];

    // event: doublePress
    attachDoublePress(fn: (event: Event) => void, listener?: object): this;
    attachDoublePress<CustomDataType extends object>(
      data: CustomDataType,
      fn: (event: Event, data: CustomDataType) => void,
      listener?: object
    ): this;
    detachDoublePress(fn: (event: Event) => void, listener?: object): this;
    fireDoublePress(parameters?: object): this;
  }
}

// this duplicate interface without export is needed to avoid "Cannot find name 'SampleControl'" TypeScript errors above
declare module "./SampleControl" {
  interface SampleControl {
    // property: subtext
    getSubtext(): string;
    setSubtext(subtext: string): this;

    // property: textColor
    getTextColor(): CSSColor;
    setTextColor(textColor: CSSColor): this;

    // aggregation: content
    getContent(): Control[];
    addContent(content: Control): this;
    insertContent(content: Control, index: number): this;
    removeContent(content: number | string | Control): this;
    removeAllContent(): Control[];
    indexOfContent(content: Control): number;
    destroyContent(): this;
    bindContent(bindingInfo: AggregationBindingInfo): this;
    unbindContent(): this;

    // aggregation: header
    getHeader(): Control;
    setHeader(header: Control): this;
    destroyHeader(): this;

    // association: partnerControl
    getPartnerControl(): string;
    setPartnerControl(partnerControl?: string | SampleControl): this;

    // association: alsoLabelledBy
    getAlsoLabelledBy(): string[];
    addAlsoLabelledBy(alsoLabelledBy: string | Control): this;
    removeAlsoLabelledBy(alsoLabelledBy: number | string | Control): string;
    removeAllAlsoLabelledBy(): string[];

    // event: doublePress
    attachDoublePress(fn: (event: Event) => void, listener?: object): this;
    attachDoublePress<CustomDataType extends object>(
      data: CustomDataType,
      fn: (event: Event, data: CustomDataType) => void,
      listener?: object
    ): this;
    detachDoublePress(fn: (event: Event) => void, listener?: object): this;
    fireDoublePress(parameters?: object): this;
  }
}
