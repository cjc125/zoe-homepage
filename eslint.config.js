import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // 通用 JS/TS 设置
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      vue: pluginVue,
    },
    rules: {
      // 格式相关规则（等价于 prettier）
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always'],

      // Vue 相关规则
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    },
  },

  // TypeScript 严格配置
  tseslint.configs.strict,

  // Vue 3 推荐配置
  pluginVue.configs['flat/recommended'],
  
  // CSS 支持（可选）
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css',
    rules: css.configs.recommended.rules,
  },
]);
