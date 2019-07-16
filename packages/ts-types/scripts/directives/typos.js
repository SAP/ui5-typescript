const typeTyposMap = {
  // General Type Syntax issues
  long: "number",
  integer: "number",
  int: "number",
  function: "Function",
  float: "number",
  Map: "object",
  "map[]": "any[]",
  Array: "any[]",
  "T[]": "any[]",
  "Item[]": "any[]",
  array: "any[]",
  "Promise[]": "Promise<any>[]",
  "*": "any",
  "int[]": "number[]",
  "float[]": "number[]",
  Promise: "Promise<any>",
  map: "Object",
  // TODO: need to parse JSDocs types fully
  "Promise>": "Promise<any>",
  oPromise: "Promise<any>",
  "function[]": "Function[]",
  "function()[]": "Function[]",

  // UI5 Related Stuff
  iScroll: "any",
  ManageObject: "any",
  appointmentsSorterCallback: "Function",
  "module:sap/base/i18n/ResourceBundle": "any",
  FileUploader: "sap.ui.unified.FileUploader",

  // 3rd Party Libs,
  // TODO: should we define a custom type or compile using JQuery.d.ts from definitively typed?
  jQuery: "any",

  // DOM related stuff
  // TODO: should we compile using the "DOM" library?
  //       - https://github.com/Microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
  DomNode: "any",
  DOMNode: "any",
  DOMRef: "any",
  DomRef: "any",
  domRef: "any",
  DOMElement: "any",
  "DomRef[]": "any",

  // This is not an ES2015 Generator!
  Generator: "any",

  "sap.ui.test.qunit": "typeof sap.ui.test.qunit",

  // Sad Sad Panda
  "{string{": "percentSign"
};

module.exports = {
  typeTyposMap: typeTyposMap
};
