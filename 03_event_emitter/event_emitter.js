function MyEventEmitter(){
	this.events = {
		greet: []
	};
}

MyEventEmitter.prototype.addListener = function(action, func){
	if (this.events[action] === undefined) {
		this.events[action] = [];
		this.events[action].push(func);
	}else{
		this.events[action].push(func);
	}
}



MyEventEmitter.prototype.emit = function(action, name){
	return this.events[action].map(function(eventHandler){
		return eventHandler.apply(this, [name]);
	});
}
