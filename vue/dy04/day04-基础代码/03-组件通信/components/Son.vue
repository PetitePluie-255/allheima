<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件  {{ tip }}
    <button @click="changeTip">修改</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受
  props: ['tip'],
  methods: {
    changeTip() {
      this.$emit('changeTip',"大苏打")
    }
  }
}
</script>

<style>

</style>