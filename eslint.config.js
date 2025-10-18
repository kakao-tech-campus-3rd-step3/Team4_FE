import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(globalIgnores(['dist', 'node_modules']), {
  files: ['**/*.{ts,tsx}'],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs['recommended-latest'],
    reactRefresh.configs.vite,
    prettierConfig,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      project: ['./tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },

  plugins: {
    import: importPlugin,
    'unused-imports': unusedImports,
  },
  settings: {
    'import/resolver': {
      typescript: { project: ['./tsconfig.app.json'], alwaysTryTypes: true },
    },
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'no-debugger': 'warn',
    'no-console': 'warn',
    'import/no-unresolved': 'error',

    'react-hooks/exhaustive-deps': 'warn',

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
  },
});
