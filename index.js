/**
 * This file contains the base rules for modern Javascript.
 */
const { OFF, ERROR } = require('./constants');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),

  parser: 'babel-eslint',

  rules: {
    'arrow-parens': [ERROR, 'always'],

    // To allow for-in and for-of.
    'no-restricted-syntax': [
      ERROR,
      'LabeledStatement',
      'WithStatement',
    ],

    // Allow to use `_` as unused variable e.g. when unpacking an array.
    'no-unused-vars': [
      ERROR,
      {
        varsIgnorePattern: '_',
      },
    ],

    // Sometimes early exit of an iteration is more readable!
    'no-continue': OFF,
  }
}