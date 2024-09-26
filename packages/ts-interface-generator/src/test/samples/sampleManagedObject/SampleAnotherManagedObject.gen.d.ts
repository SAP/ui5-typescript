import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $SampleManagedObjectSettings } from "./SampleManagedObject";

declare module "./SampleAnotherManagedObject" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SampleAnotherManagedObjectSettings extends $SampleManagedObjectSettings {
        anotherTest?: number | PropertyBindingInfo | `{${string}}`;
    }

    export default interface SampleAnotherManagedObject {

        // property: anotherTest

        /**
         * Gets current value of property "anotherTest".
         *
         * @returns Value of property "anotherTest"
         */
        getAnotherTest(): number;

        /**
         * Sets a new value for property "anotherTest".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param anotherTest New value for property "anotherTest"
         * @returns Reference to "this" in order to allow method chaining
         */
        setAnotherTest(anotherTest: number): this;
    }
}
