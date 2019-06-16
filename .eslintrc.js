module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // Don't enforce UNIX or Windows line endings.
        'linebreak-style': 'off',

        // Airbnb style guide with some minor tweaks.
        indent: ['error', 4],
        'eol-last': ['error', 'never'],
        'max-len': ['error', { code: 200 }],
        'space-before-function-paren': ['error', 'always'],
        'import/extensions': ['error', 'always', { ignorePackages: true }],
        'no-iterator': 'off',

        // Airbnb (rightly) focusses on the FP side of JS - however occasionally we really do need an imperative for..of loop.
        // Don't allow the rest.
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],

        // Vue specific
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};