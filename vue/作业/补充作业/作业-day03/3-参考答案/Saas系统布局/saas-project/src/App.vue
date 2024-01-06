<template>
  <div class="container">
    <my-nav></my-nav>
    <div class="center">
      <my-header></my-header>
      <my-main></my-main>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyMain from "./components/MyMain.vue";
import MyNav from "./components/MyNav.vue";
export default {
  components: {
    MyFooter,
    MyHeader,
    MyMain,
    MyNav,
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
.center {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>