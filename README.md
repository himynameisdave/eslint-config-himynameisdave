<div align="center" margin="0 auto 20px">
    <h1>eslint-config-himynameisdave</h1>
    <p style="font-style: italic;">
        📄 An opinionated ESLint config, by and for <a href="http://himynameisdave.com">himynameisdave</a>.
    </p>
    <div>
        <a href='https://travis-ci.org/himynameisdave/eslint-config-himynameisdave'>
            <img src="https://api.travis-ci.org/himynameisdave/eslint-config-himynameisdave.svg?branch=master" alt="Travis Badge" />
        </a>
        <a href="https://www.npmjs.com/package/eslint-config-himynameisdave">
            <img alt="npm" src="https://img.shields.io/npm/v/eslint-config-himynameisdave?color=%2300aacc&label=version&logo=eslint-config-himynameisdave">
        </a>
        <a href="https://www.npmjs.com/browse/depended/eslint-config-himynameisdave">
            <img alt="Dependents (via libraries.io)" src="https://img.shields.io/librariesio/dependents/npm/eslint-config-himynameisdave?label=used%20by">
        </a>
    </div>
</div>

---


A personally curated ESLint configuration, for all of my personal projects. This helps save me time by reducing the setup time for new projects, and enabling a consistent coding style across my projects. It's secondary purpose is to show how fun it is to create and maintain your own ESLint config, for you or your team's projects.

This config aims to be composable; that is there are multiple configurations which target different environments/setups (such as TypeScript) which can be composed together to achive a linting setup that is more project-aware.


### Contents

