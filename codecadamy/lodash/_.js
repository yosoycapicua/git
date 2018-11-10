
_ = {
	clamp: function(number, lower, upper){
			let lowerClampedValue = Math.max(number, lower);
			let clampedValue = Math.min(lowerClampedValue, upper);
			return clampedValue;
		},
	inRange: function (num, start, end) {
		if(typeof end === "undefined"){
			end = start;
			start = 0;
		} 
		if(start > end){
			let newStart = end;
			end = start;
			start = newStart;
		}  
		if(num < start || num >= end) {
			return false;
		}else if(start <= num && num < end){
			return true;
		}else{
			return "error while deciding if in or out";
		}
	}
	};


// if not in range, put in range






// Do not write or modify code below this line.
module.exports = _;