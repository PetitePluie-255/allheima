import Vue from 'vue'
import App from './App.vue'
import "./style/common.css"
import NavItem from './components/NavItem.vue'

Vue.component('NavItem',NavItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
