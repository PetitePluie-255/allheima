<template>
  <div class="nav">
    <nav-item v-for="item in 10" :key="item"></nav-item>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  background-color: hotpink;
  width: 200px;
  height: 100%;
  overflow-y: auto;
}
</style>