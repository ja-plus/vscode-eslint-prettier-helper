module.exports = {
    /** valid vscode version */
    minCodeVersion: '1.60.0',
    /** inquirer choices*/
    promptChoices: ['js', 'vue2', 'vue3', 'ts', 'vue2-ts', 'vue3-ts'],
    /** type -> vscode extensions */
    typeExtMapper: {
        default: ['eslint'],
        js: [],
        vue2: ['vetur'],
        vue3: ['volar'],
        'vue2-ts': ['vetur'],
        'vue3-ts': ['volar'],
    },
    // vscode extensions
    codeExt: {
        eslint: { name: 'dbaeumer.vscode-eslint', validVersion: '2.2.0' },
        vetur: { name: 'octref.vetur', validVersion: '0.34.1' },
        volar: { name: 'johnsoncodehk.volar', validVersion: '0.33.2' },
    },
    // ---npm packages
    npmPkgs: {
        default: {
            eslint: '8.10.0',
            'eslint-config-prettier': '8.5.0',
            'eslint-plugin-html': '6.2.0',
            'eslint-plugin-prettier': '4.0.0',
            prettier: '2.5.1',
        },
        js: {},
        ts: {
            '@typescript-eslint/eslint-plugin': '5.14.0',
            '@typescript-eslint/parser': '5.14.0',
        },
        vue2: {
            'eslint-plugin-vue': '8.5.0',
        },
        vue3: {
            'eslint-plugin-vue': '8.5.0',
        },
        'vue2-ts': {
            'eslint-plugin-vue': '8.5.0',
            '@typescript-eslint/eslint-plugin': '5.14.0',
            '@typescript-eslint/parser': '5.14.0',
            '@vue/eslint-config-typescript': '8.0.0',
        },
        'vue3-ts': {
            'eslint-plugin-vue': '8.5.0',
            '@typescript-eslint/eslint-plugin': '5.14.0',
            '@typescript-eslint/parser': '5.14.0',
            '@vue/eslint-config-typescript': '8.0.0',
        },
    },
    // platform - settings.json path
    settingFilePath: {
        win32: 'AppData/Roaming/Code/User/settings.json',
        linux: '.config/Code/User/settings.json',
    },
}
