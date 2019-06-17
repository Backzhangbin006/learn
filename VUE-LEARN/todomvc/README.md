- el:#root  根挂载点，
- App component + vue-router + vuex 混合一起的应用

new Vue({
  el: '#app',
  render: h=>(app)
})

- vue 的难点是 数据管理
  可以是组件状态， data() {},
  当两兄弟组件要共享状态时，登录 
  props传递过去 
  应用状态？

- 当页面上多个组件间要共享状态时，
  将共享状态，放至在这些组件的共同的父组件data来管理
  状态要唯一，放在一个地方（共同的父组件） 方便管理
  如果不统一，状态有可能不同步
  父子组件通信  v-on:increment="incrementCount"
  pops： this.$emit();   //传参

- 麻烦，找父节点麻烦， this.$emit()
  很多状态要共享，很多组件，组件的关系也错综复杂，
  App 全局数据管理 vuex 应用状态管理