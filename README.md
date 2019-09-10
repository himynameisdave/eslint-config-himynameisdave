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
            <img src="https://img.shields.io/npm/dt/eslint-config-himynameisdave.svg" alt="Downloads">
        </a>
    </div>
</div>

---

You will also need to install a [parser](#Parser), additional plugins, and (optionally) a formatter. See more below.

### Configurations

This package exports a few different configurations which you can use in your project. Each configuration requires you to install various plugins.


#### all-dressed

The [All Dressed](https://img.buzzfeed.com/buzzfeed-static/static/2015-09/15/14/enhanced/webdr06/anigif_original-grid-image-7412-1442342581-9.gif) config has everything on. Use with caution. Install all dependencies like so:

**Yarn**

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

**NPM**

```js
extends: [
    'himynameisdave/configurations/all-dressed'
]
```

```
npm install -D eslint eslint-config-himynameisdave
```

Add this to your `.eslintrc` config file:

```
{
    "extends": ["himynameisdave"]
}
```

You will also need to install a [parser](#Parser), additional plugins, and (optionally) a formatter. See more below.

### Configurations

This package exports a few different configurations which you can use in your project. Each configuration requires you to install various plugins.


#### all-dressed

The [All Dressed](https://img.buzzfeed.com/buzzfeed-static/static/2015-09/15/14/enhanced/webdr06/anigif_original-grid-image-7412-1442342581-9.gif) config has everything on. Use with caution. Install all dependencies like so:

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
    'himynameisdave/configurations/all-dressed/on'
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
    'himynameisdave/configurations/babel-node/on'
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
    'himynameisdave/configurations/node/on'
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
    'himynameisdave/configurations/browser/on'
]
```

#### off

Don't like playing by the rules? You can turn it all off with `himynameisdave/configurations/off`:

```js
extends: [
    'himynameisdave/configurations/off/on'
]
```

Pretty goofy though, not sure who would use this.

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

### Inspiration

Inspired very heavily by [`eslint-config-7geese`](https://github.com/7Geese/eslint-config-7geese), which was in turn inspired by [`eslint-config-walmart`](https://github.com/walmartlabs/eslint-config-walmart), [`eslint-config-formidable`](https://github.com/FormidableLabs/eslint-config-formidable), and many others.

### Some neat ESLint stuff

- [`eslint-rule-documentation`](https://github.com/jfmengels/eslint-rule-documentation) - Tool to find the url for the documentation of an ESLint rule.
- [`eslint-nibble`](https://github.com/IanVS/eslint-nibble) - When you/your team don't have time to fix all the ESLint violations in your codebase, you should just nibble them.
- [`eslint-multiplexer`](https://github.com/pimlie/eslint-multiplexer) - When you have multiple of the same error in the same file, this groups them in the output.
- [`eslint-plugin-svelte3`](https://github.com/sveltejs/eslint-plugin-svelte3) - Because [Svelte](https://svelte.dev).
