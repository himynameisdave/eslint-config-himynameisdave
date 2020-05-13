module.exports = {
  rules: {
    //  Tests should use `it()` instead of `test()`
    'jest/consistent-test-it': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/lowercase-name.md
    'jest/lowercase-name': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 0,
    //  Error out if set to only run a single test
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-hooks.md
    'jest/no-hooks': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-identical-title.md
    'jest/no-identical-title': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-jest-import.md
    'jest/no-jest-import': 0,
    //  Allow snapshots to get 'yuge, we don't include them in .gitattribute anyway
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 0,
    //  expect(thing).toHaveLength() > expect(thing.length).toBe()
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 0,
    //  Suggest using toBeNull() instead of toBe(null)
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': 0,
    //  Suggest using toBeUndefined() instead of toBe(undefined)
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': 0,
    //  We don't enforce assertation counting
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-describe.md
    'jest/valid-describe': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect.md
    'jest/valid-expect': 0,
    //  Ensure we return promise out of
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 0,
    'jest/prefer-inline-snapshots': 0,
    'jest/expect-expect': 0,
    'jest/no-test-return-statement': 0,
    'jest/prefer-strict-equal': 0,
    'jest/no-alias-methods': 0,
    'jest/require-to-throw-message': 0,
    'jest/prefer-to-contain': 0,
    'jest/no-test-callback': 0,
    'jest/prefer-spy-on': 0,
    'jest/no-truthy-falsy': 0,
    'jest/prefer-todo': 0,
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 0,
    //  Disallow commented out tests
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    'jest/no-commented-out-tests': 0,
    //  Disallow duplicate setup and teardown hooks
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 0,
    //  Avoid using expect().resolves
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
    'jest/no-expect-resolves': 0,
    //  No exports from test file
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
    'jest/no-export': 0,
    //  Disallow conditional logic in tests
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
    'jest/no-if': 0,
    //  Disallow manually importing from __mocks__
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 0,
    //  Prevents expect statements outside of a test or it block.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': 0,
    //  This rule prevents the use of expect inside catch blocks.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-try-expect.md
    'jest/no-try-expect': 0,
    //  Require top-level describe block
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 0,
    'jest/prefer-hooks-on-top': 0,
    'jest/valid-title': 0,
    'jest/no-deprecated-functions': 0,
  },
};
