/**
 * 目标：使用 http 模块，创建 Web 服务
 * Web服务：一个程序，用于提供网上信息浏览服务
 * 步骤：
 *  1. 引入 http 模块，创建 Web 服务对象
 *  2. 监听 request 事件，对本次请求，做一些响应处理
 *  3. 启动 Web 服务监听对应端口号
 *  4. 运行本服务在终端，用浏览器访问 http://localhost:3000/ 发起请求（localhost 是本机域名）
 * 注意：终端里启动了服务，如果想要终止按 ctrl c 停止即可
 */

const http = require('http')
const server = http.createServer()
server.listen(3000, () => {
  console.log('服务器启动成功了');
})
server.on('request', (req, res) => {
  // req.url 获取请求地址
  // /favicon.ico  谷歌浏览器发送的二次请求 - 小图标 (忽略)
  // console.log(req.url);
  // if (req.url === '/api/province') {
  //   // 读取本地的json文件
  // }
  // 设置响应头 - 中文解析 
  res.setHeader('Content-Type', 'text/html;charset=utf8')
  // 默认不支持中文解析, 会乱码
  res.end('你好')
})