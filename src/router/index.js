import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next){
      isUserLogged(to, from, next)
    }
  },
  {
    path: '/patient',
    name: 'Patient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientView.vue'),
    beforeEnter(to, from, next){
      isUserLogged(to, from, next)
    }
  },
  {
    path: '/doctor',
    name: 'Doctor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DoctorView.vue'),
    beforeEnter(to, from, next){
      isUserLogged(to, from, next)
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue'),
    
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const isUserLogged = (to, from, next) => {
  if(store.state.isUserLogged){
    next()
  }else{
    next({
      name: 'Login'
    })
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
