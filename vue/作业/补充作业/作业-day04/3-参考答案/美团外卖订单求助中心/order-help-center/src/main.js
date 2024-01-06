import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton.vue'
import MyTip from "./components/MyTip.vue";
import './style/index.css'
Vue.config.productionTip = false

Vue.component('MyButton',MyButton)
Vue.component('MyTip',MyTip)
new Vue({
  render: h => h(App),
}).$mount('#app')
