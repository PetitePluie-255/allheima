<template>
  <header class="header">
          <h1>小黑记事本</h1>
          <input placeholder="请输入任务" v-model='task' class="new-todo" />
          <button class="add" @click="addList">添加任务</button>
        </header>
</template>

<script>
export default {
  data(){
    return{
      task:''
    }
  },
  props:['list'],
  methods:{
    addList(){
      if(!this.task.trim()) {
        this.task=''
        alert('添加任务不可为空')
        return
      }
      this.$emit('addList',{id:+new Date(),name:this.task})
      this.task=''
    }
  }
}
</script>

<style>

</style>