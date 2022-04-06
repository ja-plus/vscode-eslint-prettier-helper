const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
// const writeFile = promisify(fs.writeFile)
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()
// Copy config files
// let files = fs.readdirSync(path.resolve(__dirname, './configFiles'))

function copyFileWrapper(sourceFileName, targetFileName = sourceFileName) {
    let fileExist = fs.existsSync(targetFileName)
    let prom = Promise.resolve()
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
                return copyFile(path.resolve(__dirname, 'configFiles', sourceFileName), targetFileName)
            }
        })
    } else {
        prom = copyFile(path.resolve(__dirname, 'configFiles', sourceFileName), targetFileName).then(() => {
            console.log('Create File: ' + targetFileName)
        })
    }
    return prom
}

module.exports = async function ({ type }) {
    // console.log(files)
    try {
        // copy .eslintrc file
        await copyFileWrapper(`.eslintrc.${type}.js`, '.eslintrc.js')
        // copy jsconfig.json
        if (['vue2', 'vue3'].includes(type)) await copyFileWrapper('jsconfig.json')

        // copy other file
        const files = ['.eslintignore', '.prettierignore', '.prettierrc.js']
        for (let i = 0; i < files.length; i++) {
            const fileName = files[i]
            await copyFileWrapper(fileName)
        }

        console.log('✔ Copying config files succeed')
    } catch (err) {
        console.error('✘ Copying file err.', err)
    }
}
