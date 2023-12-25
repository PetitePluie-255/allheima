/* 
  创建一个web服务器的基本步骤：
    1、导入http模块
    2、创建web服务器实例 const server = http.createServer()
    3、启动服务器并且监听端口  server.listen(端口号1~65535,()=>{})
      本地服务器地址：127.0.0.1    localhost
*/

// 1、导入http模块
const http = require("http")

// 2、创建服务器实例
const server = http.createServer()

// 3、启动服务器并且监听端口 1~65535
server.listen(3000,()=>{
  console.log('已经在提供服务了')
})
