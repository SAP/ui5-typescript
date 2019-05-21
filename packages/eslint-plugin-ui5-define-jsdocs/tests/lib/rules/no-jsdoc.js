"use strict";

const messages = require("../../../lib/messages/manager");

var rule = require("../../../lib/rules/no-jsdoc"),
  RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-jsdoc", rule, {
  valid: [
    {
      code:
        'sap.ui.define234( ["sap/ui/core/mvc/Controller"], /**\n * @param {sap.ui.core.mvc.Controller} controller \n*/ function(controller) { if (true) {} } );'
    },
    {
      code: "sap.ui.define([], function(controller) { });"
    },
    {
      code: 'sap.ui.define(["sap/ui/core/mvc/Controller"], function() { });'
    },
    {
      code: "sap.ui.define(function(controller) { });"
    },
    {
      code: 'sap.ui.define(["sap/m/Button"], /** */ function(button) { });'
    }
  ],

  invalid: [
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "function(controller) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("no-jsdoc"),
          type: "ArrayExpression"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "/**",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " */",
        "function(controller) { });"
      ].join("\n")
    },
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "function(controller) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("no-jsdoc"),
          type: "ArrayExpression"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "/**",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " */",
        "function(controller) { });"
      ].join("\n")
    },
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "function(controller, button) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("no-jsdoc"),
          type: "ArrayExpression"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "/**",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " * @param {sap.m.Button} button",
        " */",
        "function(controller, button) { });"
      ].join("\n")
    },
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "../sap/m/Button"],',
        "function(controller, button) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("no-jsdoc"),
          type: "ArrayExpression"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "../sap/m/Button"],',
        "/**",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " */",
        "function(controller, button) { });"
      ].join("\n")
    },
    {
      code: [
        'sap.ui.define(["!sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "function(controller, button) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("no-jsdoc"),
          type: "ArrayExpression"
        }
      ],
      output: [
        'sap.ui.define(["!sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "/**",
        " * @param {sap.m.Button} button",
        " */",
        "function(controller, button) { });"
      ].join("\n")
    }
  ]
});
