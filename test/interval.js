var test = require('ava');
var sylver = require('../');

test('Basic intervals', t => {
	t.deepEqual(sylver("2 to 8"), [2, 3, 4, 5, 6, 7, 8]);
	t.deepEqual(sylver("(4*PI) to (23/2)"), [11.5, 12.5]);
	t.deepEqual(sylver("2 * (6 to 10)"), [12, 14, 16, 18, 20]);
});