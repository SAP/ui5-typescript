/**
 * @file Test cases for the TypedJSONModel
 * Underlying data structure: OBJECT WITH PRIMITIVE PROPERTIES
 * Typing of data structure:  BY INFERENCE
 * Binding Paths:             RELATIVE
 */

import { primitivesByInference } from "../input";

import { TypedJSONModel } from "../../model";

let aSymbol: symbol = Symbol("test");

/***********************************************************************************************************************
 * Check model.setProperty
 **********************************************************************************************************************/

/** @expect ok     */ const model = new TypedJSONModel({ root: primitivesByInference });
/** @expect ok     */ const context = model.createBindingContext("/root");

/** @expect ok     */ model.setProperty("aString", "some string", context);
/** @expect ok     */ model.setProperty("aNumber", 1, context);
/** @expect ok     */ model.setProperty("aBoolean", true, context);
/** @expect ok     */ model.setProperty("aNull", null, context);
/** @expect ok     */ model.setProperty("anUndefined", undefined, context);

/** @expect ts2769 */ model.setProperty("aString", 1, context);
/** @expect ts2769 */ model.setProperty("aNumber", "1", context);
/** @expect ts2769 */ model.setProperty("aBoolean", "true", context);
/** @expect ts2769 */ model.setProperty("aNull", "null", context);
/** @expect ts2769 */ model.setProperty("anUndefined", null, context);

// value is a symbol -> not JSON serializable!
/** @expect ts2769 */ model.setProperty("aSymbol", aSymbol, context);

/***********************************************************************************************************************
 * Check model.getProperty
 **********************************************************************************************************************/

/** @expect ok     */ let aString: string = model.getProperty("aString", context);
/** @expect ok     */ let aNumber: number = model.getProperty("aNumber", context);
/** @expect ok     */ let aBoolean: boolean = model.getProperty("aBoolean", context);
/** @expect ok     */ let aNull: null = model.getProperty("aNull", context);
/** @expect ok     */ let anUndefined: undefined = model.getProperty("anUndefined", context);

/** @expect ts2345 */ const test = model.getProperty("doesNotExist", context);

/** @expect ts2322 */ aString = model.getProperty("aNumber", context);
/** @expect ts2322 */ aNumber = model.getProperty("aString", context);
/** @expect ts2322 */ aString = model.getProperty("aBoolean", context);
/** @expect ts2322 */ aNull = model.getProperty("anUndefined", context);
/** @expect ts2322 */ anUndefined = model.getProperty("aNull", context);

// value is a symbol -> not JSON serializable!
/** @expect ts2322 */ aSymbol = model.getProperty("aSymbol", context);

/***********************************************************************************************************************
 * Check model.getOriginalProperty
 **********************************************************************************************************************/

/** @expect ok     */ aString = model.getOriginalProperty("aString", context);
/** @expect ok     */ aNumber = model.getOriginalProperty("aNumber", context);
/** @expect ok     */ aBoolean = model.getOriginalProperty("aBoolean", context);
/** @expect ok     */ aNull = model.getOriginalProperty("aNull", context);
/** @expect ok     */ anUndefined = model.getOriginalProperty("anUndefined", context);

/** @expect ts2345 */ const test1 = model.getOriginalProperty("doesNotExist", context);

/** @expect ts2322 */ aString = model.getOriginalProperty("aNumber", context);
/** @expect ts2322 */ aNumber = model.getOriginalProperty("aString", context);
/** @expect ts2322 */ aString = model.getOriginalProperty("aBoolean", context);
/** @expect ts2322 */ aNull = model.getOriginalProperty("anUndefined", context);
/** @expect ts2322 */ anUndefined = model.getOriginalProperty("aNull", context);

// value is a symbol -> not JSON serializable!
/** @expect ts2322 */ aSymbol = model.getOriginalProperty("aSymbol", context);
