module.exports = function() {
	if (window.jQuery == null) {
		throw new Error('jQuery was not found');
	}
	require('./jquery-turtle')(window.jQuery, window);
}
