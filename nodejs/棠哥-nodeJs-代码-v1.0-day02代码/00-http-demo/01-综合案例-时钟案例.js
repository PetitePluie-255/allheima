/* 
  把时钟案例部署在本地服务器上
  通过localhost:3000 能够访问

  步骤：
    1、导入模块
    2、创建服务器
    3、开启服务器，监听端口
    4、注册request事件，处理响应
    5、根据当前的请求地址，分别响应不同的信息
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

// 处理前端的请求
server.on('request',(req,res)=>{
  // req:请求相关的信息
  // res:响应相关的信息
  // 根据前端访问的路径，读取不同的资源
  if (req.url === '/index.html' || req.url === '/') {
    // 设置Content-Type
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 读取文件
    fs.readFile(path.join(__dirname,'clock','index.html'),(err,data)=>{
      if (err) return console.log('读取文件失败',err)
      res.end(data)
    })
  }

  if (req.url === '/index.css') {
    // 设置Content-Type
    res.setHeader('Content-Type','text/css')
    // 读取文件
    fs.readFile(path.join(__dirname,'clock','index.css'),(err,data)=>{
      if (err) return console.log('读取文件失败',err)
      res.end(data)
    })
  }

  if (req.url === '/index.js') {
    // 设置Content-Type
    res.setHeader('Content-Type','text/javascript; charset=utf-8')
    // 读取文件
    fs.readFile(path.join(__dirname,'clock','index.js'),(err,data)=>{
      if (err) return console.log('读取文件失败',err)
      res.end(data)
    })
  }


})