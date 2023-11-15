/**
 * 让元素按照指定的方式水平移动
 * @param obj 要设置位置的元素
 * @param target 要设置3的最终位置
 * @param callback 回调函数
 */
function run(obj,target,callback) {

    //清除定时器，避免出现不必要的错误
    clearInterval(obj.timer);
    //定义一个时间函数来实现动画移动
    obj.timer=setInterval(function () {

        //（目标值-现在位置）/10
        //（200-0）/10=20
        //（200-10）/10=19
        //（200-030）/10=17
        var step=(target-obj.offsetLeft)/10;
        step=step<0?Math.floor(step):Math.ceil(step);

        //div.offsetLeft获取当前元素的位置
        obj.style.left=obj.offsetLeft+step+"px";
        //当前位置达到400时，停止
        if (obj.offsetLeft===target){
            clearInterval(obj.timer);

            //动画结束后运行回调函数
            if (callback){
                callback();
            }
            //相当于callback && callback()
        }
    },15);
}