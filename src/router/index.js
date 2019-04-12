import Vue from 'vue'
import Router from 'vue-router'
import PageA from '../pages/PageA'
import PageB from '../pages/PageB'
import PageC from '../pages/PageC'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/a',
      name: 'PageA',
      component: PageA
    },
    {
      path: '/b',
      name: 'PageB',
      component: PageB
    },
    {
      path: '/c',
      name: 'PageC',
      component: PageC
    }
  ]
})
