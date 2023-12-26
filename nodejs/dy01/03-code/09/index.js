/**
 * 目标：基于 Web 服务，开发-省份列表数据接口
 * 步骤：
 *  1. 创建 Web 服务
 *  2. 使用 req.url 获取请求的资源路径，读取 json 文件数据返回
 *  3. 其他请求的路径，暂时返回不存在的提示
 *  4. 运行 Web 服务，用浏览器请求地址查看效果
 */
const http = require("http")
const fs = require("fs")
const path = require("path")
const server = http.createServer()
server.listen(3000, () => {
  console.log("服务已启动")
})
server.on("request", (req, res) => {
  console.log(req.url)
  if (req.url === "/api/province") {
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    fs.readFile(path.join(__dirname, "data/province.json"), (err, data) => {
      res.end(data.toString())
    })
  } else {
    res.setHeader("Content-Type", "text/html;charset=utf8")
    res.end("不存在")
  }
})
