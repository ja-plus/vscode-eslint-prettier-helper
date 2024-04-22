## 1.8.2
* revert: config.js
* upgrade: dependencies.

## 1.8.1 deprecated
* upgrade: dependencies.

## 1.8.0
* upgrade: dependencies. upgrade `prettier@3` 
## 1.7.4
* add： `'@typescript-eslint/no-inferrable-types': 1,` in vue-ts file
* upgrade: dependencies
## 1.7.3
* update: `svelte3-ts` config
## 1.7.2
* update: dependencies
## 1.7.1
* update: remove `eslint:recommend` in `eslint` config when select ts. Resolve the 'undef' error when use the type declared in d.ts file,
* update: remove unnecessary plugins config in eslint.config files
## 1.7.0
* add: `svelte-ts`
* update: upgrade dependencies
## 1.6.4
* add: `parserOptions.ecmaFeatures.jsx` = true to eslint config to support jsx in `.vue` SFC(lang='tsx').`vue2-ts`,`vut3-ts`,
## 1.6.3
* update: eslint.vue3-ts varsIgnorePattern: 'h'
* update: deps version `ts` `vue` `eslint` `prettier`
## 1.6.2
* delete: `-g` cli param
* change: overwrite config file default to false.
* update: `svelte3` dependencies
## 1.6.1
* fix: Change all config files' suffix: *.js => *.cjs. Config file still use commonjs to export
## 1.6.0
* feature: Change config file commonjs to ESModule, when package.json has `type:"module"`.It's means support vite.
* remove: `vue2-ts`,`vue3-ts` deps `@vue/eslint-config-typescript': '8.0.0`. Because it's not needed anymore
* remove: delete some useless dependencies in package.json
* update: `vue2` vscode extension `Vetur` => `Volar`
## 1.5.4
* update: `vue2-ts`,`vue3-ts` : eslint config add extends `'plugin:@typescript-eslint/recommended'`  (support .tsx)
## 1.5.3
* update: `vue2-ts`,`vue3-ts` : eslint config remove extends `'@vue/typescript/recommended'`
## 1.5.2
* add: `react-ts` beta
* add: choose add `--global`
* add: cli `-g` arg
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