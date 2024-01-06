<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!-- 1.给组件标签，添加属性方式 赋值 -->
    <!-- <Son :自定义属性名="值"></Son> -->
    <Son @changeTitle="changeTitleFn" :aa="myTitle"></Son>
  </div>
</template>

<script>
// 目标: 将父组件 App.vue中的myTitle数据传递给子组件\
// 供子组件使用
import Son from "./components/Son.vue"
export default {
  name: "App",
  components: {
    Son,
  },
  data() {
    return {
      myTitle: "学前端，就来黑马程序员",
    }
  },
  methods: {
    changeTitleFn(msg) {
      console.log('子组件的事件派发成功了', msg);
      this.myTitle = msg
    }
  }
}
</script>

<style>
</style>