/**
 * 目标：项目上线时，可以让前后端在同一个源下访问
 * 需求：让 express 支持静态（网页）资源返回
 * 核心：使用 express 内置函数 express.static() 绑定静态资源文件夹向前端暴露
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()
// 将public文件夹当成了一个静态资源 
// 地址: http://localhost:3000/index.html
// server.use(express.static('./public'))
server.use(express.static(path.join(__dirname, 'public')))

server.get('/api/province', (req, res) => {
  fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
    res.send(data.toString())
  })
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

server.listen(3000, () => {
  console.log('Web 服务已启动')
})