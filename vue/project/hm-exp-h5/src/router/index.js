import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Detail from '@/views/Detail'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Register from '@/views/Register'

// 二级路由
import Article from '@/views/Article'
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      // 二级路由
      { path: '', redirect: 'article' },
      { path: 'article', component: Article },
      { path: 'collect', component: Collect },
      { path: 'like', component: Like },
      { path: 'user', component: User }
    ]
  },
  { path: '/detail', component: Detail },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = new VueRouter({
  routes
})

export default router
