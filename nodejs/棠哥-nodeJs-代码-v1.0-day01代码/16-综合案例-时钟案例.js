/* 
  把时钟案例部署在本地服务器上
  通过localhost:3000 能够访问
*/

// 导入模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 创建http实例
const server = http.createServer()

// 监听端口
server.listen(3000,()=>{
  console.log('服务器已开启')
})

// 处理前端响应
server.on('request',(req,res)=>{
  console.log(req.url)
  // 处理前端的访问
  // 如果用户访问/ 或者/index.html ，就给浏览器返回index.html网页
  if (req.url === '/' || req.url === '/index.html') {
    // 读取index.html文件，返回给浏览器
    fs.readFile(path.join(__dirname,'clock','index.html'),(err,data)=>{
      if (err) return console.log('文件读取失败',err)

      // 把读取的文件返回给浏览器
      res.end(data)
    })
  }

  // 因为网页需要css和js，同样需要处理css和js

  else if (req.url === '/index.css') {
    // 读取index.css，返回给浏览器
    fs.readFile(path.join(__dirname,'clock','index.css'),(err,data)=>{
      if (err) return console.log('文件读取失败',err)

      // 把读取的文件返回给浏览器
      res.end(data)
    })
  }

  else if (req.url === '/index.js') {
    // 读取index.css，返回给浏览器
    fs.readFile(path.join(__dirname,'clock','index.js'),(err,data)=>{
      if (err) return console.log('文件读取失败',err)

      // 把读取的文件返回给浏览器
      res.end(data)
    })
  }

})