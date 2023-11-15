import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import NotFound from "../../13-编程式导航-跳转传参演示/views/NotFound";
import VueRouter from 'vue-router'

Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {name: 'search', path: '/search/:words?', component: Search},
        {path: "*", component: NotFound}
    ],
    //配置无#号路径
    mode: "history"
})

export default router