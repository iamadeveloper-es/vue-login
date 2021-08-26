<template>
  <form @submit.prevent="emitter($event)" class="form w-full md:w-1/2 lg:w-1/3 md:mx-auto p-4 bg-gray-50 rounded-md mt-10 shadow">
      <h2 class="text-3xl font-semibold mb-8">{{formTitle}}</h2>
      <slot name="form-fields"></slot>
  </form>
</template>

<script>
export default {
    props:{
        formTitle:{
            default: 'Form title',
            type: String
        }
    },
    methods:{
        emitter(ev){
            this.$emit('submitEmitter', ev)
        }
    }
}
</script>

<style>

</style>