<template>
  <div class="nav">
    <div class="nav-item active">
      <img src="../assets/icon1.png" alt="" />
      首页
    </div>
    <div class="nav-item">
      <img src="../assets/icon2.png" alt="" />
      收发
    </div>
    <div class="nav-item">
      <img src="../assets/icon3.png" alt="" />
      同步
    </div>
    <div class="nav-item">
      <img src="../assets/icon4.png" alt="" />
      消息
    </div>
    <div class="nav-item">
      <img src="../assets/icon5.png" alt="" />
      相册
    </div>
    <div class="nav-item">
      <img src="../assets/icon6.png" alt="" />
      笔记
    </div>
    <div class="nav-item">
      <img src="../assets/icon7.png" alt="" />
      工具
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container .nav {
  width: 80px;
  height: 100%;
  box-shadow: inset -1px 0 3px 3px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.container .nav .nav-item {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;
  font-size: 14px;
  color: #a1a2a3;
}

.container .nav .active {
  color: #15c0ff;
}

.container .nav .nav-item img {
  width: 28px;
}
</style>