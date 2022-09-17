const chalk = require('chalk');

module.exports = {
  log(...message) {
    console.log(...message);
  },
  start(...message) {
    console.log(chalk.blue('► ', ...message));
  },
  success(...message) {
    console.log(chalk.green('✔ ', ...message));
  },
  danger(...message) {
    console.log(chalk.red('✘ ', ...message));
  },
  warn(...message) {
    console.log(chalk.yellow('● ', ...message));
  },
  tip(...message) {
    console.log(chalk.cyan('■ ', ...message));
  },
};
