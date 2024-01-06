<template>
  <div
    class="my-header"
  >
    <span class="my-logo"> 
        <img src="../assets/logo.jpg" alt="">
    </span>
    <span>
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.my-header {
  position: relative;
  width: 100%;
  text-align: center;
  height: 48px;
  line-height: 48px;
}
.my-header .my-logo {
  position: absolute;
  left: 16px;
  top: 8px;
  z-index: 999;
}
</style>