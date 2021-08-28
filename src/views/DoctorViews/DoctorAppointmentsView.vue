<template>
  <div class="appointments">
    <empty-task
      v-if="!patients.length"
      :title="'No tienes ninguna cita pendiente'"
      :icon="'date_range'"
    ></empty-task>
    <div class="section">
      <div class="container">
        <h1 class="text-5xl">Próximas Citas pacientes</h1>
        <div class="grid md:grid-cols-3 gap-4 mt-5">
          <div v-for="(patient, index) in patients" :key="index"
          >
            <div v-for="(appointment, index) in patient.appointments" :key="index"
              class="p-4 text-lg bg-green-200 rounded-md mb-4"
            >
              <div class="date">
              <span class="text-gray-600">Fecha: </span>
              <span>{{ appointment.date }}</span>
              </div>
              <div class="hour mt-4">
                <span class="text-gray-600">Hora: </span>
                <span>{{ appointment.hour }}</span>
              </div>
              <div class="patient mt-4">
                <span class="text-gray-600">Paciente: </span>
                <span>{{`${patient.name} ${patient.lastName}`}}</span>
              </div>
              <div class="description mt-4">
                <span class="text-gray-600">Descripción: </span>
                <span>{{appointment.description}}</span>
              </div>
              <button
                class="px-6 py-3 bg-green-500 rounded-md mt-5 text-white"
                type="button"
              >
                Ver
              </button>
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
    ...mapState(['doctor']),
    ...mapState(['patients'])
  },
  mounted(){
    this.$store.dispatch('getPatients', this.user.id)
  }
};
</script>

<style>
</style>