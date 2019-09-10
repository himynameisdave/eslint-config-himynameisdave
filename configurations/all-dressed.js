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
    'himynameisdave/rules/eslint/best-practices/on.js',
    'himynameisdave/rules/eslint/errors/on.js',
    'himynameisdave/rules/eslint/es6/on.js',
    'himynameisdave/rules/eslint/node/on.js',
    'himynameisdave/rules/eslint/strict/on.js',
    'himynameisdave/rules/eslint/style/on.js',
    'himynameisdave/rules/eslint/variables/on.js',
    'himynameisdave/rules/filenames/on.js',
    'himynameisdave/rules/import/on.js',
    'himynameisdave/rules/jest/on.js',
    'himynameisdave/rules/promise/on.js',
    'himynameisdave/rules/react/on.js',
    'himynameisdave/rules/react-hooks/on.js',
    'himynameisdave/rules/unicorn/on.js',
  ],
  rules: {},
};
