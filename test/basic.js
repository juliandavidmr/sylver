var test = require('ava');
var sylver = require('../')

test('2 is equal to 2', t => {
	t.is(sylver("2"), 2)
})

test('3+2 is equal to 5', t => {
	t.is(sylver("3+2"), 5)
})

test('(3*2)+6 is equal to 12', t => {
	t.is(sylver("(3*2)+6"), 12)
})

test('Reverse symbol: ~16 is equal to -16', t => {
	t.is(sylver("~16"), -16)
})

test('Reverse symbol 2: 3*~2 is equal to -6', t => {
	t.is(sylver("3*~2"), -6)
})

test('The factorial of 7 is 5040', t => {
	t.is(sylver("7!"), 5040)
})

test('The factorial of 13 is 6227020800', t => {
	t.is(sylver("13!"), 6227020800)
})