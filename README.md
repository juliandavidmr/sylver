# Sylver

❄️A lightweight math library for JavaScript. It features a flexible expression parser comes with a large set of built-in functions and constants. Powerful and easy to use.

> In active development, any pull request will be welcome :)

## Features

- Minimal and fast
- Supports numbers, complex numbers, fractions, conditions.
- Compatible with JavaScript.
- Contains a flexible expression parser.
- Comes with a large set of built-in functions and constants.
- Has no dependencies. Runs on any JavaScript engine.
Can be used as a command line application as well.
Is easily extensible.
- Developed using [jison](https://zaa.ch/jison)
- Open source.

## Usage

```bash
# Not available yet ;)
npm install --save sylver # or yarn
```

```js
// load sylver
var sylver = require('sylver');

// basic
sylver("(3*2)+6")           // 12
sylver("~16")               // -6
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
sylver("(4*PI) to 100/2")   // [11.5, 12.5]
```

## Browser support

Sylver works on any ES5 compatible JavaScript engine: node.js 0.10, and Internet Explorer 9 and newer, and all other browsers (Chrome, Firefox, Safari). If support for old browsers like Internet Explorer 8 is required, the es5-shim library has to be loaded.

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


## License

Copyright (c) 2017 Julian David

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
