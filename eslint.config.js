import {defineConfig, globalIgnores} from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import css from '@eslint/css';
import html from '@html-eslint/eslint-plugin';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import yml from 'eslint-plugin-yml';

export default defineConfig([
  globalIgnores(['dist', 'templates']),
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {globals: globals.browser},
  },
  {
    files: ['**/*.{js,ts}'],
    plugins: {js},
    extends: ['js/recommended'],
  },
  ...tseslint.config({
    files: ['**/*.{js,ts}'],
    extends: [tseslint.configs.recommended],
  }),
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
  {
    files: ['**/*.html'],
    plugins: {
      html,
    },
    language: 'html/html',
    rules: {
      ...html.configs.recommended.rules,
      ...prettierConfig.rules,

      'html/indent': 'off',
      'html/require-closing-tags': ['error', {selfClosing: 'always'}],
      'html/no-extra-spacing-tags': 'off',
    },
  },
  ...yml.configs.recommended,
  {
    files: ['**/*.yml'],
    rules: {
      ...prettierConfig.rules,

      'yml/no-empty-mapping-value': 'off',
    },
  },
]);
