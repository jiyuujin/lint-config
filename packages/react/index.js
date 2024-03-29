'use strict'

module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2015,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
