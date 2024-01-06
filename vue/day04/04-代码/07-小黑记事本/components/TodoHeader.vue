<template>
  <header class="header">
    <h1>小黑记事本</h1>
    <input  @keyup.enter="add" v-model="content" placeholder="请输入任务" class="new-todo" />
    <button @click="add" class="add">添加任务</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    add() {
      if (!this.content.trim()) {
        this.content = ''
        alert('请输入任务名称')
        return
      }
      // 通知父组件 -> 增加一条数据
      this.$emit('add', this.content)
      this.content = ''
    }
  }
};
</script>

<style>
</style>