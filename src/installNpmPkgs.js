// install npm packages
const childProcess = require('child_process')
const { npmPkgs } = require('./config')

module.exports = function ({ type }) {
    let npmCmd = 'npm i -D --legacy-peer-deps'
    for (const key of ['default', type]) {
        const pkgs = npmPkgs[key]
        for (const pkg in pkgs) {
            const version = pkgs[pkg]
            npmCmd += ' ' + pkg + '@' + version
        }
    }
    console.log(npmCmd)
    try {
        childProcess.execSync(npmCmd)
        console.log('✔ Npm packages installation succeed')
    } catch (err) {
        if (err) return console.error('✘ Npm install failed', err)
    }
}
