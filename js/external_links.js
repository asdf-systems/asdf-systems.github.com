(function($) {
	// Get every link and add `target="_blank"` if
	// - the link starts with a scheme
	$('a').each(function(elem) {
		var link = $(this).attr('href');
		if(link.match(/^(https?|ftp):/)) {
			$(this).attr('target', "_blank");
		}
	});
})(jQuery);
