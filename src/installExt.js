/**
 * Install vscode extension by vscode cli
 * @author JA+
 */
const childProcess = require('child_process');
const path = require('path');
const fs = require('fs');
const { typeExtMapper, codeExt } = require('./config');
const myLog = require('./myLog');

const extFileNames = fs.readdirSync(path.resolve(__dirname, './vscodeExts'));

// console.log('Checks whether the VScode ESLint plugin is installed')
let installedExts = childProcess.execSync('code --list-extensions --show-versions');
installedExts = installedExts.toString().split('\n');

/**
 * @param {string} extName
 */
function installVscodeExtension(extName) {
  myLog.start(`Installing vscode plugin ${extName}...`);
  try {
    // find extension .vsix file
    const vsixName = extFileNames.find(str => str.startsWith(extName));
    // if exist .vsix file ,use it. if not, auto download in vscode extension market
    let cmd = 'code --install-extension ' + (vsixName ? path.resolve(__dirname, './vscodeExts/', vsixName) : extName);
    childProcess.execSync(cmd);
    myLog.success(`Vscode plugin(${extName}) installation succeeded`);
  } catch (err) {
    // maybe network error
    myLog.danger('Install vscode plugin failed: ' + err);
  }
}
/**
 *
 * @param {string} type selected env type
 */
function checkExtension(type) {
  if (!typeExtMapper[type]) return;
  typeExtMapper[type].forEach(exts => {
    const codeExtItem = codeExt[exts];
    // get installedName
    const installedExt = installedExts.find(str => str.startsWith(codeExtItem.name));
    if (installedExt) {
      const installedExtVersion = installedExt.split('@')[1];
      // check installed extension's version
      if (installedExtVersion < codeExtItem.validVersion) {
        myLog.warn(`Installed plugin version is too early(${installedExt})`);
        installVscodeExtension(codeExtItem.name);
      } else {
        myLog.success('Installed vscode plugin:', installedExt, '. Auto skip this stage');
      }
    } else {
      installVscodeExtension(codeExtItem.name);
    }
  });
}
/**
 *
 * @param {{type:string}}} param0
 */
module.exports = function ({ type }) {
  checkExtension('eslint');
  checkExtension(type);
  if (type.startsWith('vue')) {
    myLog.tip('If eslint not work with vue-cli, Try to remove @vue/cli-plugin-eslint');
  }
};
