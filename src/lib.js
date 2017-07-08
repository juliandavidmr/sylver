var parser = require('./parser');

function exec(input) {
    return parser.parse(input)
}

module.exports = exec;