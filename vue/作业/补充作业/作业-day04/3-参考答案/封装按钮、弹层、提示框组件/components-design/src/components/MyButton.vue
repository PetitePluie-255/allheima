<template>
  <button @click="clickFn" :class="['my-button', type ? type : '', size ? size : '']">
    {{value}}
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "确定",
    },
    size: {
      type: String,
      default: "medium", // 默认尺寸为中等
      validator: (value) => {
        return ["small", "medium", "large"].includes(value);
      },
    },
    type: {
      type: String,
      default: "default", // 默认类型为默认样式
      validator: (value) => {
        return ["default", "primary", "success", "info", "danger"].includes(
          value
        );
      },
    },
  },
  methods:{
    clickFn(){
      this.$emit('click')
    }
  }
};
</script>

<style scoped>
.my-button {
  display: inline-block;
  outline: none;
  padding: 10px 20px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.small {
  padding: 5px 10px;
  font-size: 12px;
}

.large {
  padding: 15px 30px;
  font-size: 16px;
}

.default {
  color: #333;
  background-color: #fff;
}

.primary {
  color: #fff;
  background-color: #E6A23C;
}

.success {
  color: #fff;
  background-color: #67C23A;
}

.info {
  color: #fff;
  background-color: #409EFF;
}

.danger {
  color: #fff;
  background-color: #F56C6C;
}
</style>