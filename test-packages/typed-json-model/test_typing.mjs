import * as ts from "typescript";

/**
 * @typedef {{ number: number, expected: string, found: string, passed: boolean, file: string, line: number }} TestResult
 * @typedef {{ file: string, line: number, expectation: string, code: number | null }} Expectation
 * @typedef {{ total_expectations: number, passed_expectations: number, failed_expectations: number, status: string, status_code: number }} TestDigest
 */

class MalformedAnnotationError extends Error {
  /**
   * Constructor for the MalformedAnnotationError
   * to be used for syntactically or semantically malformed
   * '@expect'-annotations.
   * @param {Expectation} expectation
   */
  constructor(expectation) {
    super(`Malformed annotation in file ${expectation.file}, line ${expectation.line}`);
    this.name = "MalformedAnnotationError";
  }
}

/**
 * Create a new 'Program' instance. A Program is an immutable collection of 'SourceFile's and a
 * 'CompilerOptions' that represent a compilation unit.
 * @param {string[]} files The files to be considered by tsc as an array of strings
 * @returns {ts.Program}
 */
function createProgram(files) {
  const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
  const parsedConfig = ts.parseJsonConfigFileContent(config.config, ts.sys, "./");
  console.assert(!config.error, "Error reading tsconfig.json");
  return ts.createProgram(files, parsedConfig.options);
}

/**
 * Get TypeScript errors as a set of strings from the given program.
 * An error is represented as a string in the format:
 * `<file> <line> ts<code>` and `<file> <line>`
 * where <file> is the file name, <line> is the line number,
 * so you can look up the specific error as well as if there is
 * a TypeScript error at all in the specified line.
 *
 * Example: Line 42 in `test.ts` has a TypeScript error with code 4242 will
 * result in the following strings:
 * `test.ts 42` and `test.ts 42 ts4242`
 * @param {ts.Program} program - The TypeScript program.
 * @returns {Set<string>} The identified issues as a set of strings.
 */
function getTsErrors(program) {
  const preDiagnostics = ts.getPreEmitDiagnostics(program);
  const diagnostics = preDiagnostics.filter((d) => d.category === ts.DiagnosticCategory.Error);
  const /** @type {Set<string>} */ errorSet = new Set();
  for (const d of diagnostics) {
    const file = String(d.file?.fileName);
    const pos = d.file?.getLineAndCharacterOfPosition(d.start ?? 0).line;
    const line = pos ? pos + 1 : -1;
    const withTsErrorCode = `${file} ${line} ts${d.code}`;
    const withoutTsErrorCode = `${file} ${line}`;
    errorSet.add(withTsErrorCode);
    errorSet.add(withoutTsErrorCode);
  }
  console.log("TypeScript errors:", diagnostics.length);
  return errorSet;
}

/**
 * Reads the specified files and returns an array
 * defining the expectations regarding the TypeScript compilation.
 * @param {string[]} files
 * @returns {Expectation[]}
 */
function getExpectations(files) {
  const expectations = [];
  const regexExpect = /\/\*\*\s*@expect\s+([a-zA-Z0-9_]+)\s*\*\//g;
  for (const file of files) {
    const content = ts.sys.readFile(file);
    if (content) {
      const matches = content.matchAll(regexExpect);
      for (const match of matches) {
        const line = content.substring(0, match.index).split("\n").length;
        const expectation = {
          file,
          line,
          expectation: match[1],
          code: expectationToCode(match[1]),
        };
        expectations.push(expectation);
      }
    }
  }
  return expectations;
}

/**
 * Converts an expectation to a ts error code.
 * Examples: "ts1234" -> 1234, "ok" -> null, "error" -> null
 * @param {string} expectation - The expectation
 * @returns {number | null} - The TypeScript error code or null if not applicable.
 */
