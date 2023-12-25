// nodejs中模块的分类

// 1、内置/官方模块
//    fs path http global
// 使用步骤：
//  1、直接导入：const fs = require('fs')
//  2、直接使用：fs.readFile


// 2、第三方模块，个人/公司 ，上传到npm网站上，非node官方自带模块
//    mime axios dayjs bootstrap vue ...
// 使用步骤
//  1、先通过npm下载： npm i axios
//  2、导入模块: const axios = require('axios')
//  3、直接使用


// 3、自定义模块
//    用户自己定义的模块，比如： a.js b.js ...
// 使用步骤：
//  1、自己创建一个.js文件
//  2、导入模块： const aa = require('./aa.js')
//  3、直接使用
