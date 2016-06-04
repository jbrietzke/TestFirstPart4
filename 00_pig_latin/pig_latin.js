function translate(word){
	var wordsArray = word.split(' ');
	var characterArray = [];
	for(var i=0; i < wordsArray.length; i++){
		characterArray.push(wordsArray[i].split('').join(''));
	}
	for(var i = 0; i < characterArray.length; i++){
		characterArray[i] = recurse(characterArray[i].split(''));
		characterArray[i].push('a','y');
		characterArray[i] = characterArray[i].join('');
	}
	


	return characterArray.join(' ');
}	

function recurse(word){
	if ((word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o') || (word[0] === 'u' && word[word.length-1] !== 'q'))  {
		return word;
	}else{
		word.push(word[0]);
		word = word.slice(1);
		return recurse(word);
	}
}
