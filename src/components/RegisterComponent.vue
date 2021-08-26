<template>
  <form-component :formTitle="'Register'" @submitEmitter="register()">
    <div slot="form-fields" class="space-y-4">
      <div class="form-group">
        <input
          class="w-full border-gray-100 rounded-md h-14"
          type="text"
          placeholder="Name"
          id="name"
          v-model="user.name"
        />
      </div>
      <div class="form-group">
        <input
          class="w-full border-gray-100 rounded-md h-14"
          type="text"
          placeholder="Last Name"
          id="last-name"
          v-model="user.lastName"
        />
      </div>
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
      <button class="px-6 py-3 bg-green-500 rounded-md mt-10 text-white" type="submit">Register</button>
    </div>
  </form-component>
</template>

<script>
import Helpers from '../helpers'
import { mapState } from "vuex";
import FormComponent from "./FormComponent.vue";
export default {
  components: { FormComponent },
  data() {
    return {
      user: {
        name: "",
        lastName: "",
        email: "",
        password: "",
      },
      error:{
        status: false,
        mssg: ''
      }
    };
  },
  computed: {
    ...mapState(["isUserRegistered"]),
  },
  methods: {
    register() {
      let payload = this.user;
      if(this.user.name != '' && this.user.lastName != '' && this.user.email != '' && this.user.password != ''){
        this.$store.dispatch("register", payload);
        if (this.isUserRegistered) {
          this.$router.push({ path: "/login" });
        }else{
          this.error.status = true
          this.error.mssg = 'Ya existe un usuario con este email'
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