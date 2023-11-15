// function run(obj,num ,hanshu) {
//     clearInterval(obj.times);
//     //获取缓慢移动位置
//     obj.times=setInterval(function () {
//         var stap=Math.ceil((num-obj.offsetLeft)/10);
//         stap=stap<0?Math.floor(stap):Math.ceil(stap);
//         //offsetLeft拿到当前位置
//         obj.style.left=obj.offsetLeft+stap+"px";
//         if(obj.offsetLeft===num){
//             clearInterval(obj.times);
//            hanshu&&hanshu();
//
//         }
//     },80)
// }
function run(obj,num,hanshu) {
    clearInterval(obj.timer);

   obj.timer=setInterval(function () {
       var step=(num-obj.offsetLeft)/10;
       step=step<0?Math.floor(step):Math.ceil(step);
        obj.style.left=obj.offsetLeft-step+"px";
        if(obj.offsetLeft===num){
            clearInterval(obj.timer);
            hanshu&&hanshu();
        }
    },15)
}