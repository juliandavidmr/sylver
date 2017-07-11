var Parser = require("jison").Parser;

console.log("In progress...");

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
		console.log("Ok. The file parser was saved!");
	});
}
save(parserSource);
