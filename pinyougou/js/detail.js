window.onload=function () {
  var mask=document.querySelector(".mask");
  var big=document.querySelector(".big");
  var img=document.querySelector(".preview_img");

    img.addEventListener("mouseover",function () {
        mask.style.display="block";
        big.style.display="block";
    });
    img.addEventListener("mouseout",function () {
        mask.style.display="none";
        big.style.display="none";
    });

    img.addEventListener("mouseover",function (e) {
        //正常的移动
        var maskLeft=e.pageX-img.offsetLeft-mask.offsetWidth/2;
        var maskTop=e.pageY-img.offsetTop-mask.offsetHeight/2;

        //移动的最大值
        var maskMaxX=img.offsetWidth-mask.offsetWidth;
        var maskMaxY=img.offsetHeight-mask.offsetHeight;
        if(maskLeft<=0){
            maskLeft=0;
        }
        else if(maskLeft>maskMaxX) {
            maskLeft=maskMaxX
        }
        if(maskTop<=0){
            maskTop=0;
        }
        else if(maskTop>maskMaxY) {
            maskTop=maskMaxY
        }
        mask.style.left=maskLeft+"px";
        mask.style.top=maskTop+"px";

//等比例放大图片
        var tp=big.querySelector("img");
        tp.style.left=-(big.offsetWidth/img.offsetWidth)*maskLeft+"px";
        tp.style.top=-(big.offsetHeight/img.offsetHeight)*maskTop+"px";

    })


};