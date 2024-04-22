#!/usr/bin/env node
/**
 * Entry
 * @author JA+
 */
const childProcess = require('child_process');
const pkg = require('../package.json');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { promptChoices, minCodeVersion } = require('./config.js');
const myLog = require('./myLog');
const prompt = inquirer.createPromptModule();

let vscodeVersion = childProcess.execSync('code --version').toString();
vscodeVersion = vscodeVersion.split('\n')[0];

const promptParams = [];
console.log('version:', chalk.green(pkg.version));
// Check vscode version
if (vscodeVersion < minCodeVersion) {
  promptParams.push({
    type: 'confirm',
    name: 'invalidVersion',
    message: `Your vscode version(${vscodeVersion}) < ${minCodeVersion}, It can cause some errors, Still continue?`,
    default: false,
  });
}

promptParams.push({
  type: 'list',
  default: 'js',
  name: 'type',
  message: 'Select env:',
  choices: Object.keys(promptChoices),
  when(answer) {
    return answer.invalidVersion === undefined || answer.invalidVersion === true;
  },
});

prompt(promptParams).then(async answer => {
  if (answer.invalidVersion === false) return;
  answer.type = promptChoices[answer.type]; // key转换成value
  try {
    myLog.start('Start Installing vscode extension.');
    require('./installExt.js')(answer);

    // update settings.json
    myLog.start('Vscode settings.json add configuration...');
    require('./updateSettings.js')(answer);

    myLog.start('Copying config files...');
    await require('./copyConfigFile.js')(answer);

    myLog.start('Installing npm packages...');
    await require('./installNpmPkgs.js')(answer);

    myLog.success('All task done. Please restart vscode( / Restart eslint plugin / Reload require). Make effective eslint.');
    myLog.tip('Did not come into effect? Make sure the folder that vscode opened, which has the config file and node_modules in root directory.');
  } catch (err) {
    myLog.danger(err);
  }
});
