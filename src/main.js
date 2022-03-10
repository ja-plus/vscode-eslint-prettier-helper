#!/usr/bin/env node
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()
prompt([
    {
        type: 'checkbox',
        default: '',
        name: 'type',
        message: 'Select env:',
        choices: ['vue', 'ts'],
    },
]).then(answer => {
    answer.type.unshift('js') // default js
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
