module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  globals: {
    window: true,
    module: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'error',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        trailingCommas: {
          array: true,
          object: true,
          function: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'import/prefer-default-export': 0,
        'react/jsx-props-no-spreading': 0,
        'no-unused-vars': 'warn',
        'import/no-unresolved': 'error',
      },
    },
    {
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
      files: ['webpack.config.js'],
    },
    {
      files: ['*.ts'],
      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
};
