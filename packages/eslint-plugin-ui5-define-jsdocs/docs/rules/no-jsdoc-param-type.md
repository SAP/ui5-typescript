# verify whether JSDoc param type is defined (no-jsdoc-param-type)

## Rule Details

Examples of **incorrect** code for this rule:

```js
sap.ui.define(["sap/m/Button", "sap/ui/model/json/JSONModel"],
  /*
   * @param oButton
   * @param {} oModel
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

The rule is not fixable
