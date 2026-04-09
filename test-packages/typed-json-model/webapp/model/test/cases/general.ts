/**
 * @file Various general test cases to test the TypedJSONModel for APIs which always return the same type,
 *   regardless of the provided path (e.g. getObject, getPath, etc.)
 */

import { TypedJSONModel } from "../../model";
import ClientContextBinding from "sap/ui/model/ClientContextBinding";
import { Placeholder } from "../input";

/***********************************************************************************************************************
 * bindContext - Absolute cases
 **********************************************************************************************************************/

const data = {
  root: {
    aString: "string",
    anObject: { a: "foo" },
    anArray: [],
    anArrayOfObjects: [{ aNumber: 1 }],
    aPlaceholder: new Placeholder(),
    anArrayOfPlaceholders: [new Placeholder()],
    aTuple: ["string", 1],
  },
};

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

const context = model1.createBindingContext("/root");

/** @expect ok     */ let clientContextBindingRelative: ClientContextBinding = model1.bindContext("anObject", context);
/** @expect ok     */ model1.bindContext("anArrayOfObjects/0", context);
/** @expect ok     */ model1.bindContext("aPlaceholder", context);
/** @expect ok     */ model1.bindContext("anArrayOfPlaceholders/0", context);

/** @expect ts2769 */ model1.bindContext("anArray", context);
/** @expect ts2769 */ model1.bindContext("aTuple", context);
/** @expect ts2769 */ model1.bindContext("aTuple/0", context);
/** @expect ts2769 */ model1.bindContext("aJsonSafeArray/0", context);
/** @expect ts2769 */ model1.bindContext("anArrayOfObjects/0/aNumber", context);
/** @expect ts2769 */ model1.bindContext("anArray/0/doesNotExist", context);
