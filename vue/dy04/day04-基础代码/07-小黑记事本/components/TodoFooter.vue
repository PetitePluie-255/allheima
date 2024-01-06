<template>
  <footer class="footer" v-show="list.length">
          <!-- 统计 -->
          <span class="todo-count">合 计:<strong> {{list.length}} </strong></span>
          <!-- 清空 -->
          <button @click='$emit("empty")' class="clear-completed">
            清空任务
          </button>
        </footer>
</template>

<script>
export default {
  props:['list']
}
</script>

<style>

</style>