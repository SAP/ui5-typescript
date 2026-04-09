/**
 * @file Various general test cases to test the TypedJSONModel for APIs which always return the same type,
 *   regardless of the provided path (e.g. getObject, getPath, etc.)
 */

import { TypedJSONModel } from "../../model";
import JSONListBinding from "sap/ui/model/json/JSONListBinding";
import { JSONSafe, Placeholder } from "../input";

/***********************************************************************************************************************
 * bindList - Absolute cases
 **********************************************************************************************************************/

const data = {
  root: {
    array: [1, 2, 3],
    nested: [{ value: "test" }],
    anObjectWithArray: { anArray: [1, 2, 3] },
    anArrayOfPlaceholders: [new Placeholder()],
    anArrayOfObjects: [
      { a: 1, b: "foo" },
      { a: 2, b: "bar" },
      { a: 3, b: "baz" },
    ],
    number: 1,
    string: "foo",
  },
};
let aPlaceholder: Placeholder = new Placeholder();
let aJsonSafe: JSONSafe = "foo";
const model3 = new TypedJSONModel(data);

/** @expect ok     */ let listBinding: JSONListBinding = model3.bindList("/root/array");
/** @expect ok     */ model3.bindList("/root/nested");
/** @expect ok     */ model3.bindList("/root/anObjectWithArray/anArray");

/** @expect ts2345 */ model3.bindList("/root/array/0");
/** @expect ts2345 */ model3.bindList("/root/anObjectWithArray/anArray/0");
/** @expect ts2345 */ model3.bindList("/root/anArrayOfPlaceholders/0");
/** @expect ts2345 */ model3.bindList("/root/anArrayOfObjects/0");

// bindList always returns a JSONListBinding and cannot be assigned to other types
/** @expect ts2739 */ aPlaceholder = model3.bindList("/root/array");
/** @expect ts2322 */ aJsonSafe = model3.bindList("/root/array");

/***********************************************************************************************************************
 * bindList - Relative cases
 **********************************************************************************************************************/

const context = model3.createBindingContext("/root");

/** @expect ok     */ let listBindingRealtive: JSONListBinding = model3.bindList("array", context);
/** @expect ok     */ model3.bindList("nested", context);
/** @expect ok     */ model3.bindList("anObjectWithArray/anArray", context);

/** @expect ts2769 */ model3.bindList("aJsonSafeArray/0", context);
/** @expect ts2769 */ model3.bindList("anArrayOfArrays/0/0", context);
/** @expect ts2769 */ model3.bindList("anObjectWithArray/anArray/0", context);
/** @expect ts2769 */ model3.bindList("anArrayOfPlaceholders/0", context);
/** @expect ts2769 */ model3.bindList("anArrayOfObjects/0", context);

// bindList always returns a JSONListBinding and cannot be assigned to other types
/** @expect ts2739 */ aPlaceholder = model3.bindList("array", context);
/** @expect ts2322 */ aJsonSafe = model3.bindList("array", context);
