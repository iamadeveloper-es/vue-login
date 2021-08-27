<template>
  <section class="section empty-task full-h w-full flex justify-center items-center text-center">
      <div class="container">
          <md-icon class="md-size-3x text-gray-400">{{icon}}</md-icon>
          <h1 class="text-5xl mt-4 text-gray-400">{{title}}</h1>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default: 'Title empty task'
        },
        icon: String
    }
}
</script>

<style scoped>
.full-h{
    height: calc(100vh - 96px);
}
</style>