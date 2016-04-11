'use strict';
var deepEqual = require('only-shallow');

module.exports = function (input, values) {
	if (!Array.isArray(values)) {
		throw new TypeError('Expected an array');
	}

	for (var i = 0; i < values.length; i++) {
		if (input === values[i] || deepEqual(input, values[i])) {
			return true;
		}
	}

	return false;
};
