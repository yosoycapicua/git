
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
	},
	invert: function (obj) {
		let keys = Object.values(obj);
		let values = Object.keys(obj);
		console.log(values);
		let newObj = {};
		for (let i = 0; i < keys.length; i++) {
			newObj[keys[i]] = values[i];
		}
		return newObj;
	},
	findKey: function (obj, pred) {
		let values = Object.values(obj); // array of values
		let myValue = values.find(pred); // wanted value
		let index = values.indexOf(myValue); // index of wanted value

		console.log(Object.keys(obj)[index]);

		return Object.keys(obj)[index];
	}, 
	drop: function (array, num) {
		array.reverse();
		if (num === undefined) {
			num = 1;
		}
		for (let i = 0; i < num; i++) {
			array.pop()
		}
		array.reverse();
		return array;
	},
	dropWhile: function (array, pred) {
		let index = array.findIndex(function (element, ind) {
			return !pred(element, ind, array);
		});
		
		array = this.drop(array, index);
		return array;
	},
	chunk: function (array, size) {
		let chunk;
		let newArray = [];
		if(size === undefined){
			size = 1;
		}
		while(array.length > size){
			chunk = array.slice(0, size);
			array = array.slice(size);
			newArray.push(chunk);
		}
		newArray.push(array);

		return newArray;
	}
	};






// Do not write or modify code below this line.
module.exports = _;