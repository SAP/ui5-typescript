import fs from "fs";
import path from "path";
import ts from "typescript";
import log from "loglevel";
import { execSync } from "child_process";
import { generateInterfaces } from "../interfaceGenerationHelper";
import {
  getAllKnownGlobals,
  GlobalToModuleMapping,
} from "../typeScriptEnvironment";
import { getProgramInfo } from "../generateTSInterfacesAPI";
import Preferences from "../preferences";

jest.setTimeout(30000);

const testCasesDir = path.resolve(__dirname, "testcases");

const standardTsConfig: ts.CompilerOptions = {
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.CommonJS,
  strict: true,
  moduleResolution: ts.ModuleResolutionKind.Node16,
  esModuleInterop: true,
  skipLibCheck: true,
  forceConsistentCasingInFileNames: true,
  types: ["openui5"],
};

function generateForTestCase(testCaseDir: string): Promise<string> {
  const config = { ...standardTsConfig, baseUrl: testCaseDir };
  const tsFiles = fs
    .readdirSync(testCaseDir)
    .filter((file) => file.endsWith(".ts") && !file.endsWith(".d.ts"))
    .map((file) => path.join(testCaseDir, file));

  const program = ts.createProgram(tsFiles, config);
  const typeChecker = program.getTypeChecker();
  const programInfo = getProgramInfo(program, typeChecker);
  const allKnownGlobals: GlobalToModuleMapping =
    getAllKnownGlobals(typeChecker);

  const sourceFiles = program.getSourceFiles().filter((sourceFile) => {
    return (
      !sourceFile.isDeclarationFile &&
      path.basename(sourceFile.fileName) !== "library.ts"
    );
  });

  return new Promise((resolve) => {
    const resultProcessor = (
      _sourceFileName: string,
      _className: string,
      interfaceText: string,
    ) => {
      resolve(interfaceText);
    };

    generateInterfaces(
      sourceFiles[0],
      typeChecker,
      Object.assign({}, programInfo.allKnownLocalExports, allKnownGlobals),
      resultProcessor,
    );
  });
}

/**
 * Tests for issue #542: --jsdoc CLI parameter is not respected.
 *
 * Root cause: In commit bf53c43 (yargs v17→v18 upgrade), the CLI entry point was
 * rewritten from the singleton pattern (yargs.option({...}).argv — which reads
 * process.argv) to the factory pattern (yargs().option({...}).argv). The factory
 * pattern creates a detached instance that does NOT read process.argv in either
 * v17 or v18. The fix is to pass hideBin(process.argv) explicitly:
 *   yargs(hideBin(process.argv)).option({...}).argv
 */

describe("JSDoc CLI argument parsing (root cause of issue #542)", () => {
  test("yargs() without arguments ignores process.argv in v18 — returns default 'verbose'", () => {
    const script = path.join(__dirname, "_yargs_test_no_hideBin.mjs");
    fs.writeFileSync(
      script,
      `import yargs from 'yargs';
const argv = await yargs().option({ jsdoc: { choices: ['none','minimal','verbose'], default: 'verbose' } }).argv;
process.stdout.write(argv.jsdoc);`,
    );
    try {
      const result = execSync(`node ${script} --jsdoc minimal`, {
        encoding: "utf-8",
      });
      expect(result).toBe("verbose");
    } finally {
      fs.unlinkSync(script);
    }
  });

  test("yargs(hideBin(process.argv)) correctly parses --jsdoc minimal", () => {
    const script = path.join(__dirname, "_yargs_test_with_hideBin.mjs");
    fs.writeFileSync(
      script,
      `import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const argv = await yargs(hideBin(process.argv)).option({ jsdoc: { choices: ['none','minimal','verbose'], default: 'verbose' } }).argv;
process.stdout.write(argv.jsdoc);`,
    );
    try {
      const result = execSync(`node ${script} --jsdoc minimal`, {
        encoding: "utf-8",
      });
      expect(result).toBe("minimal");
    } finally {
      fs.unlinkSync(script);
    }
  });
});

