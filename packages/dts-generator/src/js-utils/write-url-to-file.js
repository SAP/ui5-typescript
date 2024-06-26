import fsextra from "fs-extra";
const { writeFile } = fsextra;
import { getLogger } from "@ui5/logger";
const log = getLogger("@ui5/dts-generator/write-url-to-file");

/**
 * @param {string} url
 * @param {string} file
 * @returns {Promise<boolean>} True if successful
 */
export default async function writeUrlToFile(url, file) {
  const fetch = (await import("node-fetch")).default;
  log.info(`fetching: ${url}`);
  const response = await fetch(url, {
    headers: {
      "User-Agent": "@ui5-dts-generator",
    },
  });
  if (!response.ok) {
    log.error(`error fetching from ${url}`);
    return false;
  }
  const text = await response.text();
  if (text === "{}") {
    // These files don't add anything to the model but they return an error in strict mode
    log.info(`empty object returned from ${url}`);
    return true;
  }
  log.info(`writing: ${file}`);
  await writeFile(file, text);
  return true;
}
