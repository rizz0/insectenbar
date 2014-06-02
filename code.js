$( document ).ready(function() {
	$('.pin-description').each(function(){
		$clamp(this, {clamp: 3});
	});

	resizeVideo();
	$(window).resize(function() {
		resizeVideo();
	});

	$('.pin-container').on('click', function(){
		window.location = $(this).find('.js-pin-link').attr('href');
	});

});

function resizeVideo () {
	var video = $('.video iframe');
	video.width('100%');
	video.height(video.width() * 9 / 16);

	var video = $('.event-video iframe');
	video.width('100%');
	video.height(video.width() * 9 / 16);
}

var i = 0;

