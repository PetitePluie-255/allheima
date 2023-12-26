/**
 * 目标：了解端口号的作用
 * 端口号：用于区分服务器中的不同服务程序
 * 取值范围：0-65535
 * 注意：0-1023 和一些特定端口号是被占用的，我们自己编写服务程序请避开使用
 */
// 1. 引入http模块
const http = require('http')
// 2. 创建web服务器
const server = http.createServer()
// 3. 监听某个端口 (0 ~ 65535 之间)
server.listen(3000, () => {
  console.log('服务启动成功了');
})
// 4. 监听request请求, 做出响应
server.on('request', (req, res) => {
  // req 请求相关的信息 - 是一个对象
  // res 响应相关的信息 - 是一个对象
  res.end('你好')
})

// http://localhost:3000  域名访问
// 127.0.0.1:3000         IP 访问
