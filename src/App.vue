<template>
  <div id="app">
    <the-header></the-header>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import TheHeader from './components/TheHeader.vue';
export default {
  components:{
    TheHeader
  },
  methods: {
    ...mapActions(["getAllUsers"]),
  },
  created() {
    this.getAllUsers();
  },
};
</script>
<style>
body {
  background-color: #cdfaf1;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
