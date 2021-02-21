module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  overrides: [
    {
      files: ['./src/app/stores/*.ts'],
      rules: {
        'no-param-reassign': 0,
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '(state|action)' },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'eol-last': [2, 'always'],
    // indent: [
    //   2,
    //   2,
    //   {
    //     ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute'],
    //     SwitchCase: 1,
    //     offsetTernaryExpressions: true,
    //   },
    // ],
    'max-len': [2, { code: 100, ignoreStrings: true, ignoreComments: true }],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'object-curly-spacing': [2, 'always'],
    'sort-imports': [2, { ignoreDeclarationSort: true }],

    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/*.test.tsx', '**/*.test.ts', '.eslintrc.js'] },
    ],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, { maximum: 3, when: 'always' }],
    'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false },
    ],
    'react/prop-types': 'warn',
    'react/style-prop-object': [
      2,
      {
        allow: ['StatusBar'],
      },
    ],

    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '_.+' },
    ],
  },
};
