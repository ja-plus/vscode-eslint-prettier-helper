# vscode-eslint-prettier-helper
## What will do
* Install vscode eslint plugin (*dbaeumer.vscode-eslint-2.2.3.vsix*)
* Npm install eslint prettier packages
* Add .eslintignore .eslintrc.js .prettier.js .prettierignore
* Set vscode settings.json.(do eslint --fix when save file) 
### Installed npm packages versions
> "eslint": "8.1.0",  
> "eslint-config-prettier": "8.4.0",  
> "eslint-plugin-html": "6.2.0",  
> "eslint-plugin-prettier": "4.0.0",  
> "eslint-plugin-vue": "8.5.0",  
> "prettier": "2.5.1"  
### Add this config to vscode settings.json
path: ${userHomeDir}/AppData/Roaming/Code/User/settings.json
```  
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
## Use
> npx vscode-eslint-prettier-helper  
> **or install first**  
> npm i vscode-eslint-prettier-helper  
> node node_modules/vscode-eslint-prettier-helper/src/main.js
## Pass the test on the following platforms
windows7
> vscode > 1.60 (which can install the supported eslint plugin2.2.3)  
> node 12.22.9
## ps
vscode eslint plugin < 2.2.0 not support eslint@8  
### about
**vscode-eslint-prettier-helper/src/main.sh**  
The bash can't run on windows without git bash. It not fully been tested.