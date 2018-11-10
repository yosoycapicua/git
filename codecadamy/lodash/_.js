
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
	},
	words: function (string) {	
		
		return string.split(" ");
	},
	pad: function (string, length) {
		let extraPad = (length - string.length)% 2;
		console.log(extraPad);
		if (string.length < length) {
			if(extraPad === 1){
				string = string.concat(" ")
			}
			while (string.length < length) {
				string = string.concat(" ");
				string = " ".concat(string);	
			}
		}
		return string;
	},
	has: function (obj, key) {
		if (obj.key != undefined && Object.keys(obj).find(function (mykey) {
			return mykey === key;
		})) {
			return true;
		}else{
			return false;
		}
	}
	};






// Do not write or modify code below this line.
module.exports = _;