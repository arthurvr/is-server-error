'use strict';
var assert = require('assert');
var isServerError = require('./');

[500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 511, 598, 599].forEach(function (code) {
	it('should detect `' + code + '`', function () {
		assert.strictEqual(isServerError(code), true);
	});
});

it('should return false for all other codes', function () {
	[400, 200, 0, 204, 101].forEach(function (code) {
		assert.strictEqual(isServerError(code), false);
	});
});

it('should throw on nonsense input', function () {
	['hi', function () {}, {}].forEach(function (input) {
		assert.throws(function () {
			isServerError(input);
		});
	});
});
