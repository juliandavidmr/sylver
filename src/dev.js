var Parser = require("jison").Parser;
var parser = new Parser(require('./grammar'));

// generate source, ready to be written to disk
var parserSource = parser.generate();
// console.log('Source: ', parserSource)
function save(content) {
	var fs = require('fs');
	fs.writeFile("./parser.js", content, function (err) {
		if (err) {
			return console.log(err);
		}
		console.log("The file parser was saved!");
	});
}
save(parserSource);
