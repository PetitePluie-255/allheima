<template>
  <div id="app">
    <SideBar></SideBar>
    <RightContainer></RightContainer>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import RightContainer from "./components/RightContainer.vue";
export default {
  name: "App",
  components: {
    SideBar,
    RightContainer,
  }
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  display: flex;
  background: no-repeat url("./assets/bg.png") rgb(22, 24, 35);
}
</style>
