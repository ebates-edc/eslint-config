[![Build Status](https://travis-ci.org/ebates-inc/eslint-config.svg?branch=master)](https://travis-ci.org/ebates-inc/eslint-config)

# eslint-config-ebates

This package provides ESLint [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) which allow us to
maintain a consistent coding style across our Javascript repositories.

Our base configuration, `ebates`, extends [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), both `base` and `strict` set of rules.
We also provide configuration for other environments:
- `ebates/flowtype`
- `ebates/react`

## Installation

To install both the dependencies and peer-dependencies, make sure you have npm 5+
and run

```bash
npx install-peerdeps --dev eslint-config-ebates
```

*Note:* `install-peerdeps` will automatically detect if you're using `yarn` or `npm`.

In `.eslintrc.js`, simply add:
```js
module.exports = {
  extends: 'ebates',
  // ...
};
```

## Other configurations

Other configurations require dependencies listed as optional. Run the
following command to check the supported version to install.
```bash
npm info "eslint-config-ebates@latest" optionalDependencies
```

### Flowtype

- Requirements:
    + [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)

Run
```bash
yarn add -D eslint-plugin-flowtype@<version>
```

Then update `.eslintrc.js`:
```js
module.exports = {
  extends: [
    'ebates',
    'ebates/flowtype',
  ],
  // ...
};
```

### React

- Requirements:
    + [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

Run
```bash
# Install peer dependencies. Skip `eslint` as we've already installed it as a peer dependency
# for our config earlier (in the Installation step).
yarn add -D eslint-plugin-import@^2.16.0 eslint-plugin-jsx-a11y@^6.2.1 eslint-plugin-react@^6.2.1

yarn add -D eslint-config-airbnb@^17.1.0
```

*NOTE*: We can run `npx install-peerdeps --dev eslint-config-airbnb` to install all peer dependencies
in 1 commnad. However, we avoid it because it would install the `eslint@5.3.0` (exact version).

Then update `.eslintrc.js`:
```js
module.exports = {
  extends: [
    'ebates',
    'ebates/react',
  ],
  // ...
};
```
