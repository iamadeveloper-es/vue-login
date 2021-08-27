<template>
  <div class="medication">
    <empty-task
      v-if="!user.medications.length"
      :title="'No tienes ninguna medicación prescrita'"
      :icon="'medication_liquid'"
    ></empty-task>
    <div class="section">
      <div class="container">
        <h1 class="text-5xl">Medicación Disponible</h1>
        <div class="grid md:grid-cols-3 gap-4 mt-5">
          <div v-for="(medication, index) in user.medications" :key="index" 
            class="p-4 text-lg bg-green-300 rounded-md"
          >
            <div class="medication-name">
              <span class="text-gray-600">Medicación: </span>
              <span>{{ medication.name }}</span>
            </div>
            <div class="medication-prescription mt-4"
              v-if="medication.prescription"
            >
              <span class="text-gray-600">Prescripción: </span>
              <span>{{ medication.prescription }}</span>
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