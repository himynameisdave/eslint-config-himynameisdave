module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte-eslint-parser',
    },
  ],
  'extends': [
    '../rules/eslint/node/off.js',

    '../rules/svelte/on.js',
  ],
  rules: {},
};
