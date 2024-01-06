<template>
  <div>
    <MyDialog>
      <!-- 2. 标签内部传入自定义的结构内容 -->
      <h3>你要退出该系统么</h3>
    </MyDialog>
    <MyDialog>
      <p>这是一个p标签</p>
    </MyDialog>
  </div>
</template>

<script>
/*
  需求: 
  内容的自定义 
  文本 - props 传递

  结构的自定义 
  props无法实现
  插槽实现 - 针对结构自定义
*/
import MyDialog from "./components/MyDialog.vue";
export default {
  data() {
    return {
    };
  },
  components: {
    MyDialog,
  },
};
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>