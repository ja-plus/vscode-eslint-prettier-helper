#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const childProcess = require('child_process');
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
    console.log('已安装的eslint 插件版本过低:' + installedEslintExt);
    console.log('Installing vscode eslint plugin 2.2.3');
    childProcess.exec(
      'code --install-extension ' +
        path.resolve(
          __dirname,
          './vscodeExts/dbaeumer.vscode-eslint-2.2.3.vsix'
        ),
      (err, stdout) => {
        if(err) return console.log('Installation vscode eslint plugin failed: ', err);
        // console.log(stdout);
        console.log('Plug-in installation succeeded');
      }
    );
  }
}

// 复制配置文件到当前目录下
const files = fs.readdirSync(path.resolve(__dirname, './configFiles'));
console.log('Copying config files...', files);
let promArr = [];
for (const fileName of files) {
  let prom = readFile(path.resolve(__dirname, 'configFiles', fileName)).then(
    (data) => {
      fs.writeFile(fileName, data, (err) => {
        if (err) console.err(err);
      });
    }
  );
  promArr.push(prom);
}
Promise.all(promArr).then(() => {
  console.log('Copying finished');
});

// 更新settings.json
childProcess.fork(path.resolve(__dirname, './updateSettings.js'));

// 安装需要的npm包
const eslintPkg = require('./version.json');
let npmCmd = 'npm i -D';
for (const pkg in eslintPkg) {
  const version = eslintPkg[pkg];
  npmCmd += ' ' + pkg + '@' + version;
}
console.log('Installing npm packages...');
console.log(npmCmd);
childProcess.exec(npmCmd, (err, stdout) => {
  console.log('Npm packages installation succeed');
});
