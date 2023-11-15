function run(obj,num ,hanshu) {
    clearInterval(obj.times);
    //获取缓慢移动位置
    obj.times=setInterval(function () {
        var stap=Math.ceil((num-obj.offsetLeft)/10);
        stap=stap<0?Math.floor(stap):Math.ceil(stap);
        //offsetLeft拿到当前位置
        obj.style.left=obj.offsetLeft+stap+"px";
        if(obj.offsetLeft===num){
            clearInterval(obj.times);
           hanshu&&hanshu();

        }
    },80)
}