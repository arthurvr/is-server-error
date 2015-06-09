'use strict';
module.exports = function (code) {
	if (typeof code !== 'number') {
		throw new TypeError('Expected a number');
	}

	return code === 500 ||
		code === 501 ||
		code === 502 ||
		code === 503 ||
		code === 504 ||
		code === 505 ||
		code === 506 ||
		code === 507 ||
		code === 508 ||
		code === 509 ||
		code === 510 ||
		code === 511 ||
		code === 598 ||
		code === 599;
};
