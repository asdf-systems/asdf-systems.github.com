(function($) {
	// Handle accordion clicks
	// - open first section by defaults
	//   - except if it got the class "closed"
	// - on header click:
	//   - remove active class from all
	//   - add active class to the clicked one
	$('dl.accordion').each(function(elem) {
		var $accordion = $(this);
		var $headers = $($accordion.children('dt'));
		if(!$accordion.hasClass('closed') && $headers.length > 0) {
			$($headers[0]).addClass('active');
		}
		$headers.click(function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$headers.removeClass('active');
				$(this).addClass('active');
			}
		})
	});
})(jQuery);
