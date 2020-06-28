import Vue from 'vue'
import App from './App.vue'
import {vue_const} from '@/common/const.js'
import router from '@/router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

vue_const()

