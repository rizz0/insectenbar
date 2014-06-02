$( document ).ready(function() {
	$('.pin-description').each(function(){
		$clamp(this, {clamp: 3});
	});

	resizeVideo();
	$(window).resize(function() {
		resizeVideo();
	});

	$('.pin-container').each(function(){
		var pinLink = $(this).find('.js-pin-link');
		if(pinLink.length > 0) {
			$(this).on('click', function(){
				window.location = pinLink.attr('href');
			});
			$(this).css('cursor', 'pointer');
		}
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

