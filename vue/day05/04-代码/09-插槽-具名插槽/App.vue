<template>
  <div>
    <MyDialog>
      <!-- 进行内容的分发 -->
      <!-- <template v-slot:插槽的名字> -->
      <template v-slot:head>
        标题
      </template>
      <template v-slot:body>
        <p>p标签</p>
      </template>
      <template v-slot:footer>
        <button>确认</button>
      </template>
    </MyDialog>
    <MyDialog>
      <!-- v-slot: -> # -->
      <template #head>
        标题123
      </template>
      <template #body>
        <h1>h1标签</h1>
      </template>
      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
export default {
  data() {
    return {};
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