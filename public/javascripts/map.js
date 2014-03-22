Map = function(){
	this.representation = Snap('#map');
	this.width = this.representation.asPX("width");
	this.height = this.representation.asPX("height");
	this.stations = [];
}

Map.prototype.init = function() {
	var self = this;
	
	var minX = 2.22821129036639;
    var maxX = 2.46598982922341; 
    var minY = 48.727837315206;
    var maxY = 48.9456254805762;

    var slopeX = this.width / (maxX - minX);
    var coeffX = - minX*slopeX;

    var slopeY = this.height / (maxY - minY);
    var coeffY = -minY*slopeY;
    
    function getCanvasX(coord)
    {
        return( slopeX*coord + coeffX);
    }

	$.getJSON('/stations',function(data){
		for (var i = 0 ; i < data.length ; i++){
			self.stations.push(new Station(getCanvasX(data[i].longitude), 300 ));
		}
	});
}

Map.prototype.loadStations = function(){
	request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    // Success!
    data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
}

