/**
 * @file Various general test cases to test the TypedJSONModel for APIs which always return the same type,
 *   regardless of the provided path (e.g. getObject, getPath, etc.)
 */

import { TypedJSONModel } from "../../model";
import { Placeholder } from "../input";
import Message from "sap/ui/core/message/Message";
import ClientContextBinding from "sap/ui/model/ClientContextBinding";
import JSONListBinding from "sap/ui/model/json/JSONListBinding";
import JSONPropertyBinding from "sap/ui/model/json/JSONPropertyBinding";
import JSONTreeBinding from "sap/ui/model/json/JSONTreeBinding";

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

/** @expect ok     */ const jsonTreeBindingAbsolute: JSONTreeBinding = model.bindTree("/root/array");
/** @expect ok     */ model.bindTree("/root/nested");
/** @expect ts2345 */ model.bindTree("/root/number");
/** @expect ts2345 */ model.bindTree("/root/string");
/** @expect ts2345 */ model.bindTree("/root/nonExisting");
/** @expect ts2345 */ model.bindTree("/root/array/0");
/** @expect ts2345 */ model.bindTree("/root/nested/value");

/***********************************************************************************************************************
 * bindTree - Relative cases
 **********************************************************************************************************************/

/** @expect ok     */ const jsonTreeBindingRelative: JSONTreeBinding = model.bindTree("array", context);
/** @expect ok     */ model.bindTree("nested", context);
/** @expect ts2769 */ model.bindTree("number", context);
/** @expect ts2769 */ model.bindTree("string", context);
/** @expect ts2769 */ model.bindTree("nonExisting", context);
/** @expect ts2769 */ model.bindTree("array/0", context);
/** @expect ts2769 */ model.bindTree("nested/value", context);

/***********************************************************************************************************************
 * bindContext - Absolute cases
 **********************************************************************************************************************/

/** @expect ok     */ const clientContextBindingAbsolute: ClientContextBinding = model.bindContext("/root/anObjectWithArray");
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

/** @expect ok     */ const clientContextBindingRelative: ClientContextBinding = model.bindContext(
  "anObjectWithArray",
  context,
);
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

/** @expect ok     */ const listBinding: JSONListBinding = model.bindList("/root/array");
/** @expect ok     */ model.bindList("/root/nested");
/** @expect ok     */ model.bindList("/root/anObjectWithArray/anArray");

/** @expect ts2345 */ model.bindList("/root/array/0");
/** @expect ts2345 */ model.bindList("/root/anObjectWithArray/anArray/0");
/** @expect ts2345 */ model.bindList("/root/anArrayOfPlaceholders/0");
/** @expect ts2345 */ model.bindList("/root/anArrayOfObjects/0");

/***********************************************************************************************************************
 * bindList - Relative cases
 **********************************************************************************************************************/

/** @expect ok     */ const listBindingRelative: JSONListBinding = model.bindList("array", context);
/** @expect ok     */ model.bindList("nested", context);
/** @expect ok     */ model.bindList("anObjectWithArray/anArray", context);

/** @expect ts2769 */ model.bindList("aJsonSafeArray/0", context);
/** @expect ts2769 */ model.bindList("anArrayOfArrays/0/0", context);
/** @expect ts2769 */ model.bindList("anObjectWithArray/anArray/0", context);
/** @expect ts2769 */ model.bindList("anArrayOfPlaceholders/0", context);
/** @expect ts2769 */ model.bindList("anArrayOfObjects/0", context);

/***********************************************************************************************************************
 * getMessagesByPath - Only absolute paths are supported
 **********************************************************************************************************************/

/** @expect ok     */ const messages: Message[] = model.getMessagesByPath("/root/string");
/** @expect ok     */ model.getMessagesByPath("/root/string", true);
/** @expect ok     */ model.getMessagesByPath("/root/anObjectWithArray");
/** @expect ok     */ model.getMessagesByPath("/root/anObjectWithArray", true);
/** @expect ok     */ model.getMessagesByPath("/root/anObjectWithArray/anArray");
/** @expect ok     */ model.getMessagesByPath("/root/anObjectWithArray/anArray", true);
/** @expect ok     */ model.getMessagesByPath("/root/anObjectWithArray/anArray/0");
/** @expect ok     */ model.getMessagesByPath("/root/anObjectWithArray/anArray/0", true);

/** @expect ts2345 */ model.getMessagesByPath("anObjectWithArray");
/** @expect ts2345 */ model.getMessagesByPath("anObjectWithArray", true);
/** @expect ts2345 */ model.getMessagesByPath("/root/array/0/doesNotExist");
/** @expect ts2345 */ model.getMessagesByPath("/root/array/0/doesNotExist", true);

/***********************************************************************************************************************
 * bindProperty - Absolute cases
 **********************************************************************************************************************/

/** @expect ok     */ const propertyBindingAbsolute: JSONPropertyBinding = model.bindProperty("/root/string");
/** @expect ok     */ model.bindProperty("/root/number");
/** @expect ok     */ model.bindProperty("/root/nested");
/** @expect ok     */ model.bindProperty("/root/nested/0");
/** @expect ok     */ model.bindProperty("/root/nested/0/value");
/** @expect ok     */ model.bindProperty("/root/string", undefined);
/** @expect ok     */ model.bindProperty("/root/number", undefined);

/** @expect ts2345 */ model.bindProperty("/root/foo");
/** @expect ts2345 */ model.bindProperty("/root/array/doesNotExist");
/** @expect ts2345 */ model.bindProperty("/root/anObjectWithArray/anArray/0/doesNotExist");
/** @expect ts2345 */ model.bindProperty("/doesNotExist");

/***********************************************************************************************************************
 * bindProperty - Relative cases
 **********************************************************************************************************************/

/** @expect ok     */ const propertyBindingRelative: JSONPropertyBinding = model.bindProperty("string", context);
/** @expect ok     */ model.bindProperty("number", context);

/** @expect ts2769 */ model.bindProperty("foo", context);
/** @expect ts2769 */ model.bindProperty("doesNotExist", context);
/** @expect ts2769 */ model.bindProperty("/string", "notAContext");
