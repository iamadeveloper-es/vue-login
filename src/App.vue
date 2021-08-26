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
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
