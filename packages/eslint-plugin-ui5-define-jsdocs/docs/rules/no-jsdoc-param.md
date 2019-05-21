# verify whether JSDoc param is defined. (no-jsdoc-param)

## Rule Details

Examples of **incorrect** code for this rule:

```js
sap.ui.define(["sap/m/Button", "sap/ui/model/json/JSONModel"],
  /*
   * @param {sap.ui.model.json.JSONModel} oModel
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
