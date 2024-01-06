<template>
  <div>
    <div class="subject" v-for="(item, index) in arr" :key="index">
      <span>{{ item.first }}</span>
      <span>+</span>
      <span>{{ item.last }}</span>
      <span>=</span>
      <input type="number" v-model.number="item.result" />
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      
    }
  },
  props: ["arr"],
  methods: {
    submit() {
      this.$emit('submit')
    },
  },
}
</script>

<style scoped>
.subject {
  margin: 5px;
  padding: 5px;
  font-size: 20px;
}
.subject span {
  display: inline-block;
  text-align: center;
  width: 20px;
}
.subject input {
  width: 50px;
  height: 20px;
}
</style>
