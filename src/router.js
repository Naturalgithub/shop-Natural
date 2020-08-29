import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = () => import(/* webpackChunkName: 'index' */'@/views/index')
export default new Router({
  routes: [

    {
      path: '/',
      name: 'index',
      component: Index
    }
    // {
    //   path: '/about',
    //   name: 'about',

    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
