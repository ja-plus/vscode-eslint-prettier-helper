// install npm packages
const childProcess = require('child_process')
const eslintPkg = require('./version.json')
module.exports = function (selectedArr) {
    let npmCmd = 'npm i -D'

    for (const type of selectedArr) {
        const pkgs = eslintPkg[type]
        for (const pkg in pkgs) {
            const version = pkgs[pkg]
            npmCmd += ' ' + pkg + '@' + version
        }
    }
    console.log('Installing npm packages...')
    console.log(npmCmd)
    childProcess.exec(npmCmd, (err, stdout) => {
        if (err) return console.err('Npm install failed', err)
        console.log('√ Npm packages installation succeed')
        setTimeout(() => {
            console.log('\nPlease restart vscode!')
        }, 500)
    })
}
