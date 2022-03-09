import { $ManagedObjectSettings } from "sap/ui/base/ManagedObject";

declare module "./SampleManagedObject" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SampleManagedObjectSettings extends $ManagedObjectSettings {
        test?: number;
    }

    export default interface SampleManagedObject {

        // property: test
        getTest(): number;
        setTest(test: number): this;
    }
}
