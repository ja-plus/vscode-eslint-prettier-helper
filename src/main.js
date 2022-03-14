#!/usr/bin/env node
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()
prompt([
    {
        type: 'list',
        default: 'js',
        name: 'type',
        message: 'Select env:',
        choices: ['js', 'vue', 'ts'],
    },
]).then(async answer => {
    // Check vscode version
    // let vscodeVersion = childProcess.execSync('code --version');
    // vscodeVersion = vscodeVersion.toString();
    // console.log(vscodeVersion);

    require('./installExt.js')()

    // update settings.json
    require('./updateSettings.js')()

    await require('./copyConfigFile.js')(answer)

    require('./installNpmPkgs.js')(answer)

    console.log('\n✔ All task done. Please restart vscode(/Restart eslint plugin/Reolad require). Make effective eslint.')
    console.log('\n? Did not come into effect? Make sure the folder that vscode opened, which has the config file and node_modules in root directory.')
})
