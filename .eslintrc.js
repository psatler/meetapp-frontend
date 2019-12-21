module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    // 'react-app',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  parser: '@typescript-eslint/parser',
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
    'prettier', // https://prettier.io/docs/en/integrating-with-linters.html#use-eslint-to-run-prettier,
    'eslint-plugin-import-helpers',
  ],
  rules: {
    "prettier/prettier": "error",
    'react/jsx-filename-extension': [ // enabling jsx in files with tsx extension
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
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
    'react-hooks/exhaustive-deps': 'warn',
    'import-helpers/order-imports': [
      'warn',
      {
          newlinesBetween: 'always', // new line between groups
          groups: [
              '/^react/', // sorting modules that start with react first
              'module',
              ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react/jsx-props-no-spreading': ['error', {
      // html: "ignore",
      custom: "ignore",
      exceptions: [],
    }],
  },
  settings: {
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    'import/resolver': {
      typescript: {},
    },
  },
};
