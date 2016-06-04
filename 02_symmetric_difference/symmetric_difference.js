function difference(array1, array2){
	var symDifArr = array2;
	symDifArr = array1.filter(function(value, index, array){
		var pass = true;
		for(var i = 0; i < symDifArr.length; i++){
			if (value === symDifArr[i]) {
				pass = false;
			}
		}
		return pass;
	})
	return symDifArr;
}

function symmetricDiff(array1, array2){
	var combinedArray = [];
	var unique1 = difference(array1, array2);
	var unique2 = difference(array2, array1);
	
	unique1.forEach(function(value){
		combinedArray.push(value);
	});
	unique2.forEach(function(value){
		combinedArray.push(value);
	});

	return combinedArray;
}