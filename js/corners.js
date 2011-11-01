(function ($) {
	var getColorClass = function(obj) {
		for(var i = 0; i < obj.classList.length; i++) {
			switch(obj.classList[i]) {
				case "turquoise":
				case "pink":
				case "blue":
					return obj.classList[i];
			}
		}
		return "";
	}
	// Change corners on portfolio page
	var $corners = $("#corner_top, #corner_bottom");
	$('#portfolio dt').click(function() {
		$corners.removeClass(getColorClass($corners[0])).addClass(getColorClass(this));
	})
})(jQuery);
