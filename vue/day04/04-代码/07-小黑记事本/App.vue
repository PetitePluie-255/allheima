<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <TodoHeader @add="addFn"></TodoHeader>

    <!-- 列表区域 -->
    <TodoMain @del="delFn"  :todoList="todoList"></TodoMain>
    
    <!-- 统计和清空 -->
    <TodoFooter @clear="clearFn" :todoList="todoList"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data () {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList')) ||  [
        {id: 1, name: '吃饭'},
        {id: 2, name: '睡觉'},
        {id: 3, name: '打豆豆'},
      ]
    }
  },
  watch: {
    // 完整写法 -> 侦听的是复杂数据类型 - 需要开启深度侦听
    todoList: {
      deep: true,
      handler(newvalue) {
        console.log(newvalue);
        localStorage.setItem('todoList', JSON.stringify(newvalue))
      }
    }
  },
  methods: {
    // 清空功能
    clearFn() {
      this.todoList = []
    },
    // 删除功能
    delFn(id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    // 添加功能
    addFn(name) {
      this.todoList.unshift({
        id: + new Date(),
        name
      })
    }
  }
}
</script>

<style>

</style>
