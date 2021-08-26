<template>
  <div id="app">
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default{
  methods:{
    ...mapActions(['getAllUsers']),
  },
  created(){
    this.getAllUsers()
  }
}
</script>
<style>
body{
  background-color: #CDFAF1;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
}
</style>
