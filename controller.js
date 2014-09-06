DBC.Controller = function(model) {
	this.model = model
}
DBC.Controller.prototype = {
	init: function() {
		this.bindListeners();
	},
	bindListeners: function() {
		$('.code').on('click', this.startSlides());
	},

	startSlides: function() {
		this.getData();
	},

	getData: function() {
		$.ajax({
			url: 'http://localhost:8000',
			type: 'GET',
		}).done(function(data){
			this.parseData(data);
		}.bind(this));
	},
	parseData: function() {
		alert('hi')
	}
}