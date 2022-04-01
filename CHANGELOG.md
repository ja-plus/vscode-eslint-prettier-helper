## 1.3.1
* npm i add `--legacy-peer-deps`
* set eslint rule:
    - 'vue/multi-word-component-names': 1, (`vue2-ts`)
    - '@typescript-eslint/no-empty-function': 1 (`vue2-ts` / `vue3-ts`)
    - delete rule: new-cap (`vue2-ts` / `vue3-ts`)

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