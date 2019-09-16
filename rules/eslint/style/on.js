module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': 'off',
    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': 'off',
    // Disallow or enforce spaces inside of brackets
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['off', 'never'],
    // disallow or enforce spaces inside of single line blocks
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],
    // enforce one true brace style
    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    // require camel case names
    camelcase: 'off',
    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never'],
    // require trailing commas in multiline object literals
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    // enforce spacing before and after comma
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    // enforce one true comma style
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],
    // disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],
    // enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],
    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off',
    //  Is there a newline for every function argument when called?
    'function-call-argument-newline': ['error', 'consistent'],
    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': 'off',
    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['error', 'expression', {
      allowArrowFunctions: true,
    }],
    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': 'off',
    // disallow certain identifiers to prevent them being used
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 'off',
    // require identifiers to match the provided regular expression
    'id-match': 'off',
    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],
    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    indent: ['error', 2, {
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
    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],
    // enforces spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    // require a space before & after certain keywords
    'keyword-spacing': ['error', {
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
    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-positions
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],
    // disallow mixed "LF" and "CRLF" as linebreaks
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],
    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: false,
    }],
    // enforces empty lines around comments
    'lines-around-comment': 'off',
    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],
    // specify the maximum depth that blocks can be nested
    'max-depth': ['error', 4],
    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': 'off',
    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': 'off',
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',
    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 12],
    // specify the maximum number of statements allowed per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['off', {
      max: 1,
    }],
    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],
    //  https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',
    // require a capital letter for constructors
    'new-cap': ['warn', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: [],
    }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',
    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',
    // require newline before return statement
    'newline-before-return': 'off',
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4,
    }],
    // disallow use of the Array constructor
    'no-array-constructor': 'error',
    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',
    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',
    // disallow comments inline after code
    'no-inline-comments': 'off',
    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',
    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'off',
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',
    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1,
    }],
    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',
    // disallow nested ternary expressions
    'no-nested-ternary': 'off', // Using unicorn/no-nested-ternary instead: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md
    // disallow use of the Object constructor
    'no-new-object': 'error',
    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ['error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // disallow space between function identifier and application
    // This rule has been deprecated in favour of the `func-call-spacing`
    // https://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 'off',
    // disallow tab characters entirely
    'no-tabs': 'error',
    // disallow the use of ternary operators
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', {
      allow: [
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        '_isAMomentObject',
        '__typename',
      ],
      allowAfterThis: true,
      allowAfterSuper: true,
      enforceInMethodNames: false,
    }],
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],
    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': 'off',
    // require or disallow padding inside curly braces
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    // enforce placing object properties on separate lines or all on same line
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 1,
        multiline: true,
        consistent: false,
      },
      ObjectPattern: {
        minProperties: 2,
        multiline: true,
        consistent: false,
      },
      ImportDeclaration: {
        minProperties: 3,
        multiline: true,
        consistent: false,
      },
      ExportDeclaration: {
        minProperties: 3,
        multiline: true,
        consistent: false,
      },
    }],
    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],
    // allow just one var statement per function
    'one-var': 'off',
    // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': ['error', 'always'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 'off',
    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', {
      overrides: {
        '&&': 'after',
        '||': 'after',
      },
    }],
    // enforce padding within blocks
    'padded-blocks': 'off',
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'off',
    //  https://github.com/eslint/eslint/blob/master/docs/rules/prefer-object-spread.md
    'prefer-object-spread': 'error',
    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',
    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'as-needed', {
      keywords: true,
      unnecessary: true,
      numbers: true,
    }],
    // specify whether double or single quotes should be used
    quotes: ['error', 'single'],
    // [DEPRECATED] Require JSDoc comment
    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',
    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],
    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', {
      caseSensitive: false,
      natural: true,
    }],
    // sort variables within the same declaration block
    'sort-vars': 'off',
    // require or disallow space before blocks
    'space-before-blocks': ['error', 'always'],
    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],
    // require spaces around operators
    'space-infix-ops': 'error',
    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {},
    }],
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error', 'always'],
    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', {
      after: true,
      before: false,
    }],
    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],
    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',
  },
};
