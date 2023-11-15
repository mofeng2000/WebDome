



jQuery(document).ready(function($) {

    //选项卡 点击切换
    $(".TAB_CLICK li").click(function(){
      var tab=$(this).parent(".TAB_CLICK");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });

    // 弹出框
    $('.myfancy').click(function(){
        var _id = $(this).attr('href');
        $(_id).fadeIn("normal");
    });
    $('.pop-bg,.close,.mob-pop1 .btn').click(function(){
        $(this).parents('.m-pop').fadeOut("normal");
    });
    $('.pop-bg,.close').click(function(){
        $(this).parents('.m-pop-lb1').fadeOut("normal");
    });
    $('#btn-pop1').click(function(){
        var _id = $(this).attr('href');
        $(_id).fadeIn("normal");
    });
    // 返回顶部
    $('.r-top').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500);
    });
    $(window).scroll(function() {
        var _top = $(window).scrollTop();
        if (_top < 100) {
            $('.r-top').stop().fadeOut(500);
        } else {
            $('.r-top').stop().fadeIn(500);
        }
    });
    (function(){
        // 自定义多选
        $('[role=checkbox]').each(function(){
            var input = $(this).find('input[type="checkbox"]');

                input.each(function(){
                    if( $(this).attr('checked')){
                        $(this).parents('label').addClass('checked');
                        $(this).prop("checked", true)
                    }
                })

                input.change(function(){
                    $(this).parents('label').toggleClass('checked');
                });
        })

    })();


        (function(){
            // 自定义单选
        $('[role=radio]').each(function(){
            var input = $(this).find('input[type="radio"]'),
                label = $(this).find('label');

                input.each(function(){
                    if( $(this).attr('checked')){
                        $(this).parents('label').addClass('checked');
                        $(this).prop("checked", true)
                    }
                })

                input.change(function(){
                    label.removeClass('checked');
                    $(this).parents('label').addClass('checked');
                    input.removeAttr('checked');
                    $(this).prop("checked", true)
                })
        })
    })();
    //顶部导航
    $(".a-person").click(function(){
        $(this).siblings(".ul-nav").stop().slideToggle();
    });
    // 顶部搜索
    /*$(".hd-so .ico").click(function(e){
        $(this).parent(".so").addClass("on");
        $(this).stop().hide(0);
        event.stopPropagation();
    })
    $(".hd-so .so .inp,.hd-so .so .sub").click(function(){
        $(".hd-so .ico").stop().hide(0);
        event.stopPropagation();
    })
    $(document).click(function(e){
        $(".hd-so .so").removeClass("on");
        $(".hd-so .ico").stop().show(0);
        event.stopPropagation();
    })
    $(".hdr .menu").click(function(){
        $(".nav").stop().slideToggle();
    })*/

});