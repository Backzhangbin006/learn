<template>
  <div class="hello">
    <v-button size="large" @click.native="handleClick">haha</v-button>
    <v-menu></v-menu>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  provide(){
    return{
      
    }
    
  },
  data(){
    return {
       msg:'Welcome to your vue,js App',
        obj:{
        name:'蜗牛'
    }
  }
  },
  components:{
    'v-button':button,
    'v-menu': menu
  },
  methods: {
    handleClick() {
      console.log()
    }
  },
}
</script>

<style>
</style>
