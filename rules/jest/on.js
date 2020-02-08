module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  rules: {
    //  Tests should use `it()` instead of `test()`
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': ['error', {
      fn: 'it',
    }],
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/lowercase-name.md
    'jest/lowercase-name': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'error',
    //  Error out if set to only run a single test
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-jest-import.md
    'jest/no-jest-import': 'error',
    //  Allow snapshots to get 'yuge, we don't include them in .gitattribute anyway
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',
    //  expect(thing).toHaveLength() > expect(thing.length).toBe()
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',
    //  Suggest using toBeNull() instead of toBe(null)
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': 'error',
    //  Suggest using toBeUndefined() instead of toBe(undefined)
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': 'error',
    //  We don't enforce assertation counting
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-describe.md
    'jest/valid-describe': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',
    //  Ensure we return promise out of
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',
    //  Suggest using inline snapshots
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
    'jest/prefer-inline-snapshots': 'off',
    //  Ensure there is an expect call in each test block
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': 'error',
    //  Jest wants your tests to be void and not return anything
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'off',
    //  Strict equality is better to check for
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'off',
    //  Don't use the deprecated/aliased version of Jest methods
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'error',
    //  .toThrow should have an argument/message
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-tothrow-message.md
    'jest/require-to-throw-message': 'error',
    //  Use .toContain when checking Array.includes
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',
    //  Prefer that you just return a promise instead of calling done()
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
    'jest/no-test-callback': 'error',
    //  .spyOn doesn't mess with the original implementation
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'off',
    //  Disallow .toBeTruthy()/.toBeFalsy()
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
    'jest/no-truthy-falsy': 'error',
    //  When test cases are empty, it is better to mark them as test.todo as it will be highlighted in the summary output.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 'error',
    //  Disallow commented out tests
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    'jest/no-commented-out-tests': 'error',
    //  Disallow duplicate setup and teardown hooks
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'error',
    //  Avoid using expect().resolves
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
    'jest/no-expect-resolves': 'error',
    //  No exports from test file
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
    'jest/no-export': 'error',
    //  Disallow conditional logic in tests
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
    'jest/no-if': 'error',
    //  Disallow manually importing from __mocks__
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 'error',
    //  Prevents expect statements outside of a test or it block.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': 'error',
    //  This rule prevents the use of expect inside catch blocks.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-try-expect.md
    'jest/no-try-expect': 'error',
    //  Require top-level describe block
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 'error',
    //  Put all hooks at the top-most level
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',
    //  Checks that the title of Jest blocks are valid by ensuring that titles are valid
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
    'jest/valid-title': 'error',
  },
};
