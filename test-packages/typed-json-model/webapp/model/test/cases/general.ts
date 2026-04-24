/**
 * @file Various general test cases to test the TypedJSONModel for APIs which always return the same type,
 *   regardless of the provided path (e.g. getObject, getPath, etc.)
 */

import { TypedJSONModel } from "../../model";
import { Placeholder } from "../input";
import JSONTreeBinding from "sap/ui/model/json/JSONTreeBinding";
import JSONListBinding from "sap/ui/model/json/JSONListBinding";
import ClientContextBinding from "sap/ui/model/ClientContextBinding";

const data = {
  root: {
    array: [1, 2, 3],
    nested: [{ value: "test" }],
    anObjectWithArray: { anArray: [1, 2, 3] },
    aPlaceholder: new Placeholder(),
    anArrayOfPlaceholders: [new Placeholder()],
    anArrayOfObjects: [
      { a: 1, b: "foo" },
      { a: 2, b: "bar" },
      { a: 3, b: "baz" },
    ],
    number: 1,
    string: "foo",
    aTuple: ["string", 1],
  },
};
const model = new TypedJSONModel(data);
const context = model.createBindingContext("/root");

/***********************************************************************************************************************
 * bindTree - Absolute cases
 **********************************************************************************************************************/

/** @expect ok     */ let jsonTreeBindingAbsolute: JSONTreeBinding = model.bindTree("/root/array");
/** @expect ok     */ jsonTreeBindingAbsolute = model.bindTree("/root/nested");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model.bindTree("/root/number");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model.bindTree("/root/string");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model.bindTree("/root/nonExisting");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model.bindTree("/root/array/0");
/** @expect ts2345 */ jsonTreeBindingAbsolute = model.bindTree("/root/nested/value");

/***********************************************************************************************************************
 * bindTree - Relative cases
 **********************************************************************************************************************/

/** @expect ok     */ let jsonTreeBindingRelative: JSONTreeBinding = model.bindTree("array", context);
/** @expect ok     */ jsonTreeBindingRelative = model.bindTree("nested", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model.bindTree("number", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model.bindTree("string", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model.bindTree("nonExisting", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model.bindTree("array/0", context);
/** @expect ts2769 */ jsonTreeBindingRelative = model.bindTree("nested/value", context);

/***********************************************************************************************************************
 * bindContext - Absolute cases
 **********************************************************************************************************************/

/** @expect ok     */ let clientContextBindingAbsolute: ClientContextBinding = model.bindContext("/root/anObjectWithArray");
/** @expect ok     */ model.bindContext("/root/anArrayOfObjects/0");
/** @expect ok     */ model.bindContext("/root/aPlaceholder");
/** @expect ok     */ model.bindContext("/root/anArrayOfPlaceholders/0");

/** @expect ts2769 */ model.bindContext("/root/anArray");
/** @expect ts2769 */ model.bindContext("/root/aTuple");
/** @expect ts2769 */ model.bindContext("/root/aTuple/0");
/** @expect ts2769 */ model.bindContext("/root/aJsonSafeArray/0");
/** @expect ts2769 */ model.bindContext("/root/anArrayOfObjects/0/aNumber");
/** @expect ts2769 */ model.bindContext("/root/anArray/0/doesNotExist");

/***********************************************************************************************************************
 * bindContext - Relative cases
 **********************************************************************************************************************/

/** @expect ok     */ let clientContextBindingRelative: ClientContextBinding = model.bindContext("anObjectWithArray", context);
/** @expect ok     */ model.bindContext("anArrayOfObjects/0", context);
/** @expect ok     */ model.bindContext("aPlaceholder", context);
/** @expect ok     */ model.bindContext("anArrayOfPlaceholders/0", context);

/** @expect ts2769 */ model.bindContext("anArray", context);
/** @expect ts2769 */ model.bindContext("aTuple", context);
/** @expect ts2769 */ model.bindContext("aTuple/0", context);
/** @expect ts2769 */ model.bindContext("aJsonSafeArray/0", context);
/** @expect ts2769 */ model.bindContext("anArrayOfObjects/0/aNumber", context);
/** @expect ts2769 */ model.bindContext("anArray/0/doesNotExist", context);

/***********************************************************************************************************************
 * bindList - Absolute cases
 **********************************************************************************************************************/

/** @expect ok     */ let listBinding: JSONListBinding = model.bindList("/root/array");
/** @expect ok     */ model.bindList("/root/nested");
/** @expect ok     */ model.bindList("/root/anObjectWithArray/anArray");

/** @expect ts2345 */ model.bindList("/root/array/0");
/** @expect ts2345 */ model.bindList("/root/anObjectWithArray/anArray/0");
/** @expect ts2345 */ model.bindList("/root/anArrayOfPlaceholders/0");
/** @expect ts2345 */ model.bindList("/root/anArrayOfObjects/0");

/***********************************************************************************************************************
 * bindList - Relative cases
 **********************************************************************************************************************/

/** @expect ok     */ let listBindingRelative: JSONListBinding = model.bindList("array", context);
/** @expect ok     */ model.bindList("nested", context);
/** @expect ok     */ model.bindList("anObjectWithArray/anArray", context);

/** @expect ts2769 */ model.bindList("aJsonSafeArray/0", context);
/** @expect ts2769 */ model.bindList("anArrayOfArrays/0/0", context);
/** @expect ts2769 */ model.bindList("anObjectWithArray/anArray/0", context);
/** @expect ts2769 */ model.bindList("anArrayOfPlaceholders/0", context);
/** @expect ts2769 */ model.bindList("anArrayOfObjects/0", context);
