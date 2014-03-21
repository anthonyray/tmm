function Station(x,y) {
	var self = this;
	this.x = x ;
	this.y = y ;
	this.name = ''; 
	this.radius = 5; 
	this.id = 0;
	this.tweets = [];

	// Draw
	
	this.draw();

	// Events 

	this.representation.mouseover(function(){
		self.representation.animate({r : self.radius + 10}, 100);
	})

	this.representation.mouseout(function(){
		self.representation.animate({r : self.radius},100);
	});

}

Station.prototype.draw = function() {
	this.representation = tmm.representation.circle(this.x,this.y,this.radius);
	this.representation.attr({fill : '#1abc9c'});
}

Station.prototype.inflate = function (increment){
	this.radius += increment; 
	this.representation.animate({r : this.radius },100);
}

