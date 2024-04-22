import { promises as fsp } from "fs";
const { mkdir, readFile, writeFile } = fsp;
import * as path from "path";
import stripJsonComments from "strip-json-comments";

export async function writeFileSafe(file: string, content: string) {
  await mkdir(path.dirname(file), { recursive: true });
  return writeFile(file, content, "utf8");
}

export async function loadJSON(file: string): Promise<object> {
  let content = await readFile(file, "utf8");
  if (file.endsWith(".dtsgenrc")) {
    // allow comments in .dtsgenrc files
    content = stripJsonComments(String(content));
  }
  return JSON.parse(content);
}
