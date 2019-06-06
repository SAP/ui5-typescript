const _ = require("lodash");

function fixApiJson(json) {
  addImplicitNamespaces(json);
  removeBadData(json);
  removeRestrictedInterface(json);
  return json;
}

function addImplicitNamespaces(json) {
  const symbolTable = {};
  _.forEach(json.symbols, (val, key) => {
    symbolTable[val.name] = val;
  });

  _.forEach(symbolTable, (val, key) => {
    const nameParts = key.split(".");
    const restNames = _.drop(nameParts);
    let currFQN = _.first(nameParts);

    if (_.has(symbolTable, currFQN) === false) {
      json.symbols.push({
        kind: "namespace",
        basename: currFQN,
        name: currFQN
      });
    }

    _.forEach(restNames, currNamePart => {
      currFQN += `.${currNamePart}`;
      if (_.has(symbolTable, currFQN) === false) {
        json.symbols.push({
          kind: "namespace",
          basename: currNamePart,
          name: currFQN
        });
      }
      symbolTable[currFQN] = "Fixed";
    });
  });
}

const badData = {
  "sap.ui.test.Opa5": true
};

function removeBadData(json) {
  json.symbols = _.reject(json.symbols, sym => {
    return badData[sym.name];
  });
}

/**
 * In case a interface is tagged as restricted, we should remove it from the classes that uses it
 * @param json
 */
function removeRestrictedInterface(json) {

  const restrictedInterfaces = _(json.symbols)
      .filter(symbol => symbol.kind === "interface" && symbol.visibility === "restricted")
      .map((symbol) => symbol.name)
      .value();
  _.forEach(json.symbols, symbol => {
    if (symbol.kind === "class" && !_.isEmpty(symbol.implements)) {
      _.remove(symbol.implements, implementName => restrictedInterfaces.indexOf(implementName) != -1);
    }
  });
}

module.exports = {
  fixApiJson
};
