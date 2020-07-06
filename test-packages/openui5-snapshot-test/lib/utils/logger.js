const { noop } = require("lodash");

const silent = false;
const log = silent ? noop : (_) => console.log(_);
const error = silent ? noop : (_) => console.error(_);

module.exports = {
  log,
  error,
};
