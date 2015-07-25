'use strict';
module.exports = function (input, values) {
	if (!Array.isArray(values)) {
		throw new TypeError('Expected an array');
	}

	for (var i = 0; i < values.length; i++) {
		if (input === values[i] || JSON.stringify(input) === JSON.stringify(values[i])) {
			return true;
		}
	}

	return false;
};
