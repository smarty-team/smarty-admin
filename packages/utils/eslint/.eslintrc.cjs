module.exports = {
    "env": {
        "browser": true,
        "node": false
    },
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    // parser: '@typescript-eslint/parser',
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser' // 解析 .ts 文件
    },
    plugins: ['@typescript-eslint']
}
