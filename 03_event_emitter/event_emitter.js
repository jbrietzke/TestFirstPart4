function MyEventEmitter(){
	this.events = {
		greet : [MyEventEmitter.prototype.addListener]
	};
}

MyEventEmitter.prototype.addListener = function(name){
	return "Hello, " + name + "!";
};

MyEventEmitter.prototype.emit = function(){

};