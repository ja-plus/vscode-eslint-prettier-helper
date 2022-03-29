# vscode-eslint-prettier-helper
## What will do
* Install vscode plugin (
    - dbaeumer.vscode-eslint (offline)
    - octref.vetur (online) [<code>vue2</code>]
    - johnsoncodehk.volar (online) [<code>vue3</code>]
* Add config files:
    - .eslintrc.js 
    - .eslintignore 
    - .prettier.js 
    - .prettierignore 
    - jsconfig.json [<code>vue2</code>, <code>vue3</code>] // Added when select vue. This file make vscode recognize '@' alias 
* Npm install eslint prettier packages
* Set vscode settings.json.(Auto run eslint --fix when save file(*press ctrl + s*)) 
### Installed npm packages versions
```json
{
  "default":{
    "eslint": "8.10.0",
    "eslint-config-prettier": "8.5.0",
    "eslint-plugin-html": "6.2.0",
    "eslint-plugin-prettier": "4.0.0",
    "prettier": "2.5.1"
  },
  "js":{},
  "ts":{
    "@typescript-eslint/eslint-plugin": "5.14.0",
    "@typescript-eslint/parser": "5.14.0"
  },
  "vue2":{
    "eslint-plugin-vue": "8.5.0"
  },
  "vue3":{
    "eslint-plugin-vue": "8.5.0"
  }
}
``` 
### Add this config to vscode settings.json
path: ${userHomeDir}/AppData/Roaming/Code/User/settings.json
```json  
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
## Use
> npx vscode-eslint-prettier-helper | npx veph  
> **or install first**  
> npm i vscode-eslint-prettier-helper  
> node node_modules/vscode-eslint-prettier-helper/src/main.js
## Pass the test on the following platforms
windows7
> vscode > 1.60 (which can install the supported eslint plugin2.2.3)  
> node 12.22.9
## ps
vscode eslint plugin < 2.2.0 not support eslint@8  
If it not work in vue-cli@4, Try <code>npm remove @vue/cli-plugin-eslint babel-eslint</code>