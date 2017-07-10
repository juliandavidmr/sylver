# Sylver

[![npm version](https://img.shields.io/npm/v/sylver.svg)](https://www.npmjs.com/package/sylver)

❄️A lightweight math library for JavaScript. It features a flexible expression parser comes with a large set of built-in functions and constants. Powerful and easy to use.

> In active development, any pull request will be welcome :)

## Features

- Minimal and fast
- Supports numbers, complex numbers, fractions, conditions.
- Compatible with JavaScript.
- Contains a flexible expression parser.
- Comes with a large set of built-in functions and constants.
- Has no dependencies. Runs on any JavaScript engine. 
- Can be used as a command line application as well.
- Open source.

## Usage

```bash
npm install --save sylver 
# or 
yarn add sylver
```

```js
// load sylver
var sylver = require('sylver');

// basic
sylver("(3*2)+6")           // 12
sylver("~16")               // -16
sylver("7!")                // 5040

// compare (0 = false; 1 = true)
sylver("32<>32")            // 0
sylver("(10*2)<=(40+3)")    // 1
sylver("11 eq 11")          // 1
sylver("4<=9")              // 1

// conditions
sylver("if(3+8<=23)12:3")   // 12

// intervals
sylver("2 to 8")            // [2, 3, 4, 5, 6, 7, 8]
sylver("(4*PI) to (23/2)")  // [11.5, 12.5]
sylver("2 * (6 to 10)")     // [ 12, 14, 16, 18, 20 ]

// list
sylver("[2, 3, 5, 1] * [6, 3, 5, 4, 102]")     // [ 12, 9, 25, 4, 102 ]
sylver("")

// algebra
sylver("cos(4)")            // -0.6536436208636119
sylver("atan(7)")           // 1.4288992721907328
sylver("atanh(-0.4)")       // -0.4236489301936018
// See: test/algebra1.js

// Other
sylver("abs(ln(2)*(4^3))*(if(3<>6) 2:5)")  // 88.722839111673
```

### Usage globally _(Available in the next versions)_

```bash
npm i -g sylver

# or
yarn global add sylver
```
Enter from the command terminal:
```bash
sylver --help
```

## Documentation

### Mathematical operators
  
| Operator | Description |
| -------- | ----------- |
| + 	   | addition    |
| - 	   | subtraction |
| ∗ 	   | multiplication |
| / 	   | right division, i.e. `x/y` |
| ˆ 	   | power, i.e. `x^y`		  |


### Mathematical functions: trigonometry
  
| functions |
| ----------- |
| log log10 log1p log2 sqrt, cos, tan, sin, atan, asin, acos, atanh, acosh, asinh |

### Intervals

Sylver is able to generate lists of numbers from a range:
````js
sylver("1 to 7")                  // [ 1, 2, 3, 4, 5, 6, 7 ]
sylver("2 * (6 to 10)")           // [12, 14, 16, 18, 20]
sylver("(1 to 4) * [2, 4, 6, 7]") // [ 2, 8, 18, 28 ]
sylver("(1 to 4) * 3")            // [ 3, 6, 9, 12 ]
sylver("1 to (10/2) + 10")        // [11, 12, 13, 14, 15]
````

The order of the operators is important:
````js
sylver("10 / [2, 5, 4]")          // [5, 2, 2.5]

// This is different from:
sylver("[2, 5, 4] / 10")          // [0.2, 0.5, 0.4]
````

### Conditions
Evaluate expressions and returns a decision:
```js
sylver(`if((5*2)>(6*2)) 80 : 35 `)    // 35
```
You can use the returned result to operate with other expressions:
```js
sylver("(if(3>0)1:2)*5)")            // 5
```

### Constants

Currently there are two constants available: `PI`, `E`
```js
sylver("PI")        // 3.141592653589793
sylver("E")         // 2.718281828459045
```

## Browser support
__// TODO: Version for browsers in development__
Sylver works on any ES5 compatible JavaScript engine: node.js 0.10, 
and Internet Explorer 9 and newer, and all other browsers (Chrome, Firefox, Safari). 
If support for old browsers like Internet Explorer 8 is required, 
the es5-shim library has to be loaded. 
Use function parser from [parser.js](https://github.com/juliandavidmr/sylver/blob/master/src/parser.js) file.


## Build

First clone the project from github:

```bash
git clone https://github.com/juliandavidmr/sylver.git
cd sylver
```

Install the project dependencies:
```bash
npm install
# or
yarn
```

## Test

To execute tests for the library, install the project dependencies once:
```bash
npm install
```

Then, the tests can be executed:
```bash
npm test
```

The tests are run with [ava](https://github.com/avajs/ava)


## Built With
* [jison](https://zaa.ch/jison) - Bison in JavaScript

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Julian David** - *Initial work* - [@juliandavidmr](https://github.com/juliandavidmr)

See also the list of [contributors](./CONTRIBUTORS.md) who participated in this project.

### [See changelog](CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details