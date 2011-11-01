(function ($) {
	// Add click handler for menu items
	// - Remove active class from all
	// - add active to the clicked one
	$('nav ul li').click(function(elem) {
		window.location.href = "/"+$.trim($(this).text()).toLowerCase()+".html";
	});
})(jQuery);
