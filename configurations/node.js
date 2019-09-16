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
    '../rules/eslint/best-practices/on',
    '../rules/eslint/errors/on',
    '../rules/eslint/es6/off',
    '../rules/eslint/node/on',
    '../rules/eslint/strict/on',
    '../rules/eslint/style/on',
    '../rules/eslint/variables/on',
    '../rules/filenames/on',
    '../rules/import/on',
    '../rules/jest/on',
    '../rules/jsx-a11y/off',
    '../rules/promise/on',
    '../rules/react/off',
    '../rules/react-hooks/off',
    '../rules/unicorn/on',
  ],
  rules: {
    'unicorn/no-process-exit': 'off',
  },
};
