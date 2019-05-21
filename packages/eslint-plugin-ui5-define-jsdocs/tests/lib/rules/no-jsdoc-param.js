"use strict";

const messages = require("../../../lib/messages/manager");

var rule = require("../../../lib/rules/no-jsdoc-param"),
  RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-jsdoc-param", rule, {
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
        " */",
        "function(controller) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("no-jsdoc-param"),
          type: "Literal"
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
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "/**",
        " * @name hello",
        " */",
        "function(controller) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("no-jsdoc-param"),
          type: "Literal"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "/**",
        " * @name hello",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " */",
        "function(controller) { });"
      ].join("\n")
    },
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "/**",
        " * i am description",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " * @name hello",
        " */",
        "function(controller, button) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("no-jsdoc-param"),
          type: "Literal"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "/**",
        " * i am description",
        " * @param {sap.ui.core.mvc.Controller} controller",
        " * @name hello",
        " * @param {sap.m.Button} button",
        " */",
        "function(controller, button) { });"
      ].join("\n")
    }
  ]
});
