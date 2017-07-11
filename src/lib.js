var parser = require('./parser');

Object.setPrototypeOf(parser.Parser, {
	data: {},
	setVar: function(namevar, _data_) {
		// console.log('Data:', this.data);
		this.data[namevar] = _data_;
		return this.data[namevar];
	},
	getVar: function (namevar) {
		return this.data[namevar];
	}
});

/**
 * parse expression
 * @param {string} input
 */
function exec(input) {
	return parser.parse(input)
}

module.exports = exec;