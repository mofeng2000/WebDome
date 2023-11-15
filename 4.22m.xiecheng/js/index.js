window.addEventListener("load", function () {
    var focus = document.querySelector(".focus");
    var back = document.querySelector(".back");
    var nav = document.querySelector(".nav_xk1").offsetTop;
    var ol = focus.querySelector("ol");
    var ul = focus.children[0];
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var X = -index * focus.offsetWidth;
        ul.style.transition = "all .3s";
        ul.style.transform = "translateX(" + X + "px)";
    }, 2000);
    ul.addEventListener("transitionend", function () {
        if (index >= 3) {
            ul.style.transition = "none";//清楚过渡效果
            ul.style.transform = "translateX(0)";
            index = 0
        }
        if(index<0){
            focus.style.transition = "none";//清楚过渡效果
            index=2;
            var X = -index * focus.offsetWidth;
            focus.style.transform = "translateX(" + X + "px)";
        }
        ol.querySelector("li.current").classList.remove("current");
        ol.children[index].classList.toggle("current");
    });
    var handX=0;
    var moveX=0;
    ul.addEventListener("touchstart",function (e) {
        handX=e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    ul.addEventListener("touchmove",function (e) {
        moveX=e.targetTouches[0].pageX-handX;
        var translateX=-index*focus.offsetWidth+moveX;
        ul.style.transition = "none";//清楚过渡效果
        ul.style.transform = "translateX(" + translateX + "px)";
        e.preventDefault();
    });

    ul.addEventListener("touchend",function (e) {
        var moveX=e.changedTouches[0].pageX-handX;
        if(moveX>=50){
            index--;
        }
        if(moveX<=-50){
            index++;
        }
        var X = -index * focus.offsetWidth;
        ul.style.transition = "all .3s";
        ul.style.transform = "translateX(" + X + "px)";

        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var X = -index * focus.offsetWidth;
            ul.style.transition = "all .3s";
            ul.style.transform = "translateX(" + X + "px)";
        }, 2000);

    });
    window.addEventListener("scroll",function () {
       if(window.pageYOffset>nav){
           back.style.display="block";
       }
       else {
           back.style.display="none";
       }

    });

    back.addEventListener("click",function (e) {
        run(window, 0);
    });
    function run(obj, num, hanshu) {
        clearInterval(obj.times);
        //获取缓慢移动位置
        obj.times = setInterval(function () {
            var stap = (num - obj.pageXOffset) / 10;
            stap = stap < 0 ? Math.floor(stap) : Math.ceil(stap);
            //offsetLeft拿到当前位置
            window.scroll (0,window.pageXOffset+stap);
            if (obj.pageXOffset === num) {
                clearInterval(obj.times);
                hanshu && hanshu();
            }
        }, 80)
    }



});