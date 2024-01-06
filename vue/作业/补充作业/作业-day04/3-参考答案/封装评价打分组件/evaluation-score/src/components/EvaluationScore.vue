<template>
  <div class="score-wrap" :class="size ? size : ''">
    <span
      class="score-item"
      v-for="item in max"
      :key="item"
      @click="changeScore(item)"
      >{{ item <= value ? "💗" : "🤍" }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: 1,
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => {
        return ["small", "medium", "large"].includes(value);
      },
    }
  },
  methods: {
    changeScore(score) {
      this.$emit("input", score);
    },
  },
};
</script>

<style scoped>
.score-wrap {
  padding: 5px 10px;
  font-size: 20px;
}
.small {
  font-size: 16px;
}
.large {
  font-size: 24px;
}
.score-item {
  cursor: pointer;
}
</style>