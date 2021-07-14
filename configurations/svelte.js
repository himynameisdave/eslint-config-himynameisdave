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
      processor: 'svelte3/svelte3',
    },
  ],
  'extends': [
    '../rules/eslint/node/off.js',

    '../rules/svelte/on.js',
  ],
  rules: {},
};
