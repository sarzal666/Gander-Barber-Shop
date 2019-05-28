(function ($) {

	$(document).ready(function () {

		// ---------------- Main slider ----------------
		$('.slider-box').slick({
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: true,
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slideToScroll: 1,
			prevArrow: $('.cosmetics-arrow-left'),
			nextArrow: $('.cosmetics-arrow-right')


		});
		// -------------- Main slider END --------------

	}); //document ready

})(jQuery);