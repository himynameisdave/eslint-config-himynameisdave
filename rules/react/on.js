module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    // Prevent missing displayName in a React component definition
    'react/display-name': ['error', {
      ignoreTranspilerName: false,
    }],
    // Forbid certain propTypes
    'react/forbid-prop-types': 'warn',
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'warn',
    // Prevent usage of deprecated methods
    'react/no-deprecated': 'warn',
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 'error',
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'error',
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',
    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'warn',
    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',
    // Prevent multiple component definition per file
    'react/no-multi-comp': ['error', {
      ignoreStateless: true,
    }],
    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',
    // Prevent usage of setState
    'react/no-set-state': 'off',
    // Prevent using string references in ref attribute.
    'react/no-string-refs': 'error',
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'error',
    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 'error',
    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': ['error', {
      ignorePureComponents: true,
    }],
    // Prevent missing props validation in a React component definition
    'react/prop-types': 'error',
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',
    // Restrict file extensions that may be required
    'react/require-extension': 'off',
    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 'off',
    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'error',
    // Enforce component methods order
    'react/sort-comp': 'error',
    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['error', {
      callbacksLast: true,
      ignoreCase: true,
      noSortAlphabetically: false,
      requiredFirst: false,
      sortShapeProp: true,
    }],

    // ========================================================================
    //                                JSX Specific Rules
    // ========================================================================

    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 'error',
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': ['error', 'never', {
      allowMultiline: true,
    }],
    // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    'react/jsx-equals-spacing': ['error', 'never'],
    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx'],
    }],
    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': 'off',
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'warn',
    // Validate JSX indentation
    'react/jsx-indent': ['error', 2],
    // Validate props indentation in JSX
    'react/jsx-indent-props': ['error', 2],
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': ['error', {
      maximum: 2,
      when: 'always',
    }],
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false,
    }],
    // Prevent comments from being ins'off'erted as text nodes
    'react/jsx-no-comment-textnodes': 'error',
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: true,
    }],
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 'off',
    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'error',
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'error',
    // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-props': 'off',
    // Validate spacing before closing bracket in JSX (fixable)
    'react/jsx-space-before-closing': 'off',
    // Prevent React to be incorrectly marked as unused
    // Prevent React to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': ['error'],
    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    'react/forbid-elements': 'off',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['error', 'never'],
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'off',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': 'off',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': ['warn', {
      message: 'Please name your boolean prop ({{propName}}) to start with "is" or "has", like "isBruceLoose"',
    }],
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': 'warn',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': 'off',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': 'off',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': 'error',
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-tag-location': 'error',
    //  Enforces proper use of JSX fragments
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'element'],
    //  Newlines inside of JSX curlies
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': 'off',
    //  Disallow JSX props spreading
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'warn',
    //  For Flow types
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    'react/prefer-read-only-props': 'off',
    //  Enforce state initialization style
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['warn', 'never'],
    //  Enforces where React component static properties should be positioned.
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'static public field'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'error',
    //  This option enforces a specific function type for function components.
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponent: 'arrow-function',
    }],
    //  Disallow `javascript:` URLs
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': 'error',
    //  Disallow adjacent inline elements, needs whitespace
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
    'react/no-adjacent-inline-elements': 'error',
  },
};
