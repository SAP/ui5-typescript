import Event from "sap/ui/base/Event";
import { CSSColor } from "sap/ui/core/library";
import Control from "sap/ui/core/Control";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import WebComponent from "sap/ui/core/webc/WebComponent";
import TooltipBase from "sap/ui/core/TooltipBase";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $WebComponentSettings } from "sap/ui/core/webc/WebComponent";

declare module "./SampleWebComponent" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SampleWebComp onentSettings extends $WebComponentSettings {

        /**
         * The text that appears below the main text.
         *
         * @since 1.0
         */
        subtext?: string | PropertyBindingInfo;

        /**
         * Determines the text color of the <code>SampleWebComponent</code>.
         *
         * @experimental
         */
        textColor?: CSSColor | PropertyBindingInfo | `{${string}}`;

        /**
         * Usage of mapping
         */
        text?: string | PropertyBindingInfo;

        /**
         * Determines the content of the <code>SampleWebComponent</code>.
         */
        content?: Control[] | Control | AggregationBindingInfo | `{${string}}`;
        header?: WebComponent;
        tooltip?: TooltipBase | string | PropertyBindingInfo;
        partnerControl?: SampleWebComponent | string;

        /**
         * This is an association.
         */
        alsoLabelledBy?: Control | string | (Control | string)[];

