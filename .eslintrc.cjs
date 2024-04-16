module.exports = {
   env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
    },
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:perfectionist/recommended-line-length',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['perfectionist',
    '@typescript-eslint',
    'react',
    'validate-jsx-nesting',],
  rules: {
     '@typescript-eslint/ban-ts-comment':'off',
    'perfectionist/sort-objects': [
      'error',
      {
        type: 'line-length',
        order: 'desc',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 4],
    'object-curly-spacing': ['error', 'always'],
    'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-curly-brace-presence': [2, 'never'],
  }
}