- [Installation](#Installation)
- [Configurations](#Configurations)
  - [all-dressed](#all-dressed)
  - [babel-node](#babel-node)
  - [node](#node)
  - [browser](#browser)
  - [off](#off)
- [Parser](#Parser)
- [Formatter](#Formatter)
- [Typescript](#Typescript)
- [Inspiration](#Inspiration)
- [Neat ESLint Stuff](#Some-neat-ESLint-stuff)

### Installation

Install this config with one of the following commands:

```bash
yarn add -D eslint eslint-config-himynameisdave

npm install -D eslint eslint-config-himynameisdave

```

You will need to install more plugins, a [parser](#Parser), and perhaps (optionally) a formatter. Read on for more about how to get set up.


### Configurations

This package exports a few different configurations which you can use in your project. Each configuration requires you to install various plugins. These plugins are what actually provide the rules which are to be run on your codebase.

#### all-dressed

The [All Dressed](https://img.buzzfeed.com/buzzfeed-static/static/2015-09/15/14/enhanced/webdr06/anigif_original-grid-image-7412-1442342581-9.gif) config has everything on. Use with caution. Install all dependencies like so:

```bash
# You could also use `npm install`
yarn add -D \
    eslint \
    eslint-plugin-filenames \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-jsx-a11y \
    eslint-plugin-promise \
    eslint-plugin-react \
    eslint-plugin-react-hooks
    eslint-plugin-unicorn
```

Add this to your `.eslintrc` config file:

```js
extends: [
    'himynameisdave/configurations/all-dressed'
]
```

#### babel-node

For Node environments where you're using Babel to transpile stuff.

```
yarn add -D \
    eslint \
    eslint-plugin-filenames \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-promise \
    eslint-plugin-unicorn
```

Add this to your `.eslintrc` config:

```js
extends: [
    'himynameisdave/configurations/babel-node'
]
```

#### node

For classic Node environments where you're NOT using Babel to transpile stuff.

```
yarn add -D \
    eslint \
    eslint-plugin-filenames \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-promise \
    eslint-plugin-unicorn
```

Add this to your `.eslintrc` config:

```js
extends: [
    'himynameisdave/configurations/node'
]
```

#### browser

Targets modern React browser environments.

```
yarn add -D \
    eslint \
    eslint-plugin-filenames \
    eslint-plugin-import \
    eslint-plugin-jest \
    eslint-plugin-jsx-a11y \
    eslint-plugin-promise \
    eslint-plugin-react \
    eslint-plugin-react-hooks
    eslint-plugin-unicorn
```

Add this to your `.eslintrc` config:

```js
extends: [
    'himynameisdave/configurations/browser'
]
```

#### off

Don't like playing by the rules? You can turn it all off with `himynameisdave/configurations/off`:

```js
extends: [
    'himynameisdave/configurations/off'
]
```

Pretty goofy though, not sure who would use this. You can instead just extend entire plugins/rulesets like so:

```js
extends: [
    'himynameisdave/configurations/browser',
    'himynameisdave/rules/react/off'
    'himynameisdave/rules/react-hooks/off'
]
```

### Parser

You'll need to install the [`babel-eslint`](https://github.com/babel/babel-eslint) parser to use most of the configurations exported by this package (except [`node`](https://github.com/himynameisdave/eslint-config-himynameisdave/blob/master/configurations/node.js)).

```
yarn add -D babel-eslint

npm install -D babel-eslint
```

What is `babel-eslint`?

> **babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.**

> _ESLint's default parser and core rules only support the latest final ECMAScript standard and do not support experimental (such as new features) and non-standard (such as Flow or TypeScript types) syntax provided by Babel. babel-eslint is a parser that allows ESLint to run on source code that is transformed by Babel._

> _Note: You only need to use babel-eslint if you are using Babel to transform your code. If this is not the case, please use the relevant parser for your chosen flavor of ECMAScript (note that the default parser supports all non-experimental syntax as well as JSX)._

**Note:** `babel-config` expects that you've got a [`@babel/core`](https://www.npmjs.com/package/@babel/core) and `.babelrc` (or other config file) in your project. [Read more about that here](https://babeljs.io/docs/en/configuration).

### Formatter

[`git-log`](https://github.com/JamieMason/eslint-formatter-git-log) is a very nice formatter that I'd recommend using in your project. In the lint report in your console, it will display how old the code is and whomst wrote it.

You just need to add the `--format` flag to your script which you're using, like perhaps in your `package.json`:

```
"lint": "eslint --format ./node_modules/eslint-config-himynameisdave/formatters/git-log.js"
```

Optionally you could just [install and configure](https://github.com/JamieMason/eslint-formatter-git-log) it yourself:


```
yarn add -D eslint-formatter-git-log

npm install -D eslint-formatter-git-log
```

### Typescript

You'll need to modify some things in order to get this ESLint config to work with Typescript. Start by installing the TS [parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser), [plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) and [resolver](https://www.npmjs.com/package/eslint-import-resolver-typescript):

```
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript

npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

Next, modify the command you're using to run `eslint` to include `.ts` extensions [with the `--ext` flag](https://eslint.org/docs/user-guide/configuring#specifying-file-extensions-to-lint) (usually in a `package.json`'s scripts):

```diff
"scripts": {
+    "lint": "eslint --ext .js,.ts"
-    "lint": "eslint"
},
```

Next you need to modify your `.eslintrc.js` file. Add the Typescript configuration in your (after whatever [configuration](Configurations) you want to use):

```diff
extends: [
    'himynameisdave/configurations/all-dressed'
+   'himynameisdave/configurations/typescript'
]
```

Include the following `parserOptions` and `settings` for getting the `@typescript` and `eslint-plugin-import` stuff working together properly:

```diff
+"parserOptions": {
+    "sourceType": "module",
+    "tsconfigRootDir": __dirname,
+    "project": "./tsconfig.json"
+},
+"settings": {
+    "import/parsers": {
+        "@typescript-eslint/parser": [".ts"]
+    },
+    "import/extensions": [".ts"],
+    "import/resolver": {
+        "typescript": {
+            "alwaysTryTypes": true 
+        },
+    },
+},
```

You may need to tweak things in your `tsconfig.json` (or other files) in order to get everything working properly.

### Inspiration

Inspired very heavily by [`eslint-config-7geese`](https://github.com/7Geese/eslint-config-7geese), which was in turn inspired by [`eslint-config-walmart`](https://github.com/walmartlabs/eslint-config-walmart), [`eslint-config-formidable`](https://github.com/FormidableLabs/eslint-config-formidable), and many others.

### Some neat ESLint stuff

- [`eslint-rule-documentation`](https://github.com/jfmengels/eslint-rule-documentation) - Tool to find the url for the documentation of an ESLint rule.
- [`eslint-nibble`](https://github.com/IanVS/eslint-nibble) - When you/your team don't have time to fix all the ESLint violations in your codebase, you should just nibble them.
- [`eslint-multiplexer`](https://github.com/pimlie/eslint-multiplexer) - When you have multiple of the same error in the same file, this groups them in the output.
- [`eslint-plugin-svelte3`](https://github.com/sveltejs/eslint-plugin-svelte3) - Because [Svelte](https://svelte.dev).
