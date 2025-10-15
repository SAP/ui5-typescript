const { defineConfig, globalIgnores } = require("eslint/config");

const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      sourceType: "module",

      parserOptions: {
        project: [
          "./tsconfig.json",
          "./tsconfig-testcontrol.json",
          "./tsconfig-tests.json",
        ],
        tsconfigRootDir: __dirname,
      },
    },

    extends: compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ),

    plugins: {
      "@typescript-eslint": typescriptEslint,
    },

    rules: {
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
          minimumDescriptionLength: 10,
        },
      ],
    },
  },
  globalIgnores([
    "**/.eslintrc.js",
    "**/someFile.js",
    "**/*.gen.d.ts",
    "src/test/samples/sampleWebComponent/**/*",
  ]),
]);
