# verify whether JSDoc param type is correct. (wrong-jsdoc-param-type)

## Rule Details

Examples of **incorrect** code for this rule:

```js
sap.ui.define(["sap/m/Button", "sap/ui/model/json/JSONModel"],
  /*
   * @param {any} oButton
   * @param {object} oModel
   */
  function(oButton, oModel) {
    // your code
  }
);
```

Examples of **correct** code for this rule:

```js
sap.ui.define(["sap/m/Button", "sap/ui/model/json/JSONModel"],
  /*
   * @param {sap.m.Button} oButton
   * @param {sap.ui.model.json.JSONModel} oModel
   */
  function(oButton, oModel) {
    // your code
  }
);
```

### Options

The rule is fixable
