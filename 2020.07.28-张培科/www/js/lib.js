function slideNav(ele){ // #nav li //下拉菜单
	$(ele).hover(function(){           
		$(this).find("dl").stop().slideToggle();
		$(this).toggleClass("current");
	});
}
