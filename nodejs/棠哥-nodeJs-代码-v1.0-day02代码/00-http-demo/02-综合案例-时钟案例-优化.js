/* 
  把时钟案例部署在本地服务器上
  通过localhost:3000 能够访问

  优化一：因为要找的文件和 req.url 一致，直接客户端要啥直接给就好**【直接根据req.url读取即可】
  优化二：如果用户访问不存在的网页，此时可以专门制作一个404网页，供用户浏览
  优化三：因为浏览器可以识别buffer数据，因此服务器发送响应的时候可以不用设置utf-8，除非自己需要在node中看到结果才需要设置
*/

// 导入模块
const http = require("http")
const fs = require("fs")
const path = require("path")

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
  // 根据前端访问的路径，读取不同的资源
  // 优化1：根据浏览器访问的路径，直接读取路径对应的文件
  // 设置Content-Type
  // res.setHeader("Content-Type", "text/html;charset=utf-8")

  // 读取文件
  fs.readFile(path.join(__dirname, "clock", req.url), (err, data) => {
    if (err) {
      // 如果文件读取失败，则返回浏览器一个空
      res.end()
    } else {
      // 如果文件读取成功，则返回读取成功的数据
      res.end(data)
    }
  })
})
