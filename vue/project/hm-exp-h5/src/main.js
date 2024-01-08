import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 按需导入vant组件
import '@/utils/vant-ui'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
