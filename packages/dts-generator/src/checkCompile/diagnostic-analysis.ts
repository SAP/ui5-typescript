import * as path from "path";
import ts from "typescript";
import ignoreCheck from "./ignore-check.js";

const pathRegex = /.*([\/\\]packages[\/\\]ts-types[/\\]types)/i;

/*
 * This file implements heuristics trying to explain a TypeScript compiler error in terms understandable by UI5 developers.
 * Accuracy and amount of explanations for different error types can of course always be improved, but were
 * so far based on actually encountered errors.
 */

interface TSError {
  code: number;
  message: string;
}

interface TSErrorStack extends Array<TSError> {
  codeChain?: string;
}

export interface ErrorObject {
  dtsFileName: string;
  dtsFilePosition: string;
  ui5Module: string;
  codeChain: string;
  tsError: string;
  hint: string;
  ignore: any;
}

export interface ErrorAnalysis {
  errorObject: ErrorObject;
  errorMessage: string;
  hasHint: boolean;
  ignore: any;
}

// HEURISTIC HINTS PART

const pattern: { [errorCode: string]: RegExp } = {};
pattern["2200"] = new RegExp(
  "The types of '([^']+)' are incompatible between these types.",
);
pattern["2201"] = new RegExp(
  "The types returned by '([^']+)' are incompatible between these types.",
);
pattern["2202"] = new RegExp(
  "Call signature return types '([^']+)' and '([^']+)' are incompatible.",
);
pattern["2304"] = new RegExp("Cannot find name '([^']+)'.");
pattern["2322"] = new RegExp(
  "Type '([^']+)' is not assignable to type '([^']+)'.",
);
pattern["2339"] = new RegExp(
  "Property '([^']+)' does not exist on type '([^']+)'.",
);
pattern["2328"] = new RegExp(
  "Types of parameters '([^']+)' and '([^']+)' are incompatible.",
);
pattern["2416"] = new RegExp(
  "Property '([^']+)' in type '([^']+)' is not assignable to the same property in base type '([^']+)'.",
);
pattern["2417"] = new RegExp(
  "Class static side '([^']+)' incorrectly extends base class static side '([^']+)'.",
);
pattern["2420"] = new RegExp(
  "Class '([^']+)' incorrectly implements interface '([^']+)'.",
);
pattern["2503"] = new RegExp("Cannot find namespace '([^']+)'.");
pattern["2694"] = new RegExp(
  "Namespace '([^']+)' has no exported member '([^']+)'.",
);
pattern["2707"] = new RegExp(
  "Generic type '([^']+)' requires between (\\d+) and (\\d+) type arguments.",
);
pattern["2739"] = new RegExp(
  "Type '([^']+)' is missing the following properties from type '([^']+)': (.+)",
);
pattern["2740"] = new RegExp(
  "Type '([^']+)' is missing the following properties from type '([^']+)': (.+), and (\\d+) more.",
);
pattern["2741"] = new RegExp(
  "Property '([^']+)' is missing in type '([^']+)' but required in type '([^']+)'.",
);
pattern["5082"] = new RegExp(
  "'([^']+)' could be instantiated with an arbitrary type which could be unrelated to '([^']+)'.",
);
pattern["7006"] = new RegExp(
  "Parameter '([^']+)' implicitly has an '([^']+)' type.",
);

function createHint(
  diagnostic: ts.Diagnostic,
  errorStack?: TSErrorStack,
  moduleName?: string,
) {
  let result = _createHint(diagnostic, errorStack, moduleName);
  if (result && result.length) {
    result = result.replace(/\t/g, ""); // remove indentation of multiline template strings
  }
  return result;
}

