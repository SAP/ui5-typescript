"use strict";

const _ = require("lodash");
const helper = require("../utils/helper");
const messages = require("../messages/manager");

let getUndefinedModuleArgument = (aRelevantModuleArguments, oJsDocComment) => {
  const aParamTags = helper.getJsDocParamTags(oJsDocComment);
  return _.filter(aRelevantModuleArguments, oModuleArgument => {
    return _.isUndefined(
      _.find(aParamTags, oParamTag => {
        return oParamTag.name === oModuleArgument.sArgumentName;
      })
    );
  });
};

let reportJsDocParamUndefined = (
  context,
  oJsDocComment,
  aRelevantModuleArguments
) => {
  const aUndefinedModuleArguments = getUndefinedModuleArgument(
    aRelevantModuleArguments,
    oJsDocComment
  );
  _.forEach(aUndefinedModuleArguments, oUndefinedModuleArgument => {
    context.report({
      node: oUndefinedModuleArgument.oModuleNode,
      message: messages.msg("no-jsdoc-param"),
      fix: fixer => {
        const sJsDocParam = helper.createJsDocParam(
          oUndefinedModuleArgument,
          true
        );
        // -2 is used to insert params before */
        return fixer.insertTextAfterRange(
          [oJsDocComment.start, oJsDocComment.end - 2],
          sJsDocParam
        );
      }
    });
  });
};

module.exports.meta = {
  type: "suggestion",
  docs: {
    description: "vaildates jsdoc param tag exists",
    category: "Code assist",
    recommended: true
  },
  fixable: "code",
  schema: []
};

module.exports = helper.executeOnSapUiDefine(
  (context, oJsDocComment, aRelevantModuleArguments) => {
    if (!_.isEmpty(oJsDocComment) && !_.isEmpty(aRelevantModuleArguments)) {
      reportJsDocParamUndefined(
        context,
        oJsDocComment,
        aRelevantModuleArguments
      );
    }
  }
);
