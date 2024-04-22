import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {},
  },
  {
    files: ['src/**/*.{js,vue,ts}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },
];
