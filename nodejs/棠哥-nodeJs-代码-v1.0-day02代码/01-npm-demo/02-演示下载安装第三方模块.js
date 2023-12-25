// 1、下载dayjs   npm i dayjs
// 2、导入dayjs   require()
// 3、使用dayjs操作/显示时间  https://dayjs.fenxianglu.cn/
//    dayjs().format('YYYY-MM-DD HH:mm:ss')

const dayjs = require('dayjs')

console.log(dayjs().format('YYYY年MM月DD日 HH时mm分ss秒'))

setInterval(function(){
  console.log(dayjs().format('YYYY年MM月DD日 HH时mm分ss秒'))
},1000)
