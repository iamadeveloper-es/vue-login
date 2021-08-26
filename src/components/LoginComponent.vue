<template>
  <form-component
  :formTitle="'Login'"
  @submitEmitter="login()"
  >
    <div slot="form-fields" class="space-y-4">
      <div class="form-group">
        <input
          class="w-full border-gray-100 rounded-md h-14"
          type="email"
          placeholder="Email"
          id="email"
          v-model="user.email"
        />
      </div>
      <div class="form-group">
        <input
          class="w-full border-gray-100 rounded-md h-14"
          type="text"
          placeholder="Password"
          id="password"
          v-model="user.password"
        />
      </div>
      <div v-if="error.status" class="error px-6 py-3 bg-red-500 rounded-md mt-10 text-white">{{error.mssg}}</div>
      <button class="px-6 py-3 bg-green-500 rounded-md mt-10 text-white" type="submit">Login</button>
      <div class="link">
        <p>¿No tienes una cuenta? registrate <router-link to="/register" class="text-blue-400">aquí</router-link></p>
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