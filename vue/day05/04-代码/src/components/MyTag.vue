<template>
  <div class="my-tag">
    <input :value="value" @keyup.enter="handleConfirm" ref="inp" @blur="isEdit = false" v-if="isEdit" class="input" type="text" placeholder="输入标签" />
    <div v-else @dblclick="handleEdit" class="text">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    // 双击事件 dblclick
    handleEdit() {
      this.isEdit = true
      // 输入框获得焦点
      this.$nextTick(() => {
        this.$refs.inp.focus()
      })
    },
    // enter事件
    handleConfirm(e) {
      // 派发事件 - 通知父组件
      this.$emit('input', e.target.value)
      this.isEdit = false
    }
  }
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>