<template>
  <div class="app">
    <!-- 
      v-model 语法糖
      :value="xxx"
      @input="xxx"

     -->
    <BaseSelect v-model="selectId"></BaseSelect>
    <!-- <BaseSelect
      :value="selectId"
      @input="handleChangeFn"
    ></BaseSelect> -->
    <!-- <BaseSelect
     :cityId="selectId"
     @handleChange="handleChangeFn"
     ></BaseSelect> -->
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
/*
 表单类组件的封装 & v-model简化代码
 1. 父组件提供数据 - 城市id
 2. 将城市id传递给子组件
 3. 子组件通过props进行接收
 4. 将接收的城市id进行绑定 - :value=""
    注意点: select 不能使用 v-model (双向关系)
 5. 给select下拉框注册change事件 
 6. 将获取到的城市id派发给父组件 - $emit
 7. 父组件监听事件 - 重新赋值(修改城市id)   
*/
export default {
  data() {
    return {
      selectId: "103",
    };
  },
  components: {
    BaseSelect,
  },
  methods: {
    handleChangeFn(value) {
      console.log("---子组件传过来的城市id", value);
      this.selectId = value;
    },
  },
};
</script>

<style>
</style>