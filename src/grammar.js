var op_basic = require('./operations/basic');
var op_interval = require('./operations/interval');

module.exports = {
   "comment": "JSON Math Parser",

   "lex": {
		 	"macros": {
				"digit": "[0-9]",
				"esc": "\\\\",
				"int": "-?(?:[0-9]|[1-9][0-9]+)",
				"exp": "(?:[eE][-+]?[0-9]+)",
				"frac": "(?:\\.[0-9]+)",
				"number": "[0-9]+(?:\\.[0-9]+)?",
				"array_number": "\\[\\s*(?:(?:(?:[\\d.]+?)|(?:\\[.*?\\]))(?:\\s*,\\s*))*?((?:[\\d.]+)|(?:\\[.*?\\]))\\s*\\]"
      },
      "rules": [
         ["\\s+",                    "/* skip whitespace */"],
         ["{number}\\b", 						 "return 'NUMBER'"],
				 ["print\\b", 				 			 "return 'print'"],
				 /* trigonometry */
				 ["log\\b", 				 				 "return 'log'"],
				 ["log1p\\b", 				 			 "return 'log1p'"],
				 ["log10\\b", 				 			 "return 'log10'"],
				 ["log2\\b", 	   			 			 "return 'log2'"],
         ["ln\\b",   				 				 "return 'log'"],
				 ["sqrt\\b", 				 				 "return 'sqrt'"],
         ["cos\\b", 				 			   "return 'cos'"],
         ["sin\\b", 				 			   "return 'sin'"],
         ["tan\\b", 				 			   "return 'tan'"],
         ["atan\\b", 				 			   "return 'atan'"],
         ["acos\\b", 				 			   "return 'acos'"],
         ["asin\\b", 				 			   "return 'asin'"],
         ["acosh\\b",				 			   "return 'acosh'"],
         ["asinh\\b",				 			   "return 'asinh'"],
         ["atanh\\b",				 			   "return 'atanh'"],
         ["abs\\b", 				 			   "return 'abs'"],
				 /* Basic operations */
         ["\\*",                     "return '*'"],
         ["\\/",                     "return '/'"],
         ["-",                       "return '-'"],
         ["\\+",                     "return '+'"],
         ["\\^",                     "return '^'"],
         ["!",                       "return '!'"],
         ["%",                       "return '%'"],
         ["\\(",                     "return '('"],
         ["\\)",                     "return ')'"],
				 /* Constants */
         ["PI\\b",                   "return 'PI'"],
         ["E\\b",                    "return 'E'"],
				 /* Operators */
         ["\\~",                     "return '~'"],
				 ["<=",                      "return '<='"],
				 [">=", 	  		             "return '>='"],
				 ["<>\\b",                   "return '<>'"],
         [">",                    	 "return '>'"],
         ["<\\b",                    "return '<'"],
         ["==\\b",                   "return '=='"],
         ["eq\\b",                   "return '=='"],
				 ["&&\\b",                   "return '&&'"],
				 /* Interval */
         ["to\\b",                   "return 'to'"],
				 /* Arrays */
				 ["{array_number}", 				 "return 'ARRAY_NUMBER'"],
				 /* Conditions */
         ["if\\b",                   "return 'if'"],
         [":",                       "return ':'"],

         ["$",                       "return 'EOF'"]
      ]
   },

   "operators": [
      ["left", "+", "-"],
      ["left", "*", "/"],
      ["left", "^"],
      ["left", "~"],
      ["left", "to"],
      ["left", "if"],
      ["left", "cos"],
      ["left", "sin"],
      ["left", "tan"],
      ["left", "atan"],
      ["left", "atanh"],
      ["left", "acos"],
      ["left", "asin"],
      ["left", "acosh"],
      ["left", "asinh"],
		  ["left", "sqrt"],
      ["left", "abs"],
      ["left", "=="],
      ["left", "<>"],
		  ["left", "&&"],
      ["left", ">", "<", "<=", ">="],
		  ["left", "log1p"],
		  ["left", "log10"],
		  ["left", "log2"],
			["left", "log"],
			["left", "print"],
      ["right", "!"],
      ["right", "%"],
      ["left", "UMINUS"]
   ],

   "bnf": {
      "expressions": [["e EOF",   "return $1"]],

      "e" :[
				 ["NUMBER",   "$$ = Number(yytext)"],
				 /* Basic operations */
         ["e + e",    `$$ = (${op_basic.add.toString()})($1, $3)`],
         ["e - e",    `$$ = (${op_basic.subtract.toString()})($1, $3)`],
         ["e * e",    `$$ = (${op_basic.multiply.toString()})($1, $3)`],
         ["e / e",    `$$ = (${op_basic.divide.toString()})($1, $3)`],
         ["e ^ e",    "$$ = Math.pow($1, $3)"],
				 ["e !",      "$$ = (function(n) {if(n==0) return 1; return arguments.callee(n-1) * n})($1)"],
				 ["e %",      "$$ = $1/100"],
				 ["~ e",      "$$ = ($2*-1)"],
				 ["- e",      "$$ = -$2", {"prec": "UMINUS"}],
				 ["( e )",    "$$ = $2"],
				 /* Compare */
         ["e > e",    "$$ = ($1 > $3)? 1:0"],
         ["e < e",    "$$ = ($1 < $3)? 1:0"],
         ["e <= e",   "$$ = ($1 <= $3)? 1:0"],
         ["e >= e",   "$$ = ($1 >= $3)? 1:0"],
         ["e == e",   "$$ = ($1 == $3)? 1:0"],
				 ["e <> e",   "$$ = ($1 != $3)? 1:0"],
				 ["e && e",   "$$ = ($1 && $3)"],
				 /* Interval */
         ["e to e",   `$$ = (${op_interval.interval.toString()})($1, $3)`],
				 /* Conditions */
         ["if ( e ) e : e", "$$ = $3?$5:$7"],
				 /* Trigonometry */
				 ["log1p e",    "$$ = Math.log1p($2)"],
				 ["log10 e",    "$$ = Math.log10($2)"],
				 ["log2 e",    "$$ = Math.log2($2)"],
				 ["log e",    "$$ = Math.log($2)"],
				 ["sqrt e",   "$$ = Math.sqrt($2)"],
         ["cos e",    "$$ = Math.cos($2)"],
         ["sin e",    "$$ = Math.sin($2)"],
         ["tan e",    "$$ = Math.tan($2)"],
         ["atan e",   "$$ = Math.atan($2)"],
         ["acos e",   "$$ = Math.acos($2)"],
         ["asin e",   "$$ = Math.asin($2)"],
         ["abs e",    "$$ = Math.abs($2)"],
         ["acosh e",  "$$ = Math.acosh($2)"],
         ["asinh e",  "$$ = Math.asinh($2)"],
         ["atanh e",  "$$ = Math.atanh($2)"],
				 /* Arrays */
				 ["ARRAY_NUMBER", "$$ = $1"],
				 /* Constants */
         ["E",        "$$ = Math.E"],
         ["PI",       "$$ = Math.PI"],
				 /* stdout */
				 ["print e",  "$$ = (function(expr) {console.log(expr); return expr})($2)"],
      ]
   }
};
