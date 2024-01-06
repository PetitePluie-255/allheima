<template>
  <div
    class="custom-search"
    :class="position === 'left' ? 'left' : 'right'"
    :style="{ width: width + 'px' }"
  >
    <i class="icon search-icon"></i>
    <input
      class="input-inner"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    position: {
      type: String,
      default: "right",
    },
    width: {
      type: Number,
      default: 480,
    },
    placeholder: {
      type: String,
      default: "请输入搜索的内6",
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style>
.custom-search {
  position: relative;
  width: 360px;
}
.icon {
  width: 24px;
  height: 24px;
  background: url("../assets/search.png") no-repeat center/cover;
}
.search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #c0c4cc;
}
.left .search-icon {
  left: 10px;
}
.right .search-icon {
  right: 10px;
}
.close-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #c0c4cc;
  cursor: pointer;
}

.input-inner {
  background: #161823;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  color: #fff;
  border-radius: 8px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.input-inner::placeholder {
  color: #fffa;
}
.left .input-inner {
  padding: 8px 12px 8px 36px;
}
.right .input-inner {
  padding: 8px 36px 8px 12px;
}
</style>
