import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Products from '@/components/Products'
import Signup from '@/components/Signup'
import Rating from '@/components/Rating'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    }
  ],

})
