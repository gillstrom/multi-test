'use strict';
var assert = require('assert');
var multiTest = require('./');

it('Should return true', function () {
	assert.strictEqual(multiTest(65, [1, 5, 7, 65, 100]), true);
	assert.strictEqual(multiTest('foo', ['bar', 'foo', 'horse']), true);
	assert.strictEqual(multiTest(['foo', 'bar'], [['hello', 'there'], ['foo', 'bar']]), true);
	assert.strictEqual(multiTest({foo: 'bar', tex: 'mex'}, [{numbers: 123, horse: 'race'}, {foo: 'bar', tex: 'mex'}]), true);
});

it('Should return false', function () {
	assert.strictEqual(multiTest(65, [1, 5, 7, 66, 100]), false);
	assert.strictEqual(multiTest('foo', ['bar', 'f00', 'horse']), false);
	assert.strictEqual(multiTest(['foo', 'bar'], [['hello', 'there'], ['dog', 'tooth']]), false);
	assert.strictEqual(multiTest({foo: 'bar', tex: 'mex'}, [{numbers: 123, horse: 'race'}, {hello: 'everyone', tex: 'mex'}]), false);
});

it('Should throw', function () {
	['hi', function () {}, {}].forEach(function (input) {
		assert.throws(function () {
			multiTest('hi', input);
		});
	});
});
