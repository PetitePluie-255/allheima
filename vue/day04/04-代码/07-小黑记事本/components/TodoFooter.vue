<template>
    <footer class="footer" v-show="todoList.length > 0">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong> {{ todoList.length }} </strong></span>
      <!-- 清空 -->
      <button @click="clear" class="clear-completed">
        清空任务
      </button>
    </footer>
</template>

<script>
export default {
  props: ['todoList'],
  methods: {
    clear() {
      this.$emit('clear')
    }
  }
}
</script>

<style>

</style>