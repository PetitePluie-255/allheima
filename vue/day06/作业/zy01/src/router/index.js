import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomePage from '../views/HomePage.vue'//首页
import FlatHunting from '../views/FlatHunting.vue'//找房
import MyConsult from '../views/MyConsult.vue'//咨询
import MineHome from '../views/MineHome.vue'//我的
import App from '../App.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/', component: App, redirect: '/HomePage', children: [
      
        {path:'/HomePage',component:HomePage},
        {path:'/FlatHunting',component:FlatHunting},
        {path:'/MyConsult',component:MyConsult},
        {path:'/MineHome',component:MineHome},
    ]},
    
  ]
})
export default router
