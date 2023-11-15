$(document).ready(function($) {


	$(".row-a4 .cont .new_con .tab_btn div").mouseenter(function() {
		$(this).addClass("cxsj_hreef_s").siblings().removeClass('cxsj_hreef_s');
		if ($('.row-a4 .cxsj_hreef_s1').hasClass("cxsj_hreef_s")) {
			$(".row-a4 #con_area_1").css('display', 'block');
			$(".row-a4 #con_area_2").css('display', 'none');
			$(".row-a4 #con_area_3").css('display', 'none');
		}
		if ($('.row-a4 .cxsj_hreef_s2').hasClass("cxsj_hreef_s")) {
			$(".row-a4 #con_area_1").css('display', 'none');
			$(".row-a4 #con_area_2").css('display', 'block');
			$(".row-a4 #con_area_3").css('display', 'none');
		}
		if ($('.row-a4 .cxsj_hreef_s3').hasClass("cxsj_hreef_s")) {
			$(".row-a4 #con_area_1").css('display', 'none');
			$(".row-a4 #con_area_2").css('display', 'none');
			$(".row-a4 #con_area_3").css('display', 'block');
		}
	})
	
	$(".row-a5 .cont .new_con .tab_btn div").mouseenter(function() {
		$(this).addClass("cxsj_hreef_s").siblings().removeClass('cxsj_hreef_s');
		if ($('.row-a5 .cxsj_hreef_s1').hasClass("cxsj_hreef_s")) {
			$(".row-a5 #con_area_1").css('display', 'block');
			$(".row-a5 #con_area_2").css('display', 'none');
			$(".row-a5 #con_area_3").css('display', 'none');
		}
		if ($('.row-a5 .cxsj_hreef_s2').hasClass("cxsj_hreef_s")) {
			$(".row-a5 #con_area_1").css('display', 'none');
			$(".row-a5 #con_area_2").css('display', 'block');
			$(".row-a5 #con_area_3").css('display', 'none');
		}
		if ($('.row-a5 .cxsj_hreef_s3').hasClass("cxsj_hreef_s")) {
			$(".row-a5 #con_area_1").css('display', 'none');
			$(".row-a5 #con_area_2").css('display', 'none');
			$(".row-a5 #con_area_3").css('display', 'block');
		}
	})

});
