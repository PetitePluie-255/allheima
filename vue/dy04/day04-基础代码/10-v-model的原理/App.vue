<template>
  <div class="app">
    <input type="text" v-model="msg1" />
    <br />
    <input type="text" :value="msg1" @input='msg1=$event.target.value' >
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: '',
    }
  },
}
</script>

<style>
</style>