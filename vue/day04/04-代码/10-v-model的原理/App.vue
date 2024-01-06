<template>
  <div class="app">
    <input v-model="msg1" type="text" />
    <br />
    <!-- 
      $event 在template模板中指的是事件的形参
      针对于表单元素 ->  $event.target ->  触发事件的元素 - 该表单元素本身 
      $event.target.value -> 表单元素的值
     -->
    <input :value="msg1" @input="msg1 = $event.target.value" type="text" >
  </div>
</template>

<script>
/*
  v-model 语法糖
  :value 绑定属性
  @input 输入内容的监听
*/ 
export default {
  data() {
    return {
      msg1: '',
    }
  },
}
</script>

<style>
</style>