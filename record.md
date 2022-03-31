# 记录
## 2022.3.31
根据[github CHANGELOG](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21) 所述，
eslint-config-prettier,在v8.0.0修改了如下配置

原来：
```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "prettier/unicorn",
    "prettier/vue"
  ]
}
```
配置为
```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```
prettier 的配置一定在extends的最后一项

extends中配置"prettier" 和"plugin:prettier/recommended"的区别是，配置为plugin:prettier/recommended时为:
```json
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```
[参考github](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)
