<template>
  <div
    class="
      navbar
      container
      mx-auto
      flex
      justify-between
      items-center
      text-white
    "
    v-click-outside="hideMenu"
  >
    <div class="logo flex items-center cursor-pointer"
    @click="homeRoute()"
    >
        <md-icon class="md-size-2x">medical_services</md-icon>
        <span class="ml-2 mt-2 text-lg">Medical App</span>
    </div>
    <div class="user" v-if="isUserLogged">
      <div
        class="flex items-center cursor-pointer relative"
        @click="toggleMenu()"
      >
        <md-icon class="md-size-2x text-white">account_circle</md-icon>
        <span class="user email ml-2">{{ user.email }}</span>
      </div>
      <div class="sub-menu absolute bg-white shadow" v-if="isMenu">
        <ul class="m-0 p-0 text-gray-500">
          <li class="p-4 cursor-pointer hover:bg-gray-200"
            @click="logOutUser()"
          >
            <md-icon class="md-size-1x">logout</md-icon>
            <span class="ml-2">Cerrar Sesión</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isMenu: false,
    };
  },
  computed: {
    ...mapState(["isUserLogged"]),
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(['logOut']),
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    hideMenu() {
      this.isMenu = false;
    },
    logOutUser(){
        this.logOut()
        if(!this.isUserLogged){
            this.$router.push({path: '/login'})
        }
    },
    homeRoute(){
      if(!this.isUserLogged){
        return
      }else{
        this.$router.push({path: '/'})
      }
    }
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
</style>