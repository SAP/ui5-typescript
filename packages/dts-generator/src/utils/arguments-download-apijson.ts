import { ArgumentParser } from "argparse";

export const args = (() => {
  const parser = new ArgumentParser({
    description:
      "ui5-download-apijson: download the api.json files of library dependencies.",
  });

  parser.add_argument("libs", {
    help: "Comma-separated list of library names for which the api.json files shall be downloaded, like: sap.ui.core,sap.m",
  });
  parser.add_argument("version", {
    help: "The UI5 version for which the api.json files shall be downloaded (this is the version on which the custom library depends). This version must be available on the OpenUI5 CDN. Like: 1.120.2",
  });
  parser.add_argument("--targetDir", {
    help: "The directory into which the api.json files shall be downloaded. Optional; if not given, the following path is used: ./temp/dependency-apijson",
  });

  const args = parser.parse_args();
  return args;
})();
