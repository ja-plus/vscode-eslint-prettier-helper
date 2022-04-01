/** vue3-ts eslint config*/
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['html', 'vue', 'prettier', '@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 1,
        '@typescript-eslint/no-empty-function': 1, // 不能有空方法，改为1警告
        'spaced-comment': 1, // 注释斜杠后空格
        eqeqeq: 1, // 使用 ===
        'dot-notation': 1, // 强制使用.不用[]
        // 'no-debugger': 0,
        // 'no-console': 0,
    },
}
