// Like the chips.
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    amd: true,
    es6: true,
    node: true,
  },
  globals: {},
  'extends': [
    '../rules/eslint/best-practices/on.js',
    '../rules/eslint/errors/on.js',
    '../rules/eslint/es6/on.js',
    '../rules/eslint/node/on.js',
    '../rules/eslint/strict/on.js',
    '../rules/eslint/style/on.js',
    '../rules/eslint/variables/on.js',
    '../rules/filenames/on.js',
    '../rules/import/on.js',
    '../rules/jest/on.js',
    '../rules/jsx-a11y/on.js',
    '../rules/promise/on.js',
    '../rules/react/on.js',
    '../rules/react-hooks/on.js',
    '../rules/unicorn/on.js',
    '../rules/typescript/off.js',
  ],
  rules: {},
};
