module.exports = {
    extends: [
        'next/core-web-vitals',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react/jsx-runtime'
    ],
    rules: {
        //     'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        //     'react/jsx-one-expression-per-line': 'off',
        'react/jsx-indent-props': ['error', 'first'], // Optionally, set how props should be indented
        'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-indent': 'off',
        'react/jsx-one-expression-per-line': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'arrow-parens': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': 'off',
        'eol-last': ['error', 'always'],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'off',
        indent: ['error', 4],
        'jsx-a11y/label-has-associated-control': 'off',
        'key-spacing': ['error'],
        'linebreak-style': ['off'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': ['error', { code: 256 }],
        'newline-before-return': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-multiple-empty-lines': 'off',
        'no-prototype-builtins': 'off',
        'no-trailing-spaces': ['error', { ignoreComments: true, skipBlankLines: true }],
        'no-underscore-dangle': 'off',
        'padded-blocks': ['error', 'never'],
        'object-curly-newline': 'off',
        quotes: ['error', 'single'],
        'require-jsdoc': 'off',
        semi: 'error',
        'space-in-parens': 'off',
        'prettier/prettier': 0
    }
};
