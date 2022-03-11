const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
// const writeFile = promisify(fs.writeFile)

// Copy config files
let files = fs.readdirSync(path.resolve(__dirname, './configFiles'))

module.exports = function ({type}) {
    console.log('Copying config files...')
    // console.log(files)
    let promArr = []
    for (const fileName of files) {
        // TODO: check if file exist
        // not copy .eslintrc.xx.js
        if (fileName.startsWith('.eslintrc')) continue
        let prom = copyFile(path.resolve(__dirname, 'configFiles', fileName), fileName)
        promArr.push(prom)
    }

    // create .eslintrc
    // promArr.push(writeFile('.eslintrc.js', 'module.exports = ' + JSON.stringify(eslintrc, null, 4)))
    promArr.push(copyFile(path.resolve(__dirname, 'configFiles', `.eslintrc.${type}.js`), '.eslintrc.js'))

    return Promise.all(promArr).then(() => {
        console.log('√ Copying config files succeed')
    })
}
