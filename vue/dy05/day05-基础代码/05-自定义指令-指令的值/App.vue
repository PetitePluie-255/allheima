<template>
  <div>
    <h1 v-color="color">指令的值1测试</h1>
    <h1 v-color="color1">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
      color1: "pink",
    }
  },
  directives: {
    color: {
      inserted(el, binding) {
        el.style.color = binding.value
      },
      updata(el, binding) {
        el.style.color = binding.value
      },
    },
  },
}
</script>

<style></style>
