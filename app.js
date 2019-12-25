const chalk = require('chalk');
const getNotes = require('./notes');
const message = getNotes();

console.log(message);
console.log(chalk.blue.inverse.bold('Success!'));
