<template>
    <div v-if="visible" class="status-tip">
      {{ message }}
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: ''
    };
  },
  methods: {
    show(message) {
      this.message = message;
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 1000); // 1秒后关闭
    }
  }
};
</script>

<style>
.status-tip {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 5px;
  z-index: 9999;
  transition: 300ms;
}
</style>
