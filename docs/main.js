// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Wui from '../src'

Vue.config.productionTip = false

Vue.use(Wui)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render (h) { return h(App) }
})
