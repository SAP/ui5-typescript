"use strict";

const _ = require("lodash");
const helper = require("../utils/helper");
const messages = require("../messages/manager");

let getParamsWithWrongType = (oJsDocComment, aModuleArguments) => {
  let aParamsWithWrongType = [];
  const aParamTags = helper.getJsDocParamTags(oJsDocComment);
  _.forEach(aParamTags, oParamTag => {
    const sParamName = _.get(oParamTag, "name");
    const sActualTypeName = _.get(oParamTag, "type.name");
    if (!_.isEmpty(sActualTypeName)) {
      _.forEach(aModuleArguments, oModuleArgument => {
        const sRightTypeName = helper.createJsDocParamType(
          oModuleArgument.sModulePath
        );
        if (
          sParamName === oModuleArgument.sArgumentName &&
          sActualTypeName !== sRightTypeName
        ) {
          aParamsWithWrongType.push({
            oModuleNode: oModuleArgument.oModuleNode,
            sWrongTypeName: sActualTypeName,
            sRightTypeName: sRightTypeName,
            sParamName: sParamName
          });
        }
      });
    }
  });

  return aParamsWithWrongType;
};

let constructRegExp = (sParamType, sArgumentName) => {
  let sPattern =
    "^\\s*\\*\\s*@param\\s+{\\s*" +
    sParamType +
    "\\s*}\\s+" +
    sArgumentName +
    ".*$";
  return new RegExp(sPattern, "m");
};

let reportJsDocParamTypeIsWrong = (
  context,
  oJsDocComment,
  aRelevantModuleArguments
) => {
  const aParamsWithWrongType = getParamsWithWrongType(
    oJsDocComment,
    aRelevantModuleArguments
  );
  _.forEach(aParamsWithWrongType, oParamWithWrongType => {
    context.report({
      node: oParamWithWrongType.oModuleNode,
      message: messages.msg("wrong-jsdoc-param-type"),
      fix: fixer => {
        const oRegExp = constructRegExp(
          oParamWithWrongType.sWrongTypeName,
          oParamWithWrongType.sParamName
        );
        const match = oRegExp.exec(oJsDocComment.value);
        const sValueToReplace = _.get(match, "[0]", "");
        let nStartOfWrongType = sValueToReplace.indexOf(
          oParamWithWrongType.sWrongTypeName
        );
        const start = oJsDocComment.start + match.index + nStartOfWrongType;
        const end = start + _.size(oParamWithWrongType.sWrongTypeName);
        return fixer.replaceTextRange(
          [start + 2, end + 2],
          oParamWithWrongType.sRightTypeName
        );
      }
    });
  });
};

module.exports.meta = {
  type: "suggestion",
  docs: {
    description: "vaildates jsdoc param tag type",
    category: "Code assist",
    recommended: true
  },
  fixable: "code",
  schema: []
};

module.exports = helper.executeOnSapUiDefine(
  (context, oJsDocComment, aRelevantModuleArguments) => {
    if (!_.isEmpty(oJsDocComment) && !_.isEmpty(aRelevantModuleArguments)) {
      reportJsDocParamTypeIsWrong(
        context,
        oJsDocComment,
        aRelevantModuleArguments
      );
    }
  }
);
