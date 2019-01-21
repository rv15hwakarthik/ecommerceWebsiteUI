import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Products from '@/components/Products'
import Subcategory from '@/components/Subcategory'

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
      path: '/Subcategory/:name',
      name: 'Subcategory',
      component: Subcategory
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ],

})
