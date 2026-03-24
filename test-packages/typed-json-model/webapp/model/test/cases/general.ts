/**
 * @file Various general test cases to test the TypedJSONModel for APIs which always return the same type,
 *   regardless of the provided path (e.g. getObject, getPath, etc.)
 */

import { TypedJSONModel } from "../../model";
import JSONListBinding from "sap/ui/model/json/JSONListBinding";
import { JSONSafe, Placeholder } from "../input";
import ClientContextBinding from "sap/ui/model/ClientContextBinding";

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

/***********************************************************************************************************************
 * bindContext - Absolute cases
 **********************************************************************************************************************/

const model1 = new TypedJSONModel(data);

/** @expect ok     */ let clientContextBindingAbsolute: ClientContextBinding = model1.bindContext("/root/anObject");
/** @expect ok     */ model1.bindContext("/root/anArrayOfObjects/0");
/** @expect ok     */ model1.bindContext("/root/aPlaceholder");
/** @expect ok     */ model1.bindContext("/root/anArrayOfPlaceholders/0");

/** @expect ts2769 */ model1.bindContext("/root/anArray");
/** @expect ts2769 */ model1.bindContext("/root/aTuple");
/** @expect ts2769 */ model1.bindContext("/root/aTuple/0");
/** @expect ts2769 */ model1.bindContext("/root/aJsonSafeArray/0");
/** @expect ts2769 */ model1.bindContext("/root/anArrayOfObjects/0/aNumber");
/** @expect ts2769 */ model1.bindContext("/root/anArray/0/doesNotExist");

/***********************************************************************************************************************
 * bindContext - Relative cases
 **********************************************************************************************************************/

const context1 = model1.createBindingContext("/root");

/** @expect ok     */ let clientContextBindingRelative: ClientContextBinding = model1.bindContext("anObject", context1);
/** @expect ok     */ model1.bindContext("anArrayOfObjects/0", context1);
/** @expect ok     */ model1.bindContext("aPlaceholder", context1);
/** @expect ok     */ model1.bindContext("anArrayOfPlaceholders/0", context1);

/** @expect ts2769 */ model1.bindContext("anArray", context1);
/** @expect ts2769 */ model1.bindContext("aTuple", context1);
/** @expect ts2769 */ model1.bindContext("aTuple/0", context1);
/** @expect ts2769 */ model1.bindContext("aJsonSafeArray/0", context1);
/** @expect ts2769 */ model1.bindContext("anArrayOfObjects/0/aNumber", context1);
/** @expect ts2769 */ model1.bindContext("anArray/0/doesNotExist", context1);

/***********************************************************************************************************************
 * bindList - Absolute cases
 **********************************************************************************************************************/

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

/***********************************************************************************************************************
 * bindList - Relative cases
 **********************************************************************************************************************/

const context = model3.createBindingContext("/root");

/** @expect ok     */ let listBindingRelative: JSONListBinding = model3.bindList("array", context);
/** @expect ok     */ model3.bindList("nested", context);
/** @expect ok     */ model3.bindList("anObjectWithArray/anArray", context);

/** @expect ts2769 */ model3.bindList("aJsonSafeArray/0", context);
/** @expect ts2769 */ model3.bindList("anArrayOfArrays/0/0", context);
/** @expect ts2769 */ model3.bindList("anObjectWithArray/anArray/0", context);
/** @expect ts2769 */ model3.bindList("anArrayOfPlaceholders/0", context);
/** @expect ts2769 */ model3.bindList("anArrayOfObjects/0", context);
