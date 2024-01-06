<template>
  <div>
    <div>姓名：<input type="text" v-model="name"></div>
    <div>年龄：<input type="text" v-model="age"></div>
    <div>身高：<input type="text" v-model="high">(米)</div>
    <div>体重：<input type="text" v-model="weight">(公斤)</div>
    <div>病史：<input type="text" v-model="diease"></div>
    <button @click="check">诊断</button>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: 0,
      high: 0,
      weight: 0,
      diease: '',
      title: ''
    }
  },
  methods: {
    check() {
      const BMI = this.weight / (this.high * this.high)
      if (BMI <= 18.5) {
        this.title=`患者${this.name}的诊断结果:体重过轻`
      } else if (BMI <= 24.9) {
        this.title = `患者${this.name}的诊断结果:正常`
      }
      else if (BMI <= 29.9) {
        this.title = `患者${this.name}的诊断结果:体重过重`
      } else if (BMI > 29.9) {
        this.title = `患者${this.name}的诊断结果:肥胖`
      }
    }
  }
}
</script>

<style lang="less">
div {
  margin-top: 15px;
  font-weight: 700;

  button {
    margin-top: 15px;
  }
}
</style>