        /**
         * Fired when double-clicked.
         */
        doublePress?: (event: SampleWebComponent$DoublePressEvent) => void;
    }

    export default interface SampleWebComponent {

        // property: subtext

        /**
         * Gets current value of property "subtext".
         *
         * The text that appears below the main text.
         *
         * @since 1.0
         *
         * @returns Value of property "subtext"
         */
        getSubtext(): string;

        /**
         * Sets a new value for property "subtext".
         *
         * The text that appears below the main text.
         *
         * @since 1.0
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param subtext New value for property "subtext"
         * @returns Reference to "this" in order to allow method chaining
         */
        setSubtext(subtext: string): this;

        // property: textColor

        /**
         * Gets current value of property "textColor".
         *
         * Determines the text color of the <code>SampleWebComponent</code>.
         *
         * @experimental
         * Default value is: ""
         * @returns Value of property "textColor"
         */
        getTextColor(): CSSColor;

        /**
         * Sets a new value for property "textColor".
         *
         * Determines the text color of the <code>SampleWebComponent</code>.
         *
         * @experimental
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: ""
         * @param [textColor=""] New value for property "textColor"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTextColor(textColor: CSSColor): this;

        // property: text

        /**
         * Gets current value of property "text".
         *
         * Usage of mapping
         *
         * @returns Value of property "text"
         */
        getText(): string;

        /**
         * Sets a new value for property "text".
         *
         * Usage of mapping
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param text New value for property "text"
         * @returns Reference to "this" in order to allow method chaining
         */
        setText(text: string): this;

        // aggregation: content

        /**
         * Gets content of aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         */
        getContent(): Control[];

        /**
         * Adds some content to the aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @param content The content to add; if empty, nothing is inserted
         * @returns Reference to "this" in order to allow method chaining
         */
        addContent(content: Control): this;

        /**
         * Inserts a content into the aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @param content The content to insert; if empty, nothing is inserted
         * @param index The "0"-based index the content should be inserted at; for
         *              a negative value of "iIndex", the content is inserted at position 0; for a value
         *              greater than the current size of the aggregation, the content is inserted at
         *              the last position
         * @returns Reference to "this" in order to allow method chaining
         */
        insertContent(content: Control, index: number): this;

        /**
         * Removes a content from the aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @param content The content to remove or its index or id
         * @returns The removed content or "null"
         */
        removeContent(content: number | string | Control): Control | null;

        /**
         * Removes all the controls from the aggregation "content".
         * Additionally, it unregisters them from the hosting UIArea.
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @returns  An array of the removed elements (might be empty)
         */
        removeAllContent(): Control[];

        /**
         * Checks for the provided "sap.ui.core.Control" in the aggregation "content".
         * and returns its index if found or -1 otherwise.
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @param content The content whose index is looked for
         * @returns The index of the provided control in the aggregation if found, or -1 otherwise
         */
        indexOfContent(content: Control): number;

        /**
         * Destroys all the content in the aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyContent(): this;

        /**
         * Binds aggregation "content" to model data.
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a
         * detailed description of the possible properties of "oBindingInfo".
         * @param oBindingInfo The binding information
         * @returns Reference to "this" in order to allow method chaining
         */
        bindContent(bindingInfo: AggregationBindingInfo): this;

        /**
         * Unbinds aggregation "content" from model data.
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        unbindContent(): this;

        // aggregation: header

        /**
         * Gets content of aggregation "header".
         */
        getHeader(): WebComponent;

        /**
         * Sets the aggregated header.
         *
         * @param header The header to set
         * @returns Reference to "this" in order to allow method chaining
         */
        setHeader(header: WebComponent): this;

        /**
         * Destroys the header in the aggregation "header".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyHeader(): this;

        // aggregation: tooltip

        /**
         * Gets content of aggregation "tooltip".
         */
        getTooltip(): TooltipBase;

        /**
         * Sets the aggregated tooltip.
         *
         * @param tooltip The tooltip to set
         * @returns Reference to "this" in order to allow method chaining
         */
        setTooltip(tooltip: TooltipBase): this;

        /**
         * Destroys the tooltip in the aggregation "tooltip".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyTooltip(): this;

        // association: partnerControl

        /**
         * ID of the element which is the current target of the association "partnerControl", or "null".
         */
        getPartnerControl(): string;

        /**
         * Sets the associated partnerControl.
         *
         * @param partnerControl ID of an element which becomes the new target of this "partnerControl" association; alternatively, an element instance may be given
         * @returns Reference to "this" in order to allow method chaining
         */
        setPartnerControl(partnerControl?: string | SampleWebComponent): this;

        // association: alsoLabelledBy

        /**
         * Returns array of IDs of the elements which are the current targets of the association "alsoLabelledBy".
         *
         * This is an association.
         */
        getAlsoLabelledBy(): string[];

        /**
         * Adds some alsoLabelledBy into the association "alsoLabelledBy".
         *
         * This is an association.
         *
         * @param alsoLabelledBy The alsoLabelledBy to add; if empty, nothing is inserted
         * @returns Reference to "this" in order to allow method chaining
         */
        addAlsoLabelledBy(alsoLabelledBy: string | Control): this;

        /**
         * Removes an alsoLabelledBy from the association named alsoLabelledBy.
         *
         * This is an association.
         *
         * @param alsoLabelledBy The alsoLabelledBy to be removed or its index or ID
         * @returns The removed alsoLabelledBy or "null"
         */
        removeAlsoLabelledBy(alsoLabelledBy: number | string | Control): string;

        /**
         * Removes all the controls in the association named alsoLabelledBy.
         *
         * This is an association.
         *
         * @returns An array of the removed elements (might be empty)
         */
        removeAllAlsoLabelledBy(): string[];

        // event: doublePress

        /**
         * Attaches event handler "fn" to the "doublePress" event of this "SampleWebComponent".
         *
         * Fired when double-clicked.
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "SampleWebComponent" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "SampleWebComponent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachDoublePress(fn: (event: SampleWebComponent$DoublePressEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "doublePress" event of this "SampleWebComponent".
         *
         * Fired when double-clicked.
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "SampleWebComponent" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "SampleWebComponent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachDoublePress<CustomDataType extends object>(data: CustomDataType, fn: (event: SampleWebComponent$DoublePressEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "doublePress" event of this "SampleWebComponent".
         *
         * Fired when double-clicked.
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachDoublePress(fn: (event: SampleWebComponent$DoublePressEvent) => void, listener?: object): this;

        /**
         * Fires event "doublePress" to attached listeners.
         *
         * Fired when double-clicked.
         *
         * Listeners may prevent the default action of this event by calling the "preventDefault" method on the event object.
         * The return value of this method indicates whether the default action should be executed.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Whether or not to prevent the default action
         */
        fireDoublePress(parameters?: SampleWebComponent$DoublePressEventParameters): boolean;
    }

    /**
     * Interface describing the parameters of SampleWebComponent's 'doublePress' event.
     * Fired when double-clicked.
     */
    // eslint-disable-next-line
    export interface SampleWebComponent$DoublePressEventParameters {
    }

    /**
     * Type describing the SampleWebComponent's 'doublePress' event.
     * Fired when double-clicked.
     */
    export type SampleWebComponent$DoublePressEvent = Event<SampleWebComponent$DoublePressEventParameters>;
}

