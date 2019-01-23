import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Products from '@/components/Products'
import Subcategory from '@/components/Subcategory'
import Signup from '@/components/Signup'
import Merchant from '@/components/Merchant'
import EmailTemplate from '@/components/EmailTemplate'
import Cart from '@/components/Cart'
import OrderHistory from '@/components/OrderHistory'
import Rating from '@/components/Rating'
import ThankYou from '@/components/ThankYou'
import NavBarLogIn from '@/components/NavBarLogIn'
import NavBarLogOut from '@/components/NavBarLogOut'

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
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/orderhistory',
      name: 'OrderHistory',
      component: OrderHistory
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    },
    {
      path: '/thankyou',
      name: 'ThankYou',
      component: ThankYou
    },
    {
      path: '/navbar',
      name: 'NavBarLogIn',
      component: NavBarLogIn
    },
    {
      path: '/navbartwo',
      name: 'NavBarLogOut',
      component: NavBarLogOut
    }
  ],

})
