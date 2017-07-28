import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Portal from '@/views/index'
import Overview from '@/views/about/overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