describe("JSDoc preference modes", () => {
  beforeAll(() => {
    jest.spyOn(log, "warn").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    Preferences.set({ jsdoc: "verbose" });
  });

  const xlControlDir = path.join(testCasesDir, "xl-control-with-all-features");
  const simpleControlDir = path.join(testCasesDir, "simple-control");

  describe("simple-control (no source JSDoc on properties)", () => {
    test("verbose mode includes boilerplate JSDoc", async () => {
      Preferences.set({ jsdoc: "verbose" });
      const result = await generateForTestCase(simpleControlDir);

      expect(result).toContain('Gets current value of property "text"');
      expect(result).toContain('@returns Value of property "text"');
      expect(result).toContain('Sets a new value for property "text"');
      expect(result).toContain('@param text New value for property "text"');
      expect(result).toContain(
        '@returns Reference to "this" in order to allow method chaining',
      );
    });

    test("minimal mode omits boilerplate JSDoc for properties without source doc", async () => {
      Preferences.set({ jsdoc: "minimal" });
      const result = await generateForTestCase(simpleControlDir);

      expect(result).not.toContain('Gets current value of property "text"');
      expect(result).not.toContain('@returns Value of property "text"');
      expect(result).not.toContain('@param text New value for property "text"');
      expect(result).not.toContain(
        '@returns Reference to "this" in order to allow method chaining',
      );
    });

    test("none mode produces no method-level JSDoc comments", async () => {
      Preferences.set({ jsdoc: "none" });
      const result = await generateForTestCase(simpleControlDir);

      expect(result).not.toContain('Gets current value of property "text"');
      expect(result).not.toContain('@returns Value of property "text"');
      expect(result).not.toContain("@param text");
      // The settings interface description comment is not gated by jsdoc preference (known behavior)
      expect(result).toContain(
        "Interface defining the settings object used in constructor calls",
      );
    });
  });

  describe("xl-control-with-all-features (has source JSDoc, @since, @experimental)", () => {
    test("verbose mode includes both boilerplate and source JSDoc", async () => {
      Preferences.set({ jsdoc: "verbose" });
      const result = await generateForTestCase(xlControlDir);

      // boilerplate
      expect(result).toContain('Gets current value of property "subtext"');
      expect(result).toContain('@returns Value of property "subtext"');
      // source doc
      expect(result).toContain("The text that appears below the main text.");
      expect(result).toContain("@since 1.0");
      expect(result).toContain("@experimental");
    });

    test("minimal mode keeps source JSDoc but removes boilerplate", async () => {
      Preferences.set({ jsdoc: "minimal" });
      const result = await generateForTestCase(xlControlDir);

      // source doc and tags should still be present
      expect(result).toContain("The text that appears below the main text.");
      expect(result).toContain("@since 1.0");
      expect(result).toContain("@experimental");
      expect(result).toContain("Determines the text color of the");

      // boilerplate should be absent
      expect(result).not.toContain('Gets current value of property "subtext"');
      expect(result).not.toContain('@returns Value of property "subtext"');
      expect(result).not.toContain('Sets a new value for property "subtext"');
      expect(result).not.toContain(
        '@param subtext New value for property "subtext"',
      );
      expect(result).not.toContain('Attaches event handler "fn" to the');
      expect(result).not.toContain('Detaches event handler "fn" from the');
      expect(result).not.toContain(
        'Fires event "singlePress" to attached listeners.',
      );
    });

    test("none mode produces no method-level JSDoc comments", async () => {
      Preferences.set({ jsdoc: "none" });
      const result = await generateForTestCase(xlControlDir);

      // Method-level JSDoc should be absent
      expect(result).not.toContain("@returns Value of property");
      expect(result).not.toContain("@param subtext");
      expect(result).not.toContain("Gets current value of property");
      expect(result).not.toContain("Attaches event handler");
      // Source-level tags should also be absent
      expect(result).not.toContain("@since");
      expect(result).not.toContain("@experimental");
    });

    test("verbose and minimal produce different output", async () => {
      Preferences.set({ jsdoc: "verbose" });
      const verbose = await generateForTestCase(xlControlDir);

      Preferences.set({ jsdoc: "minimal" });
      const minimal = await generateForTestCase(xlControlDir);

      expect(verbose).not.toEqual(minimal);
      expect(verbose.length).toBeGreaterThan(minimal.length);
    });

    test("minimal and none produce different output", async () => {
      Preferences.set({ jsdoc: "minimal" });
      const minimal = await generateForTestCase(xlControlDir);

      Preferences.set({ jsdoc: "none" });
      const none = await generateForTestCase(xlControlDir);

      expect(minimal).not.toEqual(none);
      expect(minimal.length).toBeGreaterThan(none.length);
    });
  });
});
