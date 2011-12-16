(function($, $LAB) {
	$LAB
	.script('/js/slider.js')
	.script('/js/external_links.js')
	.script('/js/corners.js')
	.wait()
	.script('/js/accordion.js')
	.wait(); // Dummy wait just for the semicolon
})(jQuery,$LAB);
