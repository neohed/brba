const path = require('path');

const scriptArgs = process.argv;
const mode = scriptArgs[scriptArgs.indexOf('--mode') + 1];
const env = require(path.join(__dirname, 'cfg/' + mode));

module.exports = env;
