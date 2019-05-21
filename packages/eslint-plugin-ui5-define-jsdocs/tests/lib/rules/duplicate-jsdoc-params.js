"use strict";

const messages = require("../../../lib/messages/manager");

var rule = require("../../../lib/rules/duplicate-jsdoc-params"),
  RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("duplicate-jsdoc-params", rule, {
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
      code:
        'sap.ui.define(["sap/m/Button"], /**\n * @param {sap.m.Button} button \n*/ function(button) { });'
    },
    {
      code:
        'sap.ui.define(["sap/m/Button"], /**\n * @param {sap2.m3.Button} button \n*/ function(button) { });'
    },
    {
      code: 'sap.ui.define(["sap/m/Button"], function(button) { });'
    },
    {
      code:
        'sap.ui.define(["sap/m/Button"], /**\n @param {} button \n */  function(button) { });'
    }
  ],

  invalid: [
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "/**",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " */",
        "function(controller) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("duplicate-jsdoc-params"),
          type: "Literal"
        }
      ]
    },
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "/**",
        " * @param {ffff} controller",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " * @param {} button hello1",
        " * @param {     } button hello2",
        " * @param button hello3",
        " * @param {sap.g.Button} button",
        " */",
        "function(controller, button) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("duplicate-jsdoc-params"),
          type: "Literal"
        },
        {
          message: messages.msg("duplicate-jsdoc-params"),
          type: "Literal"
        }
      ]
    }
  ]
});
