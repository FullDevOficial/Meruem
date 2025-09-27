const typescript = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const prettier = require('eslint-plugin-prettier');

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['**/*.d.ts', 'node_modules/**', 'dist/**', 'eslint.config.cjs'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.app.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-var': 'error',
    },
  },
];
