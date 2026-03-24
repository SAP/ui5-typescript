/**
 * @file Various edge cases to test the TypedJSONModel
 */

import ClientContextBinding from "sap/ui/model/ClientContextBinding";
import { TypedJSONModel } from "../../model";
import { Placeholder } from "../input";

/***********************************************************************************************************************
 * Edge Case: The underlying data structure is an array (rather unusual)
 **********************************************************************************************************************/

const array = [1, 2, 3];

/** @expect ok     */ const model1 = new TypedJSONModel(array);
/** @expect ok     */ let someNumber: number = model1.getProperty("/0");
/** @expect ok     */ model1.setProperty("/0", 42);
/** @expect ts2345 */ model1.setProperty("/0", "42");

// test arrays of objects

type TestArray = { aNumber: number }[];
const model2 = new TypedJSONModel([] as TestArray);

/** @expect ok     */ const someObject: { aNumber: number } = model2.getProperty("/0");
/** @expect ok     */ someNumber = model2.getProperty("/0/aNumber");
/** @expect ts2322 */ const someString: string = model2.getProperty("/0");
/** @expect ok     */ model2.setProperty("/0", { aNumber: 42 });
/** @expect ts2345 */ model2.setProperty("/0", {});

// test nested arrays (I've never seen this in an UI5 app, but technically, '/0/0/0...' is a valid path)
const nestedArray = [
  [1, 2],
  [3, 4],
];
const model3 = new TypedJSONModel(nestedArray);

/** @expect ok     */ someNumber = model3.getProperty("/42/69");
/** @expect ok     */ model3.setProperty("/0/1", 42);
/** @expect ts2345 */ model3.setProperty("/0/1", "42");
/** @expect ts2345 */ model3.setProperty("/0/1/2", 42); // nested too deeply.
/** @expect ts2345 */ model3.setProperty("/0/1/2", "42"); // nested too deeply.

/***********************************************************************************************************************
 * Edge cases regarding union, intersection and literal types
 **********************************************************************************************************************/

interface IEdgeCase {
  aLiteral: "literal";
  aLiteralUnion: "literal" | "union";
  anIntersection: { a: number } & { b: string };
}

const edgeCase: IEdgeCase = {
  aLiteral: "literal",
  aLiteralUnion: "literal",
  anIntersection: { a: 1, b: "b" },
};

const model4 = new TypedJSONModel(edgeCase);

/** @expect ok     */ model4.setProperty("/aLiteral", "literal");
/** @expect ts2345 */ model4.setProperty("/aLiteral", "union");
/** @expect ok     */ model4.setProperty("/aLiteralUnion", "literal");
/** @expect ok     */ model4.setProperty("/aLiteralUnion", "union");
/** @expect ts2345 */ model4.setProperty("/aLiteralUnion", "literal union");
/** @expect ok     */ model4.setProperty("/anIntersection", { a: 1, b: "b" });
/** @expect ts2345 */ model4.setProperty("/anIntersection", { a: 1 });
/** @expect ts2322 */ model4.setProperty("/anIntersection", { a: 1, b: 2 });

/***********************************************************************************************************************
 * Check model.bindContext
 **********************************************************************************************************************/

// Absolute paths
const data = {
  aString: "string",
  anObject: { a: "foo" },
  anArray: [],
  anArrayOfObjects: [{ aNumber: 1 }],
  aPlaceholder: new Placeholder(),
  anArrayOfPlaceholders: [new Placeholder()],
  aTuple: ["string", 1],
};

const model5 = new TypedJSONModel(data);

/** @expect ok     */ let clientContextBindingAbsolute: ClientContextBinding = model5.bindContext("/anObject");
/** @expect ok     */ model5.bindContext("/anArrayOfObjects/0");
/** @expect ok     */ model5.bindContext("/aPlaceholder");
/** @expect ok     */ model5.bindContext("/anArrayOfPlaceholders/0");

/** @expect ts2769 */ model5.bindContext("/anArray");
/** @expect ts2769 */ model5.bindContext("/aTuple");
/** @expect ts2769 */ model5.bindContext("/aTuple/0");
/** @expect ts2769 */ model5.bindContext("/aJsonSafeArray/0");
/** @expect ts2769 */ model5.bindContext("/anArrayOfObjects/0/aNumber");
/** @expect ts2769 */ model5.bindContext("/anArray/0/doesNotExist");

// Relative paths

const dataForRelativeCase = {
  root: {
    aString: "string",
    anObject: { a: "foo" },
    anArray: [],
    anArrayOfObjects: [{ aNumber: 1 }],
    aPlaceholder: new Placeholder(),
    anArrayOfPlaceholders: [new Placeholder()],
    aTuple: ["string", 1],
  },
};

const model6 = new TypedJSONModel(dataForRelativeCase);
const context = model6.createBindingContext("/root");

/** @expect ok     */ let clientContextBindingRelative: ClientContextBinding = model6.bindContext("anObject", context);
/** @expect ok     */ model6.bindContext("anArrayOfObjects/0", context);
/** @expect ok     */ model6.bindContext("aPlaceholder", context);
/** @expect ok     */ model6.bindContext("anArrayOfPlaceholders/0", context);

/** @expect ts2769 */ model6.bindContext("anArray", context);
/** @expect ts2769 */ model6.bindContext("aTuple", context);
/** @expect ts2769 */ model6.bindContext("aTuple/0", context);
/** @expect ts2769 */ model6.bindContext("aJsonSafeArray/0", context);
/** @expect ts2769 */ model6.bindContext("anArrayOfObjects/0/aNumber", context);
/** @expect ts2769 */ model6.bindContext("anArray/0/doesNotExist", context);
