/* 
  创建一个web服务器的基本步骤：
    1、导入http模块
    2、创建web服务器实例 const server = http.createServer()
    3、启动服务器并且监听端口  server.listen(端口号1~65535,()=>{})
      本地服务器地址：127.0.0.1    localhost
    4、为服务器实例绑定request事件，处理客户端请求
*/

// 1、导入http模块
const http = require("http")

// 2、创建服务器实例
const server = http.createServer()

// 3、启动服务器并监听端口
server.listen(3000, () => {
  console.log("服务器启动成功")
})

// 4、为服务器实例绑定request事件，处理客户端请求
server.on("request", (req, res) => {
  // req：请求相关信息
  // res：响应相关信息
  console.log('来客了呀')
  // 给客户端发送点东西显示
  res.end('give gift')
})
