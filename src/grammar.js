module.exports = {
   "comment": "JSON Math Parser",

   "lex": {
		 	"macros": {
				"digit": "[0-9]",
				"esc": "\\\\",
				"int": "-?(?:[0-9]|[1-9][0-9]+)",
				"exp": "(?:[eE][-+]?[0-9]+)",
				"frac": "(?:\\.[0-9]+)",
				"number": "[0-9]+(?:\\.[0-9]+)?"
      },
      "rules": [
         ["\\s+",                    "/* skip whitespace */"],
         ["{number}\\b", 						 "return 'NUMBER'"],
				 ["log\\b", 				 				 "return 'log'"],
				 ["print\\b", 				 			 "return 'print'"],
         ["\\*",                     "return '*'"],
         ["\\/",                     "return '/'"],
         ["-",                       "return '-'"],
         ["\\+",                     "return '+'"],
         ["\\^",                     "return '^'"],
         ["!",                    "return '!'"],
         ["%",                       "return '%'"],
         ["\\(",                     "return '('"],
         ["\\)",                     "return ')'"],
         ["PI\\b",                   "return 'PI'"],
         ["E\\b",                    "return 'E'"],
         ["\\~",                     "return '~'"],
         [">\\b",                    "return '>'"],
         ["<\\b",                    "return '<'"],
         ["<>\\b",                   "return '<>'"],
         ["<=",                      "return '<='"],
         [">=\\b",                   "return '>='"],
         ["==\\b",                   "return '=='"],
         ["eq\\b",                   "return '=='"],         
         ["to\\b",                   "return 'to'"],
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
      ["left", "=="],
      ["left", "<>"],
      ["left", ">", "<", "<=", ">="],
			["left", "log"],
			["left", "print"],
      ["right", "!"],
      ["right", "%"],
      ["left", "UMINUS"]
   ],

   "bnf": {
      "expressions": [["e EOF",   "return $1"]],

      "e" :[
         ["e + e",    "$$ = $1+$3"],
         ["e - e",    "$$ = $1-$3"],
         ["e * e",    "$$ = $1*$3"],
         ["e / e",    "$$ = $1/$3"],
         ["e ^ e",    "$$ = Math.pow($1, $3)"],
         ["e > e",    "$$ = ($1 > $3)? 1:0"],
         ["e < e",    "$$ = ($1 < $3)? 1:0"],
         ["e <= e",   "$$ = ($1 <= $3)? 1:0"],
         ["e >= e",   "$$ = ($1 >= $3)? 1:0"],
         ["e == e",   "$$ = ($1 == $3)? 1:0"],
         ["e <> e",   "$$ = ($1 != $3)? 1:0"],
         ["e to e",   `$$ = (
            function(from, to) {
              var _arr_ = []; 
              if(from < to){ 
                for(var i=from; i<=to; i++) { _arr_.push(i) }
              } else {
                for(var i=to; i<=from; i++) { _arr_.push(i) }
              }
              return _arr_;
            })($1, $3)`],
         ["if ( e ) e : e", "$$ = $3?$5:$7"],
         ["e !",      "$$ = (function(n) {if(n==0) return 1; return arguments.callee(n-1) * n})($1)"],
         ["e %",      "$$ = $1/100"],
         ["~ e",      "$$ = ($2*-1)"],
         ["- e",      "$$ = -$2", {"prec": "UMINUS"}],
         ["( e )",    "$$ = $2"],         
         ["NUMBER",   "$$ = Number(yytext)"],
				 ["log e",    "$$ = Math.log($2)"],         
         ["E",        "$$ = Math.E"],
         ["PI",       "$$ = Math.PI"],
				 ["print e",  "$$ = (function(expr) {console.log(expr); return expr})($2)"],
      ]
   }
}