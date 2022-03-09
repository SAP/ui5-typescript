import SampleManagedObject from "./SampleManagedObject";

/**
 * @namespace ui5tssampleapp.control
 */
export default class SampleAnotherManagedObject extends SampleManagedObject {

	static readonly metadata = {
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
