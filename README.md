# vscode-eslint-prettier-helper
Automatically configure `Visual Studio Code` eslint + prettier code formatter
## How to use
> npx vscode-eslint-prettier-helper  
> **or install first**  
> npm i vscode-eslint-prettier-helper  
> npx veph

## Support
* js
* ts
* vue2
* vue3
* vue2 + ts
* vue3 + ts
* svelte3 (not support prettier)
## What will do

<details>
<summary>Install vscode extensions</summary>

* dbaeumer.vscode-eslint (offline)
* octref.vetur (online) [```vue2```]
* johnsoncodehk.volar (online) [```vue3```]
* svelte.svelte-vscode (online) [```svelte```]
</details>

<details>
<summary>Add config files</summary>

* .eslintrc.js 
* .eslintignore 
* .prettier.js
* .prettierignore
* jsconfig.json [```vue2```, [```vue3```] //  This file make vscode recognize '@' alias 
</details>

<details>
<summary>Npm install eslint prettier packages</summary>

```js
{
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
    ts: {
        '@typescript-eslint/eslint-plugin': '5.14.0',
        '@typescript-eslint/parser': '5.14.0',
    },
    vue2: {
        '@babel/eslint-parser': '7.17.0',
        'eslint-plugin-vue': '8.5.0',
    },
    vue3: {
        '@babel/eslint-parser': '7.17.0',
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
}
```
</details>

<details>
<summary>Update vscode settings.json</summary>

* Windows: ${userHomeDir}/AppData/Roaming/Code/User/settings.json
* Linux: ${userHomeDir}/.config/Code/User/settings.json

Auto run eslint --fix when save file(*press ctrl + s*)

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
    
when select ```svelte3```

```json
"eslint.validate": [
    "javascript",
    "svelte"
],
```
</details>

## Pass the test on the following platforms
### Windows7
> vscode > 1.60 (which can install the supported eslint plugin2.2.3)  
> node 12.22.9
### Linux (deepin 20.4)
> vscode 1.65  
> node 14.16.1

## ps
* vscode eslint plugin < 2.2.0 not support eslint@8  
* If it not work in vue-cli@4, Try `npm remove @vue/cli-plugin-eslint babel-eslint`  
* Needn't install vscode `prettier extension`
* After modify the prettierrc.js, we need restart eslint (Press F1, and select `ESLint: Restart ESLint Server`)