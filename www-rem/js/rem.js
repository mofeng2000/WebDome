
/*
750 代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;
100 代表换算比例 以及1px=0.01rem
比如，你测量的一个宽度是10px,就可以写为0.1rem
如果设计图宽度 640 请 将下面的 750 改为 640
  */
function getRem(pwidth,prem){
  var html = document.getElementsByTagName("html")[0];
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  if(oWidth>pwidth) oWidth = pwidth;
  html.style.fontSize = oWidth/pwidth*prem + "px";
}

// 请更改下面750为设计图的宽度

window.onload = function(){
    getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
