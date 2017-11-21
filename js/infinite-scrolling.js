$(document).ready(function() {
	alert("hey!");
	$('.container').infiniteScroll({
 	maxPage: 2,
		path: function(index) {
			return "index" + index + ".html";
		}
	});
});