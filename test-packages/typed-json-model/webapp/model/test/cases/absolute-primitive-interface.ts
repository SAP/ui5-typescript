/**
 * @file Test cases for the TypedJSONModel
 * Underlying data structure: OBJECT WITH PRIMITIVE PROPERTIES
 * Typing of data structure:  BY INTERFACE
 * Binding Paths:             ABSOLUTE
 */

import { primitivesByInterface } from "../input";

import { TypedJSONModel } from "../../model";

let aSymbol: symbol = Symbol("test");

/***********************************************************************************************************************
 * Check model.setProperty
 **********************************************************************************************************************/

/** @expect ok     */ const model = new TypedJSONModel(primitivesByInterface);

/** @expect ok     */ model.setProperty("/aString", "some string");
/** @expect ok     */ model.setProperty("/aNumber", 1);
/** @expect ok     */ model.setProperty("/aBoolean", true);
/** @expect ok     */ model.setProperty("/aNull", null);
/** @expect ok     */ model.setProperty("/anUndefined", undefined);

/** @expect ts2345 */ model.setProperty("/aString", 1);
/** @expect ts2345 */ model.setProperty("/aNumber", "1");
/** @expect ts2345 */ model.setProperty("/aBoolean", "true");
/** @expect ts2345 */ model.setProperty("/aNull", "null");
/** @expect ts2345 */ model.setProperty("/anUndefined", null);

/** @expect ts2345 */ model.setProperty("/doesNotExist", {});

// value is a symbol -> not JSON serializable!
/** @expect ts2345  */ model.setProperty("/aSymbol", aSymbol);

/***********************************************************************************************************************
 * Check model.getProperty
 **********************************************************************************************************************/

/** @expect ok     */ let aString: string = model.getProperty("/aString");
/** @expect ok     */ let aNumber: number = model.getProperty("/aNumber");
/** @expect ok     */ let aBoolean: boolean = model.getProperty("/aBoolean");
/** @expect ok     */ let aNull: null = model.getProperty("/aNull");
/** @expect ok     */ let anUndefined: undefined = model.getProperty("/anUndefined");

/** @expect ts2345 */ const test = model.getProperty("/doesNotExist");

/** @expect ts2322 */ aString = model.getProperty("/aNumber");
/** @expect ts2322 */ aNumber = model.getProperty("/aString");
/** @expect ts2322 */ aString = model.getProperty("/aBoolean");
/** @expect ts2322 */ aNull = model.getProperty("/anUndefined");
/** @expect ts2322 */ anUndefined = model.getProperty("/aNull");

// value is a symbol -> not JSON serializable!
/** @expect ts2322 */ aSymbol = model.getProperty("/aSymbol");
