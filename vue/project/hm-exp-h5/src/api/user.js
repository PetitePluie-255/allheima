// 导入axios实例
import axios from '@/utils/request'
// 按需导出注册方法
export const registerFn = (data) => axios.post('/h5/user/register', data)

// 按需导出登录方法
export const loginFn = (data) => axios.post('/h5/user/login', data)
