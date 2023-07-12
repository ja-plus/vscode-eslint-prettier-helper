/**
 * config
 * @author JA+
 */
module.exports = {
  /** valid vscode version */
  minCodeVersion: '1.60.0',
  /**
   * inquirer choices
   * label - value
   */
  promptChoices: {
    js: 'js',
    vue2: 'vue2',
    vue3: 'vue3',
    ts: 'ts',
    'vue2-ts': 'vue2-ts',
    'vue3-ts': 'vue3-ts',
    'react(Beta)': 'react',
    'react-ts(Beta)': 'react-ts',
    svelte3: 'svelte3',
    'svelte3-ts': 'svelte3-ts',
  },
  /** type -> vscode extensions */
  typeExtMapper: {
    eslint: ['eslint'],
    js: [],
    ts: [],
    vue2: ['volar'],
    vue3: ['volar'],
    'vue2-ts': ['volar'],
    'vue3-ts': ['volar'],
    svelte3: ['svelte'],
    'svelte3-ts': ['svelte'],
  },
  // vscode extensions
  codeExt: {
    eslint: { name: 'dbaeumer.vscode-eslint', validVersion: '2.2.0' },
    // vetur: { name: 'octref.vetur', validVersion: '0.34.1' },
    volar: { name: 'Vue.volar', validVersion: '0.40.0' },
    svelte: { name: 'svelte.svelte-vscode', validVersion: '105.10.0' },
  },
  /** ---npm packages
   * jsx: {
   *   '@babel/core': '7.18.10',
   *   '@babel/eslint-parser': '7.18.9',
   * },
   */
  npmPkgs: {
    eslint: {
      eslint: '8.44.0',
    },
    html: {
      'eslint-plugin-html': '7.1.0',
    },
    prettier: {
      prettier: '2.8.8',
      'eslint-config-prettier': '8.8.0',
      'eslint-plugin-prettier': '4.2.1',
    },
    js: {},
    tsBase: {
      typescript: 'latest',
    },
    ts: {
      '@typescript-eslint/eslint-plugin': '5.62.0',
      '@typescript-eslint/parser': '5.62.0',
    },
    vue2: {
      'vue-eslint-parser': '9.1.0',
      'eslint-plugin-vue': '9.8.0',
    },
    vue3: {
      'vue-eslint-parser': '9.1.0',
      'eslint-plugin-vue': '9.8.0',
    },
    'vue2-ts': {
      'vue-eslint-parser': '9.1.0',
      'eslint-plugin-vue': '9.8.0',
      '@typescript-eslint/eslint-plugin': '5.57.1',
      '@typescript-eslint/parser': '5.57.1',
    },
    'vue3-ts': {
      'vue-eslint-parser': '9.1.0',
      'eslint-plugin-vue': '9.8.0',
      '@typescript-eslint/eslint-plugin': '5.57.1',
      '@typescript-eslint/parser': '5.57.1',
    },
    react: {
      'eslint-plugin-react': '7.31.10',
    },
    'react-ts': {
      '@typescript-eslint/eslint-plugin': '5.57.1',
      '@typescript-eslint/parser': '5.57.1',
    },
    svelte3: {
      'eslint-plugin-svelte': '2.25.0',
      'prettier-plugin-svelte': '2.10.0',
    },
    'svelte3-ts': {
      'eslint-plugin-svelte': '2.32.2',
      'prettier-plugin-svelte': '2.10.1',
      '@typescript-eslint/parser': '5.62.0',
      'svelte-eslint-parser': '0.32.1',
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
    ts: {},
    'vue2-ts': {
      'eslint.validate': ['typescriptreact'], // support tsx
    },
    'vue3-ts': {
      'eslint.validate': ['typescriptreact'], // support tsx
    },
    svelte3: {
      'eslint.validate': ['svelte'],
    },
    'svelte3-ts': {
      'eslint.validate': ['svelte'],
    },
  },
};
