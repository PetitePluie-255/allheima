<template>
  <div class="app">
    <BaseSelect  @changeCity="changeCityFn" :cityId="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue"
export default {
  data() {
    return {
      selectId: "102",
    }
  },
  components: {
    BaseSelect,
  },
  methods: {
    changeCityFn(value) {
      this.selectId = value
    },
  },
}
</script>

<style></style>
