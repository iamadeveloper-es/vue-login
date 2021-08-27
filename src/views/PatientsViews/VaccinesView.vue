<template>
  <div class="vaccines">
    <empty-task
      v-if="!user.vaccines.length"
      :title="'No tienes ninguna vacuna pendiente'"
      :icon="'vaccines'"
    ></empty-task>
    <div class="section">
      <div class="container">
        <h1 class="text-5xl">Próximas Vacunas</h1>
        <div class="grid md:grid-cols-3 gap-4 mt-5">
          <div v-for="(vaccine, index) in user.vaccines" :key="index" 
            class="p-4 text-lg bg-green-300 rounded-md"
          >
            <div class="vaccine-name">
              <span class="text-gray-600">Vaccine: </span>
              <span>{{ vaccine.name }}</span>
            </div>
            <div class="vaccine-dose mt-4"
              v-if="vaccine.dose"
            >
              <span class="text-gray-600">Dose: </span>
              <span>{{ vaccine.dose }}</span>
            </div>
            <div class="date mt-4">
              <span class="text-gray-600">Fecha: </span>
              <span>{{ vaccine.date }}</span>
            </div>
            <div class="hour mt-4">
              <span class="text-gray-600">Hora: </span>
              <span>{{ vaccine.hour }}</span>
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
    ...mapState(["user"])
  }
};
</script>

<style>
</style>