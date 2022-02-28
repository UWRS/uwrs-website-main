import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import JoinUs from '@/components/JoinUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/joinus',
      name: 'JoinUs',
      component: JoinUs
    }
  ]
})
