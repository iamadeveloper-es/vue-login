<template>
  <form-component :formTitle="'Register'" @submitEmitter="register()">
    <div slot="form-fields">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" placeholder="name" id="name" v-model="user.name" />
      </div>
      <br />
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input
          type="text"
          placeholder="last name"
          id="last-name"
          v-model="user.lastName"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          v-model="user.email"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="text"
          placeholder="password"
          id="password"
          v-model="user.password"
        />
      </div>
      <br />
      <button type="submit">Register</button>
    </div>
  </form-component>
</template>

<script>
import {mapState} from 'vuex'
import FormComponent from "./FormComponent.vue";
export default {
  components: { FormComponent },
  data() {
    return {
      user: {
        name: '',
        lastName: '',
        email: '',
        password: ''
      },
    };
  },
  computed:{
    ...mapState(['isUserRegistered'])
  },
  methods: {
    register(){
      let payload = this.user
      this.$store.dispatch('register', payload) 
      if(this.isUserRegistered){
        this.$router.push({path: '/login'})
      }
    },
  },
};
</script>

<style>
</style>