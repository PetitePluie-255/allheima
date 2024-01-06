<template>
  <div class="app">
    <h4>父组件 -- <button @click="fn">获取组件实例</button></h4>
    <BaseForm ref="getForm"></BaseForm>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
   fn(){
    console.log(this.$refs.getForm.username);
    this.$refs.getForm.getFormData()
   }
  }
}
</script>

<style>
</style>