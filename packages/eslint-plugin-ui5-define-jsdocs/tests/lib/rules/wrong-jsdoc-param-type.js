"use strict";

const messages = require("../../../lib/messages/manager");

var rule = require("../../../lib/rules/wrong-jsdoc-param-type"),
  RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("wrong-jsdoc-param-type", rule, {
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
        'sap.ui.define(["sap/m/Button"], /**\n * @param {sap.m3.Button} button \n*/ function() { });'
    },
    {
      code:
        "sap.ui.define([], /**\n * @param {sap.m3.Button}  button \n*/ function() { });"
    },
    {
      code:
        'sap.ui.define(["sap/m/Button"], /**\n * @param {sap.m.Button}  button \n*/ function(button) { });'
    },
    {
      code:
        'sap.ui.define(["sap/m/Button"], /**\n * @param {sap.m.Button} \n*/ function(button) { });'
    },
    {
      code:
        'sap.ui.define(["sap/m/Button"], /**\n * @param {} button \n */ function(button) { });'
    },
    {
      code:
        "sap.ui.define([sap/m/Button], /**\n * @param {fff} button \n */ function(button) { });"
    },
    {
      code:
        "sap.ui.define([sap/m/Button], /**\n * @param \n */ function(button) { });"
    }
  ],

  invalid: [
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "/**",
        " * hello i am description",
        " * @name hello",
        " * @param { sap.mmm.Controller} controller",
        " * @param {sap.m.Button} button",
        " */",
        "function(controller, button) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("wrong-jsdoc-param-type"),
          type: "Literal"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Button"],',
        "/**",
        " * hello i am description",
        " * @name hello",
        " * @param { sap.ui.core.mvc.Controller} controller",
        " * @param {sap.m.Button} button",
        " */",
        "function(controller, button) { });"
      ].join("\n")
    },
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "/**",
        " * hello i am description",
        " * @name hello",
        " * @param {sap.mmm.Controller } controller",
        " */",
        "function(controller) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("wrong-jsdoc-param-type"),
          type: "Literal"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "/**",
        " * hello i am description",
        " * @name hello",
        " * @param {sap.ui.core.mvc.Controller } controller",
        " */",
        "function(controller) { });"
      ].join("\n")
    },
    {
      code: [
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "/**",
        " * hello i am description",
        " * @name hello",
        " * @param {sap.mmm.Controller } controller hello my friend",
        " */",
        "function(controller) { });"
      ].join("\n"),
      errors: [
        {
          message: messages.msg("wrong-jsdoc-param-type"),
          type: "Literal"
        }
      ],
      output: [
        'sap.ui.define(["sap/ui/core/mvc/Controller"],',
        "/**",
        " * hello i am description",
        " * @name hello",
        " * @param {sap.ui.core.mvc.Controller } controller hello my friend",
        " */",
        "function(controller) { });"
      ].join("\n")
    }
  ]
});
