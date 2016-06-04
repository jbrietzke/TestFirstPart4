function renameFiles(nameArray){
	var compareArray = [];
	var counter = 0;
	
	for(var i=0; i<nameArray.length; i++){
		var previousVal = false;
		if (compareArray[0] === undefined) {
			compareArray.push(nameArray[0]);
		}else{
			for(var j = 0; j < compareArray.length; j++){
				if (nameArray[i] === compareArray[j]) {
					previousVal = true;
				}
			}
			if (previousVal === true) {
				counter++;
				var additionalPart = "(" + counter + ")";
				compareArray.push(nameArray[i] + additionalPart);
			}else{
				compareArray.push(nameArray[i]);
			}
		}
	}
	return compareArray;
}






