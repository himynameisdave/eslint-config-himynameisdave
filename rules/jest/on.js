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
      fn: 'it', // eslint-disable-line id-denylist
    }],
    //  Ensure there is an expect call in each test block
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/lowercase-name.md
    'jest/lowercase-name': 'off',
    //  Limit the number of nested describe calls (default: max 5)
    //  https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
    'jest/max-nested-describe': 'error',
    //  Don't use the deprecated/aliased version of Jest methods
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'error',
    //  Disallow commented out tests
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    'jest/no-commented-out-tests': 'error',
    //  Prevents the use of expect in conditional blocks
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md
    'jest/no-conditional-expect': 'error',
    'jest/no-conditional-in-test': 'error',
    //  Disallow use of deprecated functions
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md
    'jest/no-deprecated-functions': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'error',
    //  Prefer that you just return a promise instead of calling done()
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md
    'jest/no-done-callback': 'error',
    //  Disallow duplicate setup and teardown hooks
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'error',
    //  Avoid using expect().resolves
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
    //  DEPRECATED => jest/no-restricted-matchers
    'jest/no-expect-resolves': 'off',
    //  No exports from test file
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
    'jest/no-export': 'error',
    //  Error out if set to only run a single test
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',
    //  Disallow conditional logic in tests
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
    'jest/no-if': 'error',
    //  Prevents the use of string interpolations in snapshots.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md
    'jest/no-interpolation-in-snapshots': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-jest-import.md
    'jest/no-jest-import': 'error',
    //  Allow snapshots to get 'yuge, we don't include them in .gitattribute anyway
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': 'off',
    //  Disallow manually importing from __mocks__
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 'error',
    //  Disallow specific matchers & modifiers
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-matchers.md
    'jest/no-restricted-matchers': ['error', {
      'resolves': 'Use `expect(await promise)` instead.',
      'toBeCloseTo': 'Use `toBe(n)` for strict equality',
      'toBeFalsy': 'Use `toBe(false)` for strict equality',
      'toBeTruthy': 'Use `toBe(true)` for strict equality',
      'toMatchSnapshot': 'Use `toMatchInlineSnapshot()` instead',
      'toThrowErrorMatchingSnapshot': 'Use `toThrowErrorMatchingInlineSnapshot()` instead',
    }],
    //  Prevents expect statements outside of a test or it block.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',
    //  Jest wants your tests to be void and not return anything
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'off',
    //  Disallow .toBeTruthy()/.toBeFalsy()
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
    //  DEPRECATED => jest/no-restricted-matchers
    'jest/no-truthy-falsy': 'off',
    //  This rule prevents the use of expect inside catch blocks.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-try-expect.md
    //  DEPRECATED: use no-conditional-expect instead
    'jest/no-try-expect': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-equality-matcher': 'error',
    //  We don't enforce assertation counting
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 'off',
    //  Prefer await expect(...).resolves over expect(await ...) syntax
    //  https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
    'jest/prefer-expect-resolves': 'error',
    //  Put all hooks at the top-most level
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',
    //  Suggest using inline snapshots
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
    //  DEPRECATED => jest/no-restricted-matchers
    'jest/prefer-inline-snapshots': 'off',
    //  Enforce lowercase test names
    //  https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
    'jest/prefer-lowercase-title': ['error', {
      'ignore': ['describe'],
    }],
    'jest/prefer-snapshot-hint': 'off',
    //  [DEPRECATED] Prefer that you just return a promise instead of calling done()
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
    // 'jest/no-test-callback': 'error',
    //  .spyOn doesn't mess with the original implementation
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'off',
    //  Strict equality is better to check for
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'off',
    //  Suggest using toBe() for primitive literals
    //  https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
    'jest/prefer-to-be': 'error',
    //  Suggest using toBeNull() instead of toBe(null)
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': 'error',
    //  Suggest using toBeUndefined() instead of toBe(undefined)
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': 'error',
    //  Use .toContain when checking Array.includes
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',
    //  expect(thing).toHaveLength() > expect(thing.length).toBe()
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',
    //  When test cases are empty, it is better to mark them as test.todo as it will be highlighted in the summary output.
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'off',
    //  Require setup and teardown code to be within a hook
    //  https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
    'jest/require-hook': 'error',
    //  .toThrow should have an argument/message
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-tothrow-message.md
    'jest/require-to-throw-message': 'error',
    //  Require top-level describe block
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    'jest/unbound-method': 'off',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-describe.md
    'jest/valid-describe': 'off',
    //  Enforce valid describe() callback
    //  https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
    'jest/valid-describe-callback': 'error',
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',
    //  Ensure we return promise out of
    //  https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',
    //  Checks that the title of Jest blocks are valid by ensuring that titles are valid
    //  https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
    'jest/valid-title': 'error',
  },
};
