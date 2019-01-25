import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Products from '@/components/Products'
import Subcategory from '@/components/Subcategory'
import Signup from '@/components/Signup'
import Merchant from '@/components/Merchant'
import SProduct from '@/components/SingleProduct'
import Cart from '@/components/Cart'
import NewP from '@/components/Nav'
import Orderh from '@/components/orderhistory'
import Orderhistory from '@/components/Productorder'
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
      path: '/p',
      name: 'NewP',
      component: NewP
    },
    {
      path: '/order',
      name: 'Orderh',
      component: Orderh
    },
    {
      path: '/allorder/:id',
      name: 'Orderhistory ',
      component: Orderhistory 
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Subcategory/:id',
      name: 'Subcategory',
      component: Subcategory
    },
    {
      path: '/products/:id',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'SProduct',
      component: SProduct
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/cart/:id',
      name: 'Cart',
      component: Cart,
      
    },
    
    
  ],
  mode: 'history'
})
