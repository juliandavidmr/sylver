var test = require('ava');
var sylver = require('../')

test('Constant PI', t => {
	t.is(sylver("PI"), Math.PI)
})

test('Constant E', t => {
	t.is(sylver("E"), Math.E)
})