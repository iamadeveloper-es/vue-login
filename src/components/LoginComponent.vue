<template>
  <form-component
  :formTitle="'Login'"
  @submitEmitter="login()"
  >
    <div slot="form-fields">
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
      <div v-if="error.status" class="error">{{error.mssg}}</div>
      <button type="submit">Login</button>
      <div class="link">
        <p>¿No tienes una cuenta? registrate <router-link to="/register">aquí</router-link></p>
      </div>
    </div>
  </form-component>
</template>

<script>
import Helpers from '../helpers' 
import FormComponent from "./FormComponent.vue";
import {mapState} from 'vuex'
export default {
  components: { FormComponent },
  data(){
      return{
          user:{
              email: '',
              password: ''
          },
          error:{
            status: false,
            mssg: ''
          }
      }
  },
  computed:{
    ...mapState(['isUserLogged'])
  },
  methods:{
    login(){
      const {email, password} = this.user
      if(email != '' && password != ''){
        let payload = this.user
        this.$store.dispatch('login', payload) 
        if(this.isUserLogged){
          return this.$router.push({path: '/'})
        }else{
          this.error.status = true
          this.error.mssg = 'El usuario no existe'
        }
      }else{
        this.error.status = true
        this.error.mssg = 'Rellena todos los campos'
      }
    },
  },
  mounted(){
    Helpers.clearError('input', this.error)
  }
};
</script>

<style>
</style>