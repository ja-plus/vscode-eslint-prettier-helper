# vscode-eslint-prettier-helper
自动配置vscode eslint prettier 环境

Automatically configure `Visual Studio Code` eslint + prettier code formatter

## Usage | 使用方式
> npx vscode-eslint-prettier-helper [-g] <br>
> **or install first**<br>
> npm i vscode-eslint-prettier-helper<br>
> npx veph [-g]<br>

## CLI Args
| arg | describe |
| ---- | ---- |
| -g | npm i `-g` \| 依赖安装到全局 |
## Suggestion | 建议
select npm install --global | 将依赖安装在全局
## Support | 支持环境
* js
* ts
* vue2
* vue3
* vue2 + ts
* vue3 + ts
* react(Beta)
* react + ts(Beta)
* svelte3
## What will do | 它会做什么

<details>
<summary>Install vscode extensions | 安装vscode扩展</summary>

* dbaeumer.vscode-eslint (offline，version:2.2.3)
* octref.vetur (online) [`vue2`]
* Vue.volar (online) [`vue3`]
* svelte.svelte-vscode (online) [`svelte`]
</details>

<details>
<summary>Add config files | 添加配置文件</summary>

* .eslintrc.js 
* .eslintignore 
* .prettier.js
* .prettierignore
* jsconfig.json [`vue2`, `vue3`] //  This file make vscode recognize '@' alias 
</details>

<details>
<summary>Npm install eslint prettier packages | 安装eslint prettier npm依赖</summary>

```js
  eslint: {
    eslint: '8.24.0',
    'eslint-plugin-html': '7.1.0',
  },
  prettier: {
    prettier: '2.7.1',
    'eslint-config-prettier': '8.5.0',
    'eslint-plugin-prettier': '4.2.1',
  },
  tsBase: {
    typescript: 'latest',
  },
  ts: {
    '@typescript-eslint/eslint-plugin': '5.32.0',
    '@typescript-eslint/parser': '5.32.0',
  },
  vue2: {
    'vue-eslint-parser': '9.1.0',
    'eslint-plugin-vue': '9.5.1',
  },
  vue3: {
    'vue-eslint-parser': '9.1.0',
    'eslint-plugin-vue': '9.5.1',
  },
  'vue2-ts': {
    'vue-eslint-parser': '9.1.0',
    'eslint-plugin-vue': '9.5.1',
    '@typescript-eslint/eslint-plugin': '5.32.0',
    '@typescript-eslint/parser': '5.32.0',
    '@vue/eslint-config-typescript': '8.0.0',
  },
  'vue3-ts': {
    'vue-eslint-parser': '9.1.0',
    'eslint-plugin-vue': '9.5.1',
    '@typescript-eslint/eslint-plugin': '5.32.0',
    '@typescript-eslint/parser': '5.32.0',
    '@vue/eslint-config-typescript': '8.0.0',
  },
  react: {
    'eslint-plugin-react': '7.31.10',
  },
  'react-ts': {
    '@typescript-eslint/eslint-plugin': '5.32.0',
    '@typescript-eslint/parser': '5.32.0',
  },
  svelte3: {
    'eslint-plugin-svelte': '2.10.0',
    'prettier-plugin-svelte': '2.7.1',
  },
```
</details>

<details>
<summary>Update vscode settings.json | 更新vscode setting.json配置</summary>

* Windows: ${userHomeDir}/AppData/Roaming/Code/User/settings.json
* Linux: ${userHomeDir}/.config/Code/User/settings.json

Auto run eslint --fix when save file(*press ctrl + s*) | 保存代码时，自动格式化代码

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
    
when select `svelte3`
```json
"eslint.validate": [
    "javascript",
    "svelte"
],
```
when select `vue2-ts`,`vue3-ts`
```json
  "eslint.validate": ["typescriptreact"], // support tsx
```
</details>

## VS Code 版本和node版本尽量新

## ps
* vscode eslint plugin < 2.2.0 not support eslint@8  
| vscode eslint插件版本< 2.2.0 则不支持eslint@8
* If it not work in vue-cli@4, Try `npm remove @vue/cli-plugin-eslint babel-eslint`, and remove eslint config in `package.json` if exist.  
| 如果在vue-cli中不生效，则尝试移除`@vue/cli-plugin-eslint babel-eslint`。package.json中，如有eslint配置，请删除。
* Needn't install vscode `prettier extension`  
| 不需要安装vscode的prettier扩展
* After modify the prettierrc.js, we need restart eslint  
| 修改prettierrc.js配置后，请重启eslint 插件使其生效 (Press F1, and select `ESLint: Restart ESLint Server`) 