const errors = require("./messages.json");
const format = require("string-format");

module.exports.msg = (...args) => {
  args[0] = errors[args[0]];
  return format.apply(this, args);
};
