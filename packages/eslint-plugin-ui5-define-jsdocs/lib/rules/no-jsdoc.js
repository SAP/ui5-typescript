"use strict";

const _ = require("lodash");
const helper = require("../utils/helper");
const messages = require("../messages/manager");

let createJsDocParams = aModuleArguments => {
  return _.map(aModuleArguments, oModuleArgument => {
    return helper.createJsDocParam(oModuleArgument);
  });
};

let reportJsDocNotDefined = (
  context,
  aRelevantModuleArguments,
  oFirstArg,
  oSecondArg
) => {
  const aJsDocParams = createJsDocParams(aRelevantModuleArguments);
  context.report({
    node: oFirstArg,
    message: messages.msg("no-jsdoc"),
    fix: fixer => {
      return fixer.insertTextBefore(
        oSecondArg,
        "/**\n" + aJsDocParams.join("\n") + "\n */\n"
      );
    }
  });
};

module.exports.meta = {
  type: "suggestion",
  docs: {
    description: "verify existance of jsdoc comment",
    category: "Code assist",
    recommended: true
  },
  fixable: "code",
  schema: []
};

module.exports = helper.executeOnSapUiDefine(
  (context, oJsDocComment, aRelevantModuleArguments, oFirstArg, oSecondArg) => {
    if (_.isEmpty(oJsDocComment) && !_.isEmpty(aRelevantModuleArguments)) {
      reportJsDocNotDefined(
        context,
        aRelevantModuleArguments,
        oFirstArg,
        oSecondArg
      );
    }
  }
);
