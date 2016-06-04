function sometimes(func){
	var counter = 0;
	var funk = function(){
		counter++;
		if (counter < 4 || (counter % 2 !== 0)) {
			return func.apply(this, arguments);
		}else{
			return "I do not know!";
		}
	}
	return funk;
}
