import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/roberthoudin/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        store.commit('header/setSkin', 'light');
        next();
      },
    },
    {
      path: '/galeria',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "about" */ './views/gallery/index.vue'),
      beforeEnter(to, from, next) {
        store.commit('header/setSkin', 'dark');
        store.commit('intro/continue');
        next();
      },
    },
    {
      path: '/imprensa',
      name: 'press',
      component: () => import(/* webpackChunkName: "about" */ './views/Press.vue'),
      beforeEnter(to, from, next) {
        store.commit('header/setSkin', 'light');
        store.commit('intro/continue');
        next();
      },
    }
  ]
})
