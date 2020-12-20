const { resolve } = require("path");
const { genDtsToDir } = require("./utils/dts-gen-wrapper");

const inputDir = resolve(__dirname, "..", "input-sdk");
const outputDir = resolve(__dirname, "..", "./output-dts");

genDtsToDir({ inputDir, outputDir });
