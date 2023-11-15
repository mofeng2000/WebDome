$(function() {
    $('.g_bfbtn').click(function () {
        $(this).stop().fadeOut();
        $('.g_vidimg').stop().fadeOut();
        $('.g_video').stop().addClass('atyn');
        $('.g_video').get(0).play();
        // $('.w_shitan').fadeIn();
    });

    // 视频自动播放
    function videoPlay() {
        $('.g_video2').each(function (i, e) {
            $('.g_video2').get(i).play();
        });
    };
    if ($(window).width() > 1200) {
        $('.g_video2').attr("autoplay", "autoplay");
        videoPlay();
    }
}