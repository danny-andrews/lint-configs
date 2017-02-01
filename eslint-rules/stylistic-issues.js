module.exports = {
  rules: {
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
    camelcase: 'error',
    'capitalized-comments': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-names': 'never',
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'jsx-quotes': 'error',
    indent: ['error', 2],
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: {after: false},
          for: {after: false},
          while: {after: false},
          switch: {after: false},
          catch: {after: false}
        }
      }
    ],
    'linebreak-style': 'error',
    'max-len': ['error', 80], // eslint-disable-line no-magic-numbers
    'max-statements': 'error',
    'max-statements-per-line': 'error',
    'new-cap': ['error', {capIsNew: false}],
    'new-parens': 'error',
    'newline-before-return': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', {multiline: true}],
    'object-curly-spacing': ['error', 'never'],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'unicode-bom': 'error'
  }
};