// this duplicate interface without export is needed to avoid "Cannot find name 'SampleWebComponent'" TypeScript errors above
declare module "./SampleWebComponent" {
    interface SampleWebComponent {

        // property: subtext

        /**
         * Gets current value of property "subtext".
         *
         * The text that appears below the main text.
         *
         * @since 1.0
         *
         * @returns Value of property "subtext"
         */
        getSubtext(): string;

        /**
         * Sets a new value for property "subtext".
         *
         * The text that appears below the main text.
         *
         * @since 1.0
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param subtext New value for property "subtext"
         * @returns Reference to "this" in order to allow method chaining
         */
        setSubtext(subtext: string): this;

        // property: textColor

        /**
         * Gets current value of property "textColor".
         *
         * Determines the text color of the <code>SampleWebComponent</code>.
         *
         * @experimental
         * Default value is: ""
         * @returns Value of property "textColor"
         */
        getTextColor(): CSSColor;

        /**
         * Sets a new value for property "textColor".
         *
         * Determines the text color of the <code>SampleWebComponent</code>.
         *
         * @experimental
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: ""
         * @param [textColor=""] New value for property "textColor"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTextColor(textColor: CSSColor): this;

        // property: text

        /**
         * Gets current value of property "text".
         *
         * Usage of mapping
         *
         * @returns Value of property "text"
         */
        getText(): string;

        /**
         * Sets a new value for property "text".
         *
         * Usage of mapping
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param text New value for property "text"
         * @returns Reference to "this" in order to allow method chaining
         */
        setText(text: string): this;

        // aggregation: content

        /**
         * Gets content of aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         */
        getContent(): Control[];

        /**
         * Adds some content to the aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @param content The content to add; if empty, nothing is inserted
         * @returns Reference to "this" in order to allow method chaining
         */
        addContent(content: Control): this;

        /**
         * Inserts a content into the aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @param content The content to insert; if empty, nothing is inserted
         * @param index The "0"-based index the content should be inserted at; for
         *              a negative value of "iIndex", the content is inserted at position 0; for a value
         *              greater than the current size of the aggregation, the content is inserted at
         *              the last position
         * @returns Reference to "this" in order to allow method chaining
         */
        insertContent(content: Control, index: number): this;

        /**
         * Removes a content from the aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @param content The content to remove or its index or id
         * @returns The removed content or "null"
         */
        removeContent(content: number | string | Control): Control | null;

        /**
         * Removes all the controls from the aggregation "content".
         * Additionally, it unregisters them from the hosting UIArea.
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @returns  An array of the removed elements (might be empty)
         */
        removeAllContent(): Control[];

        /**
         * Checks for the provided "sap.ui.core.Control" in the aggregation "content".
         * and returns its index if found or -1 otherwise.
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @param content The content whose index is looked for
         * @returns The index of the provided control in the aggregation if found, or -1 otherwise
         */
        indexOfContent(content: Control): number;

