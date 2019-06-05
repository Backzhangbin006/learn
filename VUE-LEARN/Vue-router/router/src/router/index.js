import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'    // @表示src文件下
import Look from '@/components/Look'
import LookOne from '@/components/LookOne'
import LookTwo from '@/components/LookTwo'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/look',
      name: 'Look',    //使用字符跳转时需要name:
      component: Look,
      children: [   // 子路由里面path：不需要/， 会自动连接到上一级路由
        {
          path: 'look-one',
          name: 'LookOne',
          component: LookOne,
        },
        {
          path: 'look-two',
          name: 'LookTwo',
          component: LookTwo,
        }
      ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
