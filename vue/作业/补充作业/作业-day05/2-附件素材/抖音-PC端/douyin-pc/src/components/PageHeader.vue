<template>
  <div class="page-header">
    <SearchInput
      position="left"
      v-model="searchVal"
      placeholder="算法与数据结构"
      :width="600"
    ></SearchInput>
    <div class="system-control">
        <MyButton type="danger">
            <template #icon>
              <i class="login-icon"></i>
            </template>
            登录</MyButton>
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    SearchInput,
    MyButton
  },
  data() {
    return {
      searchVal: "",
    };
  },
};
</script>

<style scoped>
.page-header {
  box-sizing: border-box;
  height: 70px;
  width: 100%;
  padding: 0 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.system-control {
  position: absolute;
  right: 24px;
}
.login-icon{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../assets/login.png') no-repeat center/cover;
    vertical-align: top;
}
</style>