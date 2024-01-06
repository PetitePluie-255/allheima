<template>
  <div class="app">
    <button @click="isShow = true">退出按钮</button>
    <!-- 
      .sync修饰符 组件的双向绑定
      优势: 传递的属性非value
     -->
    <!-- <BaseDialog
    :visible="isShow"
    @update:visible="isShow = $event"
    ></BaseDialog> -->
    <BaseDialog
      :visible.sync="isShow"
    ></BaseDialog>
  </div>
</template>

<script>
/*
  1. 父组件中提供数据 isShow
  2. 将数据传递给子组件visible - 控制子组件弹框显示隐藏
*/
import BaseDialog from "./components/BaseDialog.vue";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {},
  components: {
    BaseDialog,
  },
};
</script>

<style>
</style>