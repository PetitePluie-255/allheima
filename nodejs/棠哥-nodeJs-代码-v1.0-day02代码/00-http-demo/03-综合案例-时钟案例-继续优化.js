/* 
  把时钟案例部署在本地服务器上
  通过localhost:3000 能够访问

  优化一：如果用户直接访问 localhost:3000  其实应该相当于访问 localhost:3000/index.html
  优化二：通过mime快速设置content-type
*/

// 导入模块
const http = require("http")
const fs = require("fs")
const path = require("path")
const mime = require('mime')

// 创建http实例
const server = http.createServer()

// 监听端口
server.listen(3000, () => {
  console.log("服务器已开启")
})

// 处理前端的请求
server.on("request", (req, res) => {
  // req:请求相关的信息
  // res:响应相关的信息
  console.log(req.url)
  console.log(mime.getType(req.url))
  console.log('此时我修改了服务器的代码，再次修改')
  // 根据前端访问的路径，读取不同的资源
  // 优化1：根据浏览器访问的路径，直接读取路径对应的文件
  // 设置Content-Type
  
  // 优化2：如果用户直接访问localhost:3000，此时应该让服务器返回index.html
  if (req.url === '/') req.url = '/index.html'
  
  // 优化3：自动根据路径检测Content-Type并且设置
  res.setHeader("Content-Type", mime.getType(req.url))

  // 读取文件
  fs.readFile(path.join(__dirname, "clock", req.url), (err, data) => {
    if (err) {
      // 如果文件读取失败，则返回浏览器一个404网页
      // 先读取，再返回
      fs.readFile(path.join(__dirname,'clock','404.html'),(err,data)=>{
        if (err) return console.log('404网页读取失败')
        res.end(data)
      })
    } else {
      // 如果文件读取成功，则返回读取成功的数据
      res.end(data)
    }
  })
})