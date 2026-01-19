/**
 * @file Test cases for the TypedJSONModel
 * Underlying data structure: OBJECT WITH OBJECT-LIKE PROPERTIES
 * Typing of data structure:  BY TYPE ALIAS
 * Binding Paths:             ABSOLUTE
 *
 * To subsume objects and arrays, these properties shall be called "object-like" properties,
 * whereas the JS runtime does not distinguish between objects and arrays when
 * evaluating the type of a variable at runtime.
 */

import { IObjectLike, JSONSafe, objectLikeByTypeAlias, Placeholder, TObjectLike } from "../input";

import { TypedJSONModel } from "../../model";

/***********************************************************************************************************************
 * Check model.setProperty
 **********************************************************************************************************************/

/** @expect ok     */ const model = new TypedJSONModel(objectLikeByTypeAlias);

/** @expect ok     */ model.setProperty("/anObject", {});
/** @expect ok     */ model.setProperty("/anArray", []);
/** @expect ok     */ model.setProperty("/aJsonSafeArray", [1, null, "test", true]);
/** @expect ok     */ model.setProperty("/aJsonSafeArray/0", 42);
/** @expect ok     */ model.setProperty("/aJsonSafeArray/1", "test");
/** @expect ok     */ model.setProperty("/aJsonSafeArray/2", null);
/** @expect ok     */ model.setProperty("/anArrayOfPlaceholders", [new Placeholder()]);
/** @expect ok     */ model.setProperty("/anArrayOfPlaceholders/0/placeholderString", "test");
/** @expect ok     */ model.setProperty("/aPlaceholder", new Placeholder());
/** @expect ok     */ model.setProperty("/aPlaceholder", { placeholderFunction: () => {}, placeholderString: "test" });
/** @expect ok     */ model.setProperty("/aPlaceholder/placeholderString", "test");
/** @expect ok     */ model.setProperty("/aPlaceholder/placeholderString", "test");

/** @expect ts2345 */ model.setProperty("/anObject", null);
/** @expect ts2345 */ model.setProperty("/anObject", 1);
/** @expect ts2345 */ model.setProperty("/anArray", null);
/** @expect ts2322 */ model.setProperty("/aJsonSafeArray", [{}]);
/** @expect ts2322 */ model.setProperty("/aJsonSafeArray", [1, {}]);
/** @expect ts2739 */ model.setProperty("/anArrayOfPlaceholders", [{}]);
/** @expect ts2345 */ model.setProperty("/anArrayOfPlaceholders/0", {});
/** @expect ts2345 */ model.setProperty("/aPlaceholder", {});
/** @expect ts2345 */ model.setProperty("/aPlaceholder/placeholderString", undefined);
/** @expect ts2345 */ model.setProperty("/aPlaceholder/placeholderFunktion", () => {});
/** @expect ts2345 */ model.setProperty("/aTuple", ["1", 1, 1]); // too many elements

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
/** @expect ok     */ let aTuple: [string, number] = model.getProperty("/aTuple");
/** @expect ok     */ let anElementInATuple: string | number = model.getProperty("/aTuple/0");

/** @expect ts2345 */ let anything: any = model.getProperty("/anObject/0");
/** @expect ts2345 */ anything = model.getProperty("/doesNotExist");
/** @expect ts2345 */ anything = model.getProperty("/anArray/0/doesNotExist");

/** @expect ts2739 */ aPlaceholder = model.getProperty("/anObject");
/** @expect ts2322 */ aJsonSafeArray = model.getProperty("/anArray");
/** @expect ts2322 */ anArrayOfPlaceholders = model.getProperty("/aJsonSafeArray");
/** @expect ts2322 */ anObject = model.getProperty("/aJsonSafeArray/0");
/** @expect ts2322 */ aJsonSafe = model.getProperty("/aPlaceholder");
/** @expect ts2322 */ aJsonSafe = model.getProperty("/anArrayOfPlaceholders/0");
/** @expect ts2322 */ anElementInATuple = model.getProperty("/aTuple");
/** @expect ts2322 */ anObject = model.getProperty("/aTuple/0");

/***********************************************************************************************************************
 * Check model.getOriginalProperty
 **********************************************************************************************************************/

/** @expect ok     */ anObject = model.getOriginalProperty("/anObject");
/** @expect ok     */ anArray = model.getOriginalProperty("/anArray");
/** @expect ok     */ aJsonSafeArray = model.getOriginalProperty("/aJsonSafeArray");
/** @expect ok     */ aJsonSafe = model.getOriginalProperty("/aJsonSafeArray/0");
/** @expect ok     */ aPlaceholder = model.getOriginalProperty("/aPlaceholder");
/** @expect ok     */ anArrayOfPlaceholders = model.getOriginalProperty("/anArrayOfPlaceholders");
/** @expect ok     */ anotherPlaceholder = model.getOriginalProperty("/anArrayOfPlaceholders/0");
/** @expect ok     */ aTuple = model.getOriginalProperty("/aTuple");
/** @expect ok     */ anElementInATuple = model.getOriginalProperty("/aTuple/0");

/** @expect ts2345 */ anything = model.getOriginalProperty("/anObject/0");
/** @expect ts2345 */ anything = model.getOriginalProperty("/doesNotExist");
/** @expect ts2345 */ anything = model.getOriginalProperty("/anArray/0/doesNotExist");

/** @expect ts2739 */ aPlaceholder = model.getOriginalProperty("/anObject");
/** @expect ts2322 */ anArrayOfPlaceholders = model.getOriginalProperty("/aJsonSafeArray");
/** @expect ts2322 */ anObject = model.getOriginalProperty("/aJsonSafeArray/0");
/** @expect ts2322 */ aJsonSafe = model.getOriginalProperty("/aPlaceholder");
/** @expect ts2322 */ aJsonSafe = model.getOriginalProperty("/anArrayOfPlaceholders/0");
/** @expect ts2322 */ anElementInATuple = model.getOriginalProperty("/aTuple");
/** @expect ts2322 */ anObject = model.getOriginalProperty("/aTuple/0");

/***********************************************************************************************************************
 * Check model.getData / model.setData
 **********************************************************************************************************************/

/** @expect ok     */ const dataA: TObjectLike = model.getData();
/** @expect ok     */ const dataB: IObjectLike = model.getData();
/** @expect ok     */ model.setData(objectLikeByTypeAlias);

/** @expect ts2740 */ const dataC: Array<any> = model.getData();
/** @expect ts2345 */ model.setData(dataC);
