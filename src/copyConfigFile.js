/**
 * Copy config files
 * @author JA+
 */
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()

/**
 * @param {string} sourceFileName 原文件名
 * @param {string} [targetFileName=sourceFileName] 目标文件名
 * @return {Promise<void>}
 */
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
        await copyFileWrapper('.eslintignore')

        if (type !== 'svelte3') {
            // copy prettier file
            await copyFileWrapper('.prettierrc.js')
            await copyFileWrapper('.prettierignore')
        }

        // copy jsconfig.json
        if (['vue2', 'vue3'].includes(type)) await copyFileWrapper('jsconfig.json')

        console.log('✔ Copying config files succeed')
    } catch (err) {
        console.error('✘ Copying file err.', err)
    }
}
