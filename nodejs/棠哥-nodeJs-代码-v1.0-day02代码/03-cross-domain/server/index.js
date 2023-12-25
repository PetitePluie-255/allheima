// 1、创建web服务器
// 2、监听3000端口
// 3、判断客户端的请求地址 /api/news
//    1、读取data/list.json文件数据
//    2、响应给客户端
//    3、处理跨域  CORS： res.setHeader('Access-Control-Allow-Origin','*')
// http://localhost:3000/api/news

// 导入模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 创建实例
const server = http.createServer()

// 监听端口
server.listen(3000,()=>{
  console.log('服务器已开启')
})

// 处理请求
server.on('request',(req,res) => {
  
  res.setHeader('Access-Control-Allow-Origin','*')
  // 判断浏览器访问的是哪一个接口，进行处理
  if (req.url === '/api/news') {
    // 读取list.json，返回给前端
    fs.readFile(path.join(__dirname,'data','list.json'),(err,data) => {
      if (err) return console.log('读取文件失败',err)

      res.end(data)
    })
  }

})