(function($) {

    $(document).ready(function(){

        // ---------------- Main slider ----------------
		 $('.cosmetics-offer').slick({
			 autoplay: true,
			 autoplaySpeed: 1500,
			 arrows: true,
			dots: false,
		 	infinite: true,
		 	speed: 300,
			 slidesToShow: 3,
			 slideToScroll:1,
		 	prevArrow: $('.cosmetics-arrow-left'),
		 	nextArrow: $('.cosmetics-arrow-right'),
			 
			 responsive: [
				 {
					 breakpoint: 1024,
					 settings: {
						 slidesToShow: 3,
						 slidesToScroll: 3,
						 autoplaySpeed:1000
					 }
				 },
				 {
					 breakpoint: 600,
					 settings: {
						 slidesToShow: 2,
						 slidesToScroll: 2
					 }
				 },
				 {
					 breakpoint: 480,
					 settings: {
						 slidesToShow: 1,
						 slidesToScroll: 1
					 }
				 }
				 // You can unslick at a given breakpoint now by adding:
				 // settings: "unslick"
				 // instead of a settings object
			 ]
		   });
        // -------------- Main slider END --------------

    }); //document ready
		$(document).on('click', '.nav li a[href^="#"]', function (event) {
			event.preventDefault();
				console.log(window.outerWidth);
			if (window.outerWidth < 768) {
				$('.navbar-toggle').trigger('click');
			}

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 80
			}, 500);
		});
		
    $(window).on('scroll', function() {
		 stickyNav();
    });
    

    function fixedMenuHeightMargin() {
		$navbar = $('.navbar-starter-theme');

		if (window.innerWidth > 767) {
			var $menuHeight = $navbar.height();
		} else {
			var $menuHeight = $('.navbar-header').outerHeight();
		}
	
		$('.navSpaceHolder').css('height', $menuHeight);

	}

	function stickyNav() {
		var $navbar = $('.navbar-starter-theme');
		var $navbarHolder = $('.navSpaceHolder');

		if ($(window).scrollTop() > $navbarHolder.offset().top) {
			if (!$navbar.hasClass('sticky')) {
				fixedMenuHeightMargin();
				$navbar.addClass('sticky');
			}

		} else {
			if ($navbar.hasClass('sticky')) {
				$('.navSpaceHolder').css('height', 0);
				$navbar.removeClass('sticky').trigger('stickyRemove');
			} 
		}
	}

})(jQuery);
