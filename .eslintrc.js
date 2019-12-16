module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    // 'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import', // to understand import/export
    'jsx-a11y', // to help with some jsx rules
    '@typescript-eslint',
    'react-hooks',
    'prettier', // https://prettier.io/docs/en/integrating-with-linters.html#use-eslint-to-run-prettier
  ],
  rules: {
    "prettier/prettier": "error",
    'react/jsx-filename-extension': [ // enabling jsx in files with tsx extension
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    // enabling exporting without export default
    'import/prefer-default-export': 'off',
    // below we enable to infer what type we are returning without explicitly do so
    '@typescript-eslint/explicit-function-return-type': 'off',
    // below we are disabling the need to declare public/private access to the function methods
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'no-console': ['error', { allow: ['tron'] }], // for reactotron
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
