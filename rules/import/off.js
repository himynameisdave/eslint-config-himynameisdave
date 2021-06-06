module.exports = {
  rules: {
    // Ensure imports point to a file/module that can be resolved
    'import/no-unresolved': 'off',
    // Ensure named imports correspond to a named export in the remote file
    'import/named': 'off',
    // Ensure a default export is present, given a default import
    'import/default': 'off',
    // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': 'off',
    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',
    // Report any invalid exports, i.e. re-export of the same name
    'import/export': 'off',
    // Report use of exported name as identifier of default export
    'import/no-named-as-default': 'off',
    // Report use of exported name as property of default export
    'import/no-named-as-default-member': 'off',
    // Report imported names marked with @deprecated documentation tag
    'import/no-deprecated': 'off',
    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': 'off',
    // Forbid the use of mutable exports with var or let
    'import/no-mutable-exports': 'off',
    // Report CommonJS require calls and module.exports or exports.*
    'import/no-commonjs': 'off',
    // Report AMD require and define calls.
    'import/no-amd': 'off',
    // No Node.js builtin modules
    'import/no-nodejs-modules': 'off',
    // Ensure all imports appear before other statements
    'import/imports-first': 'off',
    // Report repeated import of the same module in multiple places
    'import/no-duplicates': 'off',
    // Report namespace imports
    'import/no-namespace': 'off',
    // Ensure consistent use of file extension within the import path
    'import/extensions': 'off',
    // Enforce a convention in module import order
    'import/order': 'off',
    // Enforce a newline after import statements
    'import/newline-after-import': 'off',
    // Prefer a default export if module exports a single name
    'import/prefer-default-export': 'off',
    //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': 'off',
    //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': 'off',
    //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'off',
    //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
    'import/no-named-export': 'off',
    //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    'import/no-unused-modules': 'off',
    //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'off',
    //  https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': 'off',
  },
};
