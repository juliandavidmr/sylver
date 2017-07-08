var test = require('ava');
var sylver = require('../')

test('2 to 8 is equal to [2, 3, 4, 5, 6, 7, 8]', t => {
	t.deepEqual(sylver("2 to 8"), [2, 3, 4, 5, 6, 7, 8])
})

test('(4*PI) to (23/2)") is equal to [11.5, 12.5]', t => {
	t.deepEqual(sylver("(4*PI) to (23/2)"),  [11.5, 12.5])
})

// console.log(parser.parse("2 to (4*3)"))