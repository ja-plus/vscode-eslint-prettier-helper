/**
 * update vscode settings.json
 * "editor.codeActionsOnSave": {
 *   "source.fixAll.eslint": true
 * },
 */
const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = function () {
    const filePath = path.join(os.homedir(), 'AppData/Roaming/Code/User/settings.json')
    console.log('\n', filePath)
    console.log('Vscode settings.json add configuration...')
    try {
        const data = fs.readFileSync(filePath)
        let settingsStr = data.toString()
        // Remove the comma from the last line.(if it has)(Make JSON.parse work properly)
        settingsStr = settingsStr.replace(/, *\n? *\}/, str => {
            return str.replace(',', '')
        })
        const settingsObj = JSON.parse(settingsStr) || {}
        if (!settingsObj['editor.codeActionsOnSave']) {
            settingsObj['editor.codeActionsOnSave'] = {}
        }
        if (!settingsObj['editor.codeActionsOnSave']['source.fixAll.eslint']) {
            settingsObj['editor.codeActionsOnSave']['source.fixAll.eslint'] = true
            fs.writeFile(filePath, JSON.stringify(settingsObj, null, 2), err => {
                if (err) console.error(err)
                console.log('√ Vscode settings.json updated')
            })
        } else {
            console.log('√ Vscode settings.json has been set. Auto skip this stage')
        }
    } catch (err) {
        console.error(err)
        console.error('Maybe settings.json has format wrong')
    }
}
