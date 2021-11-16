import ts from "typescript";
import { generateInterfaces } from "../interfaceGenerationHelper";
import { initialize } from "../typeScriptEnvironment";

function onTSProgramUpdate(
  program: ts.Program,
  typeChecker: ts.TypeChecker,
  changedFiles: string[], // is an empty array in non-watch case; is at least one file in watch case
  allKnownGlobals: {
    [key: string]: { moduleName: string; exportName?: string };
  }
) {
  // files recognized as "real" app source files should be exactly one: SampleControl.ts
  const sourceFiles: ts.SourceFile[] = program
    .getSourceFiles()
    .filter((sourceFile) => {
      if (
        sourceFile.fileName.indexOf("@types") === -1 &&
        sourceFile.fileName.indexOf("node_modules/") === -1 &&
        sourceFile.fileName.indexOf(".generated.tsinterface.ts") === -1
      ) {
        return true;
      }
    });
  expect(sourceFiles).toHaveLength(1);
  expect(sourceFiles[0].fileName).toMatch(/.*SampleControl.ts/);

  // this function will be called with the resulting generated interface text - here the big result check occurs
  function checkResult(
    sourceFileName: string,
    className: string,
    interfaceText: string
  ) {
    expect(sourceFileName).toMatch(/.*SampleControl.ts/);
    expect(className).toEqual("SampleControl");
    expect(interfaceText).toEqual(expected);
  }

  // trigger the interface generation - the result will be given to and checked in the function above
  generateInterfaces(sourceFiles[0], typeChecker, allKnownGlobals, checkResult);
}

test("Generating the interface for a sample control", () => {
  initialize("./tsconfig-testcontrol.json", onTSProgramUpdate, {});
});

const expected = `import { CSSColor } from "sap/ui/core/library";
import Control from "sap/ui/core/Control";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import Event from "sap/ui/base/Event";
import { $ButtonSettings } from "sap/m/Button";

declare module "./SampleControl" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SampleControlSettings extends $ButtonSettings {
        subtext?: string;
        textColor?: CSSColor;
        content?: Control;
        header?: Control;
        partnerControl?: SampleControl | string;
        alsoLabelledBy?: Control | string;
        doublePress?: (event: Event) => void;
    }

    interface SampleControl {

        // property: subtext
        getSubtext(): string;
        setSubtext(subtext: string): this;

        // property: textColor
        getTextColor(): CSSColor;
        setTextColor(textColor: CSSColor): this;

        // aggregation: content
        getContent(): Control[];
        addContent(content: Control): this;
        insertContent(content: Control, index: number): this;
        removeContent(content: number | string | Control): this;
        removeAllContent(): Control[];
        indexOfContent(content: Control): number;
        destroyContent(): this;
        bindContent(bindingInfo: AggregationBindingInfo): this;
        unbindContent(): this;

        // aggregation: header
        getHeader(): Control;
        setHeader(header: Control): this;
        destroyHeader(): this;

        // association: partnerControl
        getPartnerControl(): string;
        setPartnerControl(partnerControl?: string | SampleControl): this;

        // association: alsoLabelledBy
        getAlsoLabelledBy(): string[];
        addAlsoLabelledBy(alsoLabelledBy: string | Control): this;
        removeAlsoLabelledBy(alsoLabelledBy: number | string | Control): string;
        removeAllAlsoLabelledBy(): string[];

        // event: doublePress
        attachDoublePress(fn: (event: Event) => void, listener?: object): this;
        attachDoublePress<CustomDataType extends object>(data: CustomDataType, fn: (event: Event, data: CustomDataType) => void, listener?: object): this;
        detachDoublePress(fn: (event: Event) => void, listener?: object): this;
        fireDoublePress(parameters?: object): this;
    }
}
`;
