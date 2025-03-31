import {defineConfig, globalIgnores} from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import css from '@eslint/css';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {files: ['**/*.{js,ts}']},
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {globals: globals.browser},
  },
  {files: ['**/*.{js,ts}'], plugins: {js}, extends: ['js/recommended']},
  tseslint.configs.recommended,
  {
    plugins: {prettier: prettierPlugin},
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    rules: {
      ...css.configs.recommended.rules,
    },
  },
]);
