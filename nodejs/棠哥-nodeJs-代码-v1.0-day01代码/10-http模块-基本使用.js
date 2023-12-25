/* 
  创建一个web服务器的基本步骤：
    1、导入http模块
    2、创建web服务器实例 const server = http.createServer()
    3、启动服务器并且监听端口  server.listen(端口号1~65535,()=>{})
      本地服务器地址：127.0.0.1    localhost
*/

// 1、导入模块
const http = require('http')

// 2、使用模块

// 创建服务器的实例
const server = http.createServer()

// 利用实例监听端口
server.listen(3000,()=>{
  console.log('棠哥的服务器已开启')
})

// 处理请求
server.on('request',(req,res)=>{
  // req：请求相关的信息
  // res：响应相关的信息
  // 如果前端发送请求了，可以在这里处理请求
  console.log('前端过来了')

  // 可以给点数据给前端
  res.end('hot dog')
})