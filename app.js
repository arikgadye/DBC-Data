$(document).ready(function() {
	$('.code').on('click', function() {
		$.ajax({
			url: 'http://localhost:8000',
			type: 'GET',
		}).done(function(data){
			parseData(data);
		});
	});
	function parseData(data) {
		// var data = $.parseJSON(data)
		// $('body').append(data)
		var ctx = $("#myChart").get(0).getContext("2d");
		var myNewChart = new Chart(ctx);
		myNewChart.PolarArea(data)
	};
});

