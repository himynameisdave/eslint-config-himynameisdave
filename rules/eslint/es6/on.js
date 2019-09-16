module.exports = {
  env: {
    es6: true,
  },
  rules: {
    // require braces in arrow function body
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed'],
    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],
    // require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    // verify super() callings in constructors
    'constructor-super': 'error',
    // enforce no space before * and space after * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['warn', {
      before: false,
      after: true,
    }],
    // disallow modifying variables of class declarations
    'no-class-assign': 'error',
    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'off',
    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',
    // disallow duplicate name in class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',
    // disallow duplicate module imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'error',
    // disallow use of the new operator with the Symbol object
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',
    // restrict usage of specified modules when loaded by import declaration
    'no-restricted-imports': 'off',
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'error',
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',
    // disallow unnecessary constructor
    'no-useless-constructor': 'error',
    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    // require let or const instead of var
    'no-var': 'error',
    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      avoidQuotes: true,
    }],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true,
    }],
    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ['error', {
      object: true,
      array: false,
    }, {
      enforceForRenamedProperties: false,
    }],
    // https://eslint.org/docs/4.0.0/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',
    // suggest using Reflect methods where applicable
    // https://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',
    // suggest using the rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',
    // suggest using the spread operator instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',
    // suggest using template literals instead of strings concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',
    // Ensure that async functions use await
    // https://eslint.org/docs/4.0.0/rules/require-await
    'require-await': 'error',
    // disallow generator functions that do not have yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',
    // enforce spacing between object rest-spread
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],
    // import sorting
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
    // require a Symbol description
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',
    // enforce spacing around embedded expressions of template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',
    // enforce spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
  },
};
