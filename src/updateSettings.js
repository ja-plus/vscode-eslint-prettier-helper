/**
 * update vscode settings.json
 * "editor.codeActionsOnSave": {
 *   "source.fixAll.eslint": true
 * },
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const { settingFilePath } = require('./config')
const platform = os.platform()
module.exports = function ({ type }) {
    try {
        if (!settingFilePath[platform]) {
            throw new Error('Did not fit your platform(' + platform + ').')
        }
        const filePath = path.join(os.homedir(), settingFilePath[platform])
        console.log('File path: ', filePath)

        const data = fs.readFileSync(filePath)
        let settingsStr = data.toString()
        // Remove the comma from the last line.(if it has)(Make JSON.parse work properly)
        settingsStr = settingsStr.replace(/, *\n? *\}/, str => {
            return str.replace(',', '')
        })

        const settingsObj = JSON.parse(settingsStr) || {}
        /**
         * "eslint.validate": [
                "javascript",
                "svelte"
            ],
         */
        if (type === 'svelte3') {
            if (!settingsObj['eslint.validate']) {
                settingsObj['eslint.validate'] = []
            }
            let eslintValidateSet = new Set(settingsObj['eslint.validate'])
            eslintValidateSet.add('javascript')
            eslintValidateSet.add('svelte')
            settingsObj['eslint.validate'] = Array.from(eslintValidateSet)
        }
        /**
         * "editor.codeActionsOnSave": {
                "source.fixAll.eslint": true
            },
         */
        if (!settingsObj['editor.codeActionsOnSave']) {
            settingsObj['editor.codeActionsOnSave'] = {}
        }
        if (!settingsObj['editor.codeActionsOnSave']['source.fixAll.eslint']) {
            settingsObj['editor.codeActionsOnSave']['source.fixAll.eslint'] = true
        }
        fs.writeFileSync(filePath, JSON.stringify(settingsObj, null, 2))
        console.log('✔ Vscode settings.json updated')
        // console.log('✔ Vscode settings.json has been set. Auto skip this stage')
    } catch (err) {
        console.error('✘ Update settings.json failed.', err)
        console.error('■ Set settings.json yourself:', ' "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, ')
    }
}
