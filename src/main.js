#!/usr/bin/env node
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()
prompt([
    {
        type: 'checkbox',
        default: ['js', 'vue'],
        name: 'type',
        message: 'Select env:',
        choices: ['js', 'vue' /* , 'ts' */],
    },
]).then(answer => {
    if (!answer.type.includes('js')) {
        answer.type.unshift('js') // default js
    }
    // Check vscode version
    // let vscodeVersion = childProcess.execSync('code --version');
    // vscodeVersion = vscodeVersion.toString();
    // console.log(vscodeVersion);

    require('./installExt.js')()

    // update settings.json
    require('./updateSettings.js')()

    require('./copyConfigFile.js')(answer.type)

    require('./installNpmPkgs.js')(answer.type)
})
