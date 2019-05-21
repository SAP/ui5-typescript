# verify whether each main function argument has corresponding jsdoc param with correct type and name (used-module-param-exists)

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
sap.ui.define(
  ["sap/ui/core/mvc/Controller"],

  function(controller) {
    const ui5Instance = new Controller("666");

    // "own" instance methods calls
    ui5Instance.createId("bamba");
    ui5Instance.onBeforeRendering();
  }
);
```

Examples of **correct** code for this rule:

```js
sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} controller
   */

  function(controller) {
    const ui5Instance = new Controller("666");

    // "own" instance methods calls
    ui5Instance.createId("bamba");
    ui5Instance.onBeforeRendering();
  }
);
```

### Options

The rule is not fixable
