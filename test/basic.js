var test = require('ava');
var sylver = require('../');

test('Basic operations', t => {
	t.is(sylver("2"), 2);
	t.is(sylver("3+2"), 5);
	t.is(sylver("3-2"), 1);
	t.is(sylver("150-50"), 100);
	t.is(sylver("150/3"), 50);
	t.is(sylver("150/6"), 25);
	t.is(sylver("(3*2)+6"), 12);
	t.is(sylver("3*2+6"), 12);
	t.is(sylver("3*2+6+1"), 13);
	t.is(sylver("25+5"), 30);
	t.is(sylver("~16"), -16);
	t.is(sylver("3*~2"), -6);
	t.is(sylver("7!"), 5040);
	t.is(sylver("7!*2"), 5040 * 2);
	t.is(sylver("13!"), 6227020800);
});