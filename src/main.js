import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import Header from './components/Header/Header'
import Star from './components/Star/star'
import store from './store'
import './validate'
//注册全局组件

Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component(Button.name,Button)
new Vue({
  el: '#app',
  render: h => h(App),
  router, //配置路由器
  store, //配置vuex的store
})
