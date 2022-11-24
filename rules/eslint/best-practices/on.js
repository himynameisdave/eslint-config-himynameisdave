module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 'off',
    // enforce return statements in callbacks of array’s methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', {
      allowImplicit: true,
    }],
    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',
    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',
    // specify the maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/3.0.0/rules/complexity
    complexity: ['error', 10],
    // require return statements to either always or never specify values
    'consistent-return': 'off',
    // specify curly brace conventions for multi-line control statements
    curly: ['error', 'multi-line'],
    // require default case in switch statements
    'default-case': ['error', {
      commentPattern: '^no default$',
    }],
    //  Enforce default clauses in switch statements to be last
    //  https://github.com/eslint/eslint/blob/master/docs/rules/default-case-last.md
    'default-case-last': 'error',
    //  Encourage default params to come last
    //  https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',
    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],
    // encourages use of dot notation whenever possible
    'dot-notation': ['error', {
      allowKeywords: true,
    }],
    // require the use of === and !==
    eqeqeq: ['error', 'always', {
      'null': 'ignore',
    }],
    //  Ensure getters and setters appear together
    //  https://github.com/eslint/eslint/blob/master/docs/rules/grouped-accessor-pairs.md
    'grouped-accessor-pairs': 'error',
    // make sure for-in loops have an if statement
    'guard-for-in': 'error',
    //  https://eslint.org/docs/latest/rules/logical-assignment-operators
    'logical-assignment-operators': 'off',
    //  https://github.com/eslint/eslint/blob/master/docs/rules/max-classes-per-file.md
    'max-classes-per-file': 'error',
    //  https://github.com/eslint/eslint/blob/master/docs/rules/max-lines-per-function.md
    'max-lines-per-function': 'off',
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'error',
    //  Promise executor function shouldn't be async
    //  https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',
    // disallow lexical declarations in case clauses
    'no-case-declarations': 'error',
    //  Don't return in constructors
    //  https://github.com/eslint/eslint/blob/master/docs/rules/no-constructor-return.md
    'no-constructor-return': 'error',
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',
    // disallow else after a return in an if
    'no-else-return': 'error',
    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      allow: ['arrowFunctions'],
    }],
    //  Disallow empty static blocks
    //  https://eslint.org/docs/latest/rules/no-empty-static-block#version
    'no-empty-static-block': 'error',
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 'error',
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',
    // disallow use of eval()
    'no-eval': 'error',
    // disallow adding to native types
    'no-extend-native': 'error',
    // disallow unnecessary function binding
    'no-extra-bind': 'error',
    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',
    // disallow fallthrough of case statements
    'no-fallthrough': 'error',
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',
    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', {
      exceptions: [],
    }],
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': ['off', {
      allow: [],
      'boolean': false,
      disallowTemplateShorthand: true,
      number: true,
      string: true,
    }],
    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',
    // disallow use of eval()-like methods
    'no-implied-eval': 'error',
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    // disallow usage of __iterator__ property
    'no-iterator': 'error',
    // disallow use of labels for anything other then loops and switches
    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false,
    }],
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',
    // disallow creation of functions within loops
    'no-loop-func': 'error',
    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',
    //  Don't allow weird unicode stuff in regexes
    //  https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',
    //  Disallow new operators with global non-constructor functions
    //  https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': 'error',
    // disallow use of multiple spaces
    'no-multi-spaces': 'error',
    // disallow use of multiline strings
    'no-multi-str': 'error',
    // deprecated in favor of no-global-assign
    'no-native-reassign': 'off',
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',
    // disallow use of new operator for Function object
    'no-new-func': 'error',
    // disallows creating new instances of String,Number, a`nd Boolean
    'no-new-wrappers': 'error',
    //  Disallow `\\8` and `\\9` escape sequences in string literals
    //  https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',
    // disallow use of (old style) octal literals
    'no-octal': 'error',
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    'no-octal-escape': 'error',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['error', {
      ignorePropertyModificationsFor: ['acc'],
      props: true,
    }],
    // disallow usage of __proto__ property
    'no-proto': 'error',
    // disallow declaring the same variable more then once
    'no-redeclare': 'error',
    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      message: 'Please use Number.isNaN instead',
      object: 'window',
      property: 'isNaN',
    }, {
      message: 'Use the ES6 exponentiation operator (**) instead.',
      object: 'Math',
      property: 'pow',
    }],
    // disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],
    // disallow redundant `return await`
    'no-return-await': 'error',
    // disallow use of `javascript:` urls.
    'no-script-url': 'error',
    // disallow assignments where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',
    // disallow use of comma operator
    'no-sequences': 'error',
    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',
    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',
    // disallow usage of expressions in statement position
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: true,
    }],
    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'warn',
    // Prevents catch clauses which just throw the original error
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',
    // disallow unnecessary concatenation of literals or template literals
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',
    // disallow unnecessary usage of escape character
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',
    //  https://eslint.org/docs/4.0.0/rules/no-useless-return
    'no-useless-return': 'error',
    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': 'off',
    // disallow use of the with statement
    'no-with': 'error',
    //  Encourage use of named capture groups in regular expressions
    //  https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'error',
    //  Prefer regex literals over new RegExp() constructor
    //  https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 'error',
    // require use of the second argument for parseInt()
    radix: 'off',
    //  Don't make silly mistakes with await/yeild
    //  https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'error',
    //  Enforce using the unicode flag for Regex
    //  https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'error',
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'outside', {
      functionPrototypeMethods: false,
    }],
    // require or disallow Yoda conditions
    yoda: ['error', 'never'],
  },
};
