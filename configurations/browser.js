module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    amd: true,
    browser: true,
    es6: true,
  },
  'extends': [
    '../rules/eslint/best-practices/on',
    '../rules/eslint/errors/on',
    '../rules/eslint/es6/on',
    '../rules/eslint/node/off',
    '../rules/eslint/strict/on',
    '../rules/eslint/style/on',
    '../rules/eslint/variables/on',
    '../rules/filenames/on',
    '../rules/import/on',
    '../rules/jest/on',
    '../rules/jsx-a11y/on',
    '../rules/promise/on',
    '../rules/react/on',
    '../rules/react-hooks/on',
    '../rules/unicorn/on',
  ],
  rules: {},
};
