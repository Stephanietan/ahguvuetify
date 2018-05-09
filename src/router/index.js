import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Home from '@/components/Home'

// const routerOptions = [
//   {
//     path: '/',
//     name: 'Landing',
//     component: Landing
//   },
//   {
//     path: '/signin',
//     name: 'Signin',
//     component: Signin
//   },
//   {
//     path: '/signup',
//     name: 'Signup',
//     component: Signup
//   },
//   {
//     path: '/home',
//     name: 'Home',
//     component: Home
//   }
// ]

// const routes = routerOptions.map(route => {
//   return {
//     ...route,
//     component: () => (`@/components/${route.component}.vue`)
//   }
// })

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
