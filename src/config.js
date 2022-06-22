/**
 * config
 * @author JA+
 */
module.exports = {
  /** valid vscode version */
  minCodeVersion: '1.60.0',
  /** inquirer choices */
  promptChoices: ['js', 'vue2', 'vue3', 'ts', 'vue2-ts', 'vue3-ts', 'svelte3'],
  /** type -> vscode extensions */
  typeExtMapper: {
    eslint: ['eslint'],
    js: [],
    vue2: ['vetur'],
    vue3: ['volar'],
    'vue2-ts': ['vetur'],
    'vue3-ts': ['volar'],
    svelte3: ['svelte'],
  },
  // vscode extensions
  codeExt: {
    eslint: { name: 'dbaeumer.vscode-eslint', validVersion: '2.2.0' },
    vetur: { name: 'octref.vetur', validVersion: '0.34.1' },
    volar: { name: 'johnsoncodehk.volar', validVersion: '0.33.2' },
    svelte: { name: 'svelte.svelte-vscode', validVersion: '105.10.0' },
  },
  // ---npm packages
  npmPkgs: {
    eslint: {
      eslint: '8.10.0',
      'eslint-plugin-html': '6.2.0',
    },
    prettier: {
      prettier: '2.5.1',
      'eslint-config-prettier': '8.5.0',
      'eslint-plugin-prettier': '4.0.0',
    },
    js: {},
    jsx: {
      '@babel/core': '7.18.2',
      '@babel/eslint-parser': '7.18.2',
    },
    ts: {
      '@typescript-eslint/eslint-plugin': '5.14.0',
      '@typescript-eslint/parser': '5.14.0',
    },
    vue2: {
      'vue-eslint-parser': '9.0.2',
      'eslint-plugin-vue': '8.5.0',
    },
    vue3: {
      'vue-eslint-parser': '9.0.2',
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
    svelte3: {
      'eslint-plugin-svelte3': '3.4.1',
    },
  },
  // platform - settings.json path
  settingFilePath: {
    win32: 'AppData/Roaming/Code/User/settings.json',
    linux: '.config/Code/User/settings.json',
  },
  // setting.json config
  settingConfig: {
    default: {
      'editor.codeActionsOnSave': {
        'source.fixAll.eslint': true,
      },
    },
    svelte3: {
      'eslint.validate': ['javascript', 'svelte'],
    },
  },
}
