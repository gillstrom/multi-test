# multi-test [![Build Status](https://travis-ci.org/gillstrom/multi-test.svg?branch=master)](https://travis-ci.org/gillstrom/multi-test)

> Test if something is equal to any of the given values.


## Install

```
$ npm install --save multi-test
```


## Example

```js
var multiTest = require('multi-test');

multiTest(65, [7, 21, 50, 65, 100]);
//=> true

multiTest('foo', ['horse', 'bar', 'foo']);
//=> true

multiTest(['foo'], [['foo'], ['bar']]);
//=> true

multiTest({foo: 'bar'}, [{tex: 'mex'}, {foo: 'bar'}]);
//=> true
```


## API

### multiTest(input, values)

#### input

*Required*  
Type: `Any type`

Value to test.

#### types

*Required*  
Type: `array`

Types to check against.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
