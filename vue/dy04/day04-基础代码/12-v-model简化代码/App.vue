<template>
  <div class="app">
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
  methods:{
    input(value) {
      this.selectId = value
    },
  }
}
</script>

<style>
</style>