<template>
  <div>
    <MyDialog></MyDialog>
    <MyDialog>
      <h2>这是传入的标签内容</h2>
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