<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="edit">编辑</button>
    </div>
    <span ref="spanRef">{{ count }}</span>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    edit() {
      this.isShowEdit = true
      // 聚焦 - 输入框
      // this.$refs.inp.focus()
      /*
        vue更新dom的过程是异步的  - 目的: 为了提高性能
        vue更新dom的过程属于批量的更新 (统一更新) - 交给了任务队列
        先处理所有的主线程的代码及同步任务, - 才会去任务队列里去执行对应的任务 (页面重新渲染)

        $nextTick() 保证dom更新之后去触发函数体内部的代码 - 实现统一的更新
        场景: 更新数据之后, 立马获取更新后的dom - $nextTick
      */ 
     this.$nextTick(() => {
      console.log(this.$refs.inp);
      // 获取更新后的dom 
      this.$refs.inp.focus()
     })
    },
    add() {
      this.count ++
      // this.$nextTick(() => {
        // })
      setTimeout(() => {
          console.log(this.$refs.spanRef.innerHTML);
      }, 0);
    }
  },
}
</script>

<style>
</style>