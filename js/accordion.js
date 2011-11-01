(function($) {
	// Handle accordion clicks
	// - on header click:
	//   - remove active class from all
	//   - add active class to the clicked one
	$('dl.accordion').each(function(elem) {
		var $accordion = $(this);
		var headers = $accordion.children('dt');
		$(headers).click(function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(headers).removeClass('active');
				$(this).addClass('active');
			}
		})
	});
})(jQuery);
