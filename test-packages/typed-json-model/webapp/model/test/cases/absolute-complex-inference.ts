/**
 * @file Test cases for the TypedJSONModel
 * Underlying data structure: OBJECT WITH OBJECT-LIKE PROPERTIES
 * Typing of data structure:  BY INFERENCE
 * Binding Paths:             ABSOLUTE
 *
 * To subsume objects and arrays, these properties shall be called "object-like" properties,
 * whereas the JS runtime does not distinguish between objects and arrays when
 * evaluating the type of a variable at runtime.
 */

import { JSONSafe, objectLikeByInference, Placeholder } from "../input";

import { TypedJSONModel } from "../../model";

/***********************************************************************************************************************
 * Check model.setProperty
 **********************************************************************************************************************/

/** @expect ok     */ const model = new TypedJSONModel(objectLikeByInference);

/** @expect ok     */ model.setProperty("/anObject", {});
/** @expect ok     */ model.setProperty("/anArray", []);
/** @expect ok     */ model.setProperty("/aJsonSafeArray", [1, "test", true]);
/** @expect ok     */ model.setProperty("/aJsonSafeArray/0", 42);
/** @expect ok     */ model.setProperty("/aJsonSafeArray/1", "test");
/** @expect ok     */ model.setProperty("/aJsonSafeArray/2", 1);
/** @expect ok     */ model.setProperty("/anArrayOfPlaceholders", [new Placeholder()]);
/** @expect ok     */ model.setProperty("/anArrayOfPlaceholders/0/placeholderString", "test");
/** @expect ok     */ model.setProperty("/aPlaceholder", new Placeholder());
/** @expect ok     */ model.setProperty("/aPlaceholder", { placeholderFunction: () => {}, placeholderString: "test" });
/** @expect ok     */ model.setProperty("/aPlaceholder/placeholderString", "test");

/** @expect ts2345 */ model.setProperty("/anObject", null);
/** @expect ts2345 */ model.setProperty("/anArray", null);
/** @expect ts2322 */ model.setProperty("/aJsonSafeArray", [{}]);
/** @expect ts2322 */ model.setProperty("/aJsonSafeArray", [1, {}]);
/** @expect ts2739 */ model.setProperty("/anArrayOfPlaceholders", [{}]);
/** @expect ts2345 */ model.setProperty("/anArrayOfPlaceholders/0", {});
/** @expect ts2345 */ model.setProperty("/aPlaceholder", {});
/** @expect ts2345 */ model.setProperty("/aPlaceholder/placeholderString", undefined);
/** @expect ts2345 */ model.setProperty("/aPlaceholder/placeholderFunktion", () => {});

/***********************************************************************************************************************
 * Check model.getProperty
 **********************************************************************************************************************/

/** @expect ok     */ let anObject: object = model.getProperty("/anObject");
/** @expect ok     */ let anArray: unknown[] = model.getProperty("/anArray");
/** @expect ok     */ let aJsonSafeArray: JSONSafe[] = model.getProperty("/aJsonSafeArray");
/** @expect ok     */ let aJsonSafe: JSONSafe = model.getProperty("/aJsonSafeArray/0");
/** @expect ok     */ let aPlaceholder: Placeholder = model.getProperty("/aPlaceholder");
/** @expect ok     */ let anArrayOfPlaceholders: Placeholder[] = model.getProperty("/anArrayOfPlaceholders");
/** @expect ok     */ let anotherPlaceholder: Placeholder = model.getProperty("/anArrayOfPlaceholders/0");
/** @expect ok     */ let aTuple: (string | number)[] = model.getProperty("/aTuple");
/** @expect ok     */ let anElementInATuple: string | number = model.getProperty("/aTuple/0");

/** @expect ts2345 */ let anything: any = model.getProperty("/anObject/0");
/** @expect ts2345 */ anything = model.getProperty("/doesNotExist");
/** @expect ts2345 */ anything = model.getProperty("/anArray/0/doesNotExist");

/** @expect ts2739 */ aPlaceholder = model.getProperty("/anObject");
/** @expect ts2322 */ anArrayOfPlaceholders = model.getProperty("/aJsonSafeArray");
/** @expect ts2322 */ anObject = model.getProperty("/aJsonSafeArray/0");
/** @expect ts2322 */ aJsonSafe = model.getProperty("/aPlaceholder");
/** @expect ts2322 */ aJsonSafe = model.getProperty("/anArrayOfPlaceholders/0");
/** @expect ts2322 */ anElementInATuple = model.getProperty("/aTuple");
/** @expect ts2322 */ anObject = model.getProperty("/aTuple/0");

/***********************************************************************************************************************
 * Check model.getOriginalProperty
 **********************************************************************************************************************/

/** @expect ok     */ let anOriginalObject: object = model.getOriginalProperty("/anObject");
/** @expect ok     */ let anOriginalArray: unknown[] = model.getOriginalProperty("/anArray");
/** @expect ok     */ let aOriginalJsonSafeArray: JSONSafe[] = model.getOriginalProperty("/aJsonSafeArray");
/** @expect ok     */ let aOriginalJsonSafe: JSONSafe = model.getOriginalProperty("/aJsonSafeArray/0");
/** @expect ok     */ let aOriginalPlaceholder: Placeholder = model.getOriginalProperty("/aPlaceholder");
/** @expect ok     */ let anOriginalArrayOfPlaceholders: Placeholder[] = model.getOriginalProperty("/anArrayOfPlaceholders");
/** @expect ok     */ let anotherOriginalPlaceholder: Placeholder = model.getOriginalProperty("/anArrayOfPlaceholders/0");
/** @expect ok     */ let anOriginalTuple: (string | number)[] = model.getOriginalProperty("/aTuple");
/** @expect ok     */ let anOriginalElementInATuple: string | number = model.getOriginalProperty("/aTuple/0");

/** @expect ts2345 */ let anythingOriginal: any = model.getOriginalProperty("/anObject/0");
/** @expect ts2345 */ anythingOriginal = model.getOriginalProperty("/doesNotExist");
/** @expect ts2345 */ anythingOriginal = model.getOriginalProperty("/anArray/0/doesNotExist");

/** @expect ts2739 */ aOriginalPlaceholder = model.getOriginalProperty("/anObject");
/** @expect ts2322 */ anOriginalArrayOfPlaceholders = model.getOriginalProperty("/aJsonSafeArray");
/** @expect ts2322 */ anOriginalObject = model.getOriginalProperty("/aJsonSafeArray/0");
/** @expect ts2322 */ aOriginalJsonSafe = model.getOriginalProperty("/aPlaceholder");
/** @expect ts2322 */ aOriginalJsonSafe = model.getOriginalProperty("/anArrayOfPlaceholders/0");
/** @expect ts2322 */ anOriginalElementInATuple = model.getOriginalProperty("/aTuple");
/** @expect ts2322 */ anOriginalObject = model.getOriginalProperty("/aTuple/0");

/***********************************************************************************************************************
 * Check model.getData / model.setData
 **********************************************************************************************************************/

/** @expect ok     */ const dataA: typeof objectLikeByInference = model.getData();
/** @expect ok     */ model.setData(dataA);

/** @expect ts2740 */ const dataB: Array<any> = model.getData();
/** @expect ts2345 */ model.setData(dataB);
