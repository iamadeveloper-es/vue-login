<template>
  <div class="patient container mx-auto">
      <h1 class="text-5xl">Paciente</h1>
      <div class="flex mt-5">
          <div class="w-full md:w-1/3 bg-green-500 py-6 m-4 text-center text-white rounded-md cursor-pointer"
            v-for="option in options"
            :key="option.name"
            @click="goToRoute(option.path)"
          >
            <md-icon class="md-size-2x">{{option.icon}}</md-icon>
            <div class="mt-4">
                <span class="text-2xl">{{option.name}}</span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            options: [
                {
                    name: 'Appointments',
                    icon: 'event',
                    path: 'appointments'
                },
                {
                    name: 'Vaccines',
                    icon: 'vaccines',
                    path: 'vaccines'
                },
                {
                    name: 'Medication',
                    icon: 'medication',
                    path: 'medication'
                }
            ]
        }
    },
    methods:{
        goToRoute(path){
            this.$router.push({path: path})
        }
    }
}
</script>

<style>

</style>