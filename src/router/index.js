import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Products from '@/components/Products'
import Subcategory from '@/components/Subcategory'
import Signup from '@/components/Signup'
import Merchant from '@/components/Merchant'
import EmailTemplate from '@/components/EmailTemplate'
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
      path: '/merchant',
      name: 'Merchant',
      component: Merchant
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
      path:'/rating',
name: 'Rating',
component: Rating
    },
    {
      path: '/products/:name',
      name: 'Products',
      component: Products
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/emailtemp',
      name: 'EmailTemplate',
      component: EmailTemplate
    }
  ],

})
