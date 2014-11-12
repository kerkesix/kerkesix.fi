// Off Canvas Sliding

$(document).ready(function(){
	$('.js-menu-trigger').on('click touchstart', function(e){
		$('body').toggleClass('no-scroll');
		$('.js-menu, .js-menu-screen').toggleClass('is-visible');
		$('.sliding-menu-button').toggleClass('slide close');
		$('#masthead, #page-wrapper').toggleClass('slide');
		e.preventDefault();
	});
	$('.js-menu-screen').on('click touchstart', function(e){
		$('body').toggleClass('no-scroll');
		$('.js-menu, .js-menu-screen').toggleClass('is-visible');
		$('.sliding-menu-button').toggleClass('slide close');
		$('#masthead, #page-wrapper').toggleClass('slide');
		e.preventDefault();
	});
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});

// Gallery Popups
$(document).ready(function(){
	$('.image-gallery > ul').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  gallery: { enabled:true }
	});
});
