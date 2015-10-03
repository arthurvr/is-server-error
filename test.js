import test from 'ava';
import isServerError from './';

[500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 511, 598, 599].forEach(code => {
	test('should detect `' + code + '`', t => {
		t.true(isServerError(code));
		t.end();
	});
});

test('should return false for all other codes', t => {
	[400, 200, 0, 204, 101].forEach(code => {
		t.false(isServerError(code));
	});

	t.end();
});

test('should throw on nonsense input', t => {
	['hi', function () {}, {}].forEach(input => {
		t.throws(() => {
			isServerError(input);
		});
	});

	t.end();
});
