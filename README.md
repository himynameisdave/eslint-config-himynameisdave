<div align="center" margin="0 auto 20px">
  <h1>eslint-config-himynameisdave</h1>
  <p style="font-style: italic;">
    📄 An opinionated ESLint config, by and for <a href="http://himynameisdave.com">himynameisdave</a>.
  </p>
  <div>
    <a href='https://github.com/himynameisdave/eslint-config-himynameisdave/actions?query=workflow%3Atest+branch%3Amain'>
      <img src="https://github.com/himynameisdave/eslint-config-himynameisdave/workflows/test/badge.svg" alt="GitHub Actions - Test Workflow Badge" />
    </a>
    <a href='https://github.com/himynameisdave/eslint-config-himynameisdave/actions?query=workflow%3Aoutdated+branch%3Amain'>
      <img src="https://github.com/himynameisdave/eslint-config-himynameisdave/workflows/outdated/badge.svg" alt="GitHub Actions - Test Workflow Badge" />
    </a>
    <a href="https://www.npmjs.com/package/eslint-config-himynameisdave">
      <img alt="npm Badge" src="https://img.shields.io/npm/v/eslint-config-himynameisdave?color=%2300aacc&label=version&logo=eslint-config-himynameisdave">
    </a>
    <a href="https://www.npmjs.com/browse/depended/eslint-config-himynameisdave">
      <img alt="Dependents (via libraries.io)" src="https://img.shields.io/librariesio/dependents/npm/eslint-config-himynameisdave?label=used%20by">
    </a>
  </div>
</div>

---

