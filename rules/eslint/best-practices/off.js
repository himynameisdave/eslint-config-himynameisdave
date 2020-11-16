module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 0,
    // enforce return statements in callbacks of array’s methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 0,
    // treat var statements as if they were block scoped
    'block-scoped-var': 0,
    // specify the maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/3.0.0/rules/complexity
    complexity: 0,
    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 0,
    // require return statements to either always or never specify values
    'consistent-return': 0,
    // specify curly brace conventions for multi-line control statements
    curly: 0,
    // require default case in switch statements
    'default-case': 0,
    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': 0,
    // encourages use of dot notation whenever possible
    'dot-notation': 0,
    // require the use of === and !==
    eqeqeq: 0,
    // make sure for-in loops have an if statement
    'guard-for-in': 0,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 0,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 0,
    // disallow lexical declarations in case clauses
    'no-case-declarations': 0,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 0,
    // disallow else after a return in an if
    'no-else-return': 0,
    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 0,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 0,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 0,
    // disallow use of eval()
    'no-eval': 0,
    // disallow adding to native types
    'no-extend-native': 0,
    // disallow unnecessary function binding
    'no-extra-bind': 0,
    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 0,
    // disallow fallthrough of case statements
    'no-fallthrough': 0,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 0,
    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 0,
    // deprecated in favor of no-global-assign
    'no-native-reassign': 0,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 0,
    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 0,
    // disallow use of eval()-like methods
    'no-implied-eval': 0,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 0,
    // disallow usage of __iterator__ property
    'no-iterator': 0,
    // disallow use of labels for anything other then loops and switches
    'no-labels': 0,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 0,
    // disallow creation of functions within loops
    'no-loop-func': 0,
    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 0,
    // disallow use of multiple spaces
    'no-multi-spaces': 0,
    // disallow use of multiline strings
    'no-multi-str': 0,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 0,
    // disallow use of new operator for Function object
    'no-new-func': 0,
    // disallows creating new instances of String,Number, a`nd Boolean
    'no-new-wrappers': 0,
    // disallow use of (old style) octal literals
    'no-octal': 0,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    'no-octal-escape': 0,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': 0,
    //  https://eslint.org/docs/4.0.0/rules/no-useless-return
    'no-useless-return': 0,
    // disallow usage of __proto__ property
    'no-proto': 0,
    // disallow declaring the same variable more then once
    'no-redeclare': 0,
    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': 0,
    // disallow use of assignment in return statement
    'no-return-assign': 0,
    // disallow redundant `return await`
    'no-return-await': 0,
    // disallow use of `javascript:` urls.
    'no-script-url': 0,
    // disallow assignments where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 0,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 0,
    // disallow use of comma operator
    'no-sequences': 0,
    // restrict what can be thrown as an exception
    'no-throw-literal': 0,
    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 0,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 0,
    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 0,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 0,
    // disallow unnecessary concatenation of literals or template literals
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 0,
    // disallow unnecessary usage of escape character
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 0,
    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 0,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': 0,
    // disallow use of the with statement
    'no-with': 0,
    // require use of the second argument for parseInt()
    radix: 0,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 0,
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': 0,
    // require or disallow Yoda conditions
    yoda: 0,
    //  https://github.com/eslint/eslint/blob/master/docs/rules/max-classes-per-file.md
    'max-classes-per-file': 0,
    //  https://github.com/eslint/eslint/blob/master/docs/rules/max-lines-per-function.md
    'max-lines-per-function': 0,
    //  Promise executor function shouldn't be async
    //  https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 0,
    //  Don't allow weird unicode stuff in regexes
    //  https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 0,
    //  Don't make silly mistakes with await/yeild
    //  https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 0,
    //  Enforce using the unicode flag for Regex
    //  https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 0,
    // Prevents catch clauses which just throw the original error
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 0,
    //  Encourage use of named capture groups in regular expressions
    //  https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 0,
    //  Encourage default params to come last
    //  https://eslint.org/docs/rules/default-param-last
    'default-param-last': 0,
    //  Prefer regex literals over new RegExp() constructor
    //  https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 0,
    //  Ensure getters and setters appear together
    //  https://github.com/eslint/eslint/blob/master/docs/rules/grouped-accessor-pairs.md
    'grouped-accessor-pairs': 0,
    //  Don't return in constructors
    //  https://github.com/eslint/eslint/blob/master/docs/rules/no-constructor-return.md
    'no-constructor-return': 0,
    //  Enforce default clauses in switch statements to be last
    //  https://github.com/eslint/eslint/blob/master/docs/rules/default-case-last.md
    'default-case-last': 0,
  },
};