function expectationToCode(expectation) {
  if (expectation.toLowerCase().startsWith("ts")) {
    try {
      const code = Number(expectation.substring(2));
      return isNaN(code) ? null : code;
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Validates the given expectation regarding
 * '@expect'-annotations and raises a MalformedAnnotationError
 * in case of an invalid annotation.
 * @param {Expectation} expectation
 * @throws {MalformedAnnotationError}
 * @returns {void}
 */
function validateExpectation(expectation) {
  if (expectation.expectation.startsWith("ts") && !expectation.code) {
    throw new MalformedAnnotationError(expectation);
  }
  if (!(expectation.expectation == "ok" || expectation.expectation == "error" || expectation.expectation.startsWith("ts"))) {
    throw new MalformedAnnotationError(expectation);
  }
}

/**
 * Get the tests results for the given list of .ts files.
 * @param {string[]} files
 * @returns {TestResult[]} - The test results for the given files.
 */
function getTestResults(files) {
  const expectations = getExpectations(files);
  const program = createProgram(files);
  const tsErrors = getTsErrors(program);
  const /** @type TestResult[] */ results = [];
  let /** @type TestResult */ result;
  let counter = 0;

  for (const e of expectations) {
    validateExpectation(e);

    let expected = "ok",
      found = "ok",
      passed = true;

    const unspecific = `${e.file} ${e.line}`;
    const hash = e.code ? `${e.file} ${e.line} ts${e.code}` : unspecific;

    if (e.expectation == "ok") {
      expected = "ok";
      if (tsErrors.has(hash)) {
        found = "error";
        passed = false;
      } else {
        found = expected;
        passed = true;
      }
    } else if (e.expectation == "error") {
      expected = "error";
      if (tsErrors.has(hash)) {
        found = expected;
        passed = true;
      } else {
        found = "ok";
        passed = false;
      }
    } else {
      // specific ts error:
      expected = e.expectation;
      if (tsErrors.has(hash)) {
        found = expected;
        passed = true;
      } else if (tsErrors.has(unspecific)) {
        // found a ts error, but not the one
        // specified by the error code:
        found = "error";
        passed = false;
      } else {
        found = "ok";
        passed = false;
      }
    }

    result = {
      number: counter,
      expected,
      found,
      passed,
      file: e.file,
      line: e.line,
    };

    results.push(result);
    counter++;
  }
  return results;
}

/**
 * Returns a digest of the test results.
 * @param {TestResult[]} results
 * @returns {TestDigest} - The test digest containing the summary of the results.
 */
function getTestDigest(results) {
  const passed_expectations = results.filter((r) => r.passed).length;
  const total_expectations = results.length;
  const failed_expectations = total_expectations - passed_expectations;
  return {
    total_expectations,
    passed_expectations,
    failed_expectations,
    status: passed_expectations === total_expectations ? "SUCCESS" : "FAILURE",
    status_code: passed_expectations === total_expectations ? 0 : 1,
  };
}

/**
 * Returns a JSON-like string representation of the given object
 * that is formatted for better readability.
 * @param {object} obj
 * @returns {string} - The formatted string representation of the object.
 */
function format(obj) {
  const separator = "\n--------------------------------------------\n";
  return JSON.stringify(obj, null, 4)
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll('"', "")
    .replaceAll(",", "")
    .replaceAll(/(\n\s*)\n/g, separator);
}

/**
 * Tests the expectations within the given folder against the TypeScript compiler output.
 * @argument {string} testFolder - The folder containing the test cases.
 * @returns {number} The status code of the test, 0 for success, 1 for failure.
 */
function runTests(testFolder) {
  const files = ts.sys.readDirectory(testFolder, [".ts"], undefined, undefined);
  console.log("============================================");
  const results = getTestResults(files);
  const failed = results.filter((r) => !r.passed);
  console.log("============================================");
  if (failed.length > 0) {
    console.log("Failed expectations:");
    const parsedFailures = failed.map((r) => ({
      "#": r.number,
      File: `${r.file} ${r.line}`,
      Expected: r.expected,
      Found: r.found,
      Passed: r.passed,
    }));
    console.log(format(parsedFailures));
  } else {
    console.log("All expectations passed.");
  }
  const digest = getTestDigest(results);
  console.log("============================================");
  console.log("Results:");
  console.log(format(digest));
  return digest.status_code;
}

/**
 * Parses the command line argument.
 * Returns the path to the test folder if provided and valid,
 * otherwise exits with an error message and status code 1.
 * @returns {string}
 */
function parseArg() {
  const args = process.argv.slice(2);
  if (args.length != 1) {
    console.error("Usage: node test_typing.mjs path/to/test/folder");
    process.exit(1);
  }
  if (!ts.sys.directoryExists(args[0])) {
    console.error(`The provided path "${args[0]}" is not a valid directory.`);
    process.exit(1);
  }
  return args[0];
}

process.exit(runTests(parseArg()));
