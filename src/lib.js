var parser = require('./parser');

/**
 * parse expression
 * @param {string} input
 */
function exec(input) {
    return parser.parse(input)
}

module.exports = exec;