var test = require('ava');
var sylver = require('../');

test('Basic operations', t => {
	t.is(sylver("2"), 2);
	t.is(sylver("3+2"), 5);
	t.is(sylver("(3*2)+6"), 12);
	t.is(sylver("3*2+6"), 12);
	t.is(sylver("25+5"), 25);
	t.is(sylver("~16"), -16);
	t.is(sylver("3*~2"), -6);
	t.is(sylver("7!"), 5040);
	t.is(sylver("13!"), 6227020800);
});