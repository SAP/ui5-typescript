"use strict";

const _ = require("lodash");
const helper = require("../utils/helper");
const messages = require("../messages/manager");

let getArgumentsWithNoJsDocParamTypes = (
  aModuleArgumentsToCheck,
  oJsDocComment
) => {
  const aParamTags = helper.getJsDocParamTags(oJsDocComment);
  return _.filter(aModuleArgumentsToCheck, oModuleArgumentToCheck => {
    const oParamWithNoType = _.find(aParamTags, oParamTag => {
      return (
        oParamTag.name === oModuleArgumentToCheck.sArgumentName &&
        _.isEmpty(oParamTag.type)
      );
    });
    return !_.isEmpty(oParamWithNoType);
  });
};

let reportJsDocParamWithEmptyTypes = (
  context,
  oJsDocComment,
  aModuleArgumentsToCheck
) => {
  const aArgumentsWithNoJsDocParamTypes = getArgumentsWithNoJsDocParamTypes(
    aModuleArgumentsToCheck,
    oJsDocComment
  );
  _.forEach(aArgumentsWithNoJsDocParamTypes, oArgumentWithNoJsDocParamType => {
    context.report({
      node: oArgumentWithNoJsDocParamType.oModuleNode,
      message: messages.msg("no-jsdoc-param-type")
    });
  });
};

module.exports.meta = {
  type: "suggestion",
  docs: {
    description: "vaildates jsdoc param type is not empty",
    category: "Code assist",
    recommended: true
  },
  fixable: "code",
  schema: []
};

module.exports = helper.executeOnSapUiDefine(
  (context, oJsDocComment, aModuleArgumentsToCheck) => {
    if (!_.isEmpty(oJsDocComment) && !_.isEmpty(aModuleArgumentsToCheck)) {
      reportJsDocParamWithEmptyTypes(
        context,
        oJsDocComment,
        aModuleArgumentsToCheck
      );
    }
  }
);
