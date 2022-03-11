#!/usr/bin/env node
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()
prompt([
    {
        type: 'list',
        default: 'js',
        name: 'type',
        message: 'Select env:',
        choices: ['js', 'vue' , 'ts'],
    },
]).then(answer => {
    // Check vscode version
    // let vscodeVersion = childProcess.execSync('code --version');
    // vscodeVersion = vscodeVersion.toString();
    // console.log(vscodeVersion);

    require('./installExt.js')()

    // update settings.json
    require('./updateSettings.js')()

    require('./copyConfigFile.js')(answer)

    require('./installNpmPkgs.js')(answer)
})
