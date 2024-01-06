<template>
  <div class="base-b">
    <div>我是B组件（发布方）</div>
    <button @click="sendMsgFn">发送消息</button>
  </div>
</template>

<script>
import Bus from './../utils/EventBus'
export default {
  methods: {
    sendMsgFn() {
      // 发布消息
      // 事件总线.$emit('发布消息的事件名', 发布内容)
      Bus.$emit('sendMsg', 'hello 大家好')
    },
  },
}
</script>

<style scoped>
.base-b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>