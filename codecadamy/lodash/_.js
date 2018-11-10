
_ = {
	clamp: function(number, lower, upper){
			let lowerClampedValue = Math.max(number, lower);
			let clampedValue = Math.min(lowerClampedValue, upper);
			return clampedValue;
		},
	inRange: function (num, start, end) {
		if (num < start || num >= end) {
			return false;
		}else{
			return true;
		}
	}
	};


// if not in range, put in range






// Do not write or modify code below this line.
module.exports = _;