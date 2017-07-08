var test = require('ava');
var sylver = require('../')

// Basic
test('Cos of 4 is -0.6536436208636119', t => {
	t.is(sylver("cos(4)"), Math.cos(4))
})

test('Sin of 4 is ', t => {
	t.is(sylver("sin(4)"), Math.sin(4))
})

test('Tan of 7 is =Math.tan(7)', t => {
	t.is(sylver("tan(7)"), Math.tan(7))
})

// Arc
test('Atan of 7 is =Math.atan(7)', t => {
	t.is(sylver("atan(7)"), Math.atan(7))
})

test('Acos of 13 is =Math.acos(13)', t => {
	t.is(sylver("acos(13)"), Math.acos(13))
})

test('Asin of 13 is =Math.asin(13)', t => {
	t.is(sylver("asin(13)"), Math.asin(13))
})

// Hyperbolic
test('Acosh of 45 is =Math.acosh(45)', t => {
	t.is(sylver("acosh(45)"), Math.acosh(45))
})

test('asinh of 45 is =Math.asinh(45)', t => {
	t.is(sylver("asinh(45)"), Math.asinh(45))
})

test('atanh of 45 is =Math.atanh(45)', t => {
	t.is(sylver("atanh(45)"), Math.atanh(45))
})

// Other
test('Abs of -65 is =Math.abs(-65)', t => {
	t.is(sylver("abs(-65)"), Math.abs(-65))
})

// Operations
test('Eval abs(-65/3)+5', t => {
	t.is(sylver("abs(-65/3)+5"), Math.abs(-65 / 3) + 5)
})

// console.log('@Sin=>', Math.sin(4));