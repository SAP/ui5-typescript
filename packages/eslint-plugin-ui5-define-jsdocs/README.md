# eslint-plugin-wing-ui5

ui5 apps validations

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-wing-ui5`:

```
$ npm install eslint-plugin-wing-ui5 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-wing-ui5` globally.

## Usage

Add `wing-ui5` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["wing-ui5"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "wing-ui5/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
