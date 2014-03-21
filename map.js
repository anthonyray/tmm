Map = function(){
	this.representation = Snap('#map');
	this.width = this.representation.asPX("width");
	this.height = this.representation.asPX("height");
	this.stations = [];
}

Map.prototype.init = function() {
	for (var i = 0 ; i < 100 ; i++){
		this.stations.push(new Station(Math.random()*this.width,Math.random()*this.height));
	}
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

