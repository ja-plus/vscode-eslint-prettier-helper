/**
 * Copy config files
 * @author JA+
 */
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const { promisify } = require('util');
const copy = promisify(fs.copyFile);
const inquirer = require('inquirer');
const myLog = require('./myLog');
const prompt = inquirer.createPromptModule();

const packageJson = fs.readFileSync('./package.json', { encoding: 'utf-8' });
const json = JSON.parse(packageJson);
/** if the project is ESModule */
const isESM = json.type === 'module';

/**
 * @param {string} sourceFileName 原文件名
 * @param {string} [targetFileName=sourceFileName] 目标文件名
 * @return {Promise<void>}
 */
function copyFile(sourceFileName, targetFileName = sourceFileName) {
  // if package.json type === module represent the project use ESModule，module.exports replace with export default
  if (isESM) {
    let sourceFileText = fs.readFileSync(path.resolve(__dirname, 'configFiles', sourceFileName), { encoding: 'utf-8' });
    sourceFileText = sourceFileText.replace(/module.exports\s+=/, 'export default');
    // write file
    fs.writeFile(targetFileName, sourceFileText, err => {
      if (err) myLog.danger('Write file error.' + targetFileName, err);
    });
    return Promise.resolve();
  }
  return copy(sourceFileName, targetFileName);
}

/**
 * @param {string} sourceFileName 原文件名
 * @param {string} [targetFileName=sourceFileName] 目标文件名
 * @return {Promise<void>}
 */
function copyFileWrapper(sourceFileName, targetFileName = sourceFileName) {
  const fileExist = fs.existsSync(targetFileName);
  let prom = Promise.resolve();
  if (fileExist) {
    prom = prompt([
      {
        type: 'confirm',
        name: 'isOverwrite',
        message: `Exist file ${targetFileName}, overwrite files?`,
        default: true,
      },
    ]).then(answer => {
      if (answer.isOverwrite) {
        return copyFile(path.resolve(__dirname, 'configFiles', sourceFileName), targetFileName);
      }
    });
  } else {
    prom = copyFile(path.resolve(__dirname, 'configFiles', sourceFileName), targetFileName).then(() => {
      myLog.log('Create File: ', chalk.green(targetFileName));
    });
  }
  return prom;
}

module.exports = async function ({ type }) {
  // console.log(files)
  try {
    // copy .eslintrc file
    await copyFileWrapper(`.eslintrc.${type}.js`, '.eslintrc.js');
    await copyFileWrapper('.eslintignore');

    // copy prettier file
    await copyFileWrapper('.prettierrc.js');
    await copyFileWrapper('.prettierignore');

    // copy jsconfig.json
    if (['vue2', 'vue3'].includes(type)) await copyFileWrapper('jsconfig.json');

    myLog.success('Copying config files succeed');
  } catch (err) {
    myLog.danger('Copying file err: ', err);
  }
};
