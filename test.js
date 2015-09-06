'use strict';
var test = require('ava');
var isServerError = require('./');

[500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 511, 598, 599].forEach(function (code) {
	test('should detect `' + code + '`', function (t) {
		t.true(isServerError(code));
		t.end();
	});
});

test('should return false for all other codes', function (t) {
	[400, 200, 0, 204, 101].forEach(function (code) {
		t.false(isServerError(code));
	});

	t.end();
});

test('should throw on nonsense input', function (t) {
	['hi', function () {}, {}].forEach(function (input) {
		t.throws(function () {
			isServerError(input);
		});
	});

	t.end();
});
