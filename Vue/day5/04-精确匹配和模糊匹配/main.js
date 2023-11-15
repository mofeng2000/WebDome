import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
// Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router//注入，建立关联
}).$mount('#app')
