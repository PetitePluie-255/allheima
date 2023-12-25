/* 
  把时钟案例部署在本地服务器上
  通过localhost:3000 能够访问
*/

// 导入模块
const http = require("http")
const fs = require("fs")
const path = require('path')

const server = http.createServer()

server.listen(3000, () => {
  console.log("服务器已经开启")
})

server.on("request", (req, res) => {
  // 判断请求的地址，从而读取不同数据并且响应给客户端
  if (req.url === "/" || req.url === "/index.html") {
    // 设置响应头
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 读取文件
    fs.readFile(path.join(__dirname,'clock','index.html'),'utf-8',(err,data) => {
      if (err) return console.log('文件读取失败',err)
      res.end(data)
    })
  }
  else if (req.url === '/index.css') {
    // 设置响应头
    res.setHeader('Content-Type','text/css')
    // 读取文件
    fs.readFile(path.join(__dirname,'clock','index.css'),'utf-8',(err,data)=>{
      if (err) return console.log('文件读取失败',err)
      res.end(data)
    })
  }
  else if (req.url === '/index.js') {
    // 设置响应头
    res.setHeader('Content-Type','application/x-javascript')
    // 读取文件
    fs.readFile(path.join(__dirname,'clock','index.js'),'utf-8',(err,data)=>{
      if (err) return console.log('文件读取失败',err)
      res.end(data)
    })
  }
})
