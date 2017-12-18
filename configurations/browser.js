module.exports = {
    parser: "babel-eslint",
    extends: [
        "himynameisdave/rules/eslint/best-practices/on",
        "himynameisdave/rules/eslint/errors/on",
        "himynameisdave/rules/eslint/es6/on",
        "himynameisdave/rules/eslint/node/off",
        "himynameisdave/rules/eslint/strict/on",
        "himynameisdave/rules/eslint/style/on",
        "himynameisdave/rules/eslint/variables/on",
        "himynameisdave/rules/filenames/on",
        "himynameisdave/rules/react/on"
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true
        }
    },
    env: {
        amd: true,
        browser: true,
        es6: true
    },
    globals: {
        module: false,
        process: false
    },
    rules: {}
};
