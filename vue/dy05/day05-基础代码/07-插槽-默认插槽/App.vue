<template>
  <div>
    <MyDialog>
      <h3>你确定要退出本系统吗？</h3>
    </MyDialog>
    <MyDialog>
      <p>你确定要退出本系统吗？</p>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>