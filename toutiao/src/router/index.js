import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import detail from '@/views/detail'
import personal from '@/views/personal'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },    
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
  ]
})
