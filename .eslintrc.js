module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends: [
    "./rules/eslint/best-practices/on.js",
    "./rules/eslint/errors/on.js",
    "./rules/eslint/es6/off.js",
    "./rules/eslint/node/on.js",
    "./rules/eslint/strict/on.js",
    "./rules/eslint/style/on.js",
    "./rules/eslint/variables/on.js",
    "./rules/filenames/on.js",
    "./rules/import/off.js",
    "./rules/jest/off.js",
    "./rules/promise/on.js",
    "./rules/react/off.js",
    "./rules/react-hooks/off.js",
    "./rules/unicorn/on.js",
    "./rules/typescript/on.js",
  ]
};
