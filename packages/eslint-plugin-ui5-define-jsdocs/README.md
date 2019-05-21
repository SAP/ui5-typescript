# @ui5/eslint-plugin-ui5-define-jsdocs

ui5 apps validations

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ui5-define-jsdocs`:

```
$ npm install eslint-plugin-ui5-define-jsdocs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ui5-define-jsdocs` globally.

## Usage

Add `ui5-define-jsdocs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["ui5-define-jsdocs"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "ui5-define-jsdocs/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
