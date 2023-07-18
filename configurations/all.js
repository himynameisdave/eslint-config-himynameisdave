/**
 * WARNING!
 *
 * This config isn't really meant to be consumed directly.
 * It only exists for `eslint-find-rules`, so that unadded/new rules can be identified.
 */
module.exports = {
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'n',
    'promise',
    'react',
    'react-hooks',
    'svelte',
    '@typescript-eslint',
    'unicorn',
  ],
  'extends': [
    '../rules/eslint/best-practices/on.js',
    '../rules/eslint/errors/on.js',
    '../rules/eslint/es6/on.js',
    '../rules/eslint/node/on.js',
    '../rules/eslint/strict/on.js',
    '../rules/eslint/style/on.js',
    '../rules/eslint/variables/on.js',
    '../rules/import/on.js',
    '../rules/jest/on.js',
    '../rules/jsx-a11y/on.js',
    '../rules/node/on.js',
    '../rules/promise/on.js',
    '../rules/react/on.js',
    '../rules/react-hooks/on.js',
    '../rules/svelte/on.js',
    '../rules/typescript/on.js',
    '../rules/unicorn/on.js',
  ],
};
