/**
 * vscode 的settings.json 中添加
 * "editor.codeActionsOnSave": {
 *   "source.fixAll.eslint": true
 * },
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

const filePath = path.join(
  os.homedir(),
  'AppData/Roaming/Code/User/settings.json'
);
console.log('\n', filePath);
console.log('Vscode settings.json add configuration...');
try {
  const data = fs.readFileSync(filePath);
  let settingsStr = data.toString();
  // 去掉最后一行的逗号（如果有）
  settingsStr = settingsStr.replace(/, *\n? *\}/, (str) => {
    return str.replace(',', '');
  });
  const settingsObj = JSON.parse(settingsStr) || {};
  if (!settingsObj['editor.codeActionsOnSave']){
    settingsObj['editor.codeActionsOnSave'] = {};
  }
  settingsObj['editor.codeActionsOnSave']['source.fixAll.eslint'] = true;
  fs.writeFile(filePath, JSON.stringify(settingsObj, null, 2), (err) => {
    if (err) console.error(err);
    console.log('√ Vscode settings.json updated');
  });
} catch (err) {
  console.error(err);
  console.error('Maybe settings.json has format wrong');
}
