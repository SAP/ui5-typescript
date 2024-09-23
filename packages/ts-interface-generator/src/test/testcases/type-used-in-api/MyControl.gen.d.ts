import { $ControlSettings } from "sap/ui/core/Control";

declare module "./MyControl" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $MyControlSettings extends $ControlSettings {
        otherControl?: MyControl;
    }

    export default interface MyControl {

        // aggregation: otherControl

        /**
         * Gets content of aggregation "otherControl".
         */
        getOtherControl(): MyControl;

        /**
         * Sets the aggregated otherControl.
         *
         * @param otherControl The otherControl to set
         * @returns Reference to "this" in order to allow method chaining
         */
        setOtherControl(otherControl: MyControl): this;

        /**
         * Destroys the otherControl in the aggregation "otherControl".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyOtherControl(): this;
    }
}

// this duplicate interface without export is needed to avoid "Cannot find name 'MyControl'" TypeScript errors above
declare module "./MyControl" {
    interface MyControl {

        // aggregation: otherControl

        /**
         * Gets content of aggregation "otherControl".
         */
        getOtherControl(): MyControl;

        /**
         * Sets the aggregated otherControl.
         *
         * @param otherControl The otherControl to set
         * @returns Reference to "this" in order to allow method chaining
         */
        setOtherControl(otherControl: MyControl): this;

        /**
         * Destroys the otherControl in the aggregation "otherControl".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyOtherControl(): this;
    }
}
