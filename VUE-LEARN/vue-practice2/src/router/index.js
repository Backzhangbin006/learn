import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import timeEntries from '@/components/timeEntries'
import logTime from '@/components/logTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'timeEntries',
      component:timeEntries,
      children:{
        path: '/',
        name: 'logTime',
        component: logTime
      }
    }
  ]
})
