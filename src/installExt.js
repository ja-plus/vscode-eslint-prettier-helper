const childProcess = require('child_process')
const path = require('path')
const fs = require('fs')
const extFileNames = fs.readdirSync(path.resolve(__dirname, './vscodeExts'))

// console.log('Checks whether the VScode ESLint plugin is installed')
let installedExts = childProcess.execSync('code --list-extensions --show-versions')
installedExts = installedExts.toString().split('\n')

const typeExtMapper = {
    default: ['eslint'],
    js: [],
    vue2: ['vetur'],
    vue3: ['volar'],
}
const codeExt = {
    eslint: { name: 'dbaeumer.vscode-eslint', validVersion: '2.2.0' },
    vetur: { name: 'octref.vetur', validVersion: '0.34.1' },
}

function installVscodePlugin(extName) {
    console.log(`Installing vscode plugin ${extName}...`)
    try {
        // find extension .vsix file
        const vsixName = extFileNames.find(str => str.startsWith(extName))
        // if exist .vsix file ,use it. if not, auto download in vscode extension market
        childProcess.execSync('code --install-extension ' + vsixName ? path.resolve(__dirname, './vscodeExts/', vsixName) : extName)
        console.log(`✔ Vscode plugin(${extName}) installation succeeded`)
    } catch (err) {
        // maybe network error
        // childProcess.execSync('code --install-extension ' + path.resolve(__dirname, './vscodeExts/', extName))
        console.log('✘ Install vscode plugin failed: ' + err)
    }
}

function checkExtension(type) {
    typeExtMapper[type].forEach(exts => {
        const codeExtItem = codeExt[exts]
        // get installedName
        const installedExt = installedExts.find(str => str.startsWith(codeExtItem.name))
        if (installedExt) {
            const installedExtVersion = installedExt.split('@')[1]
            // check installed extension's version
            if (installedExtVersion < codeExtItem.validVersion) {
                console.warn(`Installed plugin version is too early(${installedExt})`)
                installVscodePlugin(codeExtItem.name)
            } else {
                console.log('✔ Installed vscdoe plugin:', installedExt, ' Auto skip this stage')
            }
        } else {
            installVscodePlugin(codeExtItem.name)
        }
    })
}
module.exports = function ({ type }) {
    checkExtension('default')
    checkExtension(type)
}
