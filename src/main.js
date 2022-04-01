#!/usr/bin/env node
const childProcess = require('child_process')
const inquirer = require('inquirer')
const { promptChoices, minCodeVersion } = require('./config.js')
const prompt = inquirer.createPromptModule()

let vscodeVersion = childProcess.execSync('code --version').toString()
vscodeVersion = vscodeVersion.split('\n')[0]

let promptParams = []

// Check vscode version
if (vscodeVersion < minCodeVersion) {
    promptParams.push({
        type: 'confirm',
        name: 'invalidVersion',
        message: `Your vscode version(${vscodeVersion}) < ${minCodeVersion}, It can cause some errors, Still continue?`,
        default: false,
    })
}

promptParams.push({
    type: 'list',
    default: 'js',
    name: 'type',
    message: 'Select env:',
    choices: promptChoices,
    when(answer) {
        return answer.invalidVersion === undefined || answer.invalidVersion === true
    },
})

prompt(promptParams).then(async answer => {
    if (answer.invalidVersion === false) return

    try {
        console.log('\n► Start Installing vscode extension.')
        require('./installExt.js')(answer)

        // update settings.json
        console.log('\n► Vscode settings.json add configuration...')
        require('./updateSettings.js')()

        console.log('\n► Copying config files...')
        await require('./copyConfigFile.js')(answer)

        console.log('\n► Installing npm packages...')
        require('./installNpmPkgs.js')(answer)

        console.log('\n✔ All task done. Please restart vscode( / Restart eslint plugin / Reload require). Make effective eslint.')
        console.log(
            '\n? Did not come into effect? Make sure the folder that vscode opened, which has the config file and node_modules in root directory.',
        )
    } catch (err) {
        console.error(err)
    }
})
