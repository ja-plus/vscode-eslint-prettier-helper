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

// global install deps?
// const argvs = process.argv.slice(2);
// let isGlobalInstall = argvs.some(arg => ['-g', '--global'].includes(arg));

module.exports = async function ({ type }) {
  let npmCmd = 'npm i -D --legacy-peer-deps --progress=false';
  // #region --global install deps?
  // const answer = await prompt({
  //   type: 'confirm',
  //   name: 'global',
  //   message: `npm install eslint into --global ?`,
  //   default: false,
  // });
  // if (answer.global) isGlobalInstall = true;
  // #endregion

  const pkgTypes = ['eslint', 'html', 'prettier', type];

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
  try {
    // if (isGlobalInstall) {
    //   const cmd = 'npm i -D --legacy-peer-deps --progress=false --global eslint@' + npmPkgs.eslint;
    //   console.log(cmd);
    //   childProcess.execSync(cmd);
    // }
    console.log(npmCmd);
    childProcess.execSync(npmCmd);
    myLog.success('Npm packages installation succeed');
  } catch (err) {
    if (err) return myLog.danger('Npm install failed', err);
  }
};

/** 提示用户是否安装typescript */
async function checkTypescriptVersion(type) {
  if (type.indexOf('ts') > -1) {
    // check user if install the typescript dep
    let tsVersion;
    try {
      const tsPackageStr = readFileSync('./node_modules/typescript/package.json', { encoding: 'utf-8' });
      const tsPackageJson = JSON.parse(tsPackageStr);
      tsVersion = tsPackageJson.version;
      // const cmdReturn = childProcess.execSync('npm list typescript').toString();
    } catch (e) {
      // -2 not found file or directory
      if (e.errno !== -2) {
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
