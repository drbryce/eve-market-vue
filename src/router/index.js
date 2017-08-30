import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Landing from '@/components/Landing'
import { store } from '../store/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => checkLogged()
    }
  ],
  linkActiveClass: 'active'
})

function checkLogged (to, from, next) {
  if (!store.state.user) next('/login')
  else next()
}
