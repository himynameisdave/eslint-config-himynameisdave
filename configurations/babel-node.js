module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
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
    '../rules/jsx-a11y/off.js',
    '../rules/promise/on.js',
    '../rules/react/off.js',
    '../rules/react-hooks/off.js',
    '../rules/unicorn/on.js',
  ],
  rules: {
    'unicorn/no-process-exit': 'off',
  },
};
