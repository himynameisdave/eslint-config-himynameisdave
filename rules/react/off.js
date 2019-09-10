module.export = {
  rules: {
    // Prevent missing displayName in a React component definition
    'react/display-name': 0,
    // Forbid certain propTypes
    'react/forbid-prop-types': 0,
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 0,
    // Prevent usage of deprecated methods
    'react/no-deprecated': 0,
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 0,
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 0,
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 0,
    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 0,
    // Prevent usage of isMounted
    'react/no-is-mounted': 0,
    // Prevent multiple component definition per file
    'react/no-multi-comp': 0,
    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 0,
    // Prevent usage of setState
    'react/no-set-state': 0,
    // Prevent using string references in ref attribute.
    'react/no-string-refs': 0,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 0,
    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 0,
    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 0,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 0,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 0,
    // Restrict file extensions that may be required
    'react/require-extension': 0,
    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 0,
    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 0,
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 0,
    // Enforce component methods order
    'react/sort-comp': 0,
    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 0,
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 0,
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': 0,
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 0,
    // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    'react/jsx-equals-spacing': 0,
    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': 0,
    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': 0,
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 0,
    // Validate JSX indentation
    'react/jsx-indent': 0,
    // Validate props indentation in JSX
    'react/jsx-indent-props': 0,
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 0,
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 0,
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 0,
    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 0,
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 0,
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 0,
    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 0,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 0,
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 0,
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // Validate spacing before closing bracket in JSX (fixable)
    'react/jsx-space-before-closing': 0,
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 0,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 0,
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 0,

    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    'react/forbid-elements': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': 0,
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': 0,
    //  Disallow JSX props spreading
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 0,
    //  For Flow types
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    'react/prefer-read-only-props': 0,
    //  Enforce state initialization style
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': 0,
    //  Enforces where React component static properties should be positioned.
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': 0,
  },
};
