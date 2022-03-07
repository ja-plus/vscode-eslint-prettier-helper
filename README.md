# vscode-eslint-prettier-helper
## What will do
* Install vscode eslint plugin
* Npm install eslint prettier packages
* Add .eslintignore .eslintrc.js .prettier.js
* Set vscode settings.json.(do eslint --fix when save file) 
### Installed npm packages versions
> "eslint": "8.1.0",  
> "eslint-config-prettier": "8.4.0",  
> "eslint-plugin-html": "6.2.0",  
> "eslint-plugin-prettier": "4.0.0",  
> "eslint-plugin-vue": "8.5.0",  
> "prettier": "2.5.1"  
### Add this config to vscode settings.json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
## Installation & Use
> npm i vscode-eslint-prettier-helper  
> npx i vscode-eslint-prettier-helper
## Pass the test on the following platforms
windows7
> vscode > 1.60  
> node 12.22.9
## ps
vscode eslint plugin < 2.2.0 not support eslint@8