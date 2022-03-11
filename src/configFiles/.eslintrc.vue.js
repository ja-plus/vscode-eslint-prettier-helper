/** this config file will be modified by copyConfigFile.js */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['html', 'vue', 'prettier'],
    extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 1,
        'spaced-comment': 1, // 注释斜杠后空格
        'new-cap': 1, // 构造函数首字母大写
        eqeqeq: 1, // 使用 ===
        'dot-notation': 1, // 强制使用.不用[]
    },
}
