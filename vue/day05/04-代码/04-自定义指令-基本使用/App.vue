<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus type="text">
  </div>
</template>

<script>
/*
  自定义指令 - 扩展额外的功能
*/ 
export default {
  // directives: {
  //   'focus': {
  //     // inserted 指令所在的标签被插入到页面中 - 触发
  //     // el 指令所绑定的标签
  //     inserted(el) {
  //       console.log(el);
  //       el.focus()
  //     }
  //   }
  // }
}
</script>

<style>

</style>