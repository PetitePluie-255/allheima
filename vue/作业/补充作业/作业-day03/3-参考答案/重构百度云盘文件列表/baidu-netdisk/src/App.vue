<template>
  <div id="app">
    <my-header></my-header>
    <div class="container">
      <my-nav></my-nav>
      <my-content></my-content>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyContent from "./components/MyContent.vue";
import MyNav from "./components/MyNav.vue";
export default {
  components: {
    MyHeader,
    MyContent,
    MyNav
  },
};
</script>

<style>
.container {
  width: 100%;
  height: calc(100% - 48px);
  display: flex;
}
</style>