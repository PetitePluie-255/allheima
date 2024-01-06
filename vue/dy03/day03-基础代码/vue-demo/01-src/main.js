import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import HmButton from './components/HmButton'
Vue.component('HmButton',HmButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
