/**
 * 目标：基于 Web 服务，开发-城市列表数据接口
 * 步骤：
 *  1. 判断 req.url 资源路径+查询字符串，路径前缀匹配/api/city
 *  2. 借助 querystring 模块的方法，格式化查询参数字符串
 *  3. 读取 city.json 城市数据，匹配省份名字下属城市列表
 *  4. 返回城市列表，启动 Web 服务测试
 */
const http = require("http")
const fs = require("fs")
const path = require("path")
const server = http.createServer()
const qs = require("querystring")
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
  } else if (req.url.startsWith("/api/city")) {
    const query = req.url.split("?")[1]
    const pname = qs.parse(query).pname
    fs.readFile(path.join(__dirname, "data/city.json"), (err, data) => {
      if (err) return console.log("文件读取成功", err)
      const str = data.toString()
      const obj = JSON.parse(str)[pname]
      res.setHeader("Content-Type", "application/json;charset=utf-8")
      res.end(JSON.stringify(obj))
    })
  } else {
    res.setHeader("Content-Type", "text/html;charset=utf8")
    res.end("不存在")
  }
})
