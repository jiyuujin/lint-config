'use strict'

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  plugins: ['vue', 'vue-a11y'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'no-unused-vars': 'warn',
    'no-var': 'error',
    // PrettierとESLintの間にvoid elementsでのself-closingを許容するか、しないかという競合が発生
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'void': 'always'
        }
      }
    ],
    'vue/max-attributes-per-line': 'off'
  }
}
