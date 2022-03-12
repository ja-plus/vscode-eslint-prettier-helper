const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
// const writeFile = promisify(fs.writeFile)
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()
// Copy config files
let files = fs.readdirSync(path.resolve(__dirname, './configFiles'))

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
    console.log('Copying config files...')
    // console.log(files)
    try {
        for (const fileName of files) {
            // not copy .eslintrc.xx.js
            if (fileName.startsWith('.eslintrc')) continue
            await copyFileWrapper(fileName)
        }
        // create .eslintrc
        await copyFileWrapper(`.eslintrc.${type}.js`, '.eslintrc.js')

        console.log('✔ Copying config files succeed')
    } catch (err) {
        console.err('✘ Copying file err.', err)
    }
}
