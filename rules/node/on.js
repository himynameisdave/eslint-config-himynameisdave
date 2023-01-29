module.exports = {
  env: {
    node: true,
  },
  plugins: ['n'],
  rules: {
    //  Core rules:
    //  require return statements after callbacks
    'n/callback-return': 'off',
    //  enforce either module.exports or exports
    'n/exports-style': 'error',
    //  enforce the style of file extensions in import declarations
    'n/file-extension-in-import': 'error',
    //  ensure require() calls are placed at top-level module scope
    'n/global-require': 'warn',
    //  require error handling in callbacks
    'n/handle-callback-err': 'off',
    //  ensure Node.js-style error-first callback pattern is followed
    'n/no-callback-literal': 'off',
    //  disallow deprecated APIs
    'n/no-deprecated-api': 'error',
    //  disallow the assignment to exports
    'n/no-exports-assign': 'error',
    //  disallow import declarations which import extraneous modules
    'n/no-extraneous-import': 'warn',
    //  disallow require() expressions which import extraneous modules
    'n/no-extraneous-require': 'warn',
    //  [deprecated]
    'n/no-hide-core-modules': 'off',
    //  disallow import declarations which import non-existence modules / handled by import/no-unresolved
    'n/no-missing-import': 'off',
    //  disallow import declarations which require non-existence modules
    'n/no-missing-require': 'error',
    //  disallow require calls to be mixed with regular variable declarations / handled (mostly) by import/order
    'n/no-mixed-requires': 'warn',
    //  disallow new operators with calls to require
    'n/no-new-require': 'error',
    //  disallow string concatenation with __dirname and __filename
    'n/no-path-concat': 'error',
    //  disallow the use of process.env (to centralize them to a single place)
    'n/no-process-env': 'error',
    //  disallow the use of process.exit()
    'n/no-process-exit': 'warn',
    //  disallow specified modules when loaded by import declarations
    'n/no-restricted-import': 'off',
    //  disallow specified modules when loaded by require declarations
    'n/no-restricted-require': 'off',
    //  disallow synchronous methods
    'n/no-sync': 'error',
    //  disallow bin files that npm ignores
    'n/no-unpublished-bin': 'error',
    //  disallow import declarations which import private modules
    'n/no-unpublished-import': 'error',
    //  disallow import declarations which require private modules
    'n/no-unpublished-require': 'error',
    //  [deprecated]
    'n/no-unsupported-features': 'off',
    //  No unsupported features:
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': 'error',
    'n/no-unsupported-features/node-builtins': 'off',
    //  Prefer global:
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/process': 'error',
    'n/prefer-global/text-decoder': 'error',
    'n/prefer-global/text-encoder': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-global/url-search-params': 'error',
    //  Prefer promises:
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    //  make process.exit() expressions the same code path as throw
    'n/process-exit-as-throw': 'error',
    //  suggest correct usage of shebang
    'n/shebang': 'off',
  },
};
