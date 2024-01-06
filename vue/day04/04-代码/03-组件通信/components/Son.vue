<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件 --- {{ aa }}
    <button @click="changeTitle">修改标题</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受
  props: ['aa'],
  methods: {
    changeTitle() {
      // 错误写法 - 数据提供者不是自己/当前组件
      // this.aa = '传智教育'
      // 子传父 
      // 1. 子组件派发事件 $emit('自定义事件名', 值)
      // 2. 父组件中, 事件的监听 (子组件的标签名上)
      // 3. 父组件中, 提供methods函数, 处理业务
      this.$emit('changeTitle', '传智教育')
    }
  }
}
</script>

<style>

</style>