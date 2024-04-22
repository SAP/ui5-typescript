import _ from "lodash";

const commonIrrelevantProps = [
  // JSDoc Related
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
  "visibility",
  "allowedFor",
  "tsSkip",
];

export function assertKnownProps(expectedPropNames: string[], obj: object) {
  const objProps = _.keys(obj);
  const allExpectedPropNames = expectedPropNames.concat(commonIrrelevantProps);
  const unexpectedProps = objProps.filter(
    (x) => !allExpectedPropNames.includes(x),
  );

  if (_.isEmpty(unexpectedProps) === false) {
    throw Error(`Unexpected Properties: ` + JSON.stringify(unexpectedProps));
  }
}
