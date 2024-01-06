<template>
     <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="(item, index) in todoList" :key="item.id">
          <div class="view">
            <span class="index">{{ index + 1 }}.</span> <label>{{ item.name }}</label>
            <button @click="del(item.id)" class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  props: ['todoList'],
  methods: {
    del(id) {
      this.$emit('del', id)
    }
  }
}
</script>

<style>

</style>