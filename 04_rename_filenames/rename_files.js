function renameFiles(nameArray){
	var compareArray = [];
	var counter = 0;
	for(var i = 0; i < nameArray.length; i++){
		compareArray.push(check(nameArray[i], compareArray, counter));
	}
	return compareArray;
}


function check(stringValue, compArr, counter){
	if(counter === undefined){
		var counter = 0;
	}
	var prevVal = false;
	for(var i=0; i < compArr.length; i++){
		if(stringValue === compArr[i]){
			prevVal = true;
		}
	}
	if(prevVal === false){
		return stringValue;
	}else{
		counter++;
		var additionalPart = "(" + counter + ")";
		if(stringValue.match(/\d/g) !== null){
			stringValue = stringValue.slice(0,1);
		}
		stringValue = stringValue + additionalPart;
		return check(stringValue, compArr, counter);
	}
}






