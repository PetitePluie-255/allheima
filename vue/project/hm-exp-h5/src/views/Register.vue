<template>
  <div class="register-page">
    <!-- 标题 -->
    <van-nav-bar title="面经注册" />

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
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>

    <!-- 跳转链接 -->
    <router-link class="link" to="/login">有账号，去登录</router-link>
  </div>
</template>

<script>
// 导入注册方法
import { registerFn } from '@/api/user'
export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // 发送注册请求
      const res = await registerFn(values)
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
