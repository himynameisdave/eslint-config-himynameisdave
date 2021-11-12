module.exports = {
  env: {
    node: true,
  },
  //  As of ESLint 7.x, these rules are deprecated / moved to eslint-plugin-node
  rules: {
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'off',
    'no-mixed-requires': ['off', false],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'error',
  },
};
