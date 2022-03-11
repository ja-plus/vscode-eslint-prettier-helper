// install npm packages
const childProcess = require('child_process')
const eslintPkg = require('./version.json')
module.exports = function ({type}) {
    let npmCmd = 'npm i -D'
    for (const key of ['default', type]) {
        const pkgs = eslintPkg[key]
        for (const pkg in pkgs) {
            const version = pkgs[pkg]
            npmCmd += ' ' + pkg + '@' + version
        }
    }
    console.log('Installing npm packages...')
    console.log(npmCmd)
    childProcess.exec(npmCmd, err => {
        if (err) return console.err('Npm install failed', err)
        console.log('√ Npm packages installation succeed')
        setTimeout(() => {
            console.log('\nPlease restart vscode!')
        }, 500)
    })
}
