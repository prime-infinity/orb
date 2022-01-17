import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/createevent',
    name: 'Index',
    component: Index
  },
  /*{
    path: '/organiserprofile',
    name: 'Index',
    component: Index
  },*/
  {
    path: '/forganiserprofile',
    name: 'Index',
    component: Index
  },
  {
    path: '/organiserprofile',
    name: 'organiserProfile',
    component: () => import('../views/organiserProfile.vue')
  },
  {
    path: '/pg1',
    name: 'pg1',
    component: () => import('../views/pg1.vue')
  },
  {
    path: '/pg2',
    name: 'pg2',
    component: () => import('../views/pg2.vue')
  },
  {
    path: '/pg3',
    name: 'pg3',
    component: () => import('../views/pg3.vue')
  },
  {
    path: '/pg4',
    name: 'pg4',
    component: () => import('../views/pg4.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/Event.vue')
  },
  {
    path: '/eventview',
    name: 'eventview',
    component: () => import('../views/EventView.vue')
  },
  {
    path: '/eventsearch',
    name: 'eventsearch',
    component: () => import('../views/EventSearch.vue')
  },
  {
    path: '/eventadmin',
    name: 'eventadmin',
    component: () => import('../views/EventAdmin.vue')
  },
  {
    path: '/eventcheckout',
    name: 'eventcheckout',
    component: () => import('../views/EventCheckout.vue')
  },
  {
    path: '/payoutmethod',
    name: 'payoutmethod',
    component: () => import('../views/PayoutMethod.vue')
  },
  {
    path: '/payoutactivities',
    name: 'payoutactivities',
    component: () => import('../views/PayoutActivities.vue')
  },
  {
    path: '/payout',
    name: 'payout',
    component: () => import('../views/Payout.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
