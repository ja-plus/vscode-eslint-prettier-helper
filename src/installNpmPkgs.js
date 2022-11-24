/**
 * install npm packages
 * @author JA+
 */
const childProcess = require('child_process');
const { npmPkgs } = require('./config');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { readFileSync } = require('fs');
const myLog = require('./myLog');
const prompt = inquirer.createPromptModule();

module.exports = async function ({ type }) {
  let npmCmd = 'npm i -D --legacy-peer-deps';
  //  --global install?
  const answer = await prompt({
    type: 'confirm',
    name: 'global',
    message: `npm install --global ?`,
    default: false,
  });
  if (answer.global) npmCmd += ' --global';

  const pkgTypes = ['eslint', 'prettier', type];

  if (await checkTypescriptVersion(type)) {
    pkgTypes.push('tsBase'); // 基本ts依赖
  }

  for (const key of pkgTypes) {
    const pkgs = npmPkgs[key];
    for (const pkg in pkgs) {
      const version = pkgs[pkg];
      npmCmd += ' ' + pkg + '@' + version;
    }
  }
  console.log(npmCmd);
  try {
    childProcess.execSync(npmCmd);
    myLog.success('Npm packages installation succeed');
  } catch (err) {
    if (err) return myLog.danger('Npm install failed', err);
  }
};

/** 提示用户是否安装typescript */
async function checkTypescriptVersion(type) {
  if (type.indexOf('ts') > -1) {
    myLog.start('Checking typescript...');
    // check user if install the typescript dep
    let tsVersion;
    try {
      let tsPackageStr = readFileSync('./node_modules/typescript/package.json');
      let tsPackageJson = JSON.parse(tsPackageStr);
      tsVersion = tsPackageJson.version;
      // const cmdReturn = childProcess.execSync('npm list typescript').toString();
    } catch (e) {
      // -2 not found file or directory
      if (e.errno != -2) {
        myLog.danger('Can not get typescript info');
      }
    }
    if (tsVersion) {
      myLog.success('Currently installed: typescript@', chalk.green(tsVersion));
    } else {
      myLog.warn('Typescript not currently installed.');
    }
    const answer = await prompt({
      type: 'confirm',
      name: 'installTs',
      message: `Install typescript@${npmPkgs.tsBase.typescript}?`,
      default: !tsVersion,
    });
    return answer.installTs;
  }
}
