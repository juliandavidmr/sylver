var test = require('ava');
var sylver = require('../')

test('Constants', t => {
	t.is(sylver("PI"), Math.PI)
	t.is(sylver("E"), Math.E)
});