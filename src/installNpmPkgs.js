/**
 * install npm packages
 * @author JA+
 */
const childProcess = require('child_process');
const { npmPkgs } = require('./config');

module.exports = function ({ type }) {
  let npmCmd = 'npm i -D --legacy-peer-deps';

  const pkgTypes = ['eslint'];
  if (type !== 'svelte3') {
    // svelte not support prettier
    pkgTypes.push('prettier');
  }
  pkgTypes.push(type);

  for (const key of pkgTypes) {
    const pkgs = npmPkgs[key];
    for (const pkg in pkgs) {
      const version = pkgs[pkg];
      npmCmd += ' ' + pkg + '@' + version;
    }
  }
  console.log(npmCmd);
  try {
    childProcess.execSync(npmCmd);
    console.log('✔ Npm packages installation succeed');
  } catch (err) {
    if (err) return console.error('✘ Npm install failed', err);
  }
};
