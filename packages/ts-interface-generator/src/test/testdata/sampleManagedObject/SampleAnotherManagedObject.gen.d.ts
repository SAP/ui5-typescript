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
        getAnotherTest(): number;
        setAnotherTest(anotherTest: number): this;
    }
}