function _createHint(
  diagnostic: ts.Diagnostic,
  errorStack?: TSErrorStack,
  moduleName?: string,
) {
  errorStack = errorStack || getErrorStack(diagnostic);
  const dtsFileName = path.basename(diagnostic.file.fileName);
  const ui5Module = moduleName || findContainingModule(diagnostic);
  let errorLine = getSourceCode(diagnostic, 0);
  if (errorLine) {
    errorLine = errorLine.replace("\n", "");
  }

  switch (errorStack.codeChain) {
    case "1005":
    case "1068":
    case "1138":
      return `This is a syntax error in the generated TypeScript type definition file. It could be caused by an error in the
			UI5 TypeScript generator or (more likely) a follow-up problem of errors in the JSDoc description in ${ui5Module}.
			A look at the generated code in the ${dtsFileName} file (see below) and mapping it to the original source code in UI5
			might help with understanding what went wrong.`;

    case "2304": {
      // block scope needed for variables with equal name
      const [[name]] = getMatches(errorStack);
      return `Something is really wrong. Check the erroneous code line
				   ${errorLine}
				- is the name '${name}' appropriate in this location? Is it something that is actually defined in this place?
				A bug in the generator can also not be completely ruled out if everything looks proper.`;
    }

    case "2339": {
      return `A module references another module which is not present in the TypeScript definition.
				Often a class (here: ${ui5Module}) inherits from another class which is marked as private.
				Either mark this other class as public as well or (if the other class has no public member
				and may remain hidden) skip the real base class in the "@extends" declaration in JSDoc: just
				name the base class of the base class.
				If it's not a problem with the visibility of the base class, it could also be a wrong "@extends"
				declaration, maybe a typo, or a reference to a type in another library which is not visible
				because there is no dependency to it.
				In any case, the following line should mention the type that is missing/private (likely written
				with a complete namespace):
				${errorLine}`;
    }

    case "2416-2322": {
      const [
        [property, currentClass, superClass],
        [signature, superSignature],
      ] = getMatches(errorStack);
      const propertyType = signature.startsWith("(") ? "method" : "property";

      return `'${currentClass}' inherits from '${superClass}' but there is an incompatibility in the API:
				The ${propertyType} '${property}' has a signature which does not fit the one in ${superClass}:
				In ${superClass} it is:
				  ${superSignature}
				but in ${currentClass} it is:
				  ${signature}`;
    }

    case "2416-2322-2202-2200-2322": {
      const [
        [property, currentClass, superClass],
        [signature, superSignature],
        [currentReturnType, superReturnType],
        [conflictingProperty],
        [detailCurrentType, detailSuperType],
      ] = getMatches(errorStack);
      const propertyType = signature.startsWith("(") ? "Method" : "Property";
      const detailPropertyType = detailCurrentType.startsWith("(")
        ? "method"
        : "property";
      const propertyDescription = detailCurrentType.startsWith("(")
        ? "signature"
        : "type";

      return `${propertyType} '${property}' in class '${currentClass}' is not compatible to the superclass '${superClass}'
				because the return type is '${currentReturnType}' and in the superclass it is '${superReturnType}'.
				These return types are incompatible because ${currentReturnType} has a ${detailPropertyType} named '${conflictingProperty}' with ${propertyDescription}
				  ${detailCurrentType}
				while in class ${superReturnType} it is:
				  ${detailSuperType}`;
    }

    case "2416-2322-2202-2201-2322": {
      const [
        [property, currentClass, superClass],
        [signature, superSignature],
        [currentReturnType, superReturnType],
        [conflictingMethod],
        [detailCurrentReturnType, detailSuperReturnType],
      ] = getMatches(errorStack);
      const propertyType = signature.startsWith("(") ? "Method" : "Property";

      return `${propertyType} '${property}' in class '${currentClass}' is not compatible to the superclass '${superClass}'
				because the return type is '${currentReturnType}' and in the superclass it is '${superReturnType}'.
				These return types are incompatible because ${currentReturnType} has a method '${conflictingMethod}' with return type
				  ${detailCurrentReturnType}
				while in class ${superReturnType} it is:
				  ${detailSuperReturnType}`;
    }

    case "2416-2322-2322": {
      const [
        [property, currentClass, superClass],
        [signature, superSignature],
        [currentType, superType],
      ] = getMatches(errorStack);
      const propertyType = signature.startsWith("(") ? "method" : "property";

      return `'${currentClass}' inherits from '${superClass}' but there is an incompatibility in the API:
				The ${propertyType} '${property}' has a signature which does not fit the one in ${superClass}:
				In ${superClass} it is:
				  ${superSignature}
				but in ${currentClass} it is:
				  ${signature}
				In Detail, the problem is that the type '${currentType}' is not compatible with the type '${superType}' used in the superclass.`;
    }

    case "2416-2322-2322-2322": {
      const [
        [property, currentClass, superClass],
        [signature, superSignature],
        [currentType, superType],
        [currentTypePlain, superTypePlain],
      ] = getMatches(errorStack);
      const propertyType = signature.startsWith("(") ? "method" : "property";

      return `'${currentClass}' inherits from '${superClass}' but there is an incompatibility in the API:
				The ${propertyType} '${property}' has a signature which does not fit the one in ${superClass}:
				In ${superClass} it is:
				  ${superSignature}
				but in ${currentClass} it is:
				  ${signature}
				In Detail, the problem is about '${currentType}':
				the type '${currentTypePlain}' cannot be used when '${superTypePlain}' is required in the superclass.`;
    }

    case "2416-2322-2322-5082": {
      const [
        [property, currentClass, superClass],
        [signature, superSignature],
        [currentType, superType],
        [superDetailType, currentDetailType],
      ] = getMatches(errorStack);
      const propertyType = signature.startsWith("(") ? "method" : "property";

      let hint = `'${currentClass}' inherits from '${superClass}' but there is an incompatibility in the API:
				The ${propertyType} '${property}' has a signature which does not fit the one in ${superClass}:
				In ${superClass} it is:
					${superSignature}
				but in ${currentClass} it is:
					${signature}
				In Detail, the problem is that the type '${currentType}' is not compatible with the type '${superType}' used in the superclass.`;

      if (
        hasFunctionReturnType(superSignature, superDetailType) &&
        hasFunctionReturnType(signature, currentDetailType)
      ) {
        hint += `\nCheck whether you can change the return type '${currentDetailType}' to '${superDetailType}'.`;
        if (superDetailType === "this") {
          hint += `\nNOTE: when returning 'this' for method chaining, use 'this' as return type, not the concrete type of your class!`;
        }
      }
      return hint;
    }

    case "2416-2322-2328-2322": {
      const [
        [property, currentClass, superClass],
        [signature, superSignature],
        [currentParameter, superParameter],
        [superType, currentType],
      ] = getMatches(errorStack);
      const propertyType = signature.startsWith("(") ? "method" : "property";

      return `'${currentClass}' inherits from '${superClass}' but there is an incompatibility in the API:
				The ${propertyType} '${property}' has a signature which does not fit the one in ${superClass}:
				In ${superClass} it is:
				  ${superSignature}
				but in ${currentClass} it is:
				  ${signature}
				In Detail, the problem is about '${currentParameter}':
				its type is '${currentType}' and it does not match '${superType}' (the type of the parameter '${superParameter}' in the superclass)`;
    }

    case "2416-2322-2740": {
      const [
        [property, currentClass, superClass],
        [signature, superSignature],
        [actualType, neededType, someMissingTypes, numberOfMoreMissingTypes],
      ] = getMatches(errorStack);
      const propertyType = signature.startsWith("(") ? "method" : "property";

      return `'${currentClass}' inherits from '${superClass}' but there is an incompatibility in the API:
				The ${propertyType} '${property}' has a signature which does not fit the one in ${superClass}:
				In ${superClass} it is:
				  ${superSignature}
				but in ${currentClass} it is:
				  ${signature}
				In Detail, the problem is about the used type '${actualType}': it is not compatible to the type '${neededType}' used in the superclass.
				There is a large number of mismatches between the types (more than ${numberOfMoreMissingTypes}), so it seems like the type
				'${actualType}' used in ${currentClass} is entirely wrong.`;
    }

    case "2417-2201-2740": {
      const [
        [typeofCurrentClass, typeofSuperClass],
        [conflictingMethod],
        [actualType, neededType, someMissingTypes, numberOfMoreMissingTypes],
      ] = getMatches(errorStack);

      return `The static parts of class '${typeofCurrentClass.replace(
        "typeof ",
        "",
      )}' are incompatible with the static parts of its superclass '${typeofSuperClass.replace(
        "typeof ",
        "",
      )}'.
				The problem is the return type of the '${conflictingMethod}' method:
				In ${typeofCurrentClass.replace(
          "typeof ",
          "",
        )} the return type is '${actualType}', in superclass ${typeofSuperClass.replace(
          "typeof ",
          "",
        )} the return type is '${neededType}'. There
				is a lot of incompatibilities (more than ${numberOfMoreMissingTypes}) between these return types, so something seems completely wrong.
				Some of the things missing in ${actualType} when compared to ${neededType} are: ${someMissingTypes}.`;
    }

    case "2420-2739": {
      const [
        [className, interfaceName],
        [className2, interfaceName2, missingProperties],
      ] = getMatches(errorStack);
      const aMissingProperties = missingProperties.split(", ");

      return `Class '${className} implements interface '${interfaceName}', but it does not actually implement the
				following ${aMissingProperties.length} methods/properties defined by the interface: ${missingProperties}.`;
    }

    case "2420-2741": {
      const [
        [className, interfaceName],
        [missingPropertyName, className2, interfaceName2],
      ] = getMatches(errorStack);

      return `Class '${className} implements interface '${interfaceName}', but it does not actually implement the
				following method/property defined by the interface: ${missingPropertyName}.`;
    }

    case "2503": {
      const [[missingNamespace]] = getMatches(errorStack);

      return `This might be caused by types from a third-party library being referenced in UI5 APIs.
				If ${missingNamespace} refers to such a third-party library, it must be made known to the UI5
				TypeScript generator (TODO: how?)`;
    }

    case "2694": {
      const [[mainpackage, subpackage]] = getMatches(errorStack);

      return `A module references another module which is not present in the TypeScript definition.
				Examples:
				- The return value of a method is declared to be a type which is private. Private types are not present
				    in TypeScript definitions.
				- An interface is implemented by a class, but this interface is never actually defined. Or it is private.
				- There is a typo.
				When the module that triggers the error (${ui5Module}) is not in the library defining '${mainpackage}.${subpackage}':
				- A type from a different library is used. Often, this is a reverse dependency (library x depends on library y,
					but an entity in library y is referencing a type from library x).
				In any case, the following line should contain the type that is missing/private (likely written with a complete namespace):
				${errorLine}`;
    }

    case "2707": {
      const [[type, min, max]] = getMatches(errorStack);
      return `A type with generics (${type}) is used, but for these generic types the concrete type needs to be specified in angle brackets.`;
    }

    case "7006": {
      // partial
      const [[parameterName, typeName]] = getMatches(errorStack);
      if (typeName === "any") {
        if (parameterName === "undefined") {
          return `The parameter name is "undefined", this is probably not correct and means there is some error in the JSDoc.
						Check the proper syntax of parameter declarations in JSDoc!`;
        }
      }
    }
  }
}

