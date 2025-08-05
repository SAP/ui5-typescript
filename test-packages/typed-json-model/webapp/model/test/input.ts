/**
 * @file Input data for the test cases of the TypedJSONModel.
 * Provides underlying data structures for the JSONModel to test
 * if the inference of types from the binding path works as expected.
 */

/**
 * All JSON-safe values that are not an array or an object.
 *
 * Note that properties of type 'undefined' and 'symbol' will be ignored by JSON.stringify.
 * That will not lead to a runtime error though.
 *
 * **In an array though, 'undefined' and 'symbol' will be stringified to 'null'.**
 *
 * BigInt ist not JSON-safe, meaning it will lead to a runtime error when stringified.
 *
 */
export type JSONSafe = string | boolean | number | null | undefined | symbol;

/**
 * Placeholder class to test the model with objects that are not fully JSON serializable.
 */
export class Placeholder {
  placeholderString: string;
  placeholderFunction: () => void;
}

/**
 * To test type inference regarding JSON-safe properties of
 * data that is typed by a type alias.
 */
export type TPrimitives = {
  aString: string;
  aBoolean: boolean;
  aNumber: number;
  aNull: null;
  anUndefined: undefined;
  aSymbol: symbol;
};

/**
 * To test type inference regarding JSON-safe properties of
 * data that is typed by an interface.
 */
export interface IPrimitives {
  aString: string;
  aBoolean: boolean;
  aNumber: number;
  aNull: null;
  anUndefined: undefined;
  aSymbol: symbol;
}

/**
 * To test type inference regarding object-like properties of
 * data that is typed by a type alias.
 */
export type TObjectLike = {
  anObject: object;
  anArray: Array<unknown>;
  aJsonSafeArray: Array<JSONSafe>;
  anArrayOfPlaceholders: Array<Placeholder>;
  aPlaceholder: Placeholder;
  aTuple: [string, number];
};

/**
 * To test type inference regarding object-like properties of
 * data that is typed by an interface.
 */
export interface IObjectLike {
  anObject: object;
  anArray: Array<unknown>;
  aJsonSafeArray: Array<JSONSafe>;
  anArrayOfPlaceholders: Array<Placeholder>;
  aPlaceholder: Placeholder;
  aTuple: [string, number];
}

/**
 * Data structure for testing type inference regarding JSON-safe properties.
 * The data structure is typed by a type alias.
 */
export const primitivesByTypeAlias: TPrimitives = {
  aString: "string",
  aNumber: 1,
  aBoolean: true,
  aSymbol: Symbol("symbol"),
  aNull: null,
  anUndefined: undefined,
};

/**
 * Data structure for testing type inference regarding JSON-safe properties.
 * The data structure is typed by an interface.
 */
export const primitivesByInterface: IPrimitives = {
  aString: "string",
  aNumber: 1,
  aBoolean: true,
  aSymbol: Symbol("symbol"),
  aNull: null,
  anUndefined: undefined,
};

/*
 * Data structure for testing type inference regarding JSON-safe properties.
 * The data structure is typed by inference.
 */
export const primitivesByInference = {
  aString: "string",
  aNumber: 1,
  aBoolean: true,
  aSymbol: Symbol("symbol"),
  aNull: null,
  anUndefined: undefined,
};

/*
 * Data structure for testing type inference regarding object-like properties.
 * The data structure is typed by a type alias.
 */
export const objectLikeByTypeAlias: TObjectLike = {
  anObject: {},
  anArray: [],
  aJsonSafeArray: ["string", 1, true],
  anArrayOfPlaceholders: [new Placeholder()],
  aPlaceholder: new Placeholder(),
  aTuple: ["string", 1],
};

/*
 * Data structure for testing type inference regarding object-like properties.
 * The data structure is typed by an interface.
 */
export const objectLikeByInterface: IObjectLike = {
  anObject: {},
  anArray: [],
  aJsonSafeArray: ["string", 1, true],
  anArrayOfPlaceholders: [new Placeholder()],
  aPlaceholder: new Placeholder(),
  aTuple: ["string", 1],
};

/*
 * Data structure for testing type inference regarding object-like properties.
 * The data structure is typed by inference.
 */
export const objectLikeByInference = {
  anObject: {},
  anArray: [],
  aJsonSafeArray: ["string", 1, true],
  anArrayOfObjects: [{ aNumber: 1 }],
  anArrayOfPlaceholders: [new Placeholder()],
  aPlaceholder: new Placeholder(),
  aTuple: ["string", 1],
};
