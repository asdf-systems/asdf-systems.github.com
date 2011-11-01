(function($) {
	// Slider panel implementation
	// - register Click handler for .next and .prev
	// - make first panel active
	$('.slider').each(function(elem) {

		var $slider = $(this);
		var $pages = $($slider.find('> *'));
		$slider.empty().append($('<div>').addClass('pages').append($pages));

		$slider.append($('<nav>')
			.append($('<div>').addClass('next'))
			.append($('<div>').addClass('prev'))
			.append($('<div>').addClass('page'))
			.append($('<div>').addClass('clearfix')));
		var $buttons = $($slider.find('> nav > .prev, > nav > .next'));


		// Remove all .left and .right tags on pages
		// mark every page before .active with .left
		// mark every page after .active with .right
		var updateTags = function() {
			var marker = 'left';
			for(var i = 0; i < $pages.length; i++){
				$($pages[i]).removeClass('left right');
				if($($pages[i]).hasClass('active')) {
					$buttons.removeClass('disabled');
					marker = 'right';

					setCounter(i+1);

					// Disable corresponding button if we’re on first or last page
					if(i == 0) {
						$($buttons.filter('.prev')).addClass('disabled');
					}
					if (i == $pages.length - 1) {
						$($buttons.filter('.next')).addClass('disabled');
					}
					continue;
				}
				$($pages[i]).addClass(marker);
			}
		}

		var setCounter = function(page) {
			var numPages = $pages.length;
			var $page = $($slider.find('> nav > .page'));
			$page.empty();
			for(var i = 1; i <= numPages; i++) {
				var marker = (i == page)?'active':'inactive';
				$page.append($('<span>').text('·').addClass(marker));
			}
		}

		$($pages[0]).addClass('active');
		updateTags($slider.get());

		$($slider.find('> nav .next')).click(function(elem) {
			for(var i = 0; i < $pages.length; i++){
				if($($pages[i]).hasClass('active') && i < $pages.length-1) {
					$($pages[i]).removeClass('active');
					$($pages[i+1]).addClass('active');
					break;
				}
			}
			updateTags();
		});

		$($slider.find('> nav .prev')).click(function(elem) {
			for(var i = 0; i < $pages.length; i++){
				if($($pages[i]).hasClass('active') && i > 0) {
					$($pages[i]).removeClass('active');
					$($pages[i-1]).addClass('active');
					break;
				}
			}
			updateTags();
		});

	});
})(jQuery);
