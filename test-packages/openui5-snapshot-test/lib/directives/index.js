const {
  badInterfaces,
  badMethods,
  badSymbols,
} = require("../directives/excluded-elements");
const { typeTyposMap } = require("../directives/typos");
const {
  namespacesToInterfaces,
} = require("../directives/namespaces-to-interfaces");
const { fqnToIgnore } = require("../directives/ts-ignore");

const directives = {
  badSymbols: badSymbols,
  badMethods: badMethods,
  badInterfaces: badInterfaces,
  typeTyposMap: typeTyposMap,
  namespacesToInterfaces: namespacesToInterfaces,
  fqnToIgnore,
};

module.exports = directives;
