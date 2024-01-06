<template>
  <div class="head">
    <div class="logo">
      <img width="100%" src="../assets/logo.png" alt="" />
    </div>
    <div class="avtar">
      <img src="../assets/svip.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.head {
  height: 48px;
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  box-shadow: -7px 3px 10px 0 rgba(0, 0, 0, 0.06);
}

.head .logo {
  width: 160px;
}

.head .avtar {
  line-height: 32px;
  text-align: center;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  position: relative;
  background: url(../assets/avtar.jpg) no-repeat center/cover;
}

.head .avtar img {
  background-color: #fff;
  width: 100%;
  line-height: 24px;
  position: absolute;
  bottom: -4px;
  left: 0;
  object-fit: scale-down;
}
</style>