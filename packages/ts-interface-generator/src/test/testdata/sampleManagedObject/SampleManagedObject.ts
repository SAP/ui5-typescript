import ManagedObject from "sap/ui/base/ManagedObject";

/**
 * @namespace ui5tssampleapp.control
 */
export default class SampleManagedObject extends ManagedObject {

	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $SampleManagedObjectSettings);
	constructor(id?: string, settings?: $SampleManagedObjectSettings);
	constructor(id?: string, settings?: $SampleManagedObjectSettings) { super(id, settings); }

	static readonly metadata = {
		properties: {
			test: {
				type: "float"
			}
		}
	};

	init() {
		this.setTest(123);
	}
}
