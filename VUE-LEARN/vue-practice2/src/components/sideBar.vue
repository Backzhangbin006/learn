<template>
  <div>
    <h1>已有时长</h1>
    <h1>{{time}}小时</h1>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  computed: {
    time () {
      return this.$store.state.totalTime
    }
  }
}
</script>

<style>

</style>
