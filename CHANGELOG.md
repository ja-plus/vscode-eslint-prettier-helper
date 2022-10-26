## 1.5.1
* fix:  eslint rule `no-unused-vars` not work in `vue2` `vue3`
* add: support `react`
## 1.5.0
* update: update dep `eslint`,`vue-eslint-parser`,`eslint-plugin-vue`,
* update: vscode ext `volar`,change id: `Vue.volar`
* add: `svelte3` support prettier !.
## 1.4.7
* add: `'prefer-const': 1` in `js`,`vue2`,`vue3`、
* add: question npm install `typescript` when selected contain `ts` 
* add: vscode setting:`'eslint.validate': ['typescriptreact']` to support `tsx` file validate in `vue2-ts`,`vue3-ts`
* add: eslint config `'no-unused-vars': [1, { argsIgnorePattern: 'h' }]` in `vue2`,`vue3`
* add: eslint config `'@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: 'h' }]` in `vue2-ts`,`vue3-ts`
* add: check if typescript installed when select about `ts`
* optimize: log color
## 1.4.6
* fix: select `ts` and operation error
## 1.4.5
* add: version log
* add: `chalk` highlight log
* add: use `vue-eslint-parser` parser in (`vue2-ts` / `vue3-ts`) eslint config file
* update: npm dependencies version
## 1.4.4
* support vue2.7 setup macros `defineProps` `defineEmits` `defineExpose` `withDefaults`
* upgrade dependencies `eslint-plugin-vue` `vue-eslint-parser`
## 1.4.3
* remove: eslint.rc `'spaced-comment': 1` when use typescript.
* add: use `vue-eslint-parser` parser in (`vue2` / `vue3`) eslint config file
* remove: prettierrc.js config : `semi: false` (default: true)
## 1.4.2
* change: default prettier config tabWidth: 4 -> 2
* add: default eslint config:
    * 'no-new-object': 1
    * 'object-shorthand': 1
* upgrade: `@babel/eslint-parser@7.17.0` -> `@babel/eslint-parser@7.18.2`
* add: `@babel/core@'7.18.2`, eslint.rc  `requireConfigFile: false`. when use `@babel/eslint-parser`
## 1.4.1
* fix: remove svelte3 prettier config, prettier npm packages
* add: `@babel/eslint-parser` to support jsx (`vue2` / `vue3`)
## 1.4.0
* add: svelte3 support. (Not use prettier)
## 1.3.2
* update:eslint rule:
    - add: '@typescript-eslint/no-var-requires': 0 (`vue2-ts` / `vue3-ts`)
* fix: Can't install vscode extension in linux
## 1.3.1
* add: npm i add `--legacy-peer-deps`
* update: eslint rule:
    - add: 'vue/multi-word-component-names': 1, (`vue2-ts`)
    - add: '@typescript-eslint/no-empty-function': 1 (`vue2-ts` / `vue3-ts`)
    - delete: new-cap (`vue2-ts` / `vue3-ts`)
* add: Support linux ( tested on deepin 20.4 )

## 1.3.0
* add: `vue2-ts`, `vue3-ts` options
* add: vscode version check > 1.60
## 1.2.0
* add: `vue3` options
* add: command alias: `npx veph`
* add: jsconfig.json in vue2
* add: vscode extension(`octref.vetur`) when select vue2
* add: vscode extension(`johnsoncodehk.volar`) when select vue3
* change: `vue` to `vue2`
## 1.1.2
* add: add `js` option, as default selection
* add: When copying config file, prompt if overwrite
* change: sync code
* change: single select env
* change: every env has it's eslintrc.xx.js
* change: remove `vue` as default choice
* change: remove useless rules in `.eslintrc.js`
## 1.1.1
* fix: update vscode setting.json not work 
## 1.1.0 
* fix: .prettierrc.js `arrowParens` spell mistake
* add: command select. (depend inquirer)
* add: support choose env 'vue' and 'ts'
* update package version
## 1.0.3
* add: .prettierignore file