function getMatches(errorStack: TSErrorStack) {
  const aCodes = errorStack.codeChain.split("-");
  const aMatches = [];
  for (let i = 0; i < aCodes.length; i++) {
    let match = errorStack[i].message.match(pattern[aCodes[i]]);
    match.shift();
    aMatches.push(match);
  }
  return aMatches;
}

// TECHNICAL DATA PROCESSING PART

function getErrorStack(diagnostic: ts.Diagnostic) {
  let errors: TSErrorStack = [],
    aCodes = [];
  if (typeof diagnostic.messageText == "string") {
    // only toplevel error exists - return it. When more errors exist, also the toplevel one will be included below
    errors.push({
      code: diagnostic.code,
      message: diagnostic.messageText,
    });
    aCodes.push(diagnostic.code);
  } else {
    // cascade of errors
    let element = diagnostic.messageText;
    while (element && element.code) {
      errors.push({
        code: element.code,
        message: element.messageText,
      });
      aCodes.push(element.code);
      element = element.next ? element.next[0] : undefined; // descend
    }
  }
  errors.codeChain = aCodes.join("-");
  return errors;
}

// returns true if type is a function type that has returnType as return type
function hasFunctionReturnType(type: string, returnType: string) {
  const aReturnTypes = getFunctionReturnTypes(type);
  if (aReturnTypes.length) {
    return aReturnTypes.includes(returnType); // TODO: maybe one would need to check whether ALL return types are sReturnType...
  }
}

