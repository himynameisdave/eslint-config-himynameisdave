module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', {
      default: 'array-simple',
    }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['error', {
      // Functions immediately returning another function expression will not be checked
      allowHigherOrderFunctions: true,
    }],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', {
      ignoreParameters: true,
    }],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    '@typescript-eslint/no-useless-template-literals': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-promise-reject-errors': 'error',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': ['error', {
      allowNumber: true,
    }],
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/no-confusing-void-expression': ['error', {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
    }],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    /*
      Extension Rules: these rules "extend" existing ESLint rules, therefore they turn off the rules they are extending.
      https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
    */
    'block-spacing': 'off',
    '@typescript-eslint/block-spacing': ['error', 'always'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      MemberExpression: 1,
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      ignoreComments: false,
    }],
    'max-params': 'off',
    '@typescript-eslint/max-params': ['error', { max: 3 }],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
      ],
    }],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
      enforceForJSX: true,
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all',
    }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    'return-await': 'off',
    '@typescript-eslint/return-await': 'error',
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/class-methods-use-this': 'off',
    'comma-spacing': 'off', // overridden by below: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    '@typescript-eslint/comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-base-to-string': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', {
      allowKeywords: true,
    }],
    '@typescript-eslint/init-declarations': 'off',
    'key-spacing': 'off',
    '@typescript-eslint/key-spacing': ['error', {
      afterColon: true,
      beforeColon: false,
    }],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        'return': {
          after: true,
        },
        'throw': {
          after: true,
        },
        'case': {
          after: true,
        },
      },
    }],
    'lines-around-comment': 'off',
    '@typescript-eslint/lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: false,
    }],
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      enums: 'always-multiline',
      generics: 'always-multiline',
      tuples: 'always-multiline',
    }],
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': 'off',
    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': ['error', {
      array: false,
      object: true,
    }, {
      enforceForRenamedProperties: false,
      enforceForDeclarationWithTypeAnnotation: false,
    }],
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
  },
};
