<template>
  <section class="section patient">
    <div class="container mx-auto">
      <h1 class="text-5xl">Doctor {{`${user.name} ${user.lastName}`}}</h1>
      <div class="md:flex mt-5">
        <div
          class="
            w-full
            md:w-1/2
            bg-green-500
            py-6
            md:m-3
            mb-4
            md:mb-0
            text-center text-white
            rounded-md
            cursor-pointer
            hover:bg-green-400
          "
          v-for="option in options"
          :key="option.name"
          @click="goToRoute(option.path)"
        >
          <md-icon class="md-size-2x">{{ option.icon }}</md-icon>
          <div class="mt-4">
            <span class="text-2xl">{{ option.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      options: [
        {
          name: "Citas",
          icon: "event",
          path: "doctor-appointments",
        },
        {
          name: "Pacientes",
          icon: "group",
          path: "doctor-patients",
        }
      ],
    };
  },
  computed:{
    ...mapState(['user'])
  },
  methods: {
    goToRoute(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>

<style>
</style>