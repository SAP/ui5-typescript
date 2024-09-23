import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./MyControl" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $MyControlSettings extends $ControlSettings {

        /**
         * The text.
         *
         * @since 1.0
         */
        text?: string | PropertyBindingInfo;
    }

    export default interface MyControl {

        // property: text

        /**
         * Gets current value of property "text".
         *
         * The text.
         *
         * @since 1.0
         *
         * @returns Value of property "text"
         */
        getText(): string;

        /**
         * Sets a new value for property "text".
         *
         * The text.
         *
         * @since 1.0
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param text New value for property "text"
         * @returns Reference to "this" in order to allow method chaining
         */
        setText(text: string): this;
    }
}
