var test = require('ava');
var sylver = require('../');

test('Basic vectors', t => {
	t.deepEqual(sylver("(2 to 4) * 2"), [4, 6, 8]);
	t.deepEqual(sylver("2 * (2 to 4)"), [4, 6, 8]);
	t.deepEqual(sylver("2 * [2, 3, 4]"), [4, 6, 8]);
	t.deepEqual(sylver("[2, 6, 100]*[2, 6, 100]"), [4, 36, 10000]);
	t.deepEqual(sylver("[2, 6, 100, 34]*[2, 6, 100]"), [4, 36, 10000, 34]);
	t.deepEqual(sylver("[2, 6, 100]*[2, 6, 100, 90]"), [4, 36, 10000, 90]);
	t.deepEqual(sylver("1 + [2, 3, 4]"), [3, 4, 5]);
	t.deepEqual(sylver("10 / [2, 5, 4]"), [5, 2, 2.5]);
	t.deepEqual(sylver("[2, 5, 4] / 10"), [0.2, 0.5, 0.4]);
	t.deepEqual(sylver("[2, 3, 4] + 1"), [3, 4, 5]);
	t.deepEqual(sylver("[2, 3, 4] - 1"), [1, 2, 3]);
	t.deepEqual(sylver("1 to (10/2) + 10"), [11, 12, 13, 14, 15]);
});