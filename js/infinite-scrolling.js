$(document).ready(function() {
	alert("hey!");
	$('.container').infiniteScroll({
 	maxPage: 6,
		path: function(index) {
			return "index" + index + ".html";
		}
	});
});