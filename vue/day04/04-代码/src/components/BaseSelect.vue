<template>
  <div>
    <!-- v-model 双向的关系 - 视图变化 -> 数据 (来源非自己) 不能使用该指令 -->
    <!-- <select v-model="cityId"> -->
    <select @change="handleChange" :value="value">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    handleChange(e) {
      console.log('----城市切换了', e.target.value);
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>
</style>