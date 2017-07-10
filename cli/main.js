var log = console.log;


/**
 * Has a flag
 * @param {Array<string>} args 
 * @param {string} flag 
 * @returns {boolean}
 */
function has(args, flag) {
	return (args.indexOf(flag) > -1);
}

/**
 * main cli
 * @param {Array} args
 */
function main(args) {
	if (has(args, '-h') || has(args, '--help')) {
		log(require('./help'));
	} else if (has(args, '-c') || has(args, '--cli')) {
		require('./cli')();
	} else {
		log('No argument is recognized. Enter sylver --help');
	}
}

main(process.argv.slice(1));