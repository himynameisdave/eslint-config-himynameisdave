module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
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
    '../rules/eslint/node/off.js',

    '../rules/node/on.js',
    '../rules/promise/on.js',
    '../rules/unicorn/on.js',
  ],
  rules: {
    'unicorn/no-process-exit': 'off',
    'no-console': 'warn',
  },
};
