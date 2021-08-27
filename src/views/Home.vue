<template>
  <section class="section home">
    <div class="container mx-auto mt-6">
      <h1 class="text-5xl">Home</h1>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    handleRoutesByRole() {
      switch (this.user.role) {
        case "patient":
          this.$router.push({ path: "/patient" });
          break;
        case "doctor":
          this.$router.push({ path: "/doctor" });
          break;
      }
    },
  },
  created() {
    this.handleRoutesByRole();
  },
};
</script>
