module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    amd: true,
    node: true,
  },
  'extends': [
    '../rules/eslint/best-practices/on.js',
    '../rules/eslint/errors/on.js',
    '../rules/eslint/es6/off.js',
    '../rules/eslint/node/off.js',
    '../rules/eslint/strict/on.js',
    '../rules/eslint/style/on.js',
    '../rules/eslint/variables/on.js',
    '../rules/import/on.js',
    '../rules/node/on.js',
    '../rules/promise/on.js',
    '../rules/unicorn/on.js',
  ],
  rules: {
    'unicorn/no-process-exit': 'off',
    'no-console': 'warn',
  },
};
