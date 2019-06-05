<template>
  <div class="look">
    {{msg}}
    {{$route.params.id}}  <!-- 利用路由传参 -->
    <router-view></router-view>     <!-- 展示子路由内容-->
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      msg: '看一看'
    }
  }
}
</script>

