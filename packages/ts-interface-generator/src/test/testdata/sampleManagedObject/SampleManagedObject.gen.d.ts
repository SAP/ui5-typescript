import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ManagedObjectSettings } from "sap/ui/base/ManagedObject";

declare module "./SampleManagedObject" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SampleManagedObjectSettings extends $ManagedObjectSettings {
        test?: number | PropertyBindingInfo | `{${string}}`;
    }

    export default interface SampleManagedObject {

        // property: test

        /**
         * Gets current value of property "test".
         *
         * @returns Value of property "test"
         */
        getTest(): number;

        /**
         * Sets a new value for property "test".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param test New value for property "test"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTest(test: number): this;
    }
}
