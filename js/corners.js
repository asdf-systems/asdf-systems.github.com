(function ($) {
	var colorClasses = ['turquoise', 'pink', 'blue'];
	var getColorClass = function(obj) {
		for(index in colorClasses) {
			if($(obj).hasClass(colorClasses[index])) {
				return colorClasses[index];
			}
		}
		return "";
	}
	// Change corners on portfolio page
	var $corners = $('#corner_top, #corner_bottom');
	$('#portfolio dt').click(function() {
		$corners.removeClass(getColorClass($corners[0])).addClass(getColorClass(this));
	})
})(jQuery);
