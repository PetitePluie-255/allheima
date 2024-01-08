<template>
  <div class="login-page">
    <!-- 标题 -->
    <van-nav-bar title="面经登录" />

    <!-- 表单区域 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' },{pattern:/^\w{5,}/,message:'用户名不符合规则'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' },{pattern:/^\d{6,}/,message:'用户名不符合规则'}]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <!-- 跳转链接 -->
    <router-link class="link" to="/register">注册账号</router-link>
  </div>
</template>

<script>
// 导入登录方法
import { loginFn } from '@/api/user'
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await loginFn(values)
      console.log(res)
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
