module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    node: true,
  },
  'extends': [
    //  eslint-plugin-n will extend/override Eslint's built-in Node rules, so let's turn them off.
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
