/**
 * @file Various general test cases to test the TypedJSONModel for APIs which always return the same type,
 *   regardless of the provided path (e.g. getObject, getPath, etc.)
 */

import { TypedJSONModel } from "../../model";
import Message from "sap/ui/core/message/Message";

/***********************************************************************************************************************
 * getMessagesByPath - Only absolute paths are supported
 **********************************************************************************************************************/

const data = {
  aString: "string",
  anObject: { a: "foo" },
  anArray: [],
  anArrayOfObjects: [{ aNumber: 1 }],
};

const model2 = new TypedJSONModel(data);

/** @expect ok     */ model2.getMessagesByPath("/aString");
/** @expect ok     */ model2.getMessagesByPath("/aString", true);

/** @expect ok     */ const messages: Message[] = model2.getMessagesByPath("/anObject");
/** @expect ok     */ model2.getMessagesByPath("/anObject", true);

/** @expect ok     */ model2.getMessagesByPath("/anObject/a");
/** @expect ok     */ model2.getMessagesByPath("/anObject/a", true);

/** @expect ok     */ model2.getMessagesByPath("/anArrayOfObjects/0/aNumber");
/** @expect ok     */ model2.getMessagesByPath("/anArrayOfObjects/0/aNumber", true);

/** @expect ts2345 */ model2.getMessagesByPath("anObject");
/** @expect ts2345 */ model2.getMessagesByPath("anObject", true);

/** @expect ts2345 */ model2.getMessagesByPath("/anArray/0/doesNotExist");
/** @expect ts2345 */ model2.getMessagesByPath("/anArray/0/doesNotExist", true);
