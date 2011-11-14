(function($) {
	// Handle accordion clicks
	// - open first section by defaults
	//   - except if it got the class "closed"
	//   - or if the fragment adresses on of the headers
	// - on header click:
	//   - remove active class from all
	//   - add active class to the clicked one
	$('dl.accordion').each(function(elem) {
		var $accordion = $(this);
		var $headers = $($accordion.children('dt'));

		var openTargets = function() {
			var targets = location.hash.split('#');
			var found = false;
			$headers.each(function() {
				if($.inArray($(this).attr('id'), targets) != -1) {
					$(this).addClass('active');
					found = true;
					return;
				}
			})
			if(!found && $headers.length > 0 && !$accordion.hasClass('closed')) {
				$($headers[0]).addClass('active');
			}
		}
		openTargets();

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
