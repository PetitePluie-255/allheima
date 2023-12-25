/* 
  request对象的常用属性
    headers：所有的请求头信息
    method：请求的方式
    url：请求的地址
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
  
  // req：request对象，请求对象，内部有很多请求相关的信息
  // console.log("来客了呀",req)

  // 请求头
  console.log('请求头',req.headers)
  // 请求方式
  console.log('请求方式',req.method)
  // 请求地址
  console.log('请求地址',req.url)
  
  // 给客户端发送点东西显示
  res.end("give gift")
})
