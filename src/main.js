#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const childProcess = require('child_process');
const copyFile = promisify(fs.copyFile);

// 检查vscode版本
// let vscodeVersion = childProcess.execSync('code --version');
// vscodeVersion = vscodeVersion.toString();
// console.log(vscodeVersion);

// 检查vscode中是否安装了eslint
console.log('Checks whether the VScode ESLint plugin is installed');
let installedExts = childProcess.execSync(
  'code --list-extensions --show-versions'
);
installedExts = installedExts.toString().split('\n');
let installedEslintExt = installedExts.find((str) =>
  /dbaeumer\.vscode-eslint/.test(str)
);
if (installedEslintExt) {
  console.log('Installed vscdoe eslint plugin:', installedEslintExt);
  const eslintExtVersion = installedEslintExt.split('@')[1];
  if (eslintExtVersion < '2.2.0') {
    console.warn('Installed ESLint plugin version is too early.' + installedEslintExt);
    installVscodePlugin();
  }
}else{
  installVscodePlugin();
}

function installVscodePlugin() {
  console.log('Installing vscode eslint plugin 2.2.3...');
  childProcess.exec(
    'code --install-extension ' +
    path.resolve(
      __dirname,
      './vscodeExts/dbaeumer.vscode-eslint-2.2.3.vsix'
    ),
    (err, stdout) => {
      if (err) return console.log('Install vscode eslint plugin failed: ', err);
      // console.log(stdout);
      console.log('√ Vscode eslint plugin installation succeeded');
    }
  );
}

// Copy config files
const files = fs.readdirSync(path.resolve(__dirname, './configFiles'));
console.log('Copying config files...');
console.log(files);
let promArr = [];
for (const fileName of files) {
  let prom = copyFile(path.resolve(__dirname, 'configFiles', fileName), fileName)
  promArr.push(prom);
}
Promise.all(promArr).then(() => {
  console.log('√ Copying config files succeed');
});

// update settings.json
childProcess.fork(path.resolve(__dirname, './updateSettings.js'));

// install npm packages
const eslintPkg = require('./version.json');
let npmCmd = 'npm i -D';
for (const pkg in eslintPkg) {
  const version = eslintPkg[pkg];
  npmCmd += ' ' + pkg + '@' + version;
}
console.log('Installing npm packages...');
console.log(npmCmd);
childProcess.exec(npmCmd, (err, stdout) => {
  if(err) return console.err('Npm install failed', err)
  console.log('√ Npm packages installation succeed');
  setTimeout(() => {
    console.log('\nPlease restart vscode!');
  }, 500);
});
