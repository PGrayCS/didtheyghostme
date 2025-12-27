import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

export default [
  // Global ignores (migrated from .eslintignore)
  {
    ignores: [
      '.now/*',
      '*.css',
      '.changeset',
      'dist',
      'esm/*',
      'public/*',
      'tests/*',
      'scripts/*',
      '*.config.js',
      '.DS_Store',
      'node_modules',
      'coverage',
      '.next',
      'build'
    ]
  },
  // Base configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
      },
      globals: {
        // Node.js globals
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        // ES2021 globals
        globalThis: 'readonly',
        Promise: 'readonly'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
      'unused-imports': unusedImports,
      import: importPlugin,
      '@typescript-eslint': typescript
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // React rules
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          multiline: 'last'
        }
      ],

      // React Hooks rules
      'react-hooks/exhaustive-deps': 'off',

      // Accessibility rules
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',

      // Prettier rules
      'prettier/prettier': 'warn',

      // Unused imports/vars rules
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_.*?$'
        }
      ],

      // Import rules
      'import/order': [
        'warn',
        {
          groups: ['type', 'builtin', 'object', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'after'
            }
          ],
          'newlines-between': 'always'
        }
      ],

      // Formatting rules
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var']
        }
      ],
      'max-len': [
        'warn',
        {
          code: 200
        }
      ]
    }
  }
];
