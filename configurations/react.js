module.exports = {
  env: {
    browser: true,
  },
  'extends': [
    '../rules/eslint/node/off.js',

    '../rules/promise/on.js',
    '../rules/unicorn/on.js',
    '../rules/jsx-a11y/on.js',
    '../rules/react/on.js',
    '../rules/react-hooks/on.js',
  ],
  rules: {},
};
