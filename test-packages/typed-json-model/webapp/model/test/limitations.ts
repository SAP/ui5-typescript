/**
 * @file Demonstration of the complexity limit of union types in TypeScript
 * with respect to the maximum depth of nested objects in the TypedJSONModel.
 * ---
 * Explanation of the behaviour of the TypedJSONModel
 * when it comes to arrays with mixed primitive and non-primitive types.
 */

import { TypedJSONModel } from "../model";

/***********************************************************************************************************************
 * Limitations regarding the maximum depth of nested objects
 *
 * In the example below, the maximum depth is 5, which cannot be generalized.
 *
 * Instead, the maximum depth depends on the number of members in the union type,
 * which, in the case of nested types, is **estimated** by the TypeScript compiler and capped at 1,000,000,
 * a hardcoded limit in the TypeScript compiler (v5.7.2).
 *
 * Therefore, the nestedType below, which has 10 different properties,
 * can be nested up to 5 times, resulting in 111,110 < 1,000,000 union members (valid absolute binding paths).
 *
 * If nested 6 times or more times, the TypeScript compiler will throw this error:
 * "Expression produces a union type that is too complex to represent. (ts2590)"
 * This is because the number of union members (which is 1,111,110 for the type below, nested 6 times)
 * exceeds the limit of 1,000,000.
 **********************************************************************************************************************/

type nestedType<T> = { "0": T; "1": T; "2": T; "3": T; "4": T; "5": T; "6": T; "7": T; "8": T; "9": T };

type nestedTwice = nestedType<nestedType<string>>; // 110 union members
type nestedFiveTimes = nestedType<nestedType<nestedType<nestedType<nestedType<string>>>>>; // 111,110 union members
type nestedSixTimes = nestedType<nestedType<nestedType<nestedType<nestedType<nestedType<string>>>>>>; // 1,111,110 union members

const model2 = new TypedJSONModel({} as nestedTwice);
const model5 = new TypedJSONModel({} as nestedFiveTimes);
const model6 = new TypedJSONModel({} as nestedSixTimes);

model2.getProperty("/1/2");
model2.getProperty("/1/2/3"); // expect an error here, because the path is too deep (intended)
model5.getProperty("/1/2/3/4/5");
model5.getProperty("/1/2/3/4/5/6"); // expect an error here, because the path is too deep (intended)

// Error: Expression produces a union type that is too complex to represent. (ts2590)
model6.getProperty("/1"); // not intended, but expected due to the tsc limitations described above

/***********************************************************************************************************************
 * Behaviour regarding type inference of arrays with mixed primitive and non-primitive types.
 * This is not considered a limitation but rather a logical consequence of heterogeneous arrays.
 *
 * If an array contains primitive as well as non-primitive types,
 * the type inference of the TypedJSONModel will break - which is kind of expected,
 * because a primitive type has no key-value structure.
 **********************************************************************************************************************/

const modelOnlyNonPrimitive = new TypedJSONModel([{ foo: "bar" }, { fizz: "buzz" }]);
// this will work fine, because the array only contains non-primitive types:
const someProperty: string | undefined = modelOnlyNonPrimitive.getProperty("/0/foo");
modelOnlyNonPrimitive.setProperty("/0/foo", "baz");
modelOnlyNonPrimitive.getProperty("/1").fizz = "BUZZ";

// ...now, if we add a **primitive type** to the array, the type inference will break
const modelMixed = new TypedJSONModel([{ key: "value" }, 42]);
const key: {} = modelMixed.getProperty("/0/key"); // returns type 'never' instead of 'string'
