import Vue from "vue"
import VueRouter from "vue-router"

// 一级路由
import Layout from "@/views/Layout"
import ArticleDetail from "@/views/ArticleDetail"

// 二级路由
import Article from "@/views/Article"
import Collect from "@/views/Collect"
import Like from "@/views/Like"
import User from "@/views/User"
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    // 一级路由配置
    {
      path: "/home",
      component: Layout,
      // 二级路由配置
      children: [
        { path: "", redirect: "article" },
        { path: "article", component: Article },
        { path: "collect", component: Collect },
        { path: "like", component: Like },
        { path: "user", component: User },
      ],
    },

    { path: "/detail/:id?", component: ArticleDetail },
  ],
  linkActiveClass:"active",
  linkExactActiveClass:"exact-active"
})

export default router
