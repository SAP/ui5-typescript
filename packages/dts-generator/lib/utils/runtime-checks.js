const _ = require("lodash");

const commonIrrelevantProps = [
  // JSDocs Related
  "since",
  "description",
  "deprecated",
  "references",
  "experimental",
  // TODO: do we care about "examples" in JSDocs or do we ignore them?
  "examples",

  // Common
  "resource",
  "module",
  "export",
  "kind",
  "ui5-metadata",
  "ui5-metamodel",
  "static",
  "visibility"
];
function assertKnownProps(expectedPropNames, obj) {
  const objProps = _.keys(obj);
  const allExpectedPropNames = expectedPropNames.concat(commonIrrelevantProps);
  const unexpectedProps = _.difference(objProps, allExpectedPropNames);

  if (_.isEmpty(unexpectedProps) === false) {
    throw Error(`Unexpected Properties: ` + JSON.stringify(unexpectedProps));
  }
}

module.exports = {
  assertKnownProps
};
