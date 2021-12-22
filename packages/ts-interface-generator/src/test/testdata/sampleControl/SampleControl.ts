import Button from "sap/m/Button";
import RenderManager from "sap/ui/core/RenderManager";

/**
 * @namespace ui5tssampleapp.control
 */
export default class SampleControl extends Button {

	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $SampleControlSettings);
	constructor(id?: string, settings?: $SampleControlSettings);
	constructor(id?: string, settings?: $SampleControlSettings) { super(id, settings); }

	static readonly metadata = {
		properties: {
			subtext: "string",
			textColor: { type: "sap.ui.core.CSSColor", defaultValue: "" },
		},
		aggregations: {
			content: { multiple: true, type: "sap.ui.core.Control", bindable: true },
			header: { multiple: false, type: "sap.ui.core.Control" },
		},
		associations: {
			partnerControl: "SampleControl",
			alsoLabelledBy: { type: "sap.ui.core.Control", multiple: true },
		},
		events: {
			doublePress: { allowPreventDefault: true },
		},
	};

	static renderer = function (rm: RenderManager, control: SampleControl) {
		rm.openStart("div", control);
		rm.openEnd();

		rm.text(control.getText());
		// @ts-ignore this only works with the generated interface
		rm.text(control.getSubtext());
		// @ts-ignore this only works with the generated interface
		const content = control.getContent();
		for (let i = 0; i < content.length; i++) {
			rm.renderControl(content[i]);
		}

		rm.close("div");
	};

	doit() {
		alert("Hello");
	}
}
