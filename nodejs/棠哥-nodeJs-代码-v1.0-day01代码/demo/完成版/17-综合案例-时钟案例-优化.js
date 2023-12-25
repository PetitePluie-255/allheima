/* 
  把时钟案例部署在本地服务器上
  通过localhost:3000 能够访问
*/

// 导入模块
const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer()

server.listen(3000, () => {
  console.log("服务器已经开启")
})

server.on("request", (req, res) => {
  // 之前的缺点：需要不同的文件，每个文件都需要写一个判断，麻烦
  // 现在的优化：因为要找的文件和 req.url 一致，直接客户端要啥直接给就好
  // 直接根据req.url读取即可
  fs.readFile(path.join(__dirname, "clock", req.url), (err, data) => {
    if (err) {
      // 如果读取不出来，表示此时访问的页面没有
      // 解决方法一：404报错
      // 解决方法二：制作一个404网页，专门给用户看（更直观）
      // 优化：因为浏览器可以识别buffer数据，因此服务器发送响应的时候可以不用设置utf-8，除非自己需要在node中看到结果才需要设置utf-8-----------------------------------------------------------
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
