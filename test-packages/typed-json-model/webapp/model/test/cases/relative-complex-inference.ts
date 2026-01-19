/**
 * @file Test cases for the TypedJSONModel
 * Underlying data structure: OBJECT WITH OBJECT-LIKE PROPERTIES
 * Typing of data structure:  BY INFERENCE
 * Binding Paths:             RELATIVE
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

/** @expect ok     */ const model = new TypedJSONModel({ root: objectLikeByInference });
/** @expect ok     */ const context = model.createBindingContext("/root");

/** @expect ok     */ model.setProperty("anObject", {}, context);
/** @expect ok     */ model.setProperty("anArray", [], context);
/** @expect ok     */ model.setProperty("aJsonSafeArray", [1, "test", true], context);
/** @expect ok     */ model.setProperty("aJsonSafeArray/0", 42, context);
/** @expect ok     */ model.setProperty("aJsonSafeArray/1", "test", context);
/** @expect ok     */ model.setProperty("aJsonSafeArray/2", 1, context);
/** @expect ok     */ model.setProperty("anArrayOfPlaceholders", [new Placeholder()], context);
/** @expect ok     */ model.setProperty("anArrayOfPlaceholders/0/placeholderString", "test", context);
/** @expect ok     */ model.setProperty("aPlaceholder", new Placeholder(), context);
/** @expect ok     */ model.setProperty("aPlaceholder", { placeholderFunction: () => {}, placeholderString: "test" }, context);
/** @expect ok     */ model.setProperty("aPlaceholder/placeholderString", "test", context);

/** @expect ts2769 */ model.setProperty("anObject", null, context);
/** @expect ts2769 */ model.setProperty("anArray", null, context);
/** @expect ts2769 */ model.setProperty("aJsonSafeArray", [{}], context);
/** @expect ts2769 */ model.setProperty("aJsonSafeArray", [1, {}], context);
/** @expect ts2769 */ model.setProperty("anArrayOfPlaceholders", [{}], context);
/** @expect ts2769 */ model.setProperty("anArrayOfPlaceholders/0", {}, context);
/** @expect ts2769 */ model.setProperty("aPlaceholder", {}, context);
/** @expect ts2769 */ model.setProperty("aPlaceholder/placeholderString", undefined, context);
/** @expect ts2769 */ model.setProperty("aPlaceholder/placeholderFunktion", () => {}, context);

/***********************************************************************************************************************
 * Check model.getProperty
 **********************************************************************************************************************/

/** @expect ok     */ let anObject: object = model.getProperty("anObject", context);
/** @expect ok     */ let anArray: unknown[] = model.getProperty("anArray", context);
/** @expect ok     */ let aJsonSafeArray: JSONSafe[] = model.getProperty("aJsonSafeArray", context);
/** @expect ok     */ let aJsonSafe: JSONSafe = model.getProperty("aJsonSafeArray/0", context);
/** @expect ok     */ let aPlaceholder: Placeholder = model.getProperty("aPlaceholder", context);
/** @expect ok     */ let anArrayOfPlaceholders: Placeholder[] = model.getProperty("anArrayOfPlaceholders", context);
/** @expect ok     */ let anotherPlaceholder: Placeholder = model.getProperty("anArrayOfPlaceholders/0", context);
/** @expect ok     */ let aTuple: (string | number)[] = model.getProperty("aTuple", context);
/** @expect ok     */ let anElementInATuple: string | number = model.getProperty("aTuple/0", context);

/** @expect ts2345 */ let anything: any = model.getProperty("anObject/0", context);
/** @expect ts2345 */ anything = model.getProperty("doesNotExist", context);
/** @expect ts2345 */ anything = model.getProperty("anArray/0/doesNotExist", context);

/** @expect ts2739 */ aPlaceholder = model.getProperty("anObject", context);
/** @expect ts2322 */ anArrayOfPlaceholders = model.getProperty("aJsonSafeArray", context);
/** @expect ts2322 */ anObject = model.getProperty("aJsonSafeArray/0", context);
/** @expect ts2322 */ aJsonSafe = model.getProperty("aPlaceholder", context);
/** @expect ts2322 */ aJsonSafe = model.getProperty("anArrayOfPlaceholders/0", context);
/** @expect ts2322 */ anElementInATuple = model.getProperty("aTuple", context);
/** @expect ts2322 */ anObject = model.getProperty("aTuple/0", context);

/***********************************************************************************************************************
 * Check model.getOriginalProperty
 **********************************************************************************************************************/

/** @expect ok     */ anObject = model.getOriginalProperty("anObject", context);
/** @expect ok     */ anArray = model.getOriginalProperty("anArray", context);
/** @expect ok     */ aJsonSafeArray = model.getOriginalProperty("aJsonSafeArray", context);
/** @expect ok     */ aJsonSafe = model.getOriginalProperty("aJsonSafeArray/0", context);
/** @expect ok     */ aPlaceholder = model.getOriginalProperty("aPlaceholder", context);
/** @expect ok     */ anArrayOfPlaceholders = model.getOriginalProperty("anArrayOfPlaceholders", context);
/** @expect ok     */ anotherPlaceholder = model.getOriginalProperty("anArrayOfPlaceholders/0", context);
/** @expect ok     */ aTuple = model.getOriginalProperty("aTuple", context);
/** @expect ok     */ anElementInATuple = model.getOriginalProperty("aTuple/0", context);

/** @expect ts2345 */ anything = model.getOriginalProperty("anObject/0", context);
/** @expect ts2345 */ anything = model.getOriginalProperty("doesNotExist", context);
/** @expect ts2345 */ anything = model.getOriginalProperty("anArray/0/doesNotExist", context);

/** @expect ts2739 */ aPlaceholder = model.getOriginalProperty("anObject", context);
/** @expect ts2322 */ anArrayOfPlaceholders = model.getOriginalProperty("aJsonSafeArray", context);
/** @expect ts2322 */ anObject = model.getOriginalProperty("aJsonSafeArray/0", context);
/** @expect ts2322 */ aJsonSafe = model.getOriginalProperty("aPlaceholder", context);
/** @expect ts2322 */ aJsonSafe = model.getOriginalProperty("anArrayOfPlaceholders/0", context);
/** @expect ts2322 */ anElementInATuple = model.getOriginalProperty("aTuple", context);
/** @expect ts2322 */ anObject = model.getOriginalProperty("aTuple/0", context);
