module.exports = {
 env: {
  node: true,
  jest: true,
  browser: true,
 },
 globals: {
  ga: true,
  chrome: true,
  __DEV__: true,
 },

 // parser: "@typescript-eslint/parser",
 parser: 'vue-eslint-parser',
 parserOptions: {
  file: './src/*.*',
  ecmaVersion: '2015',
  ecmaFeatures: {
   jsx: true,
  },
  sourceType: 'module',
  parser: '@typescript-eslint/parser', // 解析 .ts 文件
 },
 extends: ['eslint:recommended'],
 rules: {
  'no-unused-vars': 'off',
  'no-console': 'error',
  'prettier/prettier': 'error',
 },

 plugins: ['prettier'],
}
