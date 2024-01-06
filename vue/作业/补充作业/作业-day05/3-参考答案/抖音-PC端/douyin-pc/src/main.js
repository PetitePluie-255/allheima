import Vue from 'vue'
import App from './App.vue'
import './style/index.css'
Vue.config.productionTip = false
Vue.directive('focus', {
  inserted(el) {
    // 如果指令作用于input元素，直接聚焦
    if(el.tagName==='INPUT')return el.focus()
    // 否则找到内部的input元素，再聚焦
    const input = el.querySelector('input')
    if(input)input.focus()
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
