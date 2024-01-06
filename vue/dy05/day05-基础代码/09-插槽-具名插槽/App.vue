<template>
  <div>
    <MyDialog>
      <template #head>标题</template>
      <template #body>
        <h1>亲王妃u而非法外挂微软</h1>
      </template>
      <template #footer>
        <button>sdf</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>