// returns an array of strings denoting the return type(s) of the given function type
function getFunctionReturnTypes(type: string) {
  let match;
  if ((match = type.match(/=> (\w+)$/))) {
    // single "=" intended!
    return [match[1]];
  } else if ((match = type.match(/^\{((\s*\([^\)]+\): \w+;\s*)+)}$/))) {
    let functions = match[1].split(";");
    let result = functions.map((typeString) => {
      match = typeString.match(/\([^\)]+\): (\w+)/);
      return match ? match[1] : undefined;
    });
    return result;
  } else {
    return [];
  }
}

// returns the source code line with the given number from the file referenced in the given diagnostic
function getLineText(
  diagnostic: ts.Diagnostic,
  lineNumber: number,
  /* the following parameters are optional, for potential performance reasons: */
  lineStarts?: readonly number[],
  fullFileText?: string,
) {
  const myLineStarts = lineStarts || diagnostic.file.getLineStarts();
  fullFileText = fullFileText || diagnostic.file.getFullText();
  const endOfLine =
    lineNumber + 1 < myLineStarts.length
      ? myLineStarts[lineNumber + 1] - 1
      : diagnostic.file.end; // line ends either at the beginning of the next line or at the end of the file
  return fullFileText.substring(myLineStarts[lineNumber], endOfLine);
}

