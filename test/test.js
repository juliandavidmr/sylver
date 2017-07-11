var sylver = require('../');

console.log(sylver("var12 := ((1 to 5) * 34)"));
console.log(sylver(":var12"));

console.log(sylver("hello := 123"));
console.log(sylver(":hello"));

console.log(sylver("(bye := 5) * 2"));