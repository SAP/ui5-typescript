"use strict";

const _ = require("lodash");
const doctrine = require("doctrine");

let createJsDocParamType = sModulePath => {
  return _.join(_.split(sModulePath, "/"), ".");
};

let isRelevantModulePath = sModulePath => {
  return sModulePath && sModulePath.match(/^[A-Z0-9]/i);
};

let getModuleArgumentsPairsToCheck = (aModules, aArguments) => {
  const size = Math.min(_.size(aModules), _.size(aArguments));
  const aElementAndParams = [];
  _.forEach(_.take(aModules, size), (oElement, nIndex) => {
    const sArgumentName = _.get(aArguments, "[" + nIndex + "].name");
    const sModulePath = _.get(oElement, "value");
    if (isRelevantModulePath(sModulePath)) {
      aElementAndParams.push({
        oModuleNode: oElement,
        sArgumentName: sArgumentName,
        sModulePath: sModulePath
      });
    }
  });

  return aElementAndParams;
};

module.exports = {
  getJsDocParamTags: oJsDocNode => {
    return _.get(
      doctrine.parse(_.get(oJsDocNode, "value"), {
        sloppy: true,
        recoverable: true,
        range: true,
        unwrap: true,
        tags: ["param"]
      }),
      "tags",
      []
    );
  },

  createJsDocParamType: createJsDocParamType,

  createJsDocParam: (oModuleArgument, bSingle) => {
    const sJsDocParamType = createJsDocParamType(oModuleArgument.sModulePath);
    const sJsDocParam =
      "* @param {" + sJsDocParamType + "} " + oModuleArgument.sArgumentName;
    return bSingle === true ? sJsDocParam + "\n " : " " + sJsDocParam;
  },

  executeOnSapUiDefine: fRuleCallback => {
    return {
      create(context) {
        return {
          "CallExpression > MemberExpression[property.name='define'] > MemberExpression[property.name='ui'] > Identifier[name='sap']": node => {
            let oSapUiDefineCallExpressionNode = _.get(node, [
              "parent",
              "parent",
              "parent"
            ]);
            let oFirstArg = _.get(
              oSapUiDefineCallExpressionNode,
              "arguments[0]"
            );
            let oSecondArg = _.get(
              oSapUiDefineCallExpressionNode,
              "arguments[1]"
            );
            if (
              _.get(oFirstArg, "type") === "ArrayExpression" &&
              _.get(oSecondArg, "type") === "FunctionExpression"
            ) {
              let aElements = _.get(oFirstArg, "elements", []);
              let aParams = _.get(oSecondArg, "params", []);
              if (_.isEmpty(aElements) || _.isEmpty(aParams)) {
                return;
              }

              const oJsDocComment = context
                .getSourceCode()
                .getJSDocComment(oSecondArg);
              const aModuleArgumentsToCheck = getModuleArgumentsPairsToCheck(
                aElements,
                aParams
              );
              fRuleCallback.call(
                this,
                context,
                oJsDocComment,
                aModuleArgumentsToCheck,
                oFirstArg,
                oSecondArg
              );
            }
          }
        };
      }
    };
  }
};
