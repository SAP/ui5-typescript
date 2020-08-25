const { writeFile } = require("fs-extra");
const fetch = require("node-fetch");
const { log, error } = require("./logger");

/**
 * @param {string} url
 * @param {string} file
 * @returns {Promise<void>}
 */
async function writeUrlToFile(url, file) {
  log(`fetching: ${url}`);
  const response = await fetch(url);
  if (!response.ok) {
    error(`error fetching from ${url}`);
    return;
  }
  const text = await response.text();
  if (text === "{}") {
    // These files don't add anything to the model but they return an error in strict mode
    log(`empty object returned from ${url}`);
    return;
  }
  log(`writing: ${file}`);
  await writeFile(file, text);
}

module.exports = {
  writeUrlToFile,
};
