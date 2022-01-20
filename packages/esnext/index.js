'use strict'

module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'error'
    }
}
