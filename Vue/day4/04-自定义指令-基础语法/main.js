import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//全局注册指令
// Vue.directive('focus', {
//     //inserted 会在指令所在的元素，被插入到页面中触发
//     inserted(el) {
//         //el就是指令所绑定的元素
//         console.log(el);
//         el.focus();
//     }
// })
new Vue({
    render: h => h(App),
}).$mount('#app')
