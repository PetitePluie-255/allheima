<template>
  <div class="app">
    <h4>父组件 -- <button @click="getInstance">获取组件实例</button></h4>
    <BaseForm ref="baseFormRef"></BaseForm>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
    getInstance() {
      console.log(this.$refs.baseFormRef.username);
      this.$refs.baseFormRef.getFormData()
      // this.$refs.baseFormRef.getFormData()
    }
  }
}
</script>

<style>
</style>