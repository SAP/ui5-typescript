import { MetadataOptions } from "sap/ui/core/Element";
import SampleManagedObject from "./SampleManagedObject";

/**
 * @namespace ui5tssampleapp.control
 */
export default class SampleAnotherManagedObject extends SampleManagedObject {

	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $SampleAnotherManagedObjectSettings);
	constructor(id?: string, settings?: $SampleAnotherManagedObjectSettings);
	constructor(id?: string, settings?: $SampleAnotherManagedObjectSettings) { super(id, settings); }

	static readonly metadata: MetadataOptions = {
		properties: {
			anotherTest: {
				type: "float"
			}
		}
	};

	init() {
		this.setTest(123);
		this.setAnotherTest(123);
	}
}
