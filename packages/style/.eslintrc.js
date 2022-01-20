module.exports = {
  extends: ['@nekohack/eslint-config'],
  root: true,
  env: { browser: true, node: true, es6: true },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'generator-star-spacing': 'off'
  }
}
