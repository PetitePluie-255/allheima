<template>
  <div id="app">
    <h2>测试题</h2>
    <SubjectItem :arr="arr" @submit="submitFn"></SubjectItem>
    <div>
      <FlagItem :arr="arr"></FlagItem>
    </div>
  </div>
</template>

<script>
import SubjectItem from "./components/SubjectItem.vue"
import FlagItem from "./components/FlagItem"
export default {
  components: {
    SubjectItem,
    FlagItem,
  },
  data() {
    return {
      arr:[],
    }
  },
  created() {
    for (let i = 1; i <= 5; i++) {
      this.arr.push({
        first:Math.floor(Math.random() * 11),
        last:Math.floor(Math.random() * 11),
        result:'',
        text:'未完成'
      })
    }
  },
  methods: {
    submitFn() {
      this.arr.forEach((item) => {
          if (item.result) {
            console.log(item.first + item.last)
            console.log(item.result)
            item.text = item.first + item.last === item.result ? "正确" : "错误"
          } else {
            this.text = "未完成"
          }
        })
    },
  },
}
</script>

<style>
body {
  background-color: #eee;
}

#app {
  background-color: #fff;
  width: 500px;
  margin: 50px auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 2em;
}
</style>
