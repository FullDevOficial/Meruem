// eslint.config.cjs
const ts = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const ng = require('@angular-eslint/eslint-plugin');
const ngTpl = require('@angular-eslint/eslint-plugin-template');

module.exports = [
  {
    files: ['**/*.ts'],
    ignores: ['projects/**'],
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      '@angular-eslint': ng,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['**/*.html'],
    plugins: { '@angular-eslint/template': ngTpl },
    rules: {
      // regras de template
    },
  },
];
