import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header/Header'

//注册全局组件

Vue.component('Header',Header)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
