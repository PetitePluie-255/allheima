# BOM

```
ECMAScript:
规定了js基础语法核心知识。
比如：变量、分支语句、循环语句、对象等等
Web APIs :
DOM   文档对象模型， 定义了一套操作HTML文档的API
BOM   浏览器对象模型，定义了一套操作浏览器窗口的API
```

```
BOM (Browser Object Model ) 是浏览器对象模型
window对象是一个全局对象，也可以说是JavaScript中的顶级对象
document、alert()、console.log()这些都是window的属性，基本BOM的属性和方法都是window的
所有通过var定义在全局作用域中的变量、函数都会变成window对象的属性和方法
window对象下的属性和方法调用的时候可以省略window
```

# window对象

```
是一个全局对象，也可以说是JavaScript中的顶级对象
window对象下的属性和方法调用的时候可以省略window
```

# 延时器、定时器

### 延时器

```
语法：setTimeout(回调函数,等待的毫秒数)
setTimeout 仅仅只执行一次，所以可以理解为就是把一段代码延迟执行, 平时省略window
清除延时器：let timer = setTimeout(回调函数,等待的毫秒数)
clearTimeout(timer)
注意点
延时函数需要等待,所以后面的代码先执行
返回值是一个正整数，表示定时器的编号
```

### 定时器

```
语法: setInterval(函数,间隔时间)
作用：每隔一段时间调用这个函数
注意：1.间隔时间单位是毫秒 2.函数名字不需要加括号  3.定时器返回的是一个id数字
关闭
let 变量名 = setInterval(函数,间隔时间)
clearInterval(变量名)
```

### 时间戳

```
什么是时间戳:
是指1970年01月01日00时00分00秒起至现在的总毫秒数(数字型)，它是一种特殊的计量时间的方式
使用场景： 计算倒计时效果，需要借助于时间戳完成
算法：
将来的时间戳  - 现在的时间戳  =  剩余时间毫秒数  
剩余时间毫秒数转换为年月日时分秒 就是倒计时时间
获取方式
const date = new Date()
console.log(date.getTime())

console.log(+new Date())

console.log(Date.now())
```



# location对象

```
location (地址) 它拆分并保存了 URL 地址的各个组成部分， 它是一个对象
```

![image-20231204175932048](D:/heima/javascript/webApis-%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/dy03/image-20231204175932048.png)

# navigator对象

```
navigator是对象，该对象下记录了浏览器自身的相关信息
```

### 常用属性和方法:

```
通过 userAgent 检测浏览器的版本及平台
 // 检测 userAgent（浏览器信息）
(function () {
	const userAgent = navigator.userAgent
	// 验证是否为Android或iPhone
	const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
	const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
	// 如果是Android或iPhone，则跳转至移动站点
	if (android || iphone) {
		location.href = 'http://m.itcast.cn'
	}
})();
```

# histroy对象

```
history (历史)是对象，主要管理历史记录， 该对象与浏览器地址栏的操作相对应，如前进、后退等
```

```
使用场景: history 对象一般在实际开发中比较少用，但是会在一些 OA 办公系统中见到
```

### 常见方法：

![image-20231204180208968](D:/heima/javascript/webApis-%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/dy03/image-20231204180208968.png)

# 本地存储

```
本地存储：将数据存储在本地浏览器中
常见的使用场景：
https://todomvc.com/examples/vanilla-es6/ 页面刷新数据不丢失
好处：1.页面刷新或者关闭不丢失数据，实现数据持久化 
2.容量较大，sessionStorage和 localStorage 约 5M 左右

```

### 本地存储分类- localStorage

```
作用: 数据可以长期保留在本地浏览器中，刷新页面和关闭页面，数据也不会丢失
特性：以键值对的形式存储，并且存储的是字符串， 省略了window
```

```
语法: 
存储 localStorage.setItem(key, value)
获取 localStorage.getItem(key)
删除 localStorage.removeItem(key)
```

### 本地存储分类- sessionStorage

```
特性：
用法跟localStorage 基本相同
区别是：当页面浏览器被关闭时，存储在 sessionStorage 的数据会被清除
语法: 
获取：sessionStorage.getItem(key)
删除：sessionStorage.removeItem(key)
存储：sessionStorage.setItem(key, value)
```

### localStorage 存储复杂数据类型

**存储**

```
问题：本地只能存储字符串,无法存储复杂数据类型
解决：需要将复杂数据类型转换成 JSON字符串,在存储到本地
语法：JSON.stringify(复杂数据类型)
将复杂数据转换成JSON字符串   存储 本地存储中
JSON字符串：
首先是1个字符串
属性名使用双引号引起来，不能单引号
属性值如果是字符串型也必须双引号
```

**取出**

```
问题：因为本地存储里面取出来的是字符串，不是对象，无法直接使用
解决：把取出来的字符串转换为对象
语法：JSON.parse(JSON字符串)
将JSON字符串转换成对象     取出 时候使用
```

