var test = require('ava');
var sylver = require('../')

test('Example medium expression eval', t => {
	t.is(sylver("abs(ln(2)*(4^3))*(if(3<>6) 2:5)"), 88.722839111673)
})