$(document).ready(function(){
	headerShow();
});

function headerShow(){
	$("#empty").mouseover(function(){
		$(".header-show").fadeIn(250, function(){
			$(this).addClass("seeMe");
			$(this).clearQueue();
		});
	});
	$("#empty").mouseout(function(){
		$(".header-show").fadeOut(250, function(){
			$(this).removeClass("seeMe");
			$(this).clearQueue;
		});
	});
}