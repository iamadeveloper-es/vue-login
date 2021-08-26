<template>
  <form @submit.prevent="emitter($event)" class="form">
      <h2>{{formTitle}}</h2>
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