var sylver = require('../');

console.log(sylver("2 * (6 to 10)"));
console.log(sylver("(1 to 4) * [2, 4, 6, 7]"));
console.log(sylver("(1 to 4) * 3"));
console.log(sylver("E"));

console.log(sylver(`
if((5*2)>(6*2))
	80
:
	35
`));