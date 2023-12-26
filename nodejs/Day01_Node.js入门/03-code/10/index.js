/**
 * 目标：基于 Web 服务，开发-城市列表数据接口
 * 步骤：
 *  1. 判断 req.url 资源路径+查询字符串，路径前缀匹配/api/city
 *  2. 借助 querystring 模块的方法，格式化查询参数字符串
 *  3. 读取 city.json 城市数据，匹配省份名字下属城市列表
 *  4. 返回城市列表，启动 Web 服务测试
 */

const http = require('http')
const fs = require('fs')
const path = require('path')
const qs = require('querystring')
const server = http.createServer()

server.listen(3000, () => {
  console.log('服务器启动成功了');
})

server.on('request', (req, res) => {
  // 请求的地址 req.url
  if (req.url === '/api/province') {
    // 读取province.json 数据
    fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
      if (err) {
        return console.log('文件读取失败', err)
      }
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      res.end(data.toString())
    })
  } else if (req.url.startsWith('/api/city')) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    // 判断请求的路径是否以 /api/city 开头 
    // /api/city?pname=江苏省
    const query = req.url.split('?')[1]  
    const pname = qs.parse(query).pname
    console.log(pname);
    fs.readFile(path.join(__dirname, 'data/city.json'), (err,data) => {
      if (err) return console.log('文件读取失败', err)
      const cityRes = data.toString() // 字符串
      // 字符串 -> js对象 
      const cityList = JSON.parse(cityRes)[pname]
      console.log(cityList);
      // end(必须要求字符串)
      res.end(JSON.stringify(cityList))
    })
  } 
   else {
    // 暂时返回不存在的提示
    // 1. 设置响应头
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // 2. 给请求方响应内容
    res.end('不存在')
  }
})
