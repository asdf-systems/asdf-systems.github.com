(function ($) {
	// Add click handler for menu items
	// - Remove active class from all
	// - add active to the clicked one
	$('nav ul li').click(function(elem) {
		location.href = "/"+$(this).text().trim().toLowerCase()+".html";
	})
})(jQuery);
