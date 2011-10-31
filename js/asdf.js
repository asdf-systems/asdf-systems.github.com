(function($) {
	// Add click handler for menu items
	// - Remove active class from all
	// - add active to the clicked one
	$('nav ul li').click(function(elem) {
		$('nav ul li').removeClass('active');
		$(this).addClass('active');
	})

	// Handle accordion clicks
	// - make the first element active by default
	// - on header click:
	//   - remove active class from all
	//   - add active class to the clicked one
	$('dl.accordion').each(function(elem) {
		var $accordion = $(this);
		var headers = $accordion.children('dt');
		$(headers[0]).addClass('active');
		$(headers).click(function() {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(headers).removeClass('active');
				$(this).addClass('active');
			}
		})
	});


	// Slider panel implementation
	// - register Click handler for .next and .prev
	// - make first panel active
	$('.slider').each(function(elem) {

		var $slider = $(this);
		var $pages = $($slider.find('> .pages > *'));
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
					} else if (i == $pages.length - 1) {
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
