## eslint-config-himynameisdave
🗒️  An opinionated eslint config by and for [himynameisdave](https://github.com/himynameisdave).

### Motivations

The structure of this config is based heavily on [`eslint-config-walmart`](https://github.com/walmartlabs/eslint-config-walmart) (and [`eslint-config-formidable`](https://github.com/FormidableLabs/eslint-config-formidable) which was inspired by it).

If you checkout `/rules`, it's broken up by plugin. The `eslint` plugins are further broken up as they are in [this overview of all the rules](https://eslint.org/docs/rules/).


### Installation

```
yarn add -D eslint eslint-config-himynameisdave
```

You'll also need to install any plugins required by the config you choose (read more below), and these ones are required by all of them:

```
yarn add -D babel-eslint eslint-plugin-filenames
```

### Usage

Add this config under the `"extends"` part of your `.eslintrc` file:

```json
{
    "extends": "himynameisdave"
}
```

### Configurations

There are other configurations you can use as well:

- `himynameisdave` - Uses `node`, see below
- `himynameisdave/configurations/off` - For when rules are for squares
- `himynameisdave/configurations/node` - ES6 Node config
- `himynameisdave/configurations/browser` - ES6 React browser config
    - You'll also need to install the React plugin for this one:
    ```
    yarn add -D eslint-plugin-react
    ```


### Plugins

This config uses the following plugins/dependencies, you can read more about them here:

- [`babel-eslint`](https://www.npmjs.com/package/babel-eslint)
- [`eslint-plugin-filenames`](https://www.npmjs.com/package/eslint-plugin-filenames)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
