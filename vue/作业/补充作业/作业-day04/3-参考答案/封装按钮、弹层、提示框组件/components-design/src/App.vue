<template>
  <div>
    <div>尺寸</div>
    <MyButton value="small" size="small"></MyButton>
    <MyButton value="medium" size="medium"></MyButton>
    <MyButton value="large" size="large"></MyButton>
    <div>风格</div>
    <MyButton></MyButton>
    <MyButton type="primary" value="primary"></MyButton>
    <MyButton type="info" value="info"></MyButton>
    <MyButton type="success" value="success"></MyButton>
    <MyButton type="danger" value="danger"></MyButton>
    <div>事件</div>
    <MyButton @click="showDialog = true"></MyButton>
    <!-- 弹层 -->
    <MyDialog v-model="showDialog" @isOK="isOK" title="确认删除吗?"></MyDialog>
    <!-- 提示框 -->
    <MyTip ref="myTip"></MyTip>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
import MyTip from "./components/MyTip.vue";
export default {
  components: {
    MyDialog,
    MyTip,
  },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    isOK() {
      this.showDialog = false;
      this.$refs.myTip.show("操作成功");
    },
  },
};
</script>

<style>
</style>