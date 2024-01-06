<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["w"],
    // props校验好处:
    // 1. 封装的组件 - 接收的值 更加严谨
    // 2. 保证开发者(使用组件的人员)更加精确的定位到bug, 快速解决问题
  // 1.基础写法（类型校验）
  // props: {
  //   // 校验的属性名: 类型
  //   w: Number
  // }
  // 2.完整写法（类型、是否必填、默认值、自定义校验）
  props: {
    w: {
      type: Number,
      // required: true // 是否必传
      default: 50, // 默认值
      // 精准判断
      validator(value) {
        console.log(value);
        // 返回值
        // true -> 通过校验
        // false -> 不通过校验
        // 需求: 传递过来的进度条的值 大于等于50
        if (value >= 50) {
          return true
        } else {
          console.error('进度条的值必须大于等于50')
          return false
        }
      }
    }
  }
}
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
}
.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>