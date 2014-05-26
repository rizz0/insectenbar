$( document ).ready(function() {
	$('.pin-description').each(function(){
		$clamp(this, {clamp: 3});
	});

	resizeVideo();
	$(window).resize(function() {
		resizeVideo();
	});

	shame();
});

function resizeVideo () {
	var video = $('.video');
	video.width('100%');
	video.height(video.width() * 9 / 16);
}

var i = 0;

function shame() {
	setTimeout(function(){
		i++;
		$('.typekit-badge').hide();
		if(i < 40) {
			shame();
		}
	}, 100);
}