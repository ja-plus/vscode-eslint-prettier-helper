# vscode-eslint-prettier-helper
Automatically configure `Visual Studio Code` eslint + prettier code formatter
## How to use
> npx vscode-eslint-prettier-helper  
> **or install first**  
> npm i vscode-eslint-prettier-helper  
> npx veph
## What will do

<details>
    <summary>Install vscode extensions</summary>
    <ul>
        <li>dbaeumer.vscode-eslint (offline)</li>
        <li>octref.vetur (online) [<code>vue2</code>]</li>
        <li>johnsoncodehk.volar (online) [<code>vue3</code>]</li>
    </ul>
</details>
<details>
     <summary>Add config files</summary>
    <ul>
        <li>.eslintrc.js </li>
        <li>.eslintignore </li>
        <li>.prettier.js </li>
        <li>.prettierignore  </li>
        <li>jsconfig.json [<code>vue2</code>, <code>vue3</code>] //  This file make vscode recognize '@' alias  </li>
    </ul>
</details>
<details>
    <summary>Npm install eslint prettier packages</summary>
    <code>
<pre>{
    default: {
        eslint: '8.10.0',
        'eslint-config-prettier': '8.5.0',
        'eslint-plugin-html': '6.2.0',
        'eslint-plugin-prettier': '4.0.0',
        prettier: '2.5.1',
    },
    js: {},
    ts: {
        '@typescript-eslint/eslint-plugin': '5.14.0',
        '@typescript-eslint/parser': '5.14.0',
    },
    vue2: {
        'eslint-plugin-vue': '8.5.0',
    },
    vue3: {
        'eslint-plugin-vue': '8.5.0',
    },
    'vue2-ts': {
        '@typescript-eslint/eslint-plugin': '5.14.0',
        '@typescript-eslint/parser': '5.14.0',
        'eslint-plugin-vue': '8.5.0',
        '@vue/eslint-config-typescript': '8.0.0',
    },
    'vue3-ts': {
        '@typescript-eslint/eslint-plugin': '5.14.0',
        '@typescript-eslint/parser': '5.14.0',
        'eslint-plugin-vue': '8.5.0',
        '@vue/eslint-config-typescript': '8.0.0',
    },
}</pre>
    </code>
</details>
<details>
    <summary>Set auto fix code when save file</summary>
    <p>
        Set vscode settings.json.(Auto run eslint --fix when save file(*press ctrl + s*))
    </p>
    <p>
        path(Windows): ${userHomeDir}/AppData/Roaming/Code/User/settings.json
    </p>
    <p>
        path(Linux): ${userHomeDir}/.config/Code/User/settings.json
    </p>
    <p>Add config:</p>
    <code>
        <pre>
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
        </pre>
    </code>
</details>

## Pass the test on the following platforms
### Windows7
> vscode > 1.60 (which can install the supported eslint plugin2.2.3)  
> node 12.22.9
### Linux (deepin 20.4)
> vscode 1.65  
> node 14.16.1

## ps
vscode eslint plugin < 2.2.0 not support eslint@8  
If it not work in vue-cli@4, Try `npm remove @vue/cli-plugin-eslint babel-eslint`