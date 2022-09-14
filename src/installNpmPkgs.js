/**
 * install npm packages
 * @author JA+
 */
const childProcess = require('child_process');
const { npmPkgs } = require('./config');
const chalk = require('chalk');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

module.exports = async function ({ type }) {
  let npmCmd = 'npm i -D --legacy-peer-deps';

  const pkgTypes = ['eslint'];
  if (type !== 'svelte3') {
    // svelte not support prettier
    pkgTypes.push('prettier');
  }
  pkgTypes.push(type);

  if (await checkTypescriptVersion(type)) {
    pkgTypes.push('tsBase');
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
    console.log('✔ Npm packages installation succeed');
  } catch (err) {
    if (err) return console.error('✘ Npm install failed', err);
  }
};

/** 提示用户是否安装typescript */
async function checkTypescriptVersion(type) {
  if (type.indexOf('ts') > -1) {
    console.log('Checking typescript...');
    // check user if install the typescript dep
    const cmdReturn = childProcess.execSync('npm list typescript').toString();
    const tsInfo = cmdReturn.match(/typescript@\d(\.\d{1,2}){2}/);
    let defaultInstallTs = false;
    if (tsInfo) {
      console.log('Currently installed: ', chalk.green(tsInfo[0].toLowerCase()));
    } else {
      defaultInstallTs = true;
      console.log('Typescript not currently installed.');
    }
    const answer = await prompt({
      type: 'confirm',
      name: 'installTs',
      message: `Install typescript@${npmPkgs.tsBase.typescript}?`,
      default: defaultInstallTs,
    });
    return answer.installTs;
  }
}
