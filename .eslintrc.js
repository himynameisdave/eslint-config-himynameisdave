module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    './rules/eslint/best-practices/on.js',
    './rules/eslint/errors/on.js',
    './rules/eslint/es6/off.js',
    './rules/eslint/strict/on.js',
    './rules/eslint/node/off.js',
    './rules/eslint/style/on.js',
    './rules/eslint/variables/on.js',
    './rules/import/off.js',
    './rules/jest/off.js',
    './rules/node/on.js',
    './rules/promise/on.js',
    './rules/react/off.js',
    './rules/react-hooks/off.js',
    './rules/typescript/off.js',
    './rules/unicorn/on.js',
  ],
  rules: {
    'quote-props': 'off', // Turn off this rule, since we quote all the rule props.
  },
};
