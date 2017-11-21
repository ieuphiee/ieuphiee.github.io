$(document).ready(function(){
	$('.container').infiniteScroll({
 	// options
 	path: '.pagination__next',
 	append: 'container2',
	history: false,
	});
})