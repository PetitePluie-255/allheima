/* 
  把时钟案例部署在本地服务器上
  通过localhost:3000 能够访问
*/

// 导入模块
const http = require("http")
const fs = require("fs")
const path = require("path")
const mime = require('mime')

const server = http.createServer()

server.listen(3000, () => {
  console.log("服务器已经开启")
})

server.on("request", (req, res) => {
  // 优化1：如果用户直接访问 localhost:3000  其实应该相当于访问 localhost:3000/index.html
  if (req.url === '/') req.url = '/index.html'

  // 优化2：通过mime快速设置content-type
  // mime.getType('xxx')：获取文件mime类型
  console.log(mime.getType(req.url))
  res.setHeader('Content-Type',mime.getType(req.url))

  fs.readFile(path.join(__dirname, "clock", req.url), (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, "clock", "404.html"), (err, data) => {
        if (err) return console.log("读取404网页失败", err)
        res.end(data)
      })
    } else {
      // 如果读取处理，直接给客户端即可
      res.end(data)
    }
  })
})