A modular, opinionated, and well-maintained `eslint` config made by and for [`himynameisdave`](https://github.com/himynameisdave). Made of small configs which can be composed together to achieve a linting setup that is project-aware.

### Contents

- [Requirements](#Requirements)
- [Installation](#Installation)
- [Configurations](#Configurations)
  - [core](#Core)
  - [node](#Node)
  - [typescript](#Typescript)
  - [react](#React)
  - [svelte](#Svelte)
  - [jest](#jest)
  - [off](#off)
- [Rules](#Rules)
- [Parser](#Parser)
- [Releases](#Releases)
- [Inspiration](#Inspiration)
- [Neat ESLint Stuff](#Some-neat-ESLint-stuff)

### Requirements

Requires at least:

- Node v14.x+
- ESLint v8.x+

### Installation

Install this `eslint` and this config:

```bash
yarn add -D eslint eslint-config-himynameisdave
```

You will need to install more plugins depending on which environment you are targeting/which extra plugins you want to use (see [configurations](#Configurations) below). You may also need a [parser](#Parser). Read on for more about how to get set up.

### Configurations

This package provides various configurations which you can extend from. You may need to install additional plugins in order to use them.

#### Core

The base config turns enables the core `eslint` rules only. No additional plugins are required to use this config. Great for small projects.

```js
// Extend your .eslintrc
{
  "extends": ["himynameisdave/configurations/core"]
}
```

#### Node

Extend this config with additional rules for Node projects. Useful for CLI/Node-only projects, although it should be compatible with the browser-based configurations listed below.

```bash
# Add the following plugins
yarn add -D eslint-plugin-n eslint-plugin-promise eslint-plugin-unicorn
```

```js
// Extend your .eslintrc
{
  "extends": [
    "himynameisdave/configurations/core",
    "himynameisdave/configurations/node"
  ]
}
```

#### Typescript

Extend this config for Typescript support. Compatible with other configurations in this project, although Typescript should probably be extended last. Requires some additional configuration, as it has it's own parser.

```bash
# Add the following plugins
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```js
// Extend your .eslintrc
{
  "extends": [
    "himynameisdave/configurations/core",
    "himynameisdave/configurations/typescript"
  ],
  "parserOptions": {
    "sourceType": 'module',
    "tsconfigRootDir": __dirname,
    "project": './tsconfig.json'
  },
  "settings": {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx', // Only needed if using React
      ]
    },
    'import/extensions': [
      '.ts',
      '.tsx', // Only needed if using React
    ],
    'import/resolver': {
      typescript: {
        'alwaysTryTypes': true,
      },
    },
  },
  //  If you are also using the node or import configurations, you'll want these rules off:
  rules: {
    'import/extensions': 'off',
    'n/file-extension-in-import': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
  }
}
```

#### React

Extends the base config with React support. This config may conflict with the Node config, so should be placed after it if using both.

```bash
# Add the following plugins
yarn add -D eslint-plugin-promise eslint-plugin-unicorn eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

```js
//  Extend your .eslintrc
{
  "extends": [
    "himynameisdave/configurations/core",
    "himynameisdave/configurations/react",
    "himynameisdave/configurations/typescript" // If using Typescript, it should come last.
  ]
}
```

#### Svelte

Extends the base config with Svelte support. This config may conflict with the Node config, so should be placed after it if using both.

```bash
# Add the following plugins
yarn add -D eslint-plugin-promise eslint-plugin-unicorn eslint-plugin-svelte
```

```js
//  Extend your .eslintrc
{
  "extends": [
    "himynameisdave/configurations/core",
    "himynameisdave/configurations/svelte"
  ]
}
```

You may need to [read more about configuring your editor](https://sveltejs.github.io/eslint-plugin-svelte/) for this plugin to work.

#### Import

Extends the base config with [`import`](https://github.com/benmosher/eslint-plugin-import) plugin rules.

```bash
# Add the following plugin
yarn add -D eslint-plugin-import
```

```js
//  Extend your .eslintrc
{
  "extends": [
    "himynameisdave/configurations/core",
    "himynameisdave/configurations/import"
  ]
}
```

#### Jest

Extends the base config with [`jest`](https://github.com/jest-community/eslint-plugin-jest) plugin rules.

```bash
# Add the following plugin
yarn add -D eslint-plugin-jest
```

```js
//  Extend your .eslintrc
{
  "extends": [
    "himynameisdave/configurations/core",
    "himynameisdave/configurations/jest"
  ]
}
```

#### Off

In addition to all of these, there is an `off` config which you can use to turn off all rules. Not sure there are a ton of use-cases for this, but it would allow you to extend from individual rulesets, like so:

```js
//  .eslintrc
{
  "extends": [
    "himynameisdave/configurations/off",
    "himynameisdave/rules/promises/on",
    "himynameisdave/rules/unicorn/on"
  ]
}
```

### Rules

Note that in addition to extending a configuration, you can also extend various rulesets. This gives you very granular control of your project.

As an example, let's assume we are using React but don't care about the `jsx-a11y` rules:

```js
//  .eslintrc
{
  "extends": [
    "himynameisdave/configurations/core",
    "himynameisdave/rules/promises/on",
    "himynameisdave/rules/unicorn/on",
    "himynameisdave/rules/react/on",
    "himynameisdave/rules/react-hooks/on",
    "himynameisdave/rules/jsx-a11y/off", // We don't technically need to add this, but note that there are `off` versions for each.
  ]
}
```

### Parser

You may need to install the [`babel-eslint`](https://github.com/babel/babel-eslint) parser to use some of the configurations exported by this package, unless you are using TypeScript (see [Typescript](#Typescript) configuration above).

```bash
yarn add -D babel-eslint
```

What is `babel-eslint`?

> **babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.**

> _ESLint's default parser and core rules only support the latest final ECMAScript standard and do not support experimental (such as new features) and non-standard (such as Flow or TypeScript types) syntax provided by Babel. babel-eslint is a parser that allows ESLint to run on source code that is transformed by Babel._

> _Note: You only need to use babel-eslint if you are using Babel to transform your code. If this is not the case, please use the relevant parser for your chosen flavor of ECMAScript (note that the default parser supports all non-experimental syntax as well as JSX)._

**Note:** `babel-config` expects that you've got a [`@babel/core`](https://www.npmjs.com/package/@babel/core) and `.babelrc` (or other config file) in your project. [Read more about that here](https://babeljs.io/docs/en/configuration).

### Releases

Read more about the release guidelines for this project [over here](https://github.com/himynameisdave/eslint-config-himynameisdave/blob/main/.github/RELEASING.md).

### Inspiration

Inspired very heavily by [`eslint-config-7geese`](https://github.com/7Geese/eslint-config-7geese), which was in turn inspired by [`eslint-config-walmart`](https://github.com/walmartlabs/eslint-config-walmart), [`eslint-config-formidable`](https://github.com/FormidableLabs/eslint-config-formidable), and many others.

### Some neat ESLint stuff

- [`eslint-rule-documentation`](https://github.com/jfmengels/eslint-rule-documentation) - Tool to find the url for the documentation of an ESLint rule.
- [`eslint-nibble`](https://github.com/IanVS/eslint-nibble) - When you/your team don't have time to fix all the ESLint violations in your codebase, you should just nibble them.
- [`eslint-multiplexer`](https://github.com/pimlie/eslint-multiplexer) - When you have multiple of the same error in the same file, this groups them in the output.
- [`eslint-plugin-svelte3`](https://github.com/sveltejs/eslint-plugin-svelte3) - Because [Svelte](https://svelte.dev).