// returns a section of the source file referenced in the given diagnostic: the line related to the diagnostic position, plus iAdditionalLines lines above and below, if possible
function getSourceCode(diagnostic: ts.Diagnostic, additionalLines: number) {
  additionalLines = additionalLines || 0;
  const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
    diagnostic.start,
  );
  const lineStarts = diagnostic.file.getLineStarts();
  const fullFileText = diagnostic.file.getFullText();
  // TODO: would need to be considered for potential positions spanning several lines:  const end = diagnostic.file.getLineEndOfPosition(diagnostic.start + diagnostic.length);

  let sourceCode = "";
  for (
    let i = Math.max(0, line - additionalLines);
    i < Math.min(lineStarts.length, line + 1 + additionalLines);
    i++
  ) {
    if (i === line) {
      sourceCode += ">>>  ";
    } else {
      sourceCode += "|    ";
    }
    sourceCode += getLineText(diagnostic, i, lineStarts, fullFileText) + "\n";
  }

  return sourceCode;
}

// walks up from the given diagnostic's position to the next preceding module declaration and returns the module name
function findContainingModule(diagnostic: ts.Diagnostic) {
  const MODULE_DECLARATION_PATTERN = /^\s*declare module "([^\"]+)" {/;
  const NAMESPACE_DECLARATION_PATTERN = /^\s*declare namespace ([^\s]+) {/;
  const NAMESPACE_PATTERN = /^\s+namespace ([^\s]+) {/;
  const CLASS_PATTERN =
    /^\s*(?:export(?: default)?)?\s+class ([^\s]+)( [\{\w].*)?$/;
  const FUNCTION_PATTERN = /^\s+[\w0-9]+\(/;
  const OBJECT_PATTERN = /^\s+[\w0-9]+: \{/;
  const { line } = diagnostic.file.getLineAndCharacterOfPosition(
    diagnostic.start,
  );
  const lineStarts = diagnostic.file.getLineStarts();
  const fullFileText = diagnostic.file.getFullText();

  let pathSegments: string[] = [],
    currentWhitespaceLength = -1;

  // now walk up line by line; as soon as leading whitespace length is reduced, the line defines a new namespace, class or module which needs to be added
  let currentLineNumber = line;
  while (currentLineNumber >= 0) {
    let lineText = getLineText(
      diagnostic,
      currentLineNumber,
      lineStarts,
      fullFileText,
    );
    let match = lineText.match(/^(\s*)[^\s]+.*/);
    if (currentWhitespaceLength === -1) {
      currentWhitespaceLength = match[1].length;
    }

    // TODO: also ignore comments!
    if (lineText.match(/^\s*$/)) {
      // empty line, ignore and proceed
    } else {
      let newWhitespaceLength = match[1].length;
      if (
        newWhitespaceLength < currentWhitespaceLength ||
        currentLineNumber === line
      ) {
        // nesting level reduced, this line is significant for a new namespace segment
        currentWhitespaceLength = match[1].length;

        if ((match = lineText.match(CLASS_PATTERN))) {
          pathSegments.unshift(match[1]);
        } else if ((match = lineText.match(NAMESPACE_PATTERN))) {
          pathSegments.unshift(match[1]);
        } else if ((match = lineText.match(NAMESPACE_DECLARATION_PATTERN))) {
          pathSegments.unshift(match[1]);
        } else if ((match = lineText.match(FUNCTION_PATTERN))) {
          // function definition, ignore for now
          // TODO: could be used to specify the location more precisely
        } else if ((match = lineText.match(OBJECT_PATTERN))) {
          // object definition, ignore for now
          // TODO: could be used to specify the location more precisely
        } else if ((match = lineText.match(MODULE_DECLARATION_PATTERN))) {
          pathSegments = [match[1].replace(/\//g, ".")];
        } else {
          // nothing significant; ignore
        }
      }
      if (newWhitespaceLength === 0) {
        break;
      }
    }

    currentLineNumber--;
  }

  return pathSegments.join(".");
}

interface ErrorOptions {
  index: number;
  total: number;
  moduleName?: string;
  hint?: string;
}

function createErrorMessage(diagnostic: ts.Diagnostic, options: ErrorOptions) {
  const { index, total } = options;
  const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
    diagnostic.start,
  );
  const moduleName = options.moduleName || findContainingModule(diagnostic);
  let moduleExplanation =
    "probably in UI5 module / source file:\n  " + moduleName;
  if (!moduleName) {
    moduleExplanation = "unknown.";
  }
  const relativeFileName = diagnostic.file.fileName.replace(pathRegex, ".$1"); // make it as short as possible while still keeping it clickable in vscode's terminal
  const errorStack = getErrorStack(diagnostic);

  let indexText = "";
  if (total > 0 && typeof index === "number") {
    indexText = `${index + 1} of ${total}`;
  }
  const hint = options.hint || createHint(diagnostic, errorStack) || "";

  const ignore = ignoreCheck(
    moduleName,
    ts.flattenDiagnosticMessageText(diagnostic.messageText, " ### "),
    path.basename(diagnostic.file.fileName),
  );
  const ignoreText = ignore
    ? "==> this issue is on the list of known errors, hence IT SHOULD BE IGNORED.\n"
    : "";

  const fullErrorMessage = `
  ==> Error message from TS compiler:
  ${relativeFileName} (${line + 1},${character + 1}):
  ${ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")}${
    !hint
      ? ""
      : `

  ==> Hint for solution:
  ${hint.split("\n").join("\n  ") /* prepend correct amount of whitespace */}`
  }

  ==> Origin of issue is ${moduleExplanation}

  ==> Code with error in the generated ${path.basename(
    diagnostic.file.fileName,
  )} file:
  ${getSourceCode(diagnostic, 3).split("\n").join("\n  ")}
  ==> TS Error Code(s): ${errorStack.codeChain}

  ${ignoreText}
  `;

  return fullErrorMessage;
}

function createErrorObject(diagnostic: ts.Diagnostic) {
  const errorStack = getErrorStack(diagnostic);
  const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
    diagnostic.start,
  );
  const moduleName = findContainingModule(diagnostic);
  const tsError = ts.flattenDiagnosticMessageText(
    diagnostic.messageText,
    " ### ",
  );
  const dtsFileName = path.basename(diagnostic.file.fileName);

  return {
    dtsFileName,
    dtsFilePosition: `line ${line + 1}, char ${character + 1}`,
    ui5Module: moduleName,
    codeChain: errorStack.codeChain,
    tsError: tsError,
    hint: createHint(diagnostic, errorStack, moduleName) || "",
    ignore: ignoreCheck(moduleName, tsError, dtsFileName),
  };
}

function analyzeError(
  diagnostic: ts.Diagnostic,
  options: ErrorOptions,
): ErrorAnalysis {
  const errorObject: ErrorObject = createErrorObject(diagnostic);

  // pass already known info to avoid expensive duplicate work
  options.moduleName = errorObject.ui5Module;
  options.hint = errorObject.hint;

  const errorMessage = createErrorMessage(diagnostic, options);

  return {
    errorObject,
    errorMessage,
    hasHint: errorObject.hint && errorObject.hint.length > 0,
    ignore: errorObject.ignore,
  };
}

export { createErrorMessage, createErrorObject, analyzeError };
