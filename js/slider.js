(function($) {
	// Slider panel implementation
	// - register Click handler for .next and .prev
	// - make first panel active
	$('.slider').each(function(elem) {
		var activeIndex = 0;
		var $slider = $(this);
		var $pages = $($slider.find('> *'));
		$($pages[0]).addClass('active');

		var $pageholder =$('<div>').addClass('pages').append($pages[0]);
		$slider.empty().append($pageholder);

		$slider.append($('<nav>')
			.append($('<div>').addClass('next'))
			.append($('<div>').addClass('prev'))
			.append($('<div>').addClass('page'))
			.append($('<div>').addClass('clearfix')));
		var $buttons = $($slider.find('> nav > .prev, > nav > .next'));

		var setCounter = function(page) {
			var numPages = $pages.length;
			var $page = $($slider.find('> nav > .page'));
			$page.empty();
			for(var i = 1; i <= numPages; i++) {
				var marker = (i == page)?'active':'inactive';
				$page.append($('<span>').text('·').addClass(marker));
			}
		}
		setCounter(1);

		var updateButtons = function () {
			$buttons.removeClass('disabled');
			if(activeIndex+1 >= $pages.length) {
				$buttons.filter('.next').addClass('disabled');
			}
			if(activeIndex <= 0) {
				$buttons.filter('.prev').addClass('disabled');
			}
		}
		updateButtons();

		var move = function(direction, donecb) {
			var $curpage = $($pageholder.find('> *'));
			$curpage.removeClass('left right active').addClass(direction);
			setTimeout(donecb, 1000);
		}


		var switchPage = function(idx, direction, donecb) {
			var $newpage = $($pages[idx]);
			$pageholder.empty().append($newpage.addClass(direction));
			activeIndex = idx;
			setCounter(idx+1);
			updateButtons();
			// This timeout effectively gives control to the browser
			// which is necessary for the animation to work.
			// With out this the classes are changed without the browser
			// "noticing", hence no animation.
			setTimeout(donecb, 1);
		}

		$($buttons.filter('.next')).click(function(elem) {
			if(activeIndex+1 >= $pages.length){
				return;
			}
			move('left', function() {
				switchPage(activeIndex+1, 'right', function() {
					move('active');
				});
			});
		});

		$($buttons.filter('.prev')).click(function(elem) {
			if(activeIndex <= 0){
				return;
			}
			move('right', function() {
				switchPage(activeIndex-1, 'left', function() {
					move('active');
				});
			});
		});
	});
})(jQuery);
