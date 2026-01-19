/**
 * @file Various edge cases to test the TypedJSONModel
 */

import { TypedJSONModel } from "../../model";

/***********************************************************************************************************************
 * Edge Case: The underlying data structure is an array (rather unusual)
 **********************************************************************************************************************/

const array = [1, 2, 3];

/** @expect ok     */ const model1 = new TypedJSONModel(array);
/** @expect ok     */ let someNumber: number = model1.getProperty("/0");
/** @expect ok     */ let anOriginalNumber: number = model1.getOriginalProperty("/0");
/** @expect ok     */ model1.setProperty("/0", 42);
/** @expect ts2345 */ model1.setProperty("/0", "42");

// test arrays of objects

type TestArray = { aNumber: number }[];
const model2 = new TypedJSONModel([] as TestArray);

/** @expect ok     */ const someObject: { aNumber: number } = model2.getProperty("/0");
/** @expect ok     */ someNumber = model2.getProperty("/0/aNumber");
/** @expect ok     */ anOriginalNumber = model2.getOriginalProperty("/0/aNumber");
/** @expect ts2322 */ const someString: string = model2.getProperty("/0");
/** @expect ts2322 */ const anOriginalString: string = model2.getOriginalProperty("/0");
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
