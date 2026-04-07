/**
 * @file Various general test cases to test the TypedJSONModel for APIs which always return the same type,
 *   regardless of the provided path (e.g. getObject, getPath, etc.)
 */

import { TypedJSONModel } from "../../model";
import JSONTreeBinding from "sap/ui/model/json/JSONTreeBinding";

/***********************************************************************************************************************
 * bindTree - Absolute cases
 **********************************************************************************************************************/

const data = { root: { array: [1, 2, 3], nested: { value: "test" }, number: 1, string: "foo" } };
const model0 = new TypedJSONModel(data);

/** @expect ok     */ let jsonTreeBindingAbsolute: JSONTreeBinding = model0.bindTree("/root/array");
/** @expect ok     */ jsonTreeBindingAbsolute = model0.bindTree("/root/nested");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model0.bindTree("/root/number");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model0.bindTree("/root/string");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model0.bindTree("/root/nonExisting");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model0.bindTree("/root/array/0");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model0.bindTree("/root/nested/value");

/***********************************************************************************************************************
 * bindTree - Relative cases
 **********************************************************************************************************************/

const context = model0.createBindingContext("/root");

/** @expect ok     */ let jsonTreeBindingRelative: JSONTreeBinding = model0.bindTree("array", context);
/** @expect ok     */ jsonTreeBindingRelative = model0.bindTree("nested", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model0.bindTree("number", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model0.bindTree("string", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model0.bindTree("nonExisting", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model0.bindTree("array/0", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model0.bindTree("nested/value", context);
