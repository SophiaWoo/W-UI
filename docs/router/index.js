import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../pages/Hello'

import Button from '../pages/Button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    }
  ]
})
