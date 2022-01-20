# The nekohack ESLint plugins

The plugins are created, based on the [Lerna](https://github.com/lerna/lerna).

## @nekohack/stylelint

Install the StyleLint plugin for CSS.

```bash
npm i @nekohack/stylelint-config -D
yarn add -D @nekohack/stylelint-config
```

### Configuration

You can use as general StyleLint plugins.

```js
module.exports = {
    extends: ['@nekohack/stylelint-config']
}
```

## @nekohack/eslint-config

Install the ESLint plugin for ESNext.

```bash
npm i @nekohack/eslint-config -D
yarn add -D @nekohack/eslint-config
```

### Configuration

You can use as general ESLint plugins.

```js
module.exports = {
    extends: ['@nekohack/eslint-config']
}
```

## @nekohack/eslint-config-react

Install the ESLint plugin for [React](https://ja.reactjs.org/).

Dropping support for Node.js `v8.x` - [ESLint v7](https://eslint.org/blog/2020/02/whats-coming-in-eslint-7.0.0)

```bash
npm i @nekohack/eslint-config-react -D
yarn add -D @nekohack/eslint-config-react
```

### Configuration

You can use as general ESLint plugins.

```js
module.exports = {
    extends: ['@nekohack/eslint-config-react']
}
```

## @nekohack/eslint-config-vue

Install the ESLint plugin for [Vue.js](https://jp.vuejs.org/index.html).

Dropping support for Node.js `v8.x` - [ESLint v7](https://eslint.org/blog/2020/02/whats-coming-in-eslint-7.0.0)

```bash
npm i @nekohack/eslint-config-vue -D
yarn add -D @nekohack/eslint-config-vue
```

### Configuration

You can use as general ESLint plugins.

```js
module.exports = {
    extends: ['@nekohack/eslint-config-vue']
}
```
