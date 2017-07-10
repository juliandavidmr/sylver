const readline = require('readline');
const sylver = require('../');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

module.exports = function () {
	rl.on('line', (input) => {
		switch (input.trim()) {
			case 'exit':
				console.log('Exiting the command line interface. Bye :*');
				process.exit(1);
				break;
			default:
				try {
					console.log(sylver(input));
				} catch (e) {
					console.log("Error: ", e);
				}
				break;
		}
		rl.prompt();
	}).on('close', () => {
		console.log('Have a great day!');
		process.exit(0);
	});
	;
};