import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton.vue'
Vue.component('MyButton',MyButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
