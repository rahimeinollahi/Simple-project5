import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta:{transition:'ts-about'},
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path:'',
        component: () => import(/* webpackChunkName: "DefaultAbout" */ '../views/DefaultAbout.vue'),
        meta:'ts-fade'
      },
      {
        path: 'aboutpage1',
        name: 'Aboutpage1',
        // route level code-splitting
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "aboutPage1" */ '../views/AboutPage1.vue')
      },
      {
        path: 'aboutpage2',
        name: 'Aboutpage2',
        // route level code-splitting
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "aboutPage2" */ '../views/AboutPage2.vue')
      },
      {
        path: 'skills',
        name: 'Skills',
        // route level code-splitting
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Skills" */ '../views/Skills.vue'),
        meta:{transition:'ts-about'}
      },
      {
        path:'city',
        name:'City',
        component: () => import(/* webpackChunkName: "city" */ '../views/City.vue'),
        meta:'ts-fade'
      },
      {
        path:'certificate',
        name:'Certificate',
        component: () => import(/* webpackChunkName: "city" */ '../views/Certificate.vue'),
        meta:'ts-fade'
      },
      {
        path:'propofme',
        name:'Propofme',
        component: () => import(/* webpackChunkName: "propofme" */ '../views/PropofMe.vue'),
        meta:'ts-fade'
      },
      {
        path:'registeruser',
        name:'Registeruser',
        component: () => import(/* webpackChunkName: "registeruser" */ '../views/RegisterUser.vue'),
        meta:'ts-fade'
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
