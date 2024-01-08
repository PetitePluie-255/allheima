// axios 基地址 请求、响应拦截器
// 引入axios
import axios from 'axios'
// 创建axios实例
const instance = axios.create({
  // 基地址
  baseURL: 'https://interview-api-t.itheima.net/',
  // 超时时间
  timeout: 10000
})

export default instance
