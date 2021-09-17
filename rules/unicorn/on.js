module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['unicorn'],
  rules: {
    'unicorn/catch-error-name': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-exponentiation-operator': 'off', // Turned on in eslint/style rules
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': ['error', {
      allowList: {
        fn: true,
      },
      replacements: {
        rej: {
          reject: true,
        },
      },
    }],
    'unicorn/regex-shorthand': 'off', //  Deprecated, renamed to better-regex
    'unicorn/better-regex': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    //  https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/string-content': 'off',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/import-style': 'off',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/numeric-separators-style': ['error', {
      'number': {
        'minimumDigits': 5,
        'groupLength': 3,
      },
    }],
    'unicorn/no-lonely-if': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/prefer-object-has-own': 'error',
    'unicorn/prefer-prototype-methods': 'off',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
  },
};
