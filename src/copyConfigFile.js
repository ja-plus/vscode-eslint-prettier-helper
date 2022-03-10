const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
const writeFile = promisify(fs.writeFile)
const eslintrc = require('./configFiles/.eslintrc.js')
// Copy config files
let files = fs.readdirSync(path.resolve(__dirname, './configFiles'))

module.exports = function (selectedArr) {
    console.log('Copying config files...')
    console.log(files)

    let promArr = []
    for (const fileName of files) {
        // not copy .eslintrc.js
        if (fileName === '.eslintrc.js') continue
        let prom = copyFile(path.resolve(__dirname, 'configFiles', fileName), fileName)
        promArr.push(prom)
    }

    // add special eslint config
    if (selectedArr.includes('vue')) {
        eslintrc.plugins.push('vue')
        eslintrc.extends.splice(eslintrc.extends.length - 1, 0, 'plugin:vue/recommended') // prettier rule cover vue rule
    }

    if (selectedArr.includes('ts')) {
        eslintrc.parserOptions.parser = '@typescript-eslint/parser'
        eslintrc.plugins.push('@typescript-eslint')
    }
    // create .eslintrc
    promArr.push(writeFile('.eslintrc', JSON.stringify(eslintrc, null, 4)))

    return Promise.all(promArr).then(() => {
        console.log('√ Copying config files succeed')
    })
}
