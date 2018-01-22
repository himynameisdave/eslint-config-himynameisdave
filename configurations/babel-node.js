module.exports = {
    parser: "babel-eslint",
    extends: [
        "himynameisdave/rules/eslint/best-practices/on",
        "himynameisdave/rules/eslint/errors/on",
        "himynameisdave/rules/eslint/es6/on",
        "himynameisdave/rules/eslint/node/on",
        "himynameisdave/rules/eslint/strict/on",
        "himynameisdave/rules/eslint/style/on",
        "himynameisdave/rules/eslint/variables/on",
        "himynameisdave/rules/filenames/on",
        "himynameisdave/rules/import/on",
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            impliedStrict: true,
        }
    },
    env: {
        amd: true,
        es6: true,
        node: true,
    },
    globals: {},
    rules: {}
};
