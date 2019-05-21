"use strict";

const _ = require("lodash");
const helper = require("../utils/helper");
const messages = require("../messages/manager");

let getArgumentsWithMultipleJsDocParams = (
  aModuleArgumentsToCheck,
  oJsDocComment
) => {
  const aParamTags = helper.getJsDocParamTags(oJsDocComment);
  return _.filter(aModuleArgumentsToCheck, oModuleArgumentToCheck => {
    const aMultipleParams = _.filter(aParamTags, oParamTag => {
      return oParamTag.name === oModuleArgumentToCheck.sArgumentName;
    });
    return _.size(aMultipleParams) > 1 ? true : false;
  });
};

let reportJsDocParamUndefined = (
  context,
  oJsDocComment,
  aModuleArgumentsToCheck
) => {
  const aArgumentsWithMultipleJsDocParams = getArgumentsWithMultipleJsDocParams(
    aModuleArgumentsToCheck,
    oJsDocComment
  );
  _.forEach(
    aArgumentsWithMultipleJsDocParams,
    oArgumentWithMultipleJsDocParams => {
      context.report({
        node: oArgumentWithMultipleJsDocParams.oModuleNode,
        message: messages.msg("duplicate-jsdoc-params")
      });
    }
  );
};

module.exports.meta = {
  type: "suggestion",
  docs: {
    description: "vaildates jsdoc param exists only once per argument",
    category: "Code assist",
    recommended: true
  },
  fixable: "code",
  schema: []
};

module.exports = helper.executeOnSapUiDefine(
  (context, oJsDocComment, aModuleArgumentsToCheck) => {
    if (!_.isEmpty(oJsDocComment) && !_.isEmpty(aModuleArgumentsToCheck)) {
      reportJsDocParamUndefined(
        context,
        oJsDocComment,
        aModuleArgumentsToCheck
      );
    }
  }
);
