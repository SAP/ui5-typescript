/*
 * the following single-line alternative requires typescript ^4.5.0 AND esnext/nodenext setting
import ignoreList from './ignore-list.json' assert { type: 'json' };
*/
import * as fs from "fs";
const ignoreList = JSON.parse(
  fs.readFileSync(new URL("./ignore-list.json", import.meta.url), {
    encoding: "utf8",
  }),
);

// Matches the end of error messages where a large number of mismatching properties are enumerated.
// These are likely to change for independent reasons and we still want the ignore check to find the match.
const LIST_REGEX = /: ([\w0-9_]+, )+and \d+ more.$/;

export default function (module: string, message: string, dtsFileName: string) {
  let normalizedMessage = message.replace(LIST_REGEX, "_PROPERTYLIST_");
  for (let i = 0; i < ignoreList.length; i++) {
    if (
      module === ignoreList[i].module &&
      (!ignoreList[i].dtsFileName || dtsFileName === ignoreList[i].dtsFileName)
    ) {
      // module must match. If dtsFileName is given, it must also match
      let normalizedIgnorelistMessage = ignoreList[i].message.replace(
        LIST_REGEX,
        "_PROPERTYLIST_",
      ); // could be done in the original list, but it's easier to handle like this
      if (normalizedMessage === normalizedIgnorelistMessage) {
        return true;
      }
    }
  }
  return false;
}
