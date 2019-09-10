module.exports = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    amd: true,
    node: true,
  },
  globals: {},
  'extends': [
    'himynameisdave/rules/eslint/best-practices/on',
    'himynameisdave/rules/eslint/errors/on',
    'himynameisdave/rules/eslint/es6/off',
    'himynameisdave/rules/eslint/node/on',
    'himynameisdave/rules/eslint/strict/on',
    'himynameisdave/rules/eslint/style/on',
    'himynameisdave/rules/eslint/variables/on',
    'himynameisdave/rules/filenames/on',
  ],
  rules: {},
};
