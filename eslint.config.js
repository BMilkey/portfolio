import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

import svelteConfig from './svelte.config.js';

export default defineConfig(
    {
        ignores: ['node_modules/**', '.svelte-kit/**', 'build/**', 'dist/**', 'coverage/**']
    },

    js.configs.recommended,

    ts.configs.recommended,

    svelte.configs.recommended,

    {
        languageOptions: {
            parserOptions: {
                extraFileExtensions: ['.svelte']
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },

    {
        files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
        languageOptions: {
            parserOptions: {
                parser: ts.parser,
                svelteConfig
            }
        }
    },

    {
        files: ['**/*.svelte'],
        rules: {
            'svelte/no-navigation-without-resolve': [
                'error',
                {
                    ignoreLinks: true
                }
            ]
        }
    },

    eslintConfigPrettier
);
