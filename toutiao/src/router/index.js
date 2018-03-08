import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import detail from '@/views/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/detail/:id',
    //   name: 'detail',
    //   component: detail
    // },    
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
  ]
})