        /**
         * Destroys all the content in the aggregation "content".
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyContent(): this;

        /**
         * Binds aggregation "content" to model data.
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a
         * detailed description of the possible properties of "oBindingInfo".
         * @param oBindingInfo The binding information
         * @returns Reference to "this" in order to allow method chaining
         */
        bindContent(bindingInfo: AggregationBindingInfo): this;

        /**
         * Unbinds aggregation "content" from model data.
         *
         * Determines the content of the <code>SampleWebComponent</code>.
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        unbindContent(): this;

        // aggregation: header

        /**
         * Gets content of aggregation "header".
         */
        getHeader(): WebComponent;

        /**
         * Sets the aggregated header.
         *
         * @param header The header to set
         * @returns Reference to "this" in order to allow method chaining
         */
        setHeader(header: WebComponent): this;

        /**
         * Destroys the header in the aggregation "header".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyHeader(): this;

        // aggregation: tooltip

        /**
         * Gets content of aggregation "tooltip".
         */
        getTooltip(): TooltipBase;

        /**
         * Sets the aggregated tooltip.
         *
         * @param tooltip The tooltip to set
         * @returns Reference to "this" in order to allow method chaining
         */
        setTooltip(tooltip: TooltipBase): this;

        /**
         * Destroys the tooltip in the aggregation "tooltip".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyTooltip(): this;

        // association: partnerControl

        /**
         * ID of the element which is the current target of the association "partnerControl", or "null".
         */
        getPartnerControl(): string;

        /**
         * Sets the associated partnerControl.
         *
         * @param partnerControl ID of an element which becomes the new target of this "partnerControl" association; alternatively, an element instance may be given
         * @returns Reference to "this" in order to allow method chaining
         */
        setPartnerControl(partnerControl?: string | SampleWebComponent): this;

        // association: alsoLabelledBy

        /**
         * Returns array of IDs of the elements which are the current targets of the association "alsoLabelledBy".
         *
         * This is an association.
         */
        getAlsoLabelledBy(): string[];

        /**
         * Adds some alsoLabelledBy into the association "alsoLabelledBy".
         *
         * This is an association.
         *
         * @param alsoLabelledBy The alsoLabelledBy to add; if empty, nothing is inserted
         * @returns Reference to "this" in order to allow method chaining
         */
        addAlsoLabelledBy(alsoLabelledBy: string | Control): this;

        /**
         * Removes an alsoLabelledBy from the association named alsoLabelledBy.
         *
         * This is an association.
         *
         * @param alsoLabelledBy The alsoLabelledBy to be removed or its index or ID
         * @returns The removed alsoLabelledBy or "null"
         */
        removeAlsoLabelledBy(alsoLabelledBy: number | string | Control): string;

        /**
         * Removes all the controls in the association named alsoLabelledBy.
         *
         * This is an association.
         *
         * @returns An array of the removed elements (might be empty)
         */
        removeAllAlsoLabelledBy(): string[];

        // event: doublePress

        /**
         * Attaches event handler "fn" to the "doublePress" event of this "SampleWebComponent".
         *
         * Fired when double-clicked.
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "SampleWebComponent" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "SampleWebComponent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachDoublePress(fn: (event: SampleWebComponent$DoublePressEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "doublePress" event of this "SampleWebComponent".
         *
         * Fired when double-clicked.
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "SampleWebComponent" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "SampleWebComponent" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachDoublePress<CustomDataType extends object>(data: CustomDataType, fn: (event: SampleWebComponent$DoublePressEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "doublePress" event of this "SampleWebComponent".
         *
         * Fired when double-clicked.
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachDoublePress(fn: (event: SampleWebComponent$DoublePressEvent) => void, listener?: object): this;

        /**
         * Fires event "doublePress" to attached listeners.
         *
         * Fired when double-clicked.
         *
         * Listeners may prevent the default action of this event by calling the "preventDefault" method on the event object.
         * The return value of this method indicates whether the default action should be executed.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Whether or not to prevent the default action
         */
        fireDoublePress(parameters?: SampleWebComponent$DoublePressEventParameters): boolean;
    }
}
