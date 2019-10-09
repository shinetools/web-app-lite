const { specifiedRules: allGraphQLValidators } = require('graphql');
const { compose, map, prop, without } = require('ramda');
// We need to disable these validators because it's how Apollo works
// See https://github.com/apollographql/eslint-plugin-graphql#selecting-validation-rules
const allGraphQLValidatorNames = compose(
  without(['KnownDirectives', 'NoUnusedFragments', 'KnownFragmentNames']),
  map(prop('name')),
)(allGraphQLValidators);

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    'jest/globals': true,
    'cypress/globals': true,
  },

  plugins: [
    'react',
    'react-hooks',
    '@shinetools/eslint-plugin-shine',
    '@typescript-eslint',
    'graphql',
    'jest',
    'cypress',
  ],

  globals: {
    cancelAnimationFrame: true,
    requestAnimationFrame: true,
    fetch: false,
    element: true,
    by: true,
    device: true,
    waitFor: true,
  },

  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 'error',
    indent: 'off',
    'eslint/no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jest/no-disabled-tests': 2,
    'react/no-unused-state': 2,
    camelcase: 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'global-require': 0,
    'jsx-a11y/accessible-emoji': 0,
    '@shinetools/shine/no-native-text-component': 2,
    '@shinetools/shine/no-several-button-styles': 2,
    'react/sort-comp': 0,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    'react/jsx-sort-default-props': [
      2,
      {
        ignoreCase: true,
      },
    ],
    'react/sort-prop-types': 2,
    'import/prefer-default-export': 0,
    'import/named': 'error',
    'import/default': 'error',
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'scripts/**',
          '__e2e__/**',
          'jest/**',
          '**/*.test.ts?',
          'jest.setup.js',
          'webpack/**',
          'src/**/testing/**',
        ],
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        validators: allGraphQLValidatorNames,
      },
    ],
    'graphql/no-deprecated-fields': [
      'error',
      {
        env: 'literal',
      },
    ],
    'graphql/capitalized-type-name': [
      'error',
      {
        env: 'literal',
      },
    ],
    'graphql/named-operations': [
      'error',
      {
        env: 'literal',
      },
    ],
  },

  settings: {
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},

      // use <root>/path/to/folder/tsconfig.json
      typescript: {
        directory: '.',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
