<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <TodoHeader @addList="addListFn"></TodoHeader>

    <!-- 列表区域 -->
    <TodoMain @del="delFn" :list="list"></TodoMain>

    <!-- 统计和清空 -->
    <TodoFooter @empty='emptyFn' :list="list"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoMain from "./components/TodoMain.vue"
import TodoFooter from "./components/TodoFooter.vue"
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list'))
    }
  },
  methods: {
    addListFn(obj) {
      this.list.unshift(obj)
    },
    delFn(id){
      this.list=this.list.filter(item=>item.id!==id)
    },
    emptyFn(){
      this.list=[]
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
    }
  }
}
</script>

<style></style>
