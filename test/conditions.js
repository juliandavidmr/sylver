var test = require('ava');
var sylver = require('../');

test('Basic conditions', t => {
	t.is(sylver("9<=9"), 1);
	t.is(sylver(`
		if((5*2)>(6*2))
			80
		:
			35
	`), 35);
	t.is(sylver("4<=9"), 1);
	t.is(sylver("4>=9"), 0);
	t.is(sylver("(10*2)<=(40+3)"), 1);
	t.is(sylver("11==11"), 1);
	t.is(sylver("11 eq 11"), 1);
	t.is(sylver("32<>32"), 0);
	t.is(sylver("(10*2)<=(40+3)"), 1);
	t.is(sylver("if(3+8<=23)12:3"), 12);
	t.is(sylver("(if(3>0)1:2)*5"), 5);
	t.is(sylver("(if(3<0)1:2)*5"), 10);
});