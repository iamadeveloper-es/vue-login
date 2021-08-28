<template>
  <div class="appointments">
    <empty-task
      v-if="!patients.length"
      :title="'No tienes ningun paciente'"
      :icon="'person_off'"
    ></empty-task>
    <div class="section">
      <div class="container">
        <h1 class="text-5xl">Pacientes</h1>
        <p class="text-base">Número de pacientes: {{patients.length}}</p>
        <div class="grid md:grid-cols-3 gap-4 mt-5">
          <div v-for="patient in patients" :key="patient.id" 
            class="p-4 text-lg bg-green-300 rounded-md cursor-pointer"
          >
            <div class="name">
              <span class="text-gray-600">Nombre: </span>
              <span>{{ patient.name }}</span>
            </div>
            <div class="last-name mt-4">
              <span class="text-gray-600">Appellidos: </span>
              <span>{{ patient.lastName }}</span>
            </div>
            <div class="email mt-4">
              <span class="text-gray-600">Email: </span>
              <span>{{patient.email}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
import EmptyTask from "../../components/EmptyTask.vue";
export default {
  components: { EmptyTask },
  computed: {
    ...mapState(["user"]),
    ...mapState(["users"]),
    ...mapState(["patients"]),

  },
  mounted(){
    this.$store.dispatch('getPatients', this.user.id)
  }
};
</script>

<style>
</style>