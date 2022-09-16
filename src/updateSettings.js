/**
 * update vscode settings.json
 * @author JA+
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { settingFilePath, settingConfig } = require('./config');
const platform = os.platform();

/**
 * read config.js and write config to setting.json
 * @param {string} type
 * @param {object} settingJson
 */
function updateSettings(type, settingJson) {
  let settingCfg = settingConfig[type];
  if (!settingCfg) return;

  for (const key in settingCfg) {
    const item = settingCfg[key];
    // array
    if (Array.isArray(item)) {
      if (!settingJson[key]) {
        settingJson[key] = [];
      }
      settingJson[key] = Array.from(new Set(settingJson[key].concat(item)));
    }
    // object
    if (Object.prototype.toString.call(item) === '[object Object]') {
      if (!settingJson[key]) {
        settingJson[key] = {};
      }
      settingJson[key] = Object.assign(settingJson[key], item);
    }
  }
}

/**
 * @param {{type:string}} param0
 */
module.exports = function ({ type }) {
  try {
    if (!settingFilePath[platform]) {
      throw new Error('Did not fit your platform(' + platform + ').');
    }
    const filePath = path.join(os.homedir(), settingFilePath[platform]);
    console.log('File path: ', filePath);

    const data = fs.readFileSync(filePath);
    let settingsStr = data.toString();
    // Remove the comma from the last line.(if it has)(Make JSON.parse work properly)
    settingsStr = settingsStr.replace(/, *\n? *\}/, str => {
      return str.replace(',', '');
    });

    const settingsObj = JSON.parse(settingsStr) || {};

    updateSettings('default', settingsObj);
    updateSettings(type, settingsObj);

    fs.writeFileSync(filePath, JSON.stringify(settingsObj, null, 2));
    console.log('✔ Vscode settings.json updated');
    // console.log('✔ Vscode settings.json has been set. Auto skip this stage')
  } catch (err) {
    console.error('✘ Update settings.json failed.', err);
    console.error('■ Set settings.json by yourself');
  }
};
