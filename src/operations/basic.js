/**
 * Created by David on 10/7/2017.
 */

module.exports.multiply = function (a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		return a * b;
	} else {
		function multiplyArrayNum(array, number) {
			return array.map(function (el) {
				return el * number;
			})
		}

		function multiplyArrays(array1, array2) {
			var max = [], min = [];
			if (array1.length > array2.length) {
				max = array1;
				min = array2;
			} else {
				max = array2;
				min = array1;
			}
			return max.map(function (el1, index) {
				if (min.length > index) return el1 * min[index];
				return max[index];
			})
		}

		try {
			a = JSON.parse(a)
		} catch (e) {
		}
		try {
			b = JSON.parse(b)
		} catch (e) {
		}
		if (typeof a === 'object' || typeof b === 'object') {
			if (Array.isArray(a) && typeof b === 'number') {
				return multiplyArrayNum(a, b);
			} else if (Array.isArray(b) && typeof a === 'number') {
				return multiplyArrayNum(b, a);
			} else if (Array.isArray(b) && Array.isArray(a)) {
				return multiplyArrays(a, b);
			}
		}
	}
};

module.exports.add = function (a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	} else {
		function sumArrayNum(array, number) {
			return array.map(function (el) {
				return el + number;
			})
		}

		function sumArrays(array1, array2) {
			var max = [], min = [];
			if (array1.length > array2.length) {
				max = array1;
				min = array2;
			} else {
				max = array2;
				min = array1;
			}
			return max.map(function (el1, index) {
				if (min.length > index) return el1 + min[index];
				return max[index];
			})
		}

		try {
			a = JSON.parse(a)
		} catch (e) {
		}
		try {
			b = JSON.parse(b)
		} catch (e) {
		}
		if (typeof a === 'object' || typeof b === 'object') {
			if (Array.isArray(a) && typeof b === 'number') {
				return sumArrayNum(a, b);
			} else if (Array.isArray(b) && typeof a === 'number') {
				return sumArrayNum(b, a);
			} else if (Array.isArray(b) && Array.isArray(a)) {
				return sumArrays(a, b);
			}
		}
	}
};


module.exports.divide = function (a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		return a / b;
	} else {
		function divArrayNum(array, number) {
			return array.map(function (el) {
				return el / number;
			})
		}

		function divNumArray(array, number) {
			return array.map(function (el) {
				return number / el;
			})
		}

		function divArrays(array1, array2) {
			var max = [], min = [];
			if (array1.length > array2.length) {
				max = array1;
				min = array2;
			} else {
				max = array2;
				min = array1;
			}
			return max.map(function (el1, index) {
				if (min.length > index) return el1 / min[index];
				return max[index];
			})
		}

		try {
			a = JSON.parse(a)
		} catch (e) {
		}
		try {
			b = JSON.parse(b)
		} catch (e) {
		}
		if (typeof a === 'object' || typeof b === 'object') {
			if (Array.isArray(a) && typeof b === 'number') {
				return divArrayNum(a, b);
			} else if (typeof a === 'number' && Array.isArray(b)) {
				return divNumArray(b, a);
			} else if (Array.isArray(b) && Array.isArray(a)) {
				return divArrays(a, b);
			}
		}
	}
};

module.exports.subtract = function (a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		return a - b;
	} else {
		function divArrayNum(array, number) {
			return array.map(function (el) {
				return el - number;
			})
		}

		function divNumArray(array, number) {
			return array.map(function (el) {
				return number - el;
			})
		}

		function divArrays(array1, array2) {
			var max = [], min = [];
			if (array1.length > array2.length) {
				max = array1;
				min = array2;
			} else {
				max = array2;
				min = array1;
			}
			return max.map(function (el1, index) {
				if (min.length > index) return el1 - min[index];
				return max[index];
			})
		}

		try {
			a = JSON.parse(a)
		} catch (e) {
		}
		try {
			b = JSON.parse(b)
		} catch (e) {
		}
		if (typeof a === 'object' || typeof b === 'object') {
			if (Array.isArray(a) && typeof b === 'number') {
				return divArrayNum(a, b);
			} else if (typeof a === 'number' && Array.isArray(b)) {
				return divNumArray(b, a);
			} else if (Array.isArray(b) && Array.isArray(a)) {
				return divArrays(a, b);
			}
		}
	}
};