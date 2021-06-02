import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase';

import Home from '../views/Home.vue'
import BlogHome from '../views/BlogHome.vue'
import BlogPost from '../views/BlogPost.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/',
    name: 'blog-home',
    component: BlogHome
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('home');
//   else next();
// });


export default router