var test = require('ava');
var sylver = require('../')

// Basic
test('Basic trigonometry', t => {
	t.is(sylver("cos(4)"), Math.cos(4));
	t.is(sylver("sin(4)"), Math.sin(4));
	t.is(sylver("tan(7)"), Math.tan(7));
	t.is(sylver("atan(7)"), Math.atan(7));
	t.is(sylver("acos(13)"), Math.acos(13));
	t.is(sylver("asin(13)"), Math.asin(13));
});

// Hyperbolic
test('Hyperbolic trigonometry', t => {
	t.is(sylver("acosh(45)"), Math.acosh(45));
	t.is(sylver("asinh(45)"), Math.asinh(45));
	t.is(sylver("atanh(45)"), Math.atanh(45));
});

test('Sqrt trigonometry', t => {
	t.is(sylver("sqrt(3^2 + 4^2)"), 5);
	t.is(sylver("sqrt(5)"), Math.sqrt(5));
});

test('Logarithms', t => {
	t.is(sylver("log(10)"), Math.log(10));
	t.is(sylver("log2(5)"), Math.log2(5));
	t.is(sylver("log10(0.67)"), Math.log10(0.67));
	t.is(sylver("log1p(0.5)"), Math.log1p(0.5));
});

// Other
test('Abs of -65 is =Math.abs(-65)', t => {
	t.is(sylver("abs(-65)"), Math.abs(-65));
});

// Operations
test('Eval abs(-65/3)+5', t => {
	t.is(sylver("abs(-65/3)+5"), Math.abs(-65 / 3) + 5)
});

// console.log('@Sin=>', Math.sin(4));