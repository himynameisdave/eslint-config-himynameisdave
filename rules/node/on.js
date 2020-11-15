module.exports = {
  env: {
    node: true,
  },
  plugins: ['node'],
  rules: {
    //  Core rules:
    //  require return statements after callbacks
    'node/callback-return': 'off',
    //  enforce either module.exports or exports
    'node/exports-style': 'error',
    //  enforce the style of file extensions in import declarations
    'node/file-extension-in-import': 'error',
    //  ensure require() calls are placed at top-level module scope
    'node/global-require': 'warn',
    //  require error handling in callbacks
    'node/handle-callback-err': 'off',
    //  ensure Node.js-style error-first callback pattern is followed
    'node/no-callback-literal': 'off',
    //  disallow deprecated APIs
    'node/no-deprecated-api': 'error',
    //  disallow the assignment to exports
    'node/no-exports-assign': 'error',
    //  disallow import declarations which import extraneous modules
    'node/no-extraneous-import': 'warn',
    //  disallow require() expressions which import extraneous modules
    'node/no-extraneous-require': 'warn',
    //  [deprecated]
    'node/no-hide-core-modules': 'off',
    //  disallow import declarations which import non-existence modules / handled by import/no-unresolved
    'node/no-missing-import': 'off',
    //  disallow import declarations which require non-existence modules
    'node/no-missing-require': 'error',
    //  disallow require calls to be mixed with regular variable declarations / handled (mostly) by import/order
    'node/no-mixed-requires': 'warn',
    //  disallow new operators with calls to require
    'node/no-new-require': 'error',
    //  disallow string concatenation with __dirname and __filename
    'node/no-path-concat': 'error',
    //  disallow the use of process.env (to centralize them to a single place)
    'node/no-process-env': 'error',
    //  disallow the use of process.exit()
    'node/no-process-exit': 'warn',
    //  disallow specified modules when loaded by import declarations
    'node/no-restricted-import': 'off',
    //  disallow specified modules when loaded by require declarations
    'node/no-restricted-require': 'off',
    //  disallow synchronous methods
    'node/no-sync': 'error',
    //  disallow bin files that npm ignores
    'node/no-unpublished-bin': 'error',
    //  disallow import declarations which import private modules
    'node/no-unpublished-import': 'error',
    //  disallow import declarations which require private modules
    'node/no-unpublished-require': 'error',
    //  [deprecated]
    'node/no-unsupported-features': 'off',
    //  make process.exit() expressions the same code path as throw
    'node/process-exit-as-throw': 'error',
    //  suggest correct usage of shebang
    'node/shebang': 'off',
    //  No unsupported features:
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'off',
    //  Prefer global:
    'node/prefer-global/buffer': 'error',
    'node/prefer-global/console': 'error',
    'node/prefer-global/process': 'error',
    'node/prefer-global/text-decoder': 'error',
    'node/prefer-global/text-encoder': 'error',
    'node/prefer-global/url-search-params': 'error',
    'node/prefer-global/url': 'error',
    //  Prefer promises:
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
  },
};
