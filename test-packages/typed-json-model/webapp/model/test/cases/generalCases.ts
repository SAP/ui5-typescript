/**
 * @file Various general test cases to test the TypedJSONModel for APIs which always return the same type,
 *   regardless of the provided path (e.g. getObject, getPath, etc.)
 */

import { TypedJSONModel } from "../../model";
import PropertyBinding from "sap/ui/model/PropertyBinding";

interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    zip: string;
  };
  orders: Array<{
    id: number;
    product: string;
  }>;
}

const data: Person = {
  name: "John",
  age: 30,
  address: { city: "Walldorf", zip: "69190" },
  orders: [{ id: 1, product: "UI5" }],
};

/***********************************************************************************************************************
 * bindProperty - Absolute cases
 **********************************************************************************************************************/

const model0 = new TypedJSONModel(data);

/** @expect ok     */ let propertyBindingAbsolute: PropertyBinding = model0.bindProperty("/name");
/** @expect ok     */ propertyBindingAbsolute = model0.bindProperty("/age");
/** @expect ok     */ propertyBindingAbsolute = model0.bindProperty("/address/city");
/** @expect ok     */ propertyBindingAbsolute = model0.bindProperty("/address/zip");
/** @expect ok     */ propertyBindingAbsolute = model0.bindProperty("/orders/0/id");
/** @expect ok     */ propertyBindingAbsolute = model0.bindProperty("/orders/0/product");

/** @expect ts2345 */ propertyBindingAbsolute = model0.bindProperty("/phone");
/** @expect ts2345 */ propertyBindingAbsolute = model0.bindProperty("/address/country");
/** @expect ts2345 */ propertyBindingAbsolute = model0.bindProperty("/orders/0/price");
/** @expect ts2345 */ propertyBindingAbsolute = model0.bindProperty("/doesNotExist");
/** @expect ok     */ propertyBindingAbsolute = model0.bindProperty("/name", undefined);
/** @expect ok     */ propertyBindingAbsolute = model0.bindProperty("/age", undefined);

/***********************************************************************************************************************
 * bindProperty - Relative cases
 **********************************************************************************************************************/

const context = model0.createBindingContext("/address");

/** @expect ok     */ let propertyBindingRelative: PropertyBinding = model0.bindProperty("city", context);
/** @expect ok     */ propertyBindingRelative = model0.bindProperty("zip", context);

/** @expect ts2769 */ propertyBindingRelative = model0.bindProperty("country", context);
/** @expect ts2769 */ propertyBindingRelative = model0.bindProperty("phone", context);

/** @expect ts2769 */ propertyBindingAbsolute = model0.bindProperty("/name", "not-a-context");
