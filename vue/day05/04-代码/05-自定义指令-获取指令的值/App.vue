<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1: 'red',
      color2: 'yellow'
    }
  },
  directives: {
    color: {
      inserted(el, binding) {
        // binding.value -> 指令的值
        // console.log(binding);
        el.style.color = binding.value
      },
      // 指令的值发生改变之后 -> 触发该函数
      update(el, binding) {
        // console.log(el, binding);
        el.style.color = binding.value
      }
    }
  }
}
</script>

<style>

</style>