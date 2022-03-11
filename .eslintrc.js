module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "html",
        "prettier"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    "rules": {
        "prettier/prettier": 1,
        "spaced-comment": 1,
        "new-cap": 1,
        "eqeqeq": 1,
        "dot-notation": 1
    }
}