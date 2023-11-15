$(document).ready(function($) {

	// 导航
	function myNav() {
		var _winw = $(window).width();
		if (_winw > 767) {
			$('.nav li').bind('mouseenter', function() {
				$(this).find('dl').stop().slideDown();
				if ($(this).find('dl').length) {
					$(this).addClass('ok');
					$(".nav .mask").stop().slideDown();
				}
			});
			$('.nav li').bind('mouseleave', function() {
				$(this).removeClass('ok');
				$(this).find('dl').stop().slideUp();
				$(".nav .mask").stop().slideUp();
			});

		} else {
			$('.nav li').unbind('mouseenter mouseleave');

			$('.nav .v1').click(function() {
				if ($(this).siblings('dl').length) {
					$(this).parent("li").toggleClass("ok");
					$(this).parent("li").siblings("li").removeClass("ok");
					$(this).siblings('dl').stop().slideToggle();
					$(this).parent("li").siblings("li").find("dl").stop().slideUp();
					return false;

				}
			});
		}
	}
	myNav();
	$(window).resize(function(event) {
		myNav();
	});
	//选取后四个li
	$(".nav li:gt(2)").addClass('other');
	$('.m-left-lb li').click(function() {
		$(this).find("dl").stop().slideDown();
		$(this).addClass("on");
	});

	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		$("body").toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if ($(this).hasClass('open')) {
			$('body').addClass('open');
			$('.nav').addClass("on");
			if (_winw <= 767) {
				$('.nav').addClass("on");
			}
		} else {
			$('body').removeClass('open');
			$('.nav').removeClass("on");
			if (_winw <= 767) {
				$('.nav').removeClass("on");
			}

		}
	});

});
