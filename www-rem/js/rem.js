
/*
750 �������ʦ������Ƹ�Ŀ�ȣ������Ƹ��Ƕ��٣���д����;
100 ��������� �Լ�1px=0.01rem
���磬�������һ�������10px,�Ϳ���дΪ0.1rem
������ͼ��� 640 �� ������� 750 ��Ϊ 640
  */
function getRem(pwidth,prem){
  var html = document.getElementsByTagName("html")[0];
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  if(oWidth>pwidth) oWidth = pwidth;
  html.style.fontSize = oWidth/pwidth*prem + "px";
}

// ���������750Ϊ���ͼ�Ŀ��

window.onload = function(){
    getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
