#!/usr/bin/env node
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()
prompt([
    {
        type: 'list',
        default: 'js',
        name: 'type',
        message: 'Select env:',
        choices: ['js', 'vue2', 'vue3', 'ts', 'vue2-ts'],
    },
]).then(async answer => {
    // Check vscode version
    // let vscodeVersion = childProcess.execSync('code --version');
    // vscodeVersion = vscodeVersion.toString();
    // console.log(vscodeVersion);
    try {
        console.log('\n► Start Installing vscode extension.')
        require('./installExt.js')(answer)

        // update settings.json
        console.log('\n► Vscode settings.json add configuration...')
        require('./updateSettings.js')()

        console.log('\n► Copying config files...')
        await require('./copyConfigFile.js')(answer)

        console.log('\n►Installing npm packages...')
        require('./installNpmPkgs.js')(answer)

        console.log('\n✔ All task done. Please restart vscode(/Restart eslint plugin/Reload require). Make effective eslint.')
        console.log(
            '\n? Did not come into effect? Make sure the folder that vscode opened, which has the config file and node_modules in root directory.',
        )
    } catch (err) {
        console.error(err)
    }
})
