<template>
  <div>
    <span :class="{ undo: item.text === '未完成', error: item.text === '错误', right: item.text === '正确' }" v-for="(item, index) in arr" :key="index"
      > {{ index + 1 }}: {{ item.text }} </span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      flag: 0,
    }
  },
  props: ["arr"],
   watch: {
    arr: {
      deep: true,
      handler(val) {
        console.log(val);
        this.list = val
      },
    },
  },
  created() {
        
      },
}
</script>

<style scoped>
.right {
  color: green;
}
.error {
  color: red;
}
.undo {
  color: #ccc;
}
</style>
