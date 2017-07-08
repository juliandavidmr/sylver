var test = require('ava');
var sylver = require('../')

test('9<=9 is equal to 1', t => {
	t.is(sylver("9<=9"), 1)
})

test('4<=9 is equal to 1', t => {
	t.is(sylver("4<=9"), 1)
})

test('(10*2)<=(40+3) is equal to 1', t => {
	t.is(sylver("(10*2)<=(40+3)"), 1)
})

test('11==11 is equal to 1', t => {
	t.is(sylver("11==11"), 1)
})

test('11 eq 11 is equal to 1', t => {
	t.is(sylver("11 eq 11"), 1)
})

test('32<>32 is equal to 0', t => {
	t.is(sylver("32<>32"), 0)
})

test('(40+3)>=(10*2) is equal to 1', t => {
	t.is(sylver("(10*2)<=(40+3)"), 1)
})

test('if(3+8<=23)12:3 is equal to 12', t => {
	t.is(sylver("if(3+8<=23)12:3"), 12)
})