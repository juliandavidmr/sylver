/**
 * Created by David on 10/7/2017.
 */

module.exports.interval = function (from, to) {
	var _arr_ = [];
	if (from < to) {
		for (var i = from; i <= to; i++) {
			_arr_.push(i)
		}
	} else {
		for (var i = to; i <= from; i++) {
			_arr_.push(i)
		}
	}
	return _arr_;
}