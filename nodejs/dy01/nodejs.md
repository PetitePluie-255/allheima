# nodejs

```
定义：node.js是一个跨平台JavaScript运行环境，使开发者可以搭建服务器端的JavaScript应用程序
概念：使用node.js编写后端程序/支持前端工程化
	后端程序: 提供接口和数据,网页资源
	前端工程化: 对代码压缩,转译,整合(使用各种工具,提升效率)
```

**Node.js 为何能执行 JS？**

```
首先：浏览器能执行 JS 代码，依靠的是内核中的 V8 引擎（C++ 程序）
其次：Node.js 是基于 Chrome V8 引擎进行封装（运行环境）
区别：都支持 ECMAScript 标准语法，Node.js 有独立的 API
注意：Node.js 环境没有 DOM 和 BOM 等
```

**使用 Node.js**

```
需求：新建 JS 文件，并编写代码后，在 node 环境下执行
命令：在 VSCode 集成终端中，输入 node xxx.js，回车即可执行
```

# 模块

### fs

```
fs模块: 封装了与本机文件系统进行交互,方法/属性
语法: 
1. 加载fs模块 require('fs')
2.写入文件内容 fs.writeFile('文件路径','写入内容',err=>{})
3.读取文件内容 fs.readFile('文件路径',(err,data)=>{})
```

### path

```
路径处理
语法: 
1.加载path模块 require('path')
2.使用path.join方法,拼接路径 path.join('路径一','路径二')
补充：__dirname 模块内置变量（获取当前模块目录名）
```

### url端口号

```
URL：统一资源定位符，简称网址，用于访问网络上的资源
端口号：标记服务器里对应服务程序（0-65535 的整数）
注意：http 协议，默认访问 80 端口
Web 服务：一个程序，用于提供网上信息浏览功能
```

### http模块

```
1. 引入 http 模块，创建 Web 服务对象
2. 监听 request 请求事件，对本次请求，做一些响应处理
3. 启动 Web 服务监听对应端口号
4. 运行本服务在终端，用浏览器发起请求
```

**支持中文字符**

```
添加响应头  res.setHeader('Content-Type','text/html;charset=utf-8')
```

