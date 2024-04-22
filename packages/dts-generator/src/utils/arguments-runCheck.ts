import { ArgumentParser } from "argparse";

export const args = (() => {
  const parser = new ArgumentParser({
    description:
      "@ui5/dts-generator runCheck: check *.d.ts type definition files.",
  });

  parser.add_argument("dtsDir", {
    help: "File path and name of the api.json file for the library for which the d.ts file should be generated.",
  });
  parser.add_argument("--verbose", {
    help: "Set when the console output should be verbose.",
    action: "store_true",
  });
  parser.add_argument("--checkDtslint", {
    help: "Set when the dtslint check should be executed.",
    action: "store_true",
  });

  const args = parser.parse_args();
  return args;
})();
