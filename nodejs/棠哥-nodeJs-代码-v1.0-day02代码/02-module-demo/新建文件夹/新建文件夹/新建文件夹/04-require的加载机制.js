/* 
  require()的加载模块机制：

  加载自定义模块：
    1、首次加载模块成功，会缓存模块，下次会从缓存中加载，速度更快
    2、加载自定义模块必须加./ 例如：require('./abc')，
      1、优先加载相同名字的文件，如abc的文件
      2、自动补上.js后缀，然后加载abc.js
      3、自动补上.json后缀，然后加载abc.json
      4、自动补上.node后缀，然后加载abc.node
      5、以上文件都没有，则报错 Cannot find module './abc'

*/
// const abc = require('./abc')
// console.log(abc)

/* 
  加载核心模块和第三方模块
    1、首次加载模块成功，会缓存模块，下次会从缓存中加载，速度更快
    2、加载核心模块和第三方模块，一定不能设置./ 例如：require('rrr')
      1、优先加载核心模块
      2、去查找并加载第三方模块，会一级一级往上查找node_modules文件夹，查找路径如下：
        E:\往届授课\上海-就业109期（传统）\07-框架前置课\day02\04-代码\02-module-demo\node_modules
        E:\往届授课\上海-就业109期（传统）\07-框架前置课\day02\04-代码\node_modules
        E:\往届授课\上海-就业109期（传统）\07-框架前置课\day02\node_modules
        E:\往届授课\上海-就业109期（传统）\07-框架前置课\node_modules
        E:\往届授课\上海-就业109期（传统）\node_modules
        E:\往届授课\node_modules
        E:\node_modules
      3、如果找到根目录还未找到对应模块，则提示未找到模块
*/
const dayjs = require('dayjs')
console.log(dayjs().format('YYYY'))
