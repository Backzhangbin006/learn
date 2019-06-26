<template>
  <div class="wrapper">
    <nav class="navbar">
      <div class="contain">
        <a href="#" class="navbar-brand">
          <i>计划板</i>
        </a>
        <ui class="nav navbar-nav">
          <li>
            <router-link  to="/home">首页</router-link>
          </li>
          <li>
            <router-link  to="time-entries">计划列表</router-link>
          </li>
        </ui>
      </div>
    </nav>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Sidebar from './components/sideBar.vue'
export default {
  name: 'app',
  components: {
    sideBar
  }
}
</script>

<style>

</style>
