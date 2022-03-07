#!/bin/sh
codeVersion=$(code -v | head -n 1)
extNum=$(code --list-extensions --show-versions | grep "vscode-eslint" -c)
shDir=$(dirname $0)
echo "VSCode Version: "$codeVersion
if [ $extNum == 0 ];
  then
  echo "Installing vscode eslint plugin..."
  code --install-extension ./$shDir/vscodeExts/dbaeumer.vscode-eslint-2.2.3.vsix
else
  echo "exist vscode eslint plugin"
fi

echo "Copy config files to the root directory..."
cp -r ./$shDir/configFiles/. ./

node ./$shDir/updateSettings.js

echo "Installing npm dependencies..."
npm i -D eslint@8.1.0 eslint-config-prettier@8.4.0 eslint-plugin-html@6.2.0 eslint-plugin-prettier@4.0.0 eslint-plugin-vue@8.5.0 prettier@2.5.1

echo "Please restart vscode client"