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
      eslint: '8.57.0',
    },
    html: {
      'eslint-plugin-html': '8.1.0',
    },
    prettier: {
      prettier: '3.2.5',
      'eslint-config-prettier': '9.1.0',
      'eslint-plugin-prettier': '5.1.3',
    },
    js: {},
    tsBase: {
      typescript: 'latest',
    },
    ts: {
      '@typescript-eslint/eslint-plugin': '7.7.0',
      '@typescript-eslint/parser': '7.7.0',
    },
    vue2: {
      'vue-eslint-parser': '9.4.2',
      'eslint-plugin-vue': '9.25.0',
    },
    vue3: {
      'vue-eslint-parser': '9.4.2',
      'eslint-plugin-vue': '9.25.0',
    },
    'vue2-ts': {
      'vue-eslint-parser': '9.4.2',
      'eslint-plugin-vue': '9.25.0',
      '@typescript-eslint/eslint-plugin': '7.7.0',
      '@typescript-eslint/parser': '7.7.0',
    },
    'vue3-ts': {
      'vue-eslint-parser': '9.4.2',
      'eslint-plugin-vue': '9.25.0',
      '@typescript-eslint/eslint-plugin': '7.7.0',
      '@typescript-eslint/parser': '7.7.0',
    },
    react: {
      'eslint-plugin-react': '7.34.1',
    },
    'react-ts': {
      '@typescript-eslint/eslint-plugin': '7.7.0',
      '@typescript-eslint/parser': '7.7.0',
    },
    svelte3: {
      'eslint-plugin-svelte': '2.37.0',
      'prettier-plugin-svelte': '3.2.3',
    },
    'svelte3-ts': {
      'eslint-plugin-svelte': '2.37.0',
      'prettier-plugin-svelte': '3.2.3',
      '@typescript-eslint/parser': '7.7.0',
      'svelte-eslint-parser': '0.34.1',
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
