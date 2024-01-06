<template>
  <div class="my-tag">
    <input @keyup.enter="add" :value="value" @blur="isEdit = false" v-if="isEdit" v-focus class="input" type="text" placeholder="输入标签" />
    <div v-else @dblclick="edit" class="text">{{ value }}</div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
  props: ["value"],
  data() {
    return {
      isEdit: false,
      content: "",
    }
  },
  methods: {
    edit() {
      this.isEdit = true
    },
    add(e) {
      this.$emit("input", e.target.value)
      this.isEdit = false
    },
  },
}
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
