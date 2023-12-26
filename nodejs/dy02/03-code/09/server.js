const express = require("express")
const server = express()
server.get("/", (req, res) => {
  res.send("欢迎访问")
})
server.all("*", (req, res) => {
  res.status(404)
  res.send("404")
})
server.listen(3000, () => {
  console.log("服务已启动")
})
