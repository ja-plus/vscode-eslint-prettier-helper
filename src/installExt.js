const childProcess = require('child_process')
const path = require('path')

// console.log('Checks whether the VScode ESLint plugin is installed')
let installedExts = childProcess.execSync('code --list-extensions --show-versions')
installedExts = installedExts.toString().split('\n')
let installedEslintExt = installedExts.find(str => /dbaeumer\.vscode-eslint/.test(str))

function installVscodePlugin() {
    console.log('Installing vscode eslint plugin 2.2.3...')
    try {
        childProcess.execSync('code --install-extension ' + path.resolve(__dirname, './vscodeExts/dbaeumer.vscode-eslint-2.2.3.vsix'))
        console.log('✔ Vscode eslint plugin installation succeeded')
    } catch (err) {
        console.log('✘ Install vscode eslint plugin failed: ', err)
    }
}

module.exports = function () {
    if (installedEslintExt) {
        const eslintExtVersion = installedEslintExt.split('@')[1]
        if (eslintExtVersion < '2.2.0') {
            console.warn('Installed ESLint plugin version is too early.' + installedEslintExt)
            installVscodePlugin()
        } else {
            console.log('✔ Installed vscdoe plugin:', installedEslintExt, ' Auto skip this stage')
        }
    } else {
        installVscodePlugin()
    }
}
