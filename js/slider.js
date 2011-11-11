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

		var animate = function(fromRight) {
			setCounter(activeIndex+1);
			var $curpage = $($pageholder.find('> *'));
			$curpage.addClass(fromRight?'left':'right');
			setTimeout(function() {
				var newplace = fromRight?'right':'left';
				$curpage = $($pages[activeIndex]).addClass(newplace);
				$pageholder.empty().append($curpage);
				// This timeout effectively gives control to the browser
				// which is necessary for the animation to work.
				// With out this the classes are changed without the browser
				// "noticing", hence no animation.
				setTimeout(function() {
					$curpage.addClass('active').removeClass(newplace);
				}, 1);
			}, 1000);
		}

		$($buttons.filter('.next')).click(function(elem) {
			if(activeIndex+1 >= $pages.length){
				return;
			}
			activeIndex++;
			animate(true);
		});

		$($buttons.filter('.prev')).click(function(elem) {
			if(activeIndex <= 0){
				return;
			}
			activeIndex--;
			animate(false);
		});
	});
})(jQuery);
