/* 
  创建一个web服务器的基本步骤：
    1、导入http模块
    2、创建web服务器实例 const server = http.createServer()
    3、启动服务器并且监听端口  server.listen(端口号1~65535,()=>{})
      本地服务器地址：127.0.0.1    localhost
    4、为服务器实例绑定request事件，处理客户端请求
*/

// 导入模块
const http = require('http')

// 创建http实例
const server = http.createServer()

// 监听端口
server.listen(3000,()=>{
  console.log('开启服务器成功')
})

// 处理用户请求和响应
server.on('request',(req,res)=>{
  // req：请求相关的信息
  // res：响应相关的信息
  console.log('此时前端过来了')

  // req中常见的属性
  // 请求头
  // console.log(req.headers)
  // 请求方式
  console.log(req.method)
  // 请求地址
  console.log(req.url)

  res.end('hot dog')
})