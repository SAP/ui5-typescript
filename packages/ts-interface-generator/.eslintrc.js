module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      "./tsconfig.json",
      "./tsconfig-testcontrol.json",
      "./tsconfig-tests.json",
    ],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
        minimumDescriptionLength: 10,
      },
    ],
  },
  ignorePatterns: [".eslintrc.js", "someFile.js"],
};
