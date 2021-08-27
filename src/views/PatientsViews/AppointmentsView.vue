<template>
  <div class="appointments">
    <empty-task
      v-if="!user.appointments.length"
      :title="'No tienes ninguna cita'"
      :icon="'date_range'"
    ></empty-task>
    <div class="section">
      <div class="container">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(appointment, index) in user.appointments" :key="index" 
            class="p-4 text-base bg-blue-300 rounded-md"
          >
            <div class="date">
              <span class="text-gray-600">Fecha: </span>
              <span>{{ appointment.date }}</span>
            </div>
            <div class="hour mt-4">
              <span class="text-gray-600">Hora: </span>
              <span>{{ appointment.hour }}</span>
            </div>
            <div class="doctor mt-4">
              <span class="text-gray-600">Doctor: </span>
              <span>{{ appointment.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import EmptyTask from "../../components/EmptyTask.vue";
export default {
  components: { EmptyTask },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["getDoctorById", this.user.doctor])
  },
};
</script>

<style>
</style>