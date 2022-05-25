import ts from "typescript";
import { generateInterfaces } from "../interfaceGenerationHelper";
import { initialize } from "../typeScriptEnvironment";

test("Generating the interface for a class using generics", () => {
  const expected = `import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ManagedObjectSettings } from "sap/ui/base/ManagedObject";

declare module "./SampleGenericManagedObject" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SampleGenericManagedObjectSettings extends $ManagedObjectSettings {
        text?: string | PropertyBindingInfo;
    }

    export default interface SampleGenericManagedObject<TOptions, TOptions2> {

        // property: text
        getText(): string;
        setText(text: string): this;
    }
}
`;

  function onTSProgramUpdate(
    program: ts.Program,
    typeChecker: ts.TypeChecker,
    changedFiles: string[], // is an empty array in non-watch case; is at least one file in watch case
    allKnownGlobals: {
      [key: string]: { moduleName: string; exportName?: string };
    }
  ) {
    // files recognized as "real" app source files should be exactly one: SampleGenericManagedObject.ts
    const sourceFiles: ts.SourceFile[] = program
      .getSourceFiles()
      .filter((sourceFile) => {
        if (
          sourceFile.fileName.indexOf("@types") === -1 &&
          sourceFile.fileName.indexOf("node_modules/") === -1 &&
          sourceFile.fileName.indexOf(".gen.d.ts") === -1
        ) {
          return true;
        }
      });
    expect(sourceFiles).toHaveLength(1);
    expect(sourceFiles[0].fileName).toMatch(/.*SampleGenericManagedObject.ts/);

    // this function will be called with the resulting generated interface text - here the big result check occurs
    function checkResult(
      sourceFileName: string,
      className: string,
      interfaceText: string
    ) {
      expect(sourceFileName).toMatch(/.*SampleGenericManagedObject.ts/);
      expect(className).toEqual("SampleGenericManagedObject");

      expect(interfaceText).toEqual(expected);
    }

    // trigger the interface generation - the result will be given to and checked in the function above
    generateInterfaces(
      sourceFiles[0],
      typeChecker,
      allKnownGlobals,
      checkResult
    );
  }

  initialize("./tsconfig-testgenerics.json", onTSProgramUpdate, {});